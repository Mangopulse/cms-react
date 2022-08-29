window.searchmodule = (function ($) {
    var searchinput,
        searchForm,
        searchUrl,
        remoteSearchUrl,
        index,
        type,
        searchParams,
        itemurl;
    var maxResults = 30;

    var init = function () {
        searchinput = $('#nav-search-input');
        searchForm = $('#nav-search-form');
        searchUrl = searchForm.attr("action");
        remoteSearchUrl = searchForm.data("searchurl");

        type = searchForm.data("type");
        index = searchForm.data("index");
        searchParams = searchForm.data("params");
        itemurl = searchForm.data("itemaction");

        if (!searchinput.length)
            return;
        if (searchinput.typeahead)
            searchinput.typeahead("destroy");

        var value = searchinput.val();

        searchinput.typeaheadtwitter({
            limit: maxResults,
            valueKey: 'Name',
            remote: searchUrl + '?query=%QUERY&' + searchParams,
            template: ['<p class="repo-language">{{Name}}</p>', '<p class="repo-name">{{Description}}</p>'].join(''),
            engine: Hogan
        });


        //var accountBloodhound = new Bloodhound({
        //    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        //    queryTokenizer: Bloodhound.tokenizers.whitespace,

        //    remote: {
        //        url: remoteSearchUrl + "/indices/" + index + "/search?size=10&offset=0",
        //        prepare: function(query, settings) {
        //            settings.type = "POST";
        //            settings.contentType = "application/json; charset=UTF-8";
        //            settings.data = JSON.stringify({ "data": query, "types": type });
        //            return settings;
        //        }
        //    }
            
        //});

        //searchinput.typeahead({
        //    hint: false,
        //    highlight: true,
        //    minLength: 1
        //}, {
        //    limit: maxResults,
        //    display: 'Subject',
        //    //valueKey: 'Subject',
        //    source: accountBloodhound,
        //    templates: {
        //        empty: [
        //            '<div class="empty-message">',
        //            'Unable to find any result.',
        //            '</div>'
        //        ].join('\n'),
        //        suggestion: Handlebars.compile('<div title="{{Subject}}">{{Subject}}<span class="date">{{Date}}</span></div>')
        //    }
        //    //template: ['<p class="repo-language">{{Title}}</p>', '<p class="repo-name">{{Content}}</p>'].join('')
        //    //engine: Hogan
        //});

        searchinput.bind('typeahead:selected', function (obj, datum, name) {
            window.back.loadUrl(itemurl + '/' + datum.Id);
        });
        if ($(".table-responsive").length) {
            //searchForm.find(".nav-search-icon").click(submitSearch);
            //searchForm.find(".nav-search-icon").css("cursor", "pointer");
        }

    },
        submitSearch = function () {
            if (!$(".table-responsive").length) return false;
            var value = searchinput.val();
            $.ajax({
                type: "GET",
                url: searchUrl,
                data: "query=" + value + "&json=false&" + searchParams,
                success: function (data) {
                    $(".table-responsive").find("tbody").html(data);
                },
                error: function (e) {
                    //alert(e.responseText);
                }
            });
            return false;
        };

    return {
        init: init,
        submitSearch: submitSearch
    };
}(jQuery));
