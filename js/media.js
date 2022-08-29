window.back.pages.mediaupload = (function ($) {
    var mediaTypes = window.AppResources.MediaTypesByKey;
    var parentHandler,
        idField,
        urlField,
        mediaElement,
        noCrop,
        noCaption,
        cropRatio,
        container,
        mainUploaderId = "mainUploader",
        thumbUploaderId = "thumbUploader",
        liveUploaderId = "liveUploader",
        uploadUrl = JS_CONFIG.UploadServer + "Store/Upload",
        generateThumbsUrl = JS_CONFIG.UploadServer + "Store/GenerateThumbnails",
        commitUrl = "/Assets/Media/AddMedia",
        commitExternalUrl = "/Assets/Media/AddExternalMedia",
        commitLicensedUrl = "/Assets/Media/AddLicensedMedia",
        filter,
        mediaItem = {
            id: '',
            type: '',
            path: '',
            mediaUrl: '',
            caption: '',
            compress: '',
            convert: '',
            description: '',
            tags: '',
            cropSettings: '',
            embed: '',
            thumbnail: { id: '', path: '', mediaUrl: '', cropSettings: '', caption: '', description: '', tags: '' },
            licenseDetails: { externalId: '', networkId: '', networkType: '', searchId: '' }
        },
        maxItems = 1,
        archiveSelectedMedia = {},
        mediaFrame = '',
        postId = null,
        shutterstockChannelId = '',
        mainResumable;

    var resumableUploadComplete = function (currentUploaderId, result) {
        var data = jQuery.parseJSON(result);
        if (currentUploaderId === mainUploaderId) resetMediaItem();
        secondStep(currentUploaderId, data.MediaUrl, data.MediaPath);
    },
        resumableUploadError = function (currentUploaderId, result) {
            console.log(result);
            alert("The upload was not successful. Please refresh the page and try again. If the problem persists, please contact the support team.");
        },
        secondStep = function (currentUploaderId, mediaUrl) {
            //mediaUrl: http(s)://media.xxx.com/path
            //mediaPath: path
            wizard._onNextClick();
            if (currentUploaderId === "mainUploader" || currentUploaderId === "liveUploader") {
                mediaItem.mediaUrl = mediaUrl;
                if (mediaItem.type === mediaTypes["image"]) {
                    prepareCrop(mediaUrl);
                    
                    
                }
            } else if (currentUploaderId === "thumbUploader") {
                mediaItem.thumbnail.mediaUrl = mediaUrl;
                    prepareCrop(mediaUrl);
                
            }
        },
        initTempFiles = function () {
            $("#azure-media-results a.chooseMedia").click(function () {
                resetMediaItem();
                secondStep(mainUploaderId, $(this).data("mediaurl"));
            });
        },
        initArchiveButtons = function (data) {
            archiveSelectedMedia = {};
            maxItems = data.Count;
        },
        archiveSearch = function (el) {
            var container = $(el.data("formcontainer"));
            $.ajax({
                type: "GET",
                url: el.data("action"),
                data: {
                    query: container.find("#archivequery").val(),
                    issearching: true,
                    mainRequest: false,
                    Type: container.find("#archivetype").val()
                },
                success: function (data) {
                    $("#archive-wrapper .gridbody").html(data);
                },
                error: function (xhr) {
                    var err = eval("(" + xhr.responseText + ")");
                    alert(err.Message);
                }
            });
        },
        toggleArchiveItem = function (el) {
            var item = el.find(".archivechoosebtn");
            var id = item.data("mediaid");
            if (!archiveSelectedMedia[id] && (maxItems === "-1" || maxItems > 0)) {
                el.addClass("selected");
                mediaItem.mediaUrl = item.data("mediaurl");
                mediaItem.path = item.data("mediapath");
                mediaItem.type = item.data("mediatype");
                mediaItem.caption = item.data("caption");
                mediaItem.embed = item.data("embed");
                mediaItem.thumbnail.mediaUrl = item.data("thumburl");
                mediaItem.embed = item.data("embed");
                mediaItem.id = id;
                var media = jQuery.extend(true, {}, mediaItem);
                archiveSelectedMedia[id] = media;
                if (maxItems !== "-1") maxItems--;
            } else if (archiveSelectedMedia[id]) {
                delete archiveSelectedMedia[id];
                el.removeClass("selected");
                if (maxItems !== "-1") maxItems++;
            }
        },
        addMedias = function () {
            $.each(archiveSelectedMedia,
                function (id, item) {
                    mediaItem = item;
                    addMediaCallback();
                });
            wizardclose.click();
        },
        selectArchiveItem = function (el) {
            var chooseThumb = $("#radThumbnailArchive").is(':checked');
            var item = el;
            if (chooseThumb) {
                mediaItem.thumbnail.id = item.data("mediaid");
                mediaItem.thumbnail.mediaUrl = item.data("mediaurl");
                mediaItem.thumbnail.path = item.data("mediapath");
                mediaItem.thumbnail.type = item.data("mediatype");
                mediaItem.thumbnail.caption = item.data("caption");
                mediaItem.caption = item.data("caption");
                mediaItem.embed = item.data("embed");
                wizard._onNextClick();
                unlink();
                $("#frame-container").hide();
                $("#crop-settings").hide();
                $("#crop-preview").hide();
                $("#crop-container #original-image").attr("src", mediaItem.thumbnail.mediaUrl);
                $("#details-container #Caption").val(mediaItem.caption);
                setDetailsImg();
                wizard.showButtons();
            } else {
                mediaItem.id = item.data("mediaid");
                if (!archiveSelectedMedia[mediaItem.id]) {
                    archiveSelectedMedia = {};
                    toggleArchiveItem($(el.closest('li')));
                    maxItems++;
                }
                addMedias();
            }
        },
        setDetailsImg = function () {
            var image = $('#details-container img#details-original-image');
            if (image.length) image.remove();

            var src = mediaItem.type === '10' || mediaItem.type === 10 ? mediaItem.mediaUrl : mediaItem.thumbnail.mediaUrl;
            if (src) {
                $('#details-container .details-original-image').append('<img id="details-original-image" src="' + addParameter(src, "height", "300") + '" />');
            }
        },
        toggleFrameItem = function (el) {
            var code = el.data('template-code');
            var position = el.data('cover-position');
            var bg = el.data('template-bg');
            var img = $(el.find('img'));
            var src = img.attr('src');
            var preview = $('#crop-preview');

            if (mediaFrame !== code) {
                var allTemplates = el.parent().find('li img');
                allTemplates.removeClass('selected');
                preview.find('img.preview-frame').remove();

                img.addClass('selected');
                mediaFrame = code;
                if (src) {
                    preview.append('<img class="preview-frame" src="' + src + '" data-cover-position="' + position + '" data-template-bg="' + bg + '" />');
                    preview.find('img').on('load', function () {
                        updatePreview();
                    });
                }
            } else if (mediaFrame === code) {
                mediaFrame = '';
                img.removeClass('selected');
                preview.find('img.preview-frame').remove();
                updatePreview();
            }
        },
        toggleShutterstockChannel = function (el) {
            var channelId = el.data('channel-id');
            var img = $(el.find('img'));

            if (shutterstockChannelId !== channelId) {
                var allTemplates = el.parent().find('li img');
                allTemplates.removeClass('selected');

                img.addClass('selected');
                shutterstockChannelId = channelId;
            } else if (shutterstockChannelId === channelId) {
                shutterstockChannelId = '';
                img.removeClass('selected');
            }
        },
        shutterstockSearch = function (el, channelId, page) {
            var form = $(el.data("container"));
            var resultsWrapper = $('.shutterstock-search-results');
            var action = el.data('action');
            var navigation = $('.shutterstock-search-container nav').closest('.col-12');
            if (navigation.length) navigation.remove();
            resultsWrapper.html('<i class="fa fa-spin fa-spinner"></i>');
            $.ajax({
                type: "GET",
                url: action,
                data: {
                    query: form.find("#ShutterstockQuery").val(),
                    page: page,
                    channelId: channelId ? channelId : shutterstockChannelId
                },
                success: function (response) {
                    if (response.success) {
                        if (!response.data.Data.length) {
                            resultsWrapper.html('No results found!');
                            return;
                        }
                        var html = '';
                        for (var i = 0; i < response.data.Data.length; i++) {
                            var thumb = response.data.Data[i].Assets.HugeThumb;
                            var preview = response.data.Data[i].Assets.Preview_1000;
                            var description = response.data.Data[i].Description;
                            html += '<div class="card shutterstock-image" data-media-id="' + response.data.Data[i].Id + '" data-media-url="' + preview.Url + '" data-description="' + description + '">' +
                                '<img class="card-img-top" src="' + thumb.Url + '" alt="' + description + '" title="' + description + '">' +
                                '</div>';
                        }
                        resultsWrapper.html(html);
                        var disablePrevious = response.data.Page === 1;
                        var disableNext = Math.ceil(response.data.TotalCount / response.data.PerPage) <= response.data.Page;
                        var previousClickEvent = disablePrevious ? '' : 'data-action="' + action + '" data-container="#shutterstock-search-form" onclick="window.back.pages.mediaupload.shutterstockSearch($(this), ' + channelId + ', ' + (response.data.Page - 1) + ')"';
                        var nextClickEvent = disableNext ? '' : 'data-action="' + action + '" data-container="#shutterstock-search-form" onclick="window.back.pages.mediaupload.shutterstockSearch($(this), ' + channelId + ', ' + (response.data.Page + 1) + ')"';
                        var pagination = '<div class="col-12"><nav aria-label="Shutterstock Images Pagination">' +
                            '<ul class="pagination">' +
                            '<li class="page-item ' + (disablePrevious ? 'disabled' : '') + '"' + previousClickEvent + '><a class="page-link" ' + (disablePrevious ? 'tabindex="-1"' : '') + '>' + window.AppResources.Previous + '</a></li>' +
                            '<li class="page-item"><a class="page-link">' + response.data.Page + '</a></li>' +
                            '<li class="page-item ' + (disableNext ? 'disabled' : '') + '"' + nextClickEvent + '><a class="page-link" ' + (disableNext ? 'tabindex="-1"' : '') + '>' + window.AppResources.Next + '</a></li>' +
                            '</ul>' +
                            '</nav></div>';
                        resultsWrapper.closest('.col-12').parent().append(pagination);
                        $('.shutterstock-image').on('click', function () {
                            mediaItem.id = '';
                            mediaItem.mediaUrl = preview.Url;
                            mediaItem.description = $(this).data('description');
                            mediaItem.licenseDetails.networkId = channelId ? channelId : shutterstockChannelId;
                            mediaItem.licenseDetails.networkType = 'shutterstock';
                            mediaItem.licenseDetails.externalId = $(this).data('media-id');
                            mediaItem.licenseDetails.searchId = response.data.SearchId;
                            secondStep(mainUploaderId, $(this).data('media-url'));
                        });
                    } else {
                        alert(response.message);
                    }
                },
                error: function (xhr) {
                    var err = eval("(" + xhr.responseText + ")");
                    alert(err.Message);
                }
            });
        },
        MangomoloSelectButton = function () {

            $(".mangomolochoosebtn").click(function () {
                var item = $(this);

                $.post(commitExternalUrl,
                    { Plugin: "mangomolo", MediaUrl: item.data("mediaurl"), Caption: item.data("caption"), Description: item.data("description"), Thumbnail: item.data("thumburl"), ExternalMediaId: item.data("mediaid"), MediaType: item.data("mediatype"), Duration: item.data("mediaduration"), Stream: item.data("mediastream"), NetworkId: item.data("networkid"), Tags: item.data("tags"), MediaEmbed: item.data("embed") })
                    .done(function (response) {
                        if (response.Id) {
                            mediaItem.id = response.Id;
                            mediaItem.mediaUrl = response.MediaUrl;
                            mediaItem.caption = response.Caption;
                            mediaItem.thumbnail.mediaUrl = response.ThumbnailUrl;
                            mediaItem.embed = response.Embed;
                            mediaItem.domain = response.Domain;
                            addMediaCallback();
                            wizardclose.click();
                            UnblockUi();
                            $('.page-content').find('.fa-refresh').closest('a').click();
                        } else {
                            alert(errr.responseText);
                        }

                    }).fail(function (errr) {
                        alert(errr.responseText);
                    });
                return false;
            });
        },
        MangomoloSearchButton = function () {

            function Search(val) {
                var container = $(val.data("formcontainer"));

                $.ajax({
                    type: "GET",
                    url: val.data("action"),
                    data: { Query: container.find("#mangomoloquery").val(), Type: container.find("#mangomolotype").val(), PageNumber: container.find("#pagenum").val(), Category: container.find('#category')[0].value, Tags: container.find("#mangomolotags").val() },
                    success: function (data) {
                        $("#mangomolo-wrapper").html(data);

                    },
                    error: function (xhr) {
                        var err = eval("(" + xhr.responseText + ")");
                        alert(err.Message);
                    }
                });
            }

            $("#mangomolosearchbtn").click(function () {
                Search($(this));
                return false;
            });

            $("#pagenum").change(function () {
                Search($(this));
                return false;
            });

            $('select#category').change(function () {
                Search($(this));
                return false;
            });

        },
        initFlixButtons = function (data) {
            var form = $('#flix-tab form');
            if (data.MainRequest) {
                var searchbtn = form.find('button[type=submit]');
                searchbtn.click(function (event) {
                    event.preventDefault();
                    var container = $(form.data('container'));
                    var values = form.serializeArray();
                    $.ajax({
                        type: "GET",
                        url: form.attr("action"),
                        data: values,
                        success: function (data) {
                            container.html(data);
                        },
                        error: function (xhr) {
                            var err = eval("(" + xhr.responseText + ")");
                            alert(err.Message);
                        }
                    });
                });
            }
            var maxItems = data.Count;
            var flixSelectedMedia = [];

            function addFlixMedia(item, parentnode) {
                if (!parentnode) parentnode = item;
                if (maxItems === "-1" || maxItems > 0) {
                    mediaItem.id = item.data("mediaid");
                    var selected = flixSelectedMedia.filter(function (item) {
                        return item.id === mediaItem.id;
                    });
                    if (!selected.length) {
                        parentnode.addClass("selected");
                        mediaItem.mediaUrl = item.data("mediaurl");
                        mediaItem.type = item.data("mediatype");
                        mediaItem.caption = item.data("caption");
                        mediaItem.description = item.data("description");
                        mediaItem.thumbnail.mediaUrl = item.data("thumburl");
                        mediaItem.path = item.data("stream");
                        mediaItem.tags = item.data("embed");
                        var media = jQuery.extend(true, {}, mediaItem);
                        flixSelectedMedia.push(media);
                        if (maxItems !== "-1") maxItems--;
                    } else {
                        flixSelectedMedia = flixSelectedMedia.filter(function (item) {
                            return item.id !== mediaItem.id;
                        });
                        parentnode.removeClass("selected");
                        if (maxItems !== "-1") maxItems++;
                    }
                }
            }

            $(".archivechoosebtn").click(function () {
                var item = $(this);
                flixSelectedMedia = [];
                addFlixMedia(item);
                addFlixMedias();
            });
            $(".archive li").click(function () {
                var item = $(this).find(".archivechoosebtn");
                addFlixMedia(item, $(this));
            });

            $(".archivechoosemultiplebtn").click(function () {
                addFlixMedias();
            });

            function addFlixMedias() {
                blockUi();
                var processed = 0;
                var count = flixSelectedMedia.length;
                $.each(flixSelectedMedia,
                    function (index, item) {
                        $.post(commitExternalUrl,
                            {
                                Plugin: 'octivid',
                                MediaUrl: item.mediaUrl,
                                Caption: item.caption,
                                Description: item.Description,
                                Thumbnail: item.thumbnail.mediaUrl,
                                MediaType: item.type,
                                Stream: item.path,
                                MediaEmbed: item.tags,
                                ExternalMediaId: item.id
                            }).done(function (response) {
                                mediaItem.id = response.Id;
                                mediaItem.mediaUrl = response.MediaUrl;
                                mediaItem.caption = response.Caption;
                                mediaItem.thumbnail.mediaUrl = response.ThumbnailUrl;
                            }).fail(function (err) {
                                console.log(err);
                            }).always(function () {
                                processed++;
                                if (processed === count) {
                                    addMediaCallback();
                                    wizardclose.click();
                                    UnblockUi();
                                    $('.page-content').find('.fa-refresh').closest('a').click();
                                }
                            });
                    });
                wizardclose.click();
            }
        },
        addMediaCallback = function () {
            if (typeof parentHandler == "function") {
                parentHandler(mediaItem, container);
            } else if (container && parentHandler.addGroupMedia) {
                parentHandler.addGroupMedia(mediaItem, container);
            } else if (parentHandler && parentHandler.addSingleMedia) {
                parentHandler.addSingleMedia(mediaItem);
            } else if (idField || urlField || mediaElement) {
                $(idField).val(mediaItem.id);
                if (urlField)
                    $(urlField).val(mediaItem.mediaUrl);
                if ($(mediaElement).prop("tagName").toLowerCase() != "img" && (mediaItem.type == mediaTypes["audio"] || mediaItem.type == mediaTypes["video"])) {
                    $(mediaElement).show();
                    $(mediaElement).find("source").attr("src", mediaItem.mediaUrl);
                    if (mediaItem.type == mediaTypes["video"]) {
                        $(mediaElement).attr("poster", mediaItem.thumbnail.mediaUrl);
                    } else {
                        $(mediaElement).parent().find(".poster").attr("src", mediaItem.thumbnail.mediaUrl);
                    }
                    $(mediaElement).load();
                } else if (mediaItem.type == mediaTypes["file"]) {
                    $(mediaElement).show();
                    $(mediaElement).parent().find(".poster").attr("src", mediaItem.thumbnail.mediaUrl);
                    $(mediaElement).find(".icon").attr("href", mediaItem.mediaUrl);
                    $(mediaElement).load();
                } else {
                    $(mediaElement).show();
                    $(mediaElement).attr("src",
                        mediaItem.thumbnail
                            ? addParameter(mediaItem.thumbnail.mediaUrl, "width", "400")
                            : addParameter(mediaItem.mediaUrl, "width", "400"));
                }
            }
            if (typeof mediaUploadCallback == "function") {
                mediaUploadCallback(mediaItem);
            }
        },
        prepareCrop = function (fileUrl) {
            unlink();
            $("#crop-container").show();
            $("#frame-container").show();
            $("#crop-settings").show();
            $("#crop-preview").show();
            setTimeout(function () {
                $("#crop-container #original-image").attr("src", fileUrl);
                $("#crop-container #original-image").on("load",
                    function () {
                        $("#crop-container .upload-cropper").each(linkUp);
                    });
            }, 1);
            
            $(".upload-cropper #Caption").val(mediaItem.caption);
            //$(".upload-cropper #Description").val(mediaItem.description);
            $("#details-container #Caption").val(mediaItem.caption);
            //$("#details-container #Description").val(mediaItem.description);
            setDetailsImg();
            wizard.showButtons();
        },
        generateThumbnails = function (videoPath) {
            $.ajax({
                type: "POST",
                url: generateThumbsUrl,
                data: { videoPath: videoPath },
                dataType: "json",
                beforeSend: function (request) {
                    request.setRequestHeader("Authorization", "basic " + btoa(JS_CONFIG.UploadToken));
                },
                success: function (data) {
                    if (data == null || data.length == 0) {
                        $('#generate-thumbnail-container .well').html(
                            '<div class="alert-danger">Error!!</div><a class="btn btn-new success" onclick="window.back.pages.mediaupload.generateThumbnails(\'' +
                            videoPath +
                            '\')" type="button">Retry</a>');
                    } else {
                        var html = '<ul class="thumbnails">';
                        for (var i = 0; i < data.length; i++) {
                            html +=
                                '<li class="span thumbnail-item" style="list-style-type:none;float:left;margin:10px"><a href="#" class="thumbnail"><img style="width: 190px;" data-src="' +
                                data[i].FileUrl +
                                '" src="' +
                                data[i].FileUrl +
                                '" id="thumbnail' +
                                i +
                                '"></a></li>';
                        }
                        html += '</ul>';
                        $('#generate-thumbnail-container .well').html(html);
                        $('.thumbnail-item').click(function (e) {
                            mediaItem.thumbnail.mediaUrl = $(this).find('img').data('src');
                            wizard._onNextClick();
                            prepareCrop(mediaItem.thumbnail.mediaUrl);
                        });
                    }
                },
                error: function (e) {
                    alert(e.responseText)
                    $('#generate-thumbnail-container .well').html('<div class="alert-danger">' +
                        e.responseText +
                        '!!</div><a class="btn btn-new success" onclick="window.back.pages.mediaupload.generateThumbnails(\'' +
                        videoPath +
                        '\')" type="button">Retry</a>');
                }
            });
        },
        getUniqueId = function () {
            var dateObject = new Date();
            var uniqueId = dateObject.getFullYear() +
                '' +
                (dateObject.getMonth() + 1) +
                '' +
                dateObject.getDate() +
                '_' +
                dateObject.getTime();
            return uniqueId;
        },
        closeModel = function () {
            $("#mainWizard").remove();
            $(".wizard").remove();
            $(".modal-backdrop").remove();
        },
        showHideThumbnailContainers = function (el) {
            if (el.val() == "upload") {
                initResumableThumbUploader();
                $('#upload-thumbnail-container').show("slow");
                $('#generate-thumbnail-container').hide("slow");
                $("#thumb-archive-container").hide("slow");
            } else if (el.val() == "generate") {
                $('#upload-thumbnail-container').hide("slow");
                $('#generate-thumbnail-container').show("slow");
                $("#thumb-archive-container").hide("slow");
                if ($('#generate-thumbnail-container .loading-container').length == 1) {
                    generateThumbnails(mediaItem.mediaUrl);
                }
            } else if (el.val() == "archive") {
                $("#crop-container").show();
                $('#generate-thumbnail-container').hide("slow");
                $('#upload-thumbnail-container').hide("slow");
                $.ajax({
                    type: "GET",
                    url: "/Assets/Media/Archive?type=10&parentHandler=window.back.pages.mediaupload",
                    success: function (data) {
                        $("#thumb-archive-container").show();
                        $("#thumb-archive-container").html(data);
                        $("#thumb-archive-container").find("#archive_results").css("margin", 0);
                    },
                    error: function (e) {

                    }
                });
            } else if (el.val() == "skip") {
                wizard._onNextClick();
                mediaItem.thumbnail.mediaUrl = "";
                $("#crop-container").hide();
                $("#details-container #Caption").val(mediaItem.caption);
                $("#details-container #Description").val(mediaItem.description);
                $("#details-container").find("#Compress").parents(".control-group").hide();
                setDetailsImg();
                wizard.showButtons();
            }
            try {
                var filename = "";
                for (var identifier in mainResumable.files) {
                    var file = mainResumable.files[identifier];
                    if (file) filename = file.fileName;
                }
                if (filename.indexOf(".mp4") < 0 && mediaItem.type == mediaTypes["video"]) {
                    $("#details-container").find("#Convert").attr("checked", true);
                    mediaItem.convert = true;
                }
            } catch (err) {
                console.log(err)
            }
        },
        finalSubmit = function () {
            var cropSettings = $("#crop-container .crop-settings-value").val();
            mediaItem.cropSettings = cropSettings;
            mediaItem.caption = $('#details-container #Caption').val();
            mediaItem.compress = $('#details-container #Compress').is(':checked');
            mediaItem.description = $('#details-container #Description').val();
            mediaItem.tags = $('#details-container #Tags').val();
            submitMedia();
        },
        submitMedia = function () {
            blockUi();
            var url = mediaItem.licenseDetails.externalId ? commitLicensedUrl : commitUrl;
            $.post(url, mapMedia()).done(function (resp) {
                UnblockUi();
                if (resp.Error) {
                    UnblockUi();
                    $(".wizard-next").prop("disabled", false);
                    $(".wizard-input-section").html(resp.Error);
                    return false;
                }
                mediaItem.mediaUrl = resp.MediaUrl;
                mediaItem.id = resp.Id;
                mediaItem.thumbnail.mediaUrl = resp.Thumbnail;
                mediaItem.path = resp.Path;
                mediaFrame = '';

                addMediaCallback();
                wizardclose.click();
                UnblockUi();
                $('.page-operations .fa-refresh').parent().click(); //zahraa: shall be changed to callback later 
            }).fail(function (errr) {
                UnblockUi();
                $(".wizard-next").prop("disabled", false);
                wizardclose.show();
                var reason = errr.responseText ? JSON.parse(errr.responseText).Reason : errr.statusText;
                $(".wizard-input-section").html(reason);
                return false;
            });
        },
        mapMedia = function () {
            var cropsettings = mediaItem.cropSettings;
            if (mediaItem.compress) {
                cropsettings = addParameter(cropsettings, "format", "jpg");
            }
            return {
                Id: mediaItem.id,
                MediaUrl: mediaItem.mediaUrl,
                Thumbnail: mediaItem.thumbnail.mediaUrl,
                ThumbnailId: mediaItem.thumbnail.id,
                CropSettings: cropsettings,
                Caption: mediaItem.caption,
                Description: mediaItem.description,
                Tags: mediaItem.tags,
                MediaType: mediaItem.type,
                Placement: container,
                Convert: mediaItem.convert,
                Frame: mediaFrame,
                LicenseDetails: {
                    ExternalId: mediaItem.licenseDetails.externalId,
                    SearchId: mediaItem.licenseDetails.searchId,
                    NetworkId: mediaItem.licenseDetails.networkId,
                    NetworkType: mediaItem.licenseDetails.networkType
                },
                postId: postId,
                MangomoloCategory: $("#MangomoloCategory").val(),
                Path: $("#MediaItemPath").val()
            };
        },
        initResumableMainUploader = function () {
            //var Size = document.getElementById('maxsize-' + container).value;
            var size = $("#maxsize-" + container).val();
            mainResumable = new ResumableUploader(
                mainUploaderId,
                getUniqueId(),
                {},
                $('#' + mainUploaderId + ' .browse-link'),
                $('#' + mainUploaderId + ' .drop-area'),
                $('#' + mainUploaderId + '  #progress-bar-container'),
                uploadUrl,
                commitUrl,
                filter,
                mediaItem.type,
                null,
                size
            );
        },
        initResumableThumbUploader = function () {
            var resumable2 = new ResumableUploader(
                thumbUploaderId,
                getUniqueId(),
                {},
                $('#' + thumbUploaderId + ' .browse-link'),
                $('#' + thumbUploaderId + ' .drop-area'),
                $('#' + thumbUploaderId + '  #progress-bar-container'),
                uploadUrl,
                commitUrl,
                "image/*",
                mediaTypes["image"]);
        },
        initModel = function () {
            var options = {
                keyboard: false,
                backdrop: 'static',
                contentWidth: '80%',
                contentHeight: 500,
                buttons: {
                    nextText: window.AppResources.Next,
                    backText: window.AppResources.Previous,
                    submitText: window.AppResources.FinishUploading
                }
            };
            wizard = $("#mainWizard").wizard(options);
            if (wizard) {
                wizard.show();
                wizard.hideButtons();
                wizard.closeButton.show();
                if (wizard.cards["details"]) {
                    wizard.cards["details"].on("validate",
                        function (card) {
                            var noerror = true;
                            var caption = card.el.find("#Caption");
                            if (caption.val() == "" && noCaption == false) {
                                card.wizard.errorPopover(caption, window.AppResources.EmptyCaptionMessage);
                                noerror &= false;
                            } else {
                                caption.removeClass("error-popover");
                            }
                            return noerror;
                        });
                }
                if (wizard.cards["crop"]) {
                    wizard.cards["crop"].on("validate",
                        function (card) {
                            var noerror = true;
                            var cropinput = card.el.find(".crop-settings-value");
                            var cropp = cropinput.val();
                            if (cropp == "" && $("#crop-preview").is(":visible")) {
                                //$("#crop-container .crop-settings-value").val($("#original-image").attr("src"));
                                if (noCrop) {
                                    $("#crop-container .crop-settings-value").val($("#original-image").attr("src"));
                                } else {
                                    card.wizard.errorPopover($("#previewcrop"), "Crop cannot be empty");
                                    $(".original-image").css("border", "2px red solid");
                                    noerror &= false;
                                }

                            } else {
                                $("#previewcrop").removeClass("error-popover");
                            }
                            return noerror;
                        });
                }
                if (wizard.cards["finish"]) {
                    wizard.cards["finish"].on("selected", function (options) {
                        var image = $('#finish-container img#PreviewFrameResult');
                        if (image.length) image.remove();

                        if (mediaFrame) {
                            $('#finish-container #Preview-Container').append('<i class="fas fa-spinner fa-pulse fa-5x"></i>');
                            var cropSettings = $("#crop-container .crop-settings-value").val();
                            mediaItem.cropSettings = cropSettings;
                            mediaItem.caption = $('#details-container #Caption').val();
                            mediaItem.compress = $('#details-container #Compress').is(':checked');
                            mediaItem.description = $('#details-container #Description').val();
                            mediaItem.tags = $('#details-container #Tags').val();

                            $.ajax({
                                type: 'GET',
                                url: '/Assets/Media/GenerateFramePreview',
                                data: mapMedia(),
                                success: function (result) {
                                    $('#finish-container #Preview-Container').find('i').remove();
                                    if (result.success)
                                        $('#finish-container #Preview-Container').append('<img id="PreviewFrameResult" src="' + result.preview + '" />');
                                    else
                                        alert(result.message);
                                },
                                error: function (xhr) {
                                    $('#finish-container #Preview-Container').find('i').remove();
                                    var err = eval("(" + xhr.responseText + ")");
                                    alert(err.Message);
                                }
                            });
                        }
                    });
                }
            }
            if ($(".externalaudiourl").length) {
                $(".externalaudiourl").bind('input propertychange',
                    function () {
                        loadExternalAudio($(this));
                    });
                $("#externalaudioform-soundcloud").submit(function () {
                    importExternalAudio($(this));
                    return false;
                });
                $("#externalaudioform-octivid").submit(function () {
                    importExternalAudio($(this));
                    return false;
                });
                importExternalAudio = function (form) {
                    $("#savespinner").show();
                    form.find("button").hide();
                    var mediaUrl = form.find("#MediaUrl").val();
                    var externalplatform = form.find("#Plugin").val(); //now: soundcloud or octivid
                    $.post(commitExternalUrl,
                        {
                            Plugin: externalplatform,
                            MediaUrl: mediaUrl,
                            Caption: form.find("#Caption").val(),
                            Description: form.find("#Description").val(),
                            Thumbnail: form.find("#Thumbnail").val(),
                            MediaType: mediaItem.type,
                            Stream: form.find("#Stream").val(),
                            MediaEmbed: form.find("#MediaEmbed").text(),
                            ExternalMediaId: form.find("#ExternalMediaId").val()
                        })
                        .done(function (response) {
                            $("#savespinner").hide();
                            mediaItem.id = response.Id;
                            mediaItem.mediaUrl = response.MediaUrl;
                            mediaItem.caption = response.Caption;
                            mediaItem.thumbnail.mediaUrl = response.ThumbnailUrl;
                            mediaItem.embed = response.Embed;
                            addMediaCallback();
                            wizardclose.click();
                            UnblockUi();
                            $('.page-content').find('.fa-refresh').closest('a').click();
                        }).fail(function (errr) {
                            alert(errr.responseText);
                            form.find("button").show();
                            $("#savespinner").hide();
                        });
                    return false;
                }
            }
            if ($(".externalvideourl").length) {
                $(".externalvideourl").bind('input propertychange',
                    function () {
                        loadExternalVideo($(this));
                    });

                $("#externalvideoform-youtube").submit(function () {
                    importExternalVideo($(this));
                    return false;
                });
                $("#externalvideoform-octivid").submit(function () {

                    importExternalVideo($(this));
                    return false;
                });
                //$("#externalvideoform-").submit(function () { // live

                //    importExternalVideo($(this));
                //    return false;
                //});
                importExternalVideo = function (form) {
                    $("#savespinner").show();

                    form.find("button").hide();
                    var isLive = form.find(".isexternalliveurl").val() == "yes";
                    var mediaUrl = isLive ? form.find(".externalliveurl").val() : form.find("#MediaUrl").val();
                    if (isLive) {
                        form.find(".isexternalliveurl").val("yes");
                    }
                    var externalplatform = form.find("#Plugin").val(); //now: youtube or octivid
                    $.post(commitExternalUrl,
                        {
                            Plugin: externalplatform,
                            MediaUrl: mediaUrl,
                            Caption: form.find("#Caption").val(),
                            Description: form.find("#Description").val(),
                            Thumbnail: form.find("#Thumbnail").val(),
                            MediaType: mediaItem.type,
                            Duration: form.find("#Duration").val(),
                            Stream: form.find("#Stream").val(),
                            MediaEmbed: form.find("#MediaEmbed").text(),
                            ExternalMediaId: form.find("#ExternalMediaId").val()
                        })
                        .done(function (response) {
                            $("#savespinner").hide();
                            mediaItem.id = response.Id;
                            mediaItem.mediaUrl = response.MediaUrl;
                            mediaItem.caption = response.Caption;
                            mediaItem.thumbnail.mediaUrl = response.ThumbnailUrl;
                            mediaItem.embed = response.Embed;
                            addMediaCallback();
                            wizardclose.click();
                            UnblockUi();
                            $('.page-content').find('.fa-refresh').closest('a').click();
                        }).fail(function (errr) {
                            //alert(errr.responseText);
                            form.find("button").show();
                            $("#savespinner").hide();
                        });
                };
            }
            $('#radThumbnailUpload').change(function () { showHideThumbnailContainers($(this)) });
            $('#radThumbnailGenerate').change(function () { showHideThumbnailContainers($(this)) });
            $('#radThumbnailArchive').change(function () { showHideThumbnailContainers($(this)) });
            $('#radThumbnailSkip').change(function () { showHideThumbnailContainers($(this)) });


            wizardclose = $(".wizard-close");
            $(".wizard").on('hidden.bs.modal',
                function (e) {
                    closeModel();
                });
            wizard.on('submit', finalSubmit);
        },
        loadExternalVideo = function (input) {
            $("#externalvideoform-octivid button").prop("disabled", true);
            var form = $(input).closest('form'); //
            form.find(".video-preview #Caption").val('');
            form.find(".video-preview #Description").val('');
            form.find(".video-preview #video-thumb").val('');
            form.find(".video-preview #Thumbnail").val('');
            form.find(".video-preview #Duration").val('');
            form.find(".video-preview #Stream").val('');
            form.find(".video-preview #MediaEmbed").text('');
            form.find(".audio-preview #ExternalMediaId").val('');
            form.find(".isexternalliveurl").val("no");
            var url = input.val();
            if (url === "") {
                form.find(".video-preview").hide();
            } else {
                var plugin = form.find("#Plugin").val();
                if (plugin == "youtube") {
                    var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
                    if (url == "") {
                        form.find(".video-preview").hide();
                    } else {
                        var videoId = (url.match(p)) ? RegExp.$1 : false;
                        if (!videoId) { // live?

                            var start = url.indexOf("youtube.com/user/");
                            var end = url.indexOf("/live");
                            if (start >= 0 && end > 0) {
                                var channelName = url.substring(start + 17, end);
                                var requestUrl = "https://www.googleapis.com/youtube/v3/channels?key=" +
                                    JS_CONFIG.YouTubeToken +
                                    "&forUsername=" +
                                    channelName +
                                    "&part=id";
                                $.getJSON(requestUrl,
                                    function (response) {
                                        var channelId = response.items[0].id;
                                        var permanentUrl = "https://www.youtube.com/embed/live_stream?channel=" +
                                            channelId;
                                        form.find(".externalliveurl").val(permanentUrl);
                                        form.find(".isexternalliveurl").val("yes");
                                        var requestUrl2 =
                                            "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" +
                                            channelId +
                                            "&eventType=live&type=video&key=" +
                                            JS_CONFIG.YouTubeToken;
                                        $.getJSON(requestUrl2,
                                            function (response) {
                                                videoId = response.items[0].id.videoId;
                                                var dataurl = "https://www.googleapis.com/youtube/v3/videos?id=" +
                                                    videoId +
                                                    "&key=" +
                                                    JS_CONFIG.YouTubeToken +
                                                    "&part=snippet,contentDetails&fields=items(id,snippet(title,description,thumbnails),contentDetails(duration))";
                                                $.getJSON(dataurl,
                                                    function (response) {
                                                        form.find(".videoloadspinner").hide();
                                                        var items = response.items;
                                                        if (items.length > 0 && items[0]) {
                                                            var snippet = items[0].snippet;
                                                            var details = items[0].contentDetails;
                                                            form.find(".video-preview").show();
                                                            form.find(".video-preview #Caption").val(snippet.title);
                                                            form.find(".video-preview #Description")
                                                                .val(snippet.description);
                                                            var thumbnail = snippet.thumbnails
                                                                ? snippet.thumbnails.maxres ||
                                                                snippet.thumbnails.high ||
                                                                snippet.thumbnails.medium ||
                                                                snippet.thumbnails.standard ||
                                                                snippet.thumbnails.default
                                                                : null;
                                                            form.find(".video-preview #video-thumb").attr("src",
                                                                thumbnail ? thumbnail.url : "");
                                                            form.find(".video-preview #Thumbnail")
                                                                .val(thumbnail ? thumbnail.url : "");
                                                            form.find(".video-preview #Duration").val(details.duration);
                                                        }
                                                    });
                                            });
                                    });
                            }
                        }
                        if (videoId) {
                            input.val("https://www.youtube.com/watch?v=" + videoId);
                            $(".videoloadspinner").show();
                            $(".video-preview").hide();
                            var dataurl = "https://www.googleapis.com/youtube/v3/videos?id=" +
                                videoId +
                                "&key=" +
                                JS_CONFIG.YouTubeToken +
                                "&part=snippet,contentDetails&fields=items(id,snippet(title,description,thumbnails),contentDetails(duration))";
                            $.getJSON(dataurl,
                                function (response) {
                                    form.find(".videoloadspinner").hide();
                                    var items = response.items;
                                    if (items.length > 0 && items[0]) {
                                        var snippet = items[0].snippet;
                                        var details = items[0].contentDetails;
                                        form.find(".video-preview").show();
                                        form.find(".video-preview #Caption").val(snippet.title);
                                        form.find(".video-preview #Description").val(snippet.description);
                                        form.find(".video-preview #video-thumb")
                                            .attr("src", snippet.thumbnails.default.url);
                                        var thumbnail = snippet.thumbnails
                                            ? snippet.thumbnails.maxres ||
                                            snippet.thumbnails.high ||
                                            snippet.thumbnails.medium ||
                                            snippet.thumbnails.standard ||
                                            snippet.thumbnails.default
                                            : null;
                                        form.find(".video-preview #video-thumb")
                                            .attr("src", thumbnail ? thumbnail.url : "");
                                        form.find(".video-preview #Thumbnail").val(thumbnail ? thumbnail.url : "");
                                        form.find(".video-preview #Duration").val(details.duration);
                                    }
                                });
                            //}).error(function (xhr, ajaxOptions, thrownError) {
                            //    alert(xhr.responseText);
                            //});
                        } else {
                            form.find(".videoloadspinner").hide();
                            form.find(".video-preview").hide();
                        }
                        form.find(".video-preview").show();
                    }
                } else if (plugin == "octivid") {
                    $("#externalvideoform-octivid button").prop("disabled", true);
                    var octividPlayerHostPattern = JS_CONFIG.OctividPlayerHost.replace("octivid.net", "octivid\\.net")
                        .replace(".", "\\.");
                    var regex = new RegExp("^(?:https?:\/\/)?" + octividPlayerHostPattern + "\/watch\/((\\w|-)*)");
                    if (url === "") {
                        form.find(".video-preview").hide();
                    } else {
                        var t = url.match(regex);
                        var videoId = (url.match(regex)) ? RegExp.$1 : false;
                        if (videoId) {
                            form.find(".videoloadspinner").show();
                            form.find(".video-preview").hide();
                            var dataurl = "//" + JS_CONFIG.OctividApiHost + "/octivid/v1/videos/" + videoId;
                            //JS_CONFIG.OctividApiUrl + "/" + videoId;
                            $.getJSON(dataurl,
                                function (response) {
                                    form.find(".videoloadspinner").hide();

                                    var snippet = response.Snippet;
                                    var details = response.ContentDetails;
                                    var player = response.Player; //TrackLink, LanguageName, LanguageCode
                                    form.find(".video-preview").show();
                                    form.find(".video-preview #Caption").val(snippet.Title);
                                    form.find(".video-preview #Description").val(snippet.Description);
                                    form.find(".video-preview #Thumbnail").val(snippet.Thumbnail);
                                    form.find(".video-preview #video-thumb").attr("src", snippet.Thumbnail);
                                    form.find(".video-preview #Duration").val(details.Duration);
                                    form.find(".video-preview #Stream").val(player.Playback);
                                    form.find(" #ExternalMediaId").val(response.Id);
                                    form.find("#MediaUrl").val(player.Url);
                                    form.find(".video-preview #MediaEmbed").text(btoa(player.Iframe)); //encoding 64
                                    $("#externalvideoform-octivid button").prop("disabled", false);
                                });
                        } else {
                            form.find(".videoloadspinner").hide();
                            form.find(".video-preview").hide();
                        }
                        form.find(".video-preview").show();
                    }
                } else {
                    $(".videoloadspinner").hide();
                    $(".video-preview").hide();
                    if (url.indexOf("iframe") >= 0) {
                        var iframe = $(url);
                        url = iframe.attr("src");
                        input.val(url);
                    }
                    secondStep(liveUploaderId, url);
                    //$(".video-preview").show();
                }
            }
        },
        loadExternalAudio = function (input) {
            var form = $(input).closest('form');
            form.find(".video-preview #Caption").val('');
            form.find(".video-preview #Description").val('');
            form.find(".video-preview #audio-thumb").val('');
            form.find(".video-preview #Thumbnail").val('');
            form.find(".video-preview #Stream").val('');
            form.find(".audio-preview #ExternalMediaId").val('');
            form.find(".audio-preview #scwidget").val('');
            var url = input.val();
            if (url === "") {
                form.find(".video-preview").hide();
            } else {
                var plugin = form.find("#Plugin").val();
                if (plugin == "soundcloud") {
                    var regex = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
                    var validurl = (url.match(regex)) ? url : false;
                    if (validurl) {
                        form.find(".audioloadspinner").show();
                        form.find(".audio-preview").hide();
                        var dataurl = "http://api.soundcloud.com/resolve?url=" +
                            url +
                            "&client_id=" +
                            JS_CONFIG.SoundCloudToken;
                        $.getJSON(dataurl,
                            function (response) {
                                $(".audioloadspinner").hide();
                                if (response) {
                                    if (response.kind == "track") {
                                        form.find(".audio-preview").show();
                                        form.find(".audio-preview #Caption").val(response.title);
                                        form.find(".audio-preview #Description").val(response.description);
                                        form.find(".audio-preview #audio-thumb").attr("src", response.artwork_url);
                                        form.find(".audio-preview #Thumbnail").val(response.artwork_url);
                                        form.find(".audio-preview #ExternalMediaId").val(response.id);
                                        form.find(".audio-preview #scwidget").attr('src',
                                            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
                                            response.id +
                                            "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false");
                                    }
                                }
                            });
                        //    .error(function(xhr, ajaxOptions, thrownError) {
                        //    alert(xhr.responseText);
                        //});
                    } else {
                        form.find(".audioloadspinner").hide();
                        form.find(".audio-preview").hide();

                    }
                } else {
                    if (plugin == "octivid") {
                        //$("#externalaudioform-octivid button").disable();
                        var octividPlayerHostPattern = JS_CONFIG.OctividPlayerHost
                            .replace("octivid.net", "octivid\\.net").replace(".", "\\.");
                        var regex = new RegExp("^(?:https?:\/\/)?" + octividPlayerHostPattern + "\/play\/((\\w|-)*)");
                        var validurl = (url.match(regex)) ? url : false;
                        var audioId = (url.match(regex)) ? RegExp.$1 : false;
                        if (audioId) {
                            form.find(".audioloadspinner").show();
                            form.find(".audio-preview").hide();
                            var dataurl = "//" + JS_CONFIG.OctividApiHost + "/octivid/v1/audio/" + audioId;
                            $.getJSON(dataurl,
                                function (response) {
                                    $(".audioloadspinner").hide();
                                    if (response) {
                                        var snippet = response.Snippet;
                                        var player = response.Player;
                                        form.find(".audio-preview").show();
                                        form.find(".audio-preview #Caption").val(snippet.Title);
                                        form.find(".audio-preview #Description").val(snippet.Description);
                                        form.find(".audio-preview #Thumbnail").val(snippet.Thumbnail);
                                        form.find(".audio-preview #audio-thumb").attr("src", snippet.Thumbnail);
                                        form.find(".audio-preview #Stream").val(player.Playback);
                                        form.find(" #ExternalMediaId").val(response.Id);
                                        form.find("#MediaUrl").val(player.Url);
                                        form.find(".audio-preview #MediaEmbed").text(btoa(player.Iframe)); //encoding 64
                                        $("#externalaudioform-octivid button").prop("disabled", false);
                                    }
                                });
                            //    .error(function(xhr, ajaxOptions, thrownError) {
                            //    alert(xhr.responseText);
                            //});
                        } else {
                            form.find(".audioloadspinner").hide();
                            form.find(".audio-preview").hide();

                        }
                    }
                }
            }
        },
        setData = function (data) {
            parentHandler = data.ParentHandler;
            idField = data.IdField;
            mediaElement = data.MediaElement;
            noCrop = data.NoCrop;
            noCaption = data.NoCaption;
            cropRatio = data.CropRatio;
            urlField = data.UrlField;
            container = data.Placement;
            filter = data.Filter;
            resetMediaItem();
            mediaItem.caption = $("#ShortTitle").val() || $("#Title").val() || $("#Name").val();
            mediaItem.description = $("#Summary").length ? $("#Summary").val() : '';
            mediaItem.type = data.MediaType;
            postId = data.PostId;
            initResumableMainUploader();
        },
        cropimagealone = function () {
            var cot = $("#mdn-crop-container");
            var cropSettings = cot.find("#CropResult").val();
            var originalurl = cot.find("#mediaoriginalurlimage").val();
            var currenturl = cot.find("#mediaurlimage").val();
            var mediaElement = cot.find("#mediaurlimageid").val();
            blockUi();
            $.post("/Assets/media/CropMedia", { CropResult: cropSettings, url: currenturl, originalurl: originalurl }).done(
                function (resp) {
                    $(mediaElement).attr("src", resp.url);
                    $(mediaElement).data("loaded", "true");
                    UnblockUi();
                }).fail(function (errr) {
                    UnblockUi();
                    alert(errr.responseText);
                });
            return false;
        },
        resetMediaItem = function () {
            mediaItem.id = '';
            mediaItem.path = '';
            mediaItem.mediaUrl = '';
            mediaItem.compress = '';
            mediaItem.convert = '';
            mediaItem.tags = '';
            mediaItem.cropSettings = '';
            mediaItem.embed = '';
            mediaItem.thumbnail = { id: '', path: '', mediaUrl: '', cropSettings: '', caption: '', description: '', tags: '' };
            mediaItem.licenseDetails = { externalId: '', networkId: '', networkType: '', searchId: '' };
        };
    return {
        cropimagealone: cropimagealone,
        init: initModel,
        initTempFiles: initTempFiles,
        initArchiveButtons: initArchiveButtons,
        archiveSearch: archiveSearch,
        toggleArchiveItem: toggleArchiveItem,
        selectArchiveItem: selectArchiveItem,
        toggleFrameItem: toggleFrameItem,
        toggleShutterstockChannel: toggleShutterstockChannel,
        shutterstockSearch: shutterstockSearch,
        addMedias: addMedias,
        initFlixButtons: initFlixButtons,
        MangomoloSelectButton: MangomoloSelectButton,
        MangomoloSearchButton: MangomoloSearchButton,
        setData: setData,
        resumableUploadComplete: resumableUploadComplete,
        resumableUploadError: resumableUploadError,
        generateThumbnails: generateThumbnails
    };
}(jQuery));