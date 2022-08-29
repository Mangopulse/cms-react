var TAG_WORDS_COUNT = 5;
window.back.pages.postmodule = (function ($, ko) {
    var postmodel;
    var PostViewModel = function () {
        var self = this;
        self.parts = ko.observableArray();
        self.notes = ko.observableArray();
        self.gallery = ko.observableArray();
        self.terms = ko.observableArray();
        self.relatives = ko.observableArray();
        self.medias = ko.observableArray();
        self.postType = ko.observable();
        self.customMetaTagForm = ko.observable();
        self.customMetaTags = ko.observableArray();
        self.Data = {};
        self.filteredMedias = function (placement) {
            return jQuery.grep(self.medias(), function (media) {
                return media.placement === placement;
            });
        };
        self.filteredRelatives = function (code) {
            return jQuery.grep(self.relatives(), function (relative) {
                return relative.relation === code;
            });
        };
        self.extractedTags = ko.observableArray();
        self.selectedTags = ko.observableArray();
        self.tagsTaxonomy = null;
        self.processingTags = ko.observable();
        self.twitterTrendingTopicsPlaceId = ko.observable();
        self.twitterTrendingTopicsPlacesIds = ko.observableArray();
        self.twitterTrendingTopics = ko.observableArray();
        self.processingTwitterTrendingTopics = ko.observable();
        self.twitterTrendingTopicsResult = ko.observable(false);
        self.customCaption = ko.observable();
        self.activeCaption = 0;
        self.placement = '';

        self.showUploadButtons = function (placement) {
            return ko.computed(function () {
                var maxmedia = jQuery.grep(self.postType().MediaTemplate, function (mt) {
                    if (mt.Placement === placement)
                        return true;
                });

                var count = maxmedia[0] ? maxmedia[0].Count : 0;
                if (count === "-1" || count === -1)
                    return true;
                return self.filteredMedias(placement).length < count;
            });
        };
        self.showAddRelations = function (relation) {
            return ko.computed(function () {
                var max = $("#Allowed-" + relation).val();
                var existing = jQuery.grep(self.relatives(), function (relative) {
                    return relative.relation === relation;
                });
                return existing.length < max;
            });
        };
        self.relativeWidth = function (relation) {
            return ko.computed(function () {
                return (100 / self.filteredRelatives(relation).length) + "%";
            });
        };
        self.notestext = ko.computed(function () {
            return JSON.stringify($.map(self.notes() || [],
                function (note) {
                    return { User: note.User, Date: note.Date, Notes: note.Notes };
                }));
        });
        var activePart = ko.observable(0);

        var initModel = function (data) {
            data = Base64.decode(data);
            data = $.parseJSON(data);

            self.Data = data;
            self.childPostType = data.PostType.ChildPostType && data.PostType.ChildPostType.Status == 20 ? data.PostType.ChildPostType : null;
            var subposts = $.map(data.SubPosts || [],
                function (part) {
                    return new PostPart(part, self.childPostType);
                });
            if (!subposts.length)
                subposts.push(new PostPart({ Content: "" }, self.childPostType));
            subposts.push(new PostPart({ Content: "", istemp: true }, self.childPostType));

            self.parts(subposts);
            self.notes(importNotes(data.Notes));
            self.gallery(importMediaItems(data.Medias, "gallery"));
            self.medias(importMediaItems(data.Medias));
            self.terms(importTerms(data.Terms));
            self.relatives($.map(data.Relatives || [],
                function (relative) {
                    return new PostRelative(relative);
                }));
            self.relatives.id = "PostRelative";
            self.postType(data.PostType);
            self.customMetaTags(data.SeoSettings.customMetaTags || []);
            self.customMetaTags($.map(data.SeoSettings.CustomMetaTags || [],
                function (customMetaTag) {
                    return new CustomMetaTag(customMetaTag);
                }));
            self.customMetaTagForm(new MetaTagForm());
        },
            addPart = function () {
                activePart(self.parts().length - 1);
                self.parts.push(new PostPart({ Content: " " }, self.childPostType));
                editormodule.initEditor("#postPart" + (activePart() + 1) + " .cmseditor");
            },
            addnote = function () {
                var message = $("#newnote").val();
                if (!message) return;
                var d = new Date();
                var date = d.getFullYear() +
                    '-' +
                    (d.getMonth() + 1) +
                    '-' +
                    d.getDate() +
                    ' ' +
                    d.getHours() +
                    ':' +
                    d.getMinutes() +
                    ':' +
                    d.getSeconds();
                self.notes.unshift(new Note($("#CurrentUsername").val(), message, date, AppResources.Now));
                $("#newnote").val("");
            },
            deletenote = function (note) {
                if ($("#CurrentUsername").val() === note.User) {
                    confirm(window.AppResources.AreYouSureToDelete,
                        function (result) {
                            if (result)
                                self.notes.remove(note);
                        });
                } else
                    alert('You are not allowed to delete this note because you are not the author');
            },
            removePart = function (part) {
                confirm(window.AppResources.AreYouSureToDelete,
                    function (result) {
                        if (result) {
                            self.parts.remove(part);
                            if (self.parts().length === 1) {
                                self.parts.push(new PostPart({ Content: " " }, self.childPostType));
                            }
                            postmodel.activePart(self.parts().length - 2);
                        }
                    });
            },
            addMediaItem = function (data, placement) {
                var tab = $("#postTabs .active").attr("href");
                var forChild = tab === "#contenttab" && self.childPostType;
                var maxmedia = jQuery.grep(
                    forChild ? self.childPostType.MediaTemplate
                        : self.postType().MediaTemplate,
                    function (mt) {
                        if (mt.Placement === (tab === "#gallerytab" ? "gallery" : placement))
                            return true;
                    });

                var medias = forChild ? self.parts()[activePart()].filteredMedias : self.filteredMedias;
                var count = maxmedia[0] ? maxmedia[0].Count : 0;
                var addMedia = count === -1 || medias(placement).length < count;
                if (!addMedia && tab !== "#contenttab") return;

                if (forChild)
                    self.parts()[activePart()].addPartMedia(new MediaItem(data, placement));
                else if (tab === "#gallerytab") {
                    var media = new MediaItem(data, "gallery");
                    var existing = jQuery.grep(self.gallery(),
                        function (mediaItem) {
                            return mediaItem.id === media.id;
                        });
                    if (existing.length === 0) {
                        self.gallery.unshift(media);
                        self.medias.unshift(media);
                    }
                } else {
                    var media = new MediaItem(data, placement);
                    var existing = jQuery.grep(self.medias(),
                        function (mediaItem) {
                            return mediaItem.id === media.id && mediaItem.placement === media.placement;
                        });
                    if (existing.length === 0)
                        self.medias.unshift(media);
                }
            },
            removeMediaItem = function (item) {
                var tab = $("#postTabs .active").attr("href");
                if (tab === "#contenttab")
                    self.medias.remove(item);
                else if (tab === "#gallerytab") {
                    confirm(window.AppResources.AreYouSureToDelete,
                        function (result) {
                            if (result) {
                                var mitem = jQuery.grep(self.medias(),
                                    function (media) {
                                        return media.id === item.id && media.placement === "gallery";
                                    });
                                self.medias.remove(mitem[0]);
                                self.gallery.remove(item);
                            }
                        });
                } else {
                    confirm(window.AppResources.AreYouSureToDelete,
                        function (result) {
                            if (result) {
                                self.medias.remove(item);
                            }
                        });
                }
            },
            removerelative = function (item) {
                confirm(window.AppResources.AreYouSureToDelete,
                    function (result) {
                        if (result) {
                            self.relatives.remove(item);
                        }
                        if (typeof relativeRemoved == "function") {
                            relativeRemoved(item);
                        }
                    });
            },
            addRelative = function (record) {
                if (!record.ReturnValue)
                    return;

                var returnValues = record.ReturnValue.split(":");
                var code = returnValues[0];
                if ($("#Allowed-" + code).length == 0) return;

                var existing = self.filteredRelatives(code);
                var same = existing.some(function (item) {
                    return item.relativeId == record.PostId;
                });
                if (same.length > 0 || existing.length >= $("#Allowed-" + code).val())
                    return;

                self.relatives.push(new PostRelative({
                    RelativeId: record.PostId,
                    RelativePublicId: record.PublicId,
                    Relation: code,
                    RelationDisplay: returnValues[1],
                    Relative: {
                        PublicId: record.PublicId,
                        Title: record.Title,
                        PreviewUrl: "/Posts/" + record.PostTypeCode + "/Preview/" + record.PublicId,
                        PostTypeId: record.PostTypeId,
                        CoverImage: record.Image,
                        PostType: { Id: record.PostTypeId, Code: record.PostTypeCode }
                    }
                }));
                if (typeof relativeAdded == "function") {
                    relativeAdded(record);
                }
            },
            addTerm = function (data) {
                var existing = jQuery.grep(self.terms(),
                    function (postterm) {
                        return postterm.termId === data.TermId && postterm.termId !== guidempty();
                    });
                if (existing.length)
                    return;

                self.terms.unshift(new PostTerm(data));
                if (typeof termAdded == "function") {
                    termAdded(data);
                }
            },
            removeTerm = function (data) {
                var existing = jQuery.grep(self.terms(),
                    function (postterm) {
                        return postterm.termId === data.TermId;
                    });
                if (existing.length)
                    self.terms.remove(existing[0]);
                if (typeof termRemoved == "function") {
                    termRemoved(data);
                }
            },
            nameFor = function (part1, part2, index) {
                return part1 + "[" + index + "]." + part2;
            },
            updateMediaItemCaption = function () {
                if (postmodel.placement === 'gallery') self.gallery()[postmodel.activeCaption].caption(self.customCaption());
                self.filteredMedias(postmodel.placement)[postmodel.activeCaption].caption(self.customCaption());
            };

        var PostPart = function (data, posttype) {
            var self = this;
            data = data || {};
            self.id = data.Id || '00000000-0000-0000-0000-000000000000';
            self.title = ko.observable(data.Title || '');
            self.summary = ko.observable(data.Summary || '');
            self.content = ko.observable(data.Content || ' ');
            self.mediaList = ko.observableArray(importMediaItems(data.Medias));
            self.childPostType = posttype;
            self.metaTemplate = posttype ? posttype.MetaTemplate : [];
            self.metaData = ko.observableArray(data.Metas);

            self.filteredMedias = function (placement) {
                return jQuery.grep(self.mediaList(), function (media) {
                    if (placement)
                        return media.placement === placement;
                    return ["top", "bottom", "right", "left"].indexOf(media.placement) >= 0;
                });
            };
            self.showPartUploadButtons = function (placement) {
                return ko.computed(function () {
                    var maxmedia = jQuery.grep(self.childPostType.MediaTemplate, function (mt) {
                        if (mt.Placement === placement)
                            return true;
                    });

                    var count = maxmedia[0] ? maxmedia[0].Count : 0;
                    if (count === "-1")
                        return true;
                    return self.filteredMedias(placement).length < count;
                });
            };
            self.removePartMedia = function (media) {
                confirm(window.AppResources.AreYouSureToDelete, function (result) {
                    if (result) {
                        self.mediaList.remove(media);
                    }
                });
            };
            self.addPartMedia = function (media) {
                var existing = jQuery.grep(self.filteredMedias(media.placment), function (mediaItem) {
                    return mediaItem.id === media.id;
                });
                if (existing.length === 0)
                    self.mediaList.unshift(media);
            };
            self.valueForPartMeta = function (index, name) {
                var meta = self.metaData()[index];

                if (!meta) meta = self.metaTemplate[index];
                if (!meta) return "";
                return eval("meta." + name);
            };
            self.clickEvent = function (index) {
                if (self.isLastItem(index))
                    return addPart;
                return function () {
                    postmodel.activePart(index);
                    return false;
                };
            },
                self.isLastItem = function (index) {
                    if (index === postmodel.parts().length - 1)
                        return true;
                    return false;
                };
        },
            PostTerm = function (data) {
                var self = this;
                self.display = data.Display;
                self.value = data.Value;
                self.taxonomy = data.TaxonomyId;
            },
            PostRelative = function (data) {
                var self = this;
                self.id = data.Id;
                self.relativeId = data.RelativeId;
                self.relativePublicId = data.Relative.PublicId;
                self.postTypeId = data.Relative.PostTypeId;
                self.postTypeCode = data.Relative.PostType.Code;
                self.relation = data.Relation;
                self.relationDisplay = data.RelationDisplay;
                self.title = data.Relative.Title;
                self.thumbUrl = data.Relative.CoverImage;
                self.previewUrl = "/Posts/" + data.Relative.PostType.Code + "/Preview/" + data.Relative.PublicId;
            },
            Note = function (user, notes, date, smartdate) {
                var self = this;
                self.User = user;
                self.Date = date;
                self.SmartDate = smartdate;
                self.Notes = notes;
                self.IsVisible = user === $("#CurrentUsername").val();
            },
            MediaItem = function (data, placement) {
                var self = this;
                self.id = data.MediaItemId;
                self.postMediaId = data.Id;
                self.mediaType = data.MediaItem.Type;
                self.caption = ko.observable(data.PostCaption ? data.PostCaption : data.MediaItem.Caption);
                self.mediaUrl = data.MediaItem.MediaUrl;
                self.mediaPath = data.MediaItem.Path;
                self.placement = data.Placement ? data.Placement : placement;
                self.mediaTypeText = AppResources.MediaTypes[data.MediaItem.Type];
                self.mediaTypeKey = AppResources.MediaTypesKeys[data.MediaItem.Type];
                self.isPublic = ko.observable(data.MediaItem.IsPublic);
                self.version = data.MediaItem.Version;
                self.thumbUrl = ko.computed(function (addpreset) {
                    var url = data.MediaItem.Thumbnail;
                    if (!url) url = JS_CONFIG.ImageNotFound;
                    if (addpreset)
                        url = addPreset(url, placement === "gallery" ? "ace-gallery" : "ace-media");
                    return url;
                }, this);
                self.featuredUrl = function (filename) {
                    var segments = self.thumbUrl().split("/");
                    var last = segments[segments.length - 1].split(".");
                    segments[segments.length - 1] = last[0] + "/" + filename + "." + last[1];
                    var url = segments.join("/");
                    url = addParameter(url, "v", self.version);
                    return addParameter(url, "process", "always");
                };
                self.changeIsPublic = function () {
                    var newvalue = !self.isPublic();
                    $.ajax({
                        type: "POST",
                        url: "/Media/UpdateIsPublic",
                        data: { id: self.id, isPublic: newvalue },
                        success: function () {
                            self.isPublic(newvalue);
                        },
                        error: function (e) {
                            alert(e.ResponseText);
                        }
                    });
                };
                self.editCaption = function (index, placement) {
                    postmodel.customCaption(self.caption());
                    postmodel.placement = placement;
                    postmodel.activeCaption = index;
                };
            };
        //filtering
        var importMediaItems = function (postMedias, placement) {
            if (postMedias) {
                if (placement) {
                    postMedias = jQuery.grep(postMedias, function (value) {
                        return value.Placement === placement;
                    });
                }
                return $.map(postMedias || [],
                    function (postmedia) {
                        return new MediaItem(postmedia, placement);
                    });
            }
        },
            importNotes = function (notes) {
                try {
                    notes = parseJson(notes);
                    return $.map(notes || [],
                        function (note) {
                            return new Note(note.User, note.Notes, note.Date, note.SmartDate);
                        });
                } catch (err) {
                    return [];
                }

            },
            importTerms = function (terms) {
                //terms = jQuery.grep(terms, function (term) {
                //    return term.Term.Taxonomy.Code != "tags";
                //});
                return $.map(terms || [],
                    function (term) {
                        return new PostTerm(term);
                    });
            };
        //Custom meta tags
        var MetaTagForm = function () {
            var self = this;
            self.show = ko.observable(false);
            self.key = ko.observable('name');
            self.value = ko.observable('');
            self.content = ko.observable('');
            self.showForm = function () {
                if (self.show()) return;
                self.show(!self.show());
            };
            self.hideForm = function () {
                if (!self.show()) return;
                self.resetForm();
                self.show(!self.show());
            };
            self.resetForm = function () {
                self.key('name');
                self.value('');
                self.content('');
            };
        },
            CustomMetaTag = function (metaTag) {
                var self = this;
                self.editing = ko.observable(false);
                self.metaTag = ko.observable({});
                self.key = ko.observable(metaTag ? metaTag.Key : '');
                self.value = ko.observable(metaTag ? metaTag.Value : '');
                self.content = ko.observable(metaTag ? metaTag.Content : '');
                self.showEditForm = function () {
                    self.metaTag(new CustomMetaTag({ Key: self.key(), Value: self.value(), Content: self.content() }));
                    self.editing(true);
                };
                self.cancelEdit = function () {
                    self.editing(false);
                };
                self.saveCustomMetaTag = function () {
                    self.key(self.metaTag().key());
                    self.value(self.metaTag().value());
                    self.content(self.metaTag().content());
                    self.editing(false);
                };
                self.display = ko.computed(function () {
                    return '<meta ' + self.key() + '="' + self.value() + '" content="' + self.content() + '" />';
                }, this);
            },
            addCustomMetaTag = function () {
                var existing = self.customMetaTags().find(x => x.key() === self.customMetaTagForm().key() && x.value() === self.customMetaTagForm().value());
                if (!existing) {
                    self.customMetaTags.push(new CustomMetaTag({ Key: self.customMetaTagForm().key(), Value: self.customMetaTagForm().value(), Content: self.customMetaTagForm().content() }));
                }
                self.customMetaTagForm().resetForm();
            },
            removeCustomMetaTag = function (data) {
                var customMetaTags = self.customMetaTags().filter(function (metaTag) {
                    return !(metaTag.key() === data.key() && metaTag.value() === data.value());
                });
                self.customMetaTags(customMetaTags);
            };
        return {
            init: initModel,
            parts: self.parts,
            notes: self.notes,
            notestext: self.notestext,
            relatives: self.relatives,
            terms: self.terms,
            medias: self.medias,
            gallery: self.gallery,
            postType: self.postType,
            childPostType: self.childPostType,
            extractedTags: self.extractedTags,
            selectedTags: self.selectedTags,
            tagsTaxonomy: self.tagsTaxonomy,
            processingTags: self.processingTags,
            removerelative: removerelative,
            addRelative: addRelative,
            addTerm: addTerm,
            removeTerm: removeTerm,
            activePart: activePart,
            addPart: addPart,
            addnote: addnote,
            deletenote: deletenote,
            removePart: removePart,
            addMediaItem: addMediaItem,
            removeMediaItem: removeMediaItem,
            updateMediaItemCaption: updateMediaItemCaption,
            filteredMedias: self.filteredMedias,
            filteredRelatives: self.filteredRelatives,
            showUploadButtons: self.showUploadButtons,
            showAddRelations: self.showAddRelations,
            Data: self.Data,
            relativeWidth: self.relativeWidth,
            nameFor: nameFor,
            analyseContent: analyseContent,
            updateTags: updateTags,
            twitterTrendingTopicsPlacesIds: self.twitterTrendingTopicsPlacesIds,
            twitterTrendingTopicsPlaceId: self.twitterTrendingTopicsPlaceId,
            twitterTrendingTopics: self.twitterTrendingTopics,
            processingTwitterTrendingTopics: self.processingTwitterTrendingTopics,
            getTwitterTrendingTopics: getTwitterTrendingTopics,
            fetchTwitterTrendingTopics: fetchTwitterTrendingTopics,
            twitterTrendingTopicsResult: self.twitterTrendingTopicsResult,
            customCaption: self.customCaption,
            activeCaption: self.activeCaption,
            customMetaTagForm: self.customMetaTagForm,
            customMetaTags: self.customMetaTags,
            addCustomMetaTag: addCustomMetaTag,
            removeCustomMetaTag: removeCustomMetaTag
        };
    },
        //track an index on items in an observableArray

        init = function (data) {
            window.google = undefined;
            postmodel = new PostViewModel();
            postmodel.init(data);
            var nodes = $(".komain");
            for (var i = 0; i < nodes.length; i++) {
                ko.cleanNode(nodes[i]);
                ko.applyBindings(postmodel, nodes[i]);
            }

            $.each($('.main-term-select'), function (index, select) {
                select = $(select);
                var datasource = $(select.data('source'));
                updateMainTermOptions(select, datasource);
            });
            bindTermsEvents();
            window.mapmodule.init();
            window.tagsmodule.init();
            $("#posteditform").submit(function () {
                var tags = $(".tags .tagfield");
                if (tags.length) {
                    var alltags = tags.val().split(",");
                    for (var i = 0; i < alltags.length; i++) {
                        if (alltags[i].split(' ').length > TAG_WORDS_COUNT) {
                            alert("Please make sure all the tags are less than 5 words");
                            return false;
                        }
                    }
                }
                if ($("#ShowWidgets").length && $("#ShowWidgets").val().toLowerCase() === "true" && $(".detailstab.active").length === 0) {
                    window.back.pages.widgets.apply();
                }
                var selects = $(this).find("select[multiple]");
                selects.each(function () {
                    var sel = $(this);
                    var value = sel.val() + "";
                    $(sel.data("target")).val(value);
                });
                //for (var i = 0; i < tinymceEditors.length; i++) {
                //    var editor = tinymceEditors[i];
                //    var content = editor.getContent();
                //    if (!content) continue;
                //    var uri_pattern = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
                //    var urls = uri_pattern.exec(content);
                //    if (!urls || urls.length === 0) continue;
                //    for (var u = 0; u < urls.length; u++) {
                //        var url = urls[u];
                //        if (!url) continue;
                //        console.log(url);
                //        if (url.indexOf(".mp4") > 0) {
                //            var servers = JS_CONFIG.MediaServers.split(',');
                //            for (var m = 0; m < servers.length; m++) {
                //                var server = servers[m];
                //                if (url.indexOf(server)) {
                //                    alert("You can't use an mp4 file directly from your storage. Please upload the video to your preferred VOD and add it from archive using the Upload button in the toolbar")
                //                    return false;
                //                }
                //            }
                //        }
                //    }
                //}
                //var allcroppped = true;
                //check if both are cropped
                //if ($(".featuredforcrop").length) {
                //    $(".featuredforcrop img").each(function () {
                //        var img = $(this);
                //        if (!imageLoaded(img)) {
                //            alert("You have to crop the images");
                //            allcroppped = false;
                //        }
                //    });
                //}
                return true;
            });
            if ($("#ShowWidgets").length && $("#ShowWidgets").val().toLowerCase() === "true") {
                initWidgets(data);
            }
            $('#newnote').keypress(function (e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13) {
                    e.preventDefault();
                    $("#addnotebtn").click();
                    return false;
                }
            });
            if (JS_CONFIG.WOEIDFile)
                $.getJSON(JS_CONFIG.WOEIDFile, function (data) {
                    var placesIds = data;
                    postmodel.twitterTrendingTopicsPlacesIds(placesIds);
                });
        },

        initWidgets = function (data) {
            $.getScript("/Content/js/modules/widgets.js",
                function () {
                    data = Base64.decode(data);
                    data = data ? $.parseJSON(data) : postmodel.Data;
                    window.back.pages.widgets.init(data.Widgets, data.Template ? data.Template.Widgets : null, data.Id);
                });
        },
        updatemulticombos = function (select, loaded) {
            var level = select.data('level');
            var count = select.data('levelcount');
            //update selects show
            var selectedId = $(select, 'option:selected').val();
            if (level < count - 1) {
                var nextSelect = $(".level-" + (level + 1));
                if (selectedId === "") {
                    for (var i = level + 1; i < count; i++) {
                        nextSelect.hide();
                        if (loaded) {
                            nextSelect.val("");
                            nextSelect.change();
                        }
                        nextSelect = $(".level-" + i);
                    }

                } else {
                    nextSelect.show();
                    var nbChildren = 0;
                    nextSelect.find("option").each(function () {
                        if (loaded) {
                            $(this).prop("selected", false);
                        }
                        $(this).show();

                        if ($(this).attr("data-parent") !== selectedId) {
                            if ($(this).text() !== "----")
                                $(this).hide();
                            if (loaded) {
                                if ($(this).text() !== "----") {
                                    $(this).removeAttr("selected");
                                } else {
                                    $(this).siblings().removeAttr("selected");
                                }
                            }

                        } else {
                            nbChildren++;
                        }
                    });
                    if (loaded)
                        nextSelect.change();
                    for (var i = level + 2; i < count; i++) {
                        var other = $(".level-" + i);
                        if (loaded) {
                            other.find("option").removeAttr("selected");
                            other.change();
                        }
                        other.hide();
                    }
                    //
                    if (nbChildren === 0) {
                        nextSelect.hide();
                    }
                }
            }
            //update values
            if (loaded) {
                var target = select.data("target");
                var values = $(target).val().split(',');
                select.find('option').each(function () {
                    var option = $(this);
                    if (option.is(':selected')) {
                        values.push(option.val());
                    } else {
                        values = jQuery.grep(values, function (value) {
                            return value !== "" && value !== option.val();
                        });
                    }
                });
                $(target).val(values + "");
                $(target).trigger('change');
            }
        },
        updateMainTermOptions = function (select, datasource) {
            datasource.on('change', function () {
                var terms = this.value.split(',');
                select.closest(".form-group").show();
                var options = select[0].options;
                $.each(options, function (index, option) {
                    if (terms.includes(option.value)) option.style.display = '';
                    else option.style.display = 'none';
                });
            });
        },
        bindTermsEvents = function () {

            $(".multicombo").change(function () {
                updatemulticombos($(this), true);
            });
            $(".multicombo").each(function () {
                updatemulticombos($(this), false);
            });
            $(".nodecheckbox").change(function () {
                var checkbox = $(this);
                var node = checkbox.closest(".treeview-node");
                var value = checkbox.val();
                var name = checkbox.attr("name").split("_")[1];
                var original = $("#" + name).val().split(',');
                if (checkbox.is(':checked')) {
                    if (original.indexOf(value) < 0)
                        original.push(value);
                } else {
                    original = RemoveFromArray(original, value);
                }
                $("#" + name).val(original + "");
                $("#" + name).trigger('change');

                var parent = node.parents(".treeview-node").find(".main-option");
                var child = node.find(".treeview-subnode");
                if (checkbox.is(':checked')) {
                    postmodel.addTerm({ TermId: value });
                    parent.find(".nodecheckbox").prop('checked', true);
                    parent.find(".nodecheckbox").trigger("change");
                } else {
                    postmodel.removeTerm({ TermId: value });
                    child.find(".nodecheckbox").prop('checked', false);
                    child.find(".nodecheckbox").trigger("change");
                }
            });
        },
        handleBrowseCallback = function (data) {
            for (var i = 0; i < data.length; i++) {
                var record = data[i];
                postmodel.addRelative(record);
            }
        },
        syncTerms = function (values, taxonomy) {
            if (!postmodel) return;
            var tax = $.grep(postmodel.terms(),
                function (term) {
                    return term.taxonomy === taxonomy;
                });
            if (tax.length) {
                var terms = $.grep(postmodel.terms(),
                    function (term) {
                        return term.taxonomy !== taxonomy;
                    });
                postmodel.terms(terms);
                postmodel.addTerm({ TaxonomyId: taxonomy, Display: tax.display, Value: values });
            }
        },
        addSingleMedia = function (mediaItem) {
            self.addGroupMedia(mediaItem, "top");
        },
        addGroupMedia = function (mediaItem, group) {
            var item = {
                MediaItemId: mediaItem.id,
                MediaItem: {
                    MediaUrl: mediaItem.mediaUrl,
                    Path: mediaItem.path,
                    Type: mediaItem.type,
                    Caption: mediaItem.caption,
                    Thumbnail: mediaItem.thumbnail ? mediaItem.thumbnail.mediaUrl : ""
                }
            };
            //alert(group)
            postmodel.addMediaItem(item, group);

        },
        removeMedia = function (id, placement) {
            var p = placement || "";
            var media = postmodel.medias().filter(function (item) {
                return item.id == id && (p == "" || p == item.placement);
            });
            if (media.length)
                postmodel.medias.remove(media[0]);
        },
        addRelativeRecord = function (data) {
            postmodel.addRelative(data);
        },
        analyseContent = function (data, event) {
            var contentId = $(event.currentTarget).data('content');
            var content = $(contentId).text();
            if (!content) {
                event.preventDefault();
                return;
            }
            postmodel.processingTags(true);
            postmodel.tagsTaxonomy = $(event.currentTarget).data('taxonomy');
            postmodel.extractedTags([]);
            $.ajax({
                type: 'POST',
                method: 'POST',
                url: '/Shared/ExtractTags',
                data: content,
                success: function (result) {
                    if (result.success) {
                        var tagsTaxonomy = postmodel.terms().filter(function (tax) {
                            return tax.taxonomy === postmodel.tagsTaxonomy;
                        });
                        postmodel.extractedTags(result.data);
                        if (tagsTaxonomy.length) {
                            var tags = tagsTaxonomy[0].value;
                            if (tags)
                                postmodel.selectedTags(tags.split(','));
                        }
                    }
                    postmodel.processingTags(false);
                },
                error: function (result) {
                    console.log(result.error);
                    postmodel.processingTags(false);
                }
            });
        },
        updateTags = function () {
            var tags = $('input[data-taxonomy=' + postmodel.tagsTaxonomy + ']');
            if (!tags.length) return;

            tags = tags.data('tag');
            $.each(postmodel.extractedTags(), function (index, type) {
                $.each(type.Entities, function (index, entity) {
                    var tagIndex = tags.values.indexOf(entity.NormalizedMention);
                    tags.remove(tagIndex);
                });
            });

            $.each(postmodel.selectedTags(), function (index, tag) {
                tags.add(tag);
            });
        },
        getModel = function () {
            return postmodel;
        },
        getTwitterTrendingTopics = function () {
            if (postmodel.twitterTrendingTopics().length) {
                postmodel.twitterTrendingTopicsResult(false);
                postmodel.twitterTrendingTopics([]);
                return;
            }
            else if (!postmodel.twitterTrendingTopicsPlacesIds().length) {
                postmodel.fetchTwitterTrendingTopics();
            }
            postmodel.twitterTrendingTopicsResult(true);
        },
        fetchTwitterTrendingTopics = function () {
            postmodel.twitterTrendingTopics([]);
            postmodel.processingTwitterTrendingTopics(true);
            $.ajax({
                type: 'GET',
                method: 'GET',
                url: '/Social/SocialHome/GetTwitterTrendingTopics',
                data: { placeId: postmodel.twitterTrendingTopicsPlaceId() },
                success: function (result) {
                    if (result.success && result.data.length) {
                        postmodel.twitterTrendingTopics(result.data);
                    }
                    postmodel.processingTwitterTrendingTopics(false);
                },
                error: function (result) {
                    console.log(result.error);
                    postmodel.processingTwitterTrendingTopics(false);
                }
            });
        };

    return {
        init: init,
        initWidgets: initWidgets,
        addSingleMedia: addSingleMedia,
        addRelativeRecord: addRelativeRecord,
        addGroupMedia: addGroupMedia,
        removeMedia: removeMedia,
        handleBrowseCallback: handleBrowseCallback,
        syncTerms: syncTerms,
        analyseContent: analyseContent,
        updateTags: updateTags,
        getModel: getModel
    };
}(jQuery, ko));
