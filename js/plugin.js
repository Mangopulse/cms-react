tinymce.PluginManager.add('advupload', function (editor) {
    var upload = function (type) {
        var selectedNode = tinymce.activeEditor.selection.getNode();
        if (tinymce.activeEditor.dom.doc.body === selectedNode) {
            alert("Please put the cursor where you want to insert the image");
            return; // this is the case where the active editor is not focused. so the video will be added to another editor
        }
        blockUi();
        var postId = $('#Id').val();
        var postTypeId = $('#PostTypeId').val();
        var data = "type=image&ParentHandler=window.editorMediaCallback&nocrop=true&count=1&noCaption=true";
        switch (type.toLowerCase()) {
            case "video":
                data = "type=video&ParentHandler=window.editorMediaCallback&nocrop=true&count=1&noCaption=true";
                break;
            default:
                break;
        }
        $.ajax({
            url: "/Assets/Media/MediaUpload",
            data: data + "&placement=editor&postId=" + postId + "&postTypeId=" + postTypeId,
            type: "GET",
            dataType: "html"
        }).done(function (data, textStatus, jqXhr) {
            $("body").append(data);
            UnblockUi();
            return;
        }).fail(function (jqXhr, textStatus) {
            UnblockUi();
            alert("Feature not working. Please contact support.");
        });
        return;
    };

    // Add a button that opens a window
    editor.ui.registry.addButton('advupload_image', {
        tooltip: 'Upload Image',
        title: 'Upload Image',
        icon: 'image',
        onAction: function () {
            upload('image');
            return false;
        }
    });

    editor.ui.registry.addButton('advupload_video', {
        tooltip: 'Upload Video',
        title: 'Upload Video',
        icon: "gallery",
        onAction: function () {
            upload('video');
            return false;
        }
    });

    // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
    editor.ui.registry.addMenuItem('advupload_image', {
        tooltip: 'Upload Image',
        title: 'Upload Image',
        icon: 'image',
        onAction: function () {
            upload('image');
            return false;
        }
    });

    editor.ui.registry.addMenuItem('advupload_video', {
        tooltip: 'Upload Video',
        title: 'Upload Video',
        icon: "gallery",
        onAction: function () {
            upload('video');
            return false;
        }
    });

    window.editorMediaCallback = function (data) {
        insertToEditor(data);
    };

    function insertToEditor(data) {
        var url = data.mediaUrl;
        var domain = data.domain;

        var nodeHtml = "";
        switch (data.type) {
            case '30':
            case 30:
                var mediaUrl = data.embed || data.mediaUrl;
                if (data.mediaUrl.indexOf(domain) >= 0) {
                    nodeHtml = "<iframe src='" + mediaUrl + "' poster='" + data.thumbnail.mediaUrl + "' width='560' height='315' frameborder='0'></iframe>";
                } else
                if (mediaUrl.indexOf('.mp4') >= 0) {
                    nodeHtml = "<video src='" + mediaUrl + "' poster='" + data.thumbnail.mediaUrl + "' controls='controls' width='560' height='315' frameborder='0' class='optimal editormedia' data-ratio='1.7' data-id='" + data.id + "' data-replace='true'></video>";
                } else {
                    nodeHtml = "<iframe src='" + mediaUrl + "' width='560' height='315' frameborder='0' class='optimal editormedia' data-ratio='1.7' data-id='" + data.id + "' data-replace='true'></iframe>";
                }
                break;
            case '10':
            case 10:
                nodeHtml = '<img src="' + addParameter(url.replace("http://", "//"), "width", "1000") + '" data-src="' + addParameter(url.replace("http://", "//"), "width", "1000") + '" ' +
                    'data-ratio="-1" class="optimal editormedia" data-id="' + data.id + '" data-replace="true" alt="' + data.caption + '">';
                break;
            default:
                break;
        }

        if (nodeHtml === "") return;
        if (data.caption) {
            nodeHtml += "<figcaption>" + data.caption + "</figcaption>";
        }
        nodeHtml = "<figure>" + nodeHtml + "</figure>";
        var selectedNode = tinymce.activeEditor.selection.getNode();

        //case the cursor is in a wrapper
        // case it's in an item
        // case it's in image
        //case it's right below the wrapper
        //other

        if ($(selectedNode).prop("tagName").toLowerCase() === "figcaption")
            selectedNode = selectedNode.parentNode;
        if ($(selectedNode.parentNode).hasClass("content-media-item"))
            selectedNode = selectedNode.parentNode;
        nodeHtml = '<li class="content-media-item">' + nodeHtml + '</li>';
        var prevwrapper = $(selectedNode).prev(".content-media-wrapper");
        if (!$(selectedNode).hasClass("content-media-wrapper") && !$(selectedNode.parentNode).hasClass("content-media-wrapper") && prevwrapper.length === 0) {
            nodeHtml = '<ul class="content-media-wrapper" style="list-style: none; margin: 0; padding: 0">' + nodeHtml + '</ul><p> </p>';
        }

        if (prevwrapper.length > 0) {
            prevwrapper = prevwrapper[prevwrapper.length - 1];
            prevwrapper.append($(nodeHtml)[0]);
        }
        else if ($(selectedNode).hasClass("content-media-item")) {
            selectedNode.parentNode.append($(nodeHtml)[0]);
            if ($(selectedNode).find("img").length === 0)
                selectedNode.remove();
        } else {
            tinymce.activeEditor.insertContent(nodeHtml);
        }

        tinymce.activeEditor.save();
        tinymce.activeEditor.nodeChanged();
        window.back.pages.postmodule.addGroupMedia(data, $("#EditorPlacement").val());

        window.neweditormodule.observeImageLists();
    }
});