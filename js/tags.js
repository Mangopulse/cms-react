window.tagsmodule = (function ($) {
    var queryTagsUrl = "/Shared/Terms";
    var init = function () {
        $(".tagfield").each(function () {
            var url = queryTagsUrl + "?taxonomy=" + $(this).data("taxonomy");
            $(this).tag({
                autocompleteOnComma: true,
                placeholder: $(this).attr('placeholder'),
                source: function (query, process) {
                    return $.get(url, { query: query }, function (data) {
                        return process(data);
                    });
                },
                denyNewTags: !$(this).data("auto-add"),
                searchlink: "/Search/Filter?Tags=",
                showSearchIcon: false
            });
            $(this).bind('added', function (event) {
                $(this).val($(this).val().split(', ').join(","));
                $(this).change();
                window.back.pages.postmodule.syncTerms($(this).val(), $(this).data("taxonomy"));
            });
            $(this).bind('removed', function () {
                $(this).val($(this).val().split(', ').join(","));
                $(this).change();
                window.back.pages.postmodule.syncTerms($(this).val(), $(this).data("taxonomy"));
            });
            $(this).autosize({ append: "\n" });
        });
    };
    return {
        init: init
    };
}(jQuery));