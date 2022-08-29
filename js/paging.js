window.pagingmodule = (function ($, ko) {
    var PagingModel = function () {
        var self = this;
        self.pages = ko.observableArray();
        self.currentpage = ko.observable(1);
        self.dataTable = null;
        self.dataContainer = null;
        self.fetchingPage = ko.observable(1);
        self.fetching = ko.observable(false);
        self.size = ko.observable();
        self.messages = ko.observable("");
        self.nodata = ko.observable(false);
        self.showingMessage = "";
        self.grid = false;
        self.currentDisplayed = ko.observable("");
        self.init = function (object, grid) {
            self.dataTable = $(object);
            self.grid = self.dataTable.hasClass("data-grid");

            if (!self.dataTable.data("moreurl") && !self.dataTable.hasClass('charttable'))
                return false;
            self.dataContainer = self.grid ? self.dataTable.find(".gridbody") : self.dataTable.find("table tbody");
            self.size = ko.observable(self.dataTable.data("size") ? self.dataTable.data("size") : JS_CONFIG.PageSize);
            var initial = [{ Number: 1, Data: self.dataContainer.html(), Size: self.size() }];
            self.currentDisplayed(self.dataContainer.html());
            self.pages($.map(initial,
                function (page) {
                    return new Page(page);
                }));

            self.fetchingPage(1);

                self.showingMessage = ko.computed(function () {

                    var start = parseInt((self.currentpage() - 1) * self.size());
                    var html = $("<div></div>").html(self.currentDisplayed());
                    var displayedCount = html.find("li").length || html.find("tr").not(".childrow").not(".detail-row").length;
                    return displayedCount + " (" + (start + 1) + " - " + (start + displayedCount) + ")";
                });
                self.currentUrl = ko.computed(function () {
                    var url = removeParameter(self.dataTable.data("moreurl"), "Page");
                    url = removeParameter(url, "Size");
                    url = removeParameter(url, "MainRequest");
                    url = addParameter(url, "Page", self.currentpage());
                    url = addParameter(url, "Size", self.size());
                    url = addParameter(url, "MainRequest", "true");
                    return url;
                });
                if (self.dataTable.siblings(".paging-row").length)
                    return;
                if (self.dataTable.hasClass('charttable')) {
                    $('<div class="paging-row ' + (grid ? "grid" : "") + '">' +
                    //'<div class="col col-3 table-actions" style="text-align: ' + JS_CONFIG.Direction + '">' +'</div>' +
                    '</div>').insertAfter(self.dataTable);
                }
                else {
                    var newpagingrow = '<div class="paging-row ' + (grid ? "grid" : "") + '">' +
                        //'<div class="col col-3 table-actions" style="text-align: ' + JS_CONFIG.Direction + '">' +
                        //'<a data-bind="attr:{href: currentUrl()}" class="purple"><i class="ace-icon fa fa-link bigger-120 tooltip-purple"></i></a>' +
                        //'</div>' +
                        '<div class="col col-6 table-pages" style="text-align: center">' +
                        '<div style="text-align: center">' +
                        '<span class="ace-icon fa fa-angle-' + JS_CONFIG.Direction + ' bigger-140" data-bind="click: previous"></span>' +
                        '<span class="ace-icon fa fa-angle-double-' + JS_CONFIG.Direction + ' bigger-140" data-bind="click: first"></span>' +
                        '| ' + AppResources.Page + ' <input class="page-input" type="text" size="2" maxlength="7" data-bind="value: fetchingPage, event:{ change: changepage}"> |' +
                        '<span class="ace-icon fa fa-angle-' + JS_CONFIG.AntiDirection + ' bigger-140" data-bind="click: next"></span>' +
                        '<input class="size-input" type="text" size="4" data-bind="value: size, event:{ change: changesize}">' +
                        '</div>' +
                        '</div>' +
                        '<div class="col col-3 table-showing" style="text-align: ' + JS_CONFIG.AntiDirection + '" >' +
                        '<div data-bind="visible: !nodata()">' + AppResources.Showing + ' <span data-bind="text: showingMessage()"></span></div>' +
                        '<div data-bind="visible: nodata()">' + AppResources.NoData + '</div>' +
                        '</div>' +
                        '</div>';
                    var pagingrow = '<div class="paging-wrapper">' +
                        '<div class="p-block">' +
                        '<input type="number" class="size-input" max="100" min="10" step="10" data-bind="value: size, event:{ change: changesize}" />' +
                        AppResources.RecordsPerPage + 
                        '</div>' +
                        '<div class="p-block"><span class="from-to"></span></div>' +
                        '<div class="p-block">' +
                        '<div class="input-group">' +
                        '<span class="input-group-addon" data-bind="click: previous"><i class="fa fa-chevron-' + JS_CONFIG.Direction + '"></i></span>' +
                        '<input type="text" class="form-control page-input" data-bind="value: fetchingPage, event:{ change: changepage}">' +
                        '<span class="input-group-addon" data-bind="click: next"><i class="fa fa-chevron-' + JS_CONFIG.AntiDirection + '"></i></span>' +
                        '</div>' +
                        '</div>' +
                        '<span class="clearfix"></span>' +
                        '</div>';
                    $(pagingrow).insertAfter(self.dataTable);
                }
                return true;
            }
            self.next = function () {
                if (self.fetching()) return;
                if (self.nodata()) return;
                self.fetchingPage(parseInt(self.fetchingPage()) + 1);
                self.loadData();
            }
            self.previous = function () {
                if (self.fetching() || parseInt(self.fetchingPage()) == 1) return;
                self.fetchingPage(parseInt(self.fetchingPage()) - 1);
                self.loadData();
            }
            self.first = function () {
                if (self.fetching()) return;
                self.fetchingPage(1);
                self.loadData();
            }
            self.changesize = function () {
                if (self.fetching()) return;
                self.loadData();
            }
            self.changepage = function () {
                if (self.fetching()) return;
                self.loadData();
            }
            self.showPage = function (data, fromcache) {
                if (!data || ($("<div></div>").html(data).find("tr").length == 0 && $("<div></div>").html(data).find("li").length == 0)) {
                    self.nodata(true);
                } else {
                    self.nodata(false);
                }
                if (data && $("<div></div>").html(data).find("tr").length) {
                    if (!fromcache)
                        self.pages.push(new Page({ Number: self.fetchingPage(), Data: data, Size: self.size() }));
                }
                self.dataContainer.html(data);
                self.currentDisplayed(data);
                self.currentpage(self.fetchingPage());


                self.fetching(false);
                if (typeof PagingCallback !== 'undefined' && typeof PagingCallback == "function") {
                    PagingCallback(data, self.currentpage());
                }
                loadPlaceholderImages();
            }
            self.loadData = function () {

                var page = jQuery.grep(self.pages(), function (value) {
                    return value.number == self.fetchingPage() && value.size == self.size();
                });
                if (page && page.length > 0) {
                    self.showPage(page[0].data, true);
                } else {
                    self.fetching(true)
                    var url = removeParameter(self.dataTable.data("moreurl"), "Page");
                    url = removeParameter(url, "Size");
                    url = removeParameter(url, "MainRequest");
                    $("#busy-holder").show();
                    var archiveQ = self.dataTable.closest('#archive-tab').find('#archivequery');
                    var token = self.dataTable.find('#ContinuationToken');
                    var has_more = self.dataTable.find('#HasMore');
                    var query = archiveQ.length == 0 ? "" : archiveQ.val();

                    if (token.length)
                        $.ajax({
                            url: url,
                            data: { "Page": self.fetchingPage(), "Size": self.size(), "MainRequest": "false", "Query": query, "ContinuationToken": token.val(), "HasMore": has_more.val() == 1 },
                            type: "POST",
                            dataType: "html"
                        }).done(function (data) {
                            self.showPage(data);
                            $("#busy-holder").hide();

                        }).fail(function (err) {
                            alert('error');
                            console.log(err)
                            $("#busy-holder").hide();
                        });
                    else
                    $.ajax({
                        url: url,
                        data: "Page=" + self.fetchingPage() + "&Size=" + self.size() + "&MainRequest=false" + "&Query=" + query ,
                        type: "GET",
                        dataType: "html"
                    }).done(function (data) {
                        self.showPage(data);
                        $("#busy-holder").hide();

                    }).fail(function (err) {
                        alert('error');
                        console.log(err)
                        $("#busy-holder").hide();
                    });
                }
            }
            var Page = function (page) {
                var self = this;
                self.number = page.Number;
                self.size = page.Size;
                self.url = page.Url;
                self.data = page.Data;
            }
        }

    function init() {
        $(".data-table, .grid-responsive, .data-grid").each(function() {
            var table = $(this);
            var model = new PagingModel();
            var res = model.init(table, false);
            var p = table.siblings(".paging-wrapper");
            if (res) {
                ko.cleanNode(p[0]);
                ko.applyBindings(model, p[0]);
            }
        });
    }
    return {
        init: init
    };


}(jQuery, ko));
