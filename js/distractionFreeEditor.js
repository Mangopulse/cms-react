window.neweditormodule = (function ($) {
    var configs = {};
    var init = function () {
        if ($('.cms-new-editor').length)
            initNewEditor('.cms-new-editor');
        if ($('.admin-new-editor').length)
            initNewEditor('.admin-new-editor');
    };
    var setConfigs = function (value) {
        configs = value || {};
    };

    var mangoRemoveOverlay = function () {
        $('#contenttab .editor-loader').remove();
        $('.page-content .overlay').remove();
    }
    function jqId(myid) {
        return "#" + myid.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
    }
    var initNewEditor = function (selector) {
        var editors = $(selector);
        $.each(editors, function (index, editor) {
            var type = $(editor).data('type');
            var idSelector = $(editor).attr('id');
            var id = jqId(idSelector);
            if (editor.classList.contains('initialized')) { return false; }
            if (tinymce.editors[idSelector]) {
                tinymce.remove(id);
            }
            if (type === 'title')
                tinymce.init({
                    selector: id,
                    theme: configs.EditorTheme || 'silver',
                    menubar: false,
                    inline: true,
                    toolbar: false,
                    plugins: ['quickbars'],
                    quickbars_insert_toolbar: 'undo redo',
                    quickbars_selection_toolbar: 'italic underline'
                });
            else {
                var options = {
                    selector: id,
                    theme: configs.EditorTheme || 'silver',
                    body_class: configs.BodyClass || '',
                    inline: false,
                    draggable_modal: true,
                    statusbar: false,
                    plugins: configs.Plugins + (configs.EnableComments ? ',comments' : '') + (configs.SelectionToolbar || configs.InsertToolbar ? ',quickbars' : ''),
                    menubar: $.trim(configs.MenuBarItems) ? configs.MenuBarItems.replace(',', ' ') : false,
                    menu: configs.Menu,
                    toolbar: configs.Toolbar || false,
                    toolbar_drawer: 'sliding', //floating
                    quickbars_insert_toolbar: configs.InsertToolbar || false,
                    quickbars_selection_toolbar: configs.SelectionToolbar || false,
                    contextmenu: configs.ContextMenu || false,
                    autoresize_overflow_padding: 50,
                    min_height: 500,
                    autoresize_on_init: true,
                    lists_indent_on_tab: false,
                    nonbreaking_force_tab: true,
                    block_formats: $.trim(configs.BlockFormats) ? configs.BlockFormats.replace(',', '; ') : null,
                    style_formats: configs.StyleFormats || null,
                    style_formats_merge: true,
                    style_formats_autohide: true,
                    preview_styles: $.trim(configs.PreviewStyles) ? configs.PreviewStyles.replace(',', ' ') : false,
                    font_formats: $.trim(configs.Fonts) ? configs.Fonts.replace(',', '; ').replace(' | ', ',') : null,
                    fontsize_formats: configs.FontSizes,
                    custom_colors: false,
                    allow_html_in_named_anchor: configs.AllowHtml,
                    directionality: JS_CONFIG.CssDirection,
                    content_style: configs.CustomStyle ? configs.CustomStyle : 'html { height: auto; } body { min-height: 450px!important; }',
                    content_css: $.trim(configs.CustomCss) ? configs.CustomCss.split(',') : null,
                    paste_as_text: configs.PasteAsPlainText ? configs.PasteAsPlainText : false,
                    paste_data_images: false,
                    paste_webkit_styles: 'none',
                    paste_retain_style_properties: 'none',
                    valid_children: '+body[link],+body[style],+body[span]',
                    extended_valid_elements: 'svg[*],defs[*],pattern[*],desc[*],metadata[*],g[*],mask[*],path[*],line[*],marker[*],rect[*],circle[*],ellipse[*],polygon[*],polyline[*],linearGradient[*],radialGradient[*],stop[*],image[*],view[*],text[*],textPath[*],title[*],tspan[*],glyph[*],symbol[*],switch[*],use[*],span[*],style,*[*]',
                    //invalid_elements: '*[style]',
                    //invalid_styles: {
                    //    '*': 'color font-size', // Global invalid styles
                    //    'a': 'background' // Link specific invalid styles
                    //}
                    url_converter: null,
                    relative_urls: false,
                    convert_urls: false,
                    init_instance_callback: function (tinyEditor) {
                        $(editor).addClass('initialized');
                        if (!configs.Plugins.includes('autoresize')) {
                            setIframeHeight(tinyEditor);
                            tinyEditor.on('Undo', function () {
                                setIframeHeight(tinyEditor);
                            });
                            tinyEditor.on('NodeChange', function () {
                                setIframeHeight(tinyEditor);
                            });
                            tinyEditor.on('SetContent', function () {
                                setIframeHeight(tinyEditor);
                            });
                            $(window).on('resize', function () {
                                setIframeHeight(tinyEditor);
                            });
                        }
                        tinyEditor.on('paste', function (e) {
                            tinyEditor.execCommand('mceAutoResize');
                        });
                        //$(window).on('scroll', function () {
                        //    var menuBar = document.getElementsByClassName('tox-menubar');
                        //    var toolbar = document.getElementsByClassName('tox-toolbar-overlord');
                        //    if (!menuBar[0] && !toolbar[0]) return;

                        //    var headerHeight = $('body.sticked #navbar').length ? $('body.sticked #navbar')[0].offsetHeight : 0;
                        //    var sticky = $(tinyMCE.activeEditor.container).offset().top;
                        //    var stickyHeight = menubar[0] ? menubar[0].offsetHeight : 0;
                        //    stickyHeight += toolbar[0] ? toolbar[0].offsetHeight : 0;

                        //    if (window.pageYOffset + stickyHeight + headerHeight > sticky) {
                        //        if (menuBar[0])
                        //            menuBar[0].classList.add('sticky-menu');
                        //        if (toolbar[0])
                        //            toolbar[0].classList.add('sticky-toolbar');
                        //    } else {
                        //        if (menuBar[0])
                        //            menuBar[0].classList.remove('sticky-menu');
                        //        if (toolbar[0])
                        //            toolbar[0].classList.remove('sticky-toolbar');
                        //    }
                        //});
                        observeImageLists();
                        observeBody();
                    },
                    object_resizing: 'img',
                    media_live_embeds: true,
                    imagetools_toolbar: configs.ImageToolsToolbar || false,
                    images_upload_handler: function (blobInfo, success, failure) {
                        $('#contenttab').prepend('<div class="editor-loader"><i class="fas fa-circle-notch fa-spin"></i></div>');
                        $('.page-content').prepend('<div class="overlay"></div>');
                        var image = $(tinyMCE.activeEditor.selection.getNode());
                        var bstr = atob(blobInfo.base64()), n = bstr.length, u8arr = new Uint8Array(n);
                        while (n--) {
                            u8arr[n] = bstr.charCodeAt(n);
                        }

                        var file = new File([u8arr], blobInfo.filename());

                        var resumable = new Resumable({
                            chunkSize: 1024 * 1024,
                            maxChunkRetries: 10,
                            chunkRetryInterval: 100,
                            simultaneousUploads: 4,
                            permanentErrors: [404, 415, 501],
                            target: JS_CONFIG.UploadServer + 'Store/Upload',
                            prioritizeFirstAndLastChunk: true,
                            throttleProgressCallbacks: 1,
                            generateUniqueIdentifier: function () {
                                var dateObject = new Date();
                                var uniqueId = dateObject.getFullYear() + '' +
                                    (dateObject.getMonth() + 1) + '' +
                                    dateObject.getDate() + '_' +
                                    dateObject.getTime() + '_' +
                                    Math.random() * 10000;
                                return uniqueId;
                            }
                        });
                        resumable.addFile(file);
                        resumable.on('fileError',
                            function (file, message) {
                                mangoRemoveOverlay();
                                failure('Invalid JSON: ' + message);
                            });
                        resumable.on('fileSuccess',
                            function (file, result) {
                                var mediaInfo = JSON.parse(result);
                                var mediaItem = {
                                    MediaUrl: mediaInfo.MediaUrl,
                                    MediaType: 10,
                                    Replace: image.length ? image.data('replace') : true
                                };
                                var originalId = image.length ? image.data('id') : null;
                                $.post('/Assets/Media/AddEditorMedia', { form: mediaItem, originalId: originalId }).done(function (resp) {
                                    mangoRemoveOverlay();


                                    if (resp.Reason) {
                                        failure('Invalid JSON: ' + resp.Reason);
                                        return false;
                                    }

                                    success(resp.MediaUrl);


                                    if (image.length) {
                                        image.data('replace', false);
                                        image.attr('data-replace', false);
                                        image.attr('data-mangosrc', resp.MediaUrl);
                                        image.data('id', resp.Id);
                                        image.attr('data-id', resp.Id);
                                    }

                                    if (window.back.pages.postmodule) {
                                        var item = {
                                            id: resp.Id,
                                            mediaUrl: resp.MediaUrl,
                                            path: resp.Path,
                                            type: resp.Type,
                                            caption: resp.Caption,
                                            thumbnail: { mediaUrl: resp.thumbnail }
                                        };
                                        if (originalId)
                                            window.back.pages.postmodule.removeMedia(originalId, $('#EditorPlacement').val());
                                        window.back.pages.postmodule.addGroupMedia(item, $('#EditorPlacement').val());
                                    }
                                }).fail(function (errr) {
                                    $('#contenttab .editor-loader').remove();
                                    $('.page-content .overlay').remove();

                                    failure('Invalid JSON: ' + JSON.parse(errr.responseText).Reason);
                                    return false;
                                });
                            });

                        resumable.upload();
                    }
                };
                if (configs.EnableComments) {
                    options[plugins] =
                        options[tinycomments_mode] = 'embedded';
                    options[tinycomments_author] = JS_CONFIG.Username;
                    options[tinycomments_author_name] = JS_CONFIG.Fullname;
                }
                if (configs.EnableCollaboration && configs.CollaborationApiKey) {
                    options[external_plugins] = {
                        wave: 'https://cdn2.codox.io/waveTinymce/plugin.min.js'
                    };
                    options[wave] = {
                        docId: $(editor).data('doc-id'), // unique document id,
                        username: JS_CONFIG.EmailAddress, // unique username or email address
                        apiKey: configs.CollaborationApiKey
                    };
                }

                tinymce.init(options);
            }

            tinymce.activeEditor.on('ObjectResized', function (e) {
                if (e.target.nodeName == 'IMG') {
                    var url = e.target.currentSrc;
                    var newUrl = url;
                    if (url.indexOf("?") > -1) {
                        newUrl = url.substr(0, url.indexOf("?"));
                    }
                    e.target.setAttribute("data-mangosrc", newUrl + '?width=' + e.width);
                }
            });

        });

    };

    var initNewTinyMce = function () {
        if ($('.cms-new-editor').length)
            initNewEditor('.cms-new-editor');
        if ($('.admin-new-editor').length)
            initNewEditor('.admin-new-editor');
    };

    var mediaCallback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (var mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (var removed of mutation.removedNodes) {
                    var nodeName = removed.nodeName.toLowerCase();
                    switch (nodeName) {
                        case 'figure':
                        case 'img':
                        case 'video':
                        case 'iframe':
                            var media = $(removed).hasClass('editormedia') ? $(removed) : $(mutation.target).closest('.editormedia');
                            media = media.length ? media : $(removed).hasClass('mce-object-video') ? $(removed) : $(mutation.target).closest('.mce-object-video');
                            var mediaId = media.data('id') ? media.data('id') : media.data('mce-p-data-id');
                            if (mediaId)
                                window.back.pages.postmodule.removeMedia(mediaId, $('#EditorPlacement').val());

                            var ul = $(mutation.target).closest('.content-media-wrapper');
                            if (ul.find('.content-media-item').length === 1) {
                                ul.remove();
                            } else {
                                var li = $(mutation.target).closest('.content-media-item');
                                if (li.length)
                                    li.remove();
                            }
                            tinymce.activeEditor.save();
                            tinymce.activeEditor.nodeChanged();
                            return;
                        default:
                            return;
                    }
                }
            }
        }
    };
    var mediaObserver = new MutationObserver(mediaCallback);
    var observeImageLists = function () {
        var config = { childList: true, subtree: true };
        var media = tinymce.activeEditor.iframeElement.contentDocument.getElementsByClassName('content-media-wrapper');
        $.each(media, function (index, item) {
            mediaObserver.observe(item, config);
        });
    };

    var bodyCallback = function (mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (var added of mutation.addedNodes) {
                    var nodeName = added.nodeName.toLowerCase();
                    switch (nodeName) {
                        case 'ul':
                            observeImageLists();
                            return;
                        default:
                            return;
                    }
                }
            }
        }
    };

    var bodyObserver = new MutationObserver(bodyCallback);
    var observeBody = function () {
        var config = { childList: true, subtree: true };
        var body = tinymce.activeEditor.iframeElement.contentDocument.getElementsByTagName('body')[0];
        bodyObserver.observe(body, config);
    };


    function setIframeHeight(editor) {
        if ($(editor.container).hasClass('tox-fullscreen')) return;

        var iframeHeight = editor.getDoc().documentElement.offsetHeight + 50;
        var iframe = editor.iframeElement;
        $(iframe).css('height', iframeHeight);
        $(iframe).closest('.tox-sidebar-wrap').css('height', iframeHeight);
    }

    return {
        init: init,
        initNewEditor: initNewEditor,
        initNewTinyMce: initNewTinyMce,
        setConfigs: setConfigs,
        observeImageLists: observeImageLists
    };
}(jQuery));