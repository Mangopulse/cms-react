var tinymceEditors = [];
window.editormodule = (function ($) {
    var configs = {};
    var init = function () {
        tinyMCE.editors = [];
        tinymceEditors = [];
        if ($(".cmseditor").length)
            initTinyMce();
    }
    var setConfigs = function (value) {
        configs = value || {};
    }
    var initEditor = function (selector) {
        if (selector && $(selector).find('.mce-tinymce').length) return;
        else if (!selector && $('.mce-tinymce').length) return;
        //tinyMCE.remove();
        tinyMCE.init({
            // General options
            mode: "textarea",
            theme: configs.EditorTheme || "modern",
            height: 400,
            selector: ".form-group > div > .cmseditor",
            plugins: [configs.Plugins || ""],
            fontsize_formats: configs.FontSizes || "",
            menubar: configs.MenuBar || "",
            toolbar1: configs.Toolbar1 || "",
            toolbar2: configs.Toolbar2 || "",
            image_advtab: true,
            directionality: JS_CONFIG.CssDirection,
            extended_valid_elements: 'script[language|type|src]',
            setup: function (editor) {
                editor.on('change', function () {
                    editor.save();
                });
                editor.on('init', function () {
                    tinymceEditors.push(editor);
                });
            },
            oninit: "setPlainText",
            media_live_embeds: true,
            content_style: "post_content",
            content_css: configs.CustomCss ? configs.CustomCss + ",/content/css/font.css" : "",
            url_converter: null,
            relative_urls: false,
            convert_urls: false
        });
    }
    function setPlainText() {
        var ed = tinyMCE.get('elm1');

        ed.pasteAsPlainText = true;

        //adding handlers crossbrowser
        if (tinymce.isOpera || /Firefox\/2/.test(navigator.userAgent)) {
            ed.onKeyDown.add(function (ed, e) {
                if (((tinymce.isMac ? e.metaKey : e.ctrlKey) && e.keyCode == 86) || (e.shiftKey && e.keyCode == 45))
                    ed.pasteAsPlainText = true;
            });
        } else {
            ed.onPaste.addToTop(function (ed, e) {
                ed.pasteAsPlainText = true;
            });
        }
    }
    var initTinyMce = function () {
        initEditor(".cmseditor")

    }
    var initSummerNote = function () {
        var editors = $('.mdn-editor');
        if (editors.length > 0)
            editors.summernote({
                height: 300, //set editable area's height
                focus: false //set focus editable area after Initialize summernote
            });
    }

    return {
        init: init,
        initEditor: initEditor,
        initTinyMce: initTinyMce,
        setConfigs: setConfigs
    }
}(jQuery));