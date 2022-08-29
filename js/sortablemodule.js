window.back.pages.sortablemodule = (function ($) {
    var sortable;

    function Sortable() {
        return new Vue({
            el: '.page-content',
            data: {
                initialItems: [],
                sortableItems: [],
                active: false,
                loaded: false,
                submitUrl: ''
            },
            methods: {
                activateSortable: function () {
                    this.active = true;
                    $('.sortable-table').sortable("enable");
                },
                submit: function () {
                    var self = this;
                    self.initialItems = self.sortableItems;
                    self.active = false;
                    var model = {};
                    model.Items = self.sortableItems;
                    $.ajax({
                        method: 'POST',
                        url: self.submitUrl,
                        data: { model },
                        success: function (result) {
                            if (result.success) {
                                $('.sortable-table').sortable("disable");
                            } else {
                                console.log(result.message);
                                $.gritter.add({
                                    time: 1000,
                                    text: '<i class="icon-bell-alt icon-animated-bell"></i> ' + "An error occured while saving order.\n\rPlease try again.",
                                    class_name: 'gritter-center gritter-warning '
                                });
                            }
                        }
                    });
                },
                cancel: function () {
                    this.sortableItems = this.initialItems;
                    this.active = false;
                    $('.sortable-table').sortable("disable");
                }
            },
            created() {
                var self = this;
                $('[data-rel=tooltip]').tooltip();
                $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-sortable/0.9.13/jquery-sortable-min.js',
                    function () {
                        var oldIndex;
                        $('.sortable-table').sortable({
                            containerSelector: 'table',
                            itemPath: '> tbody',
                            itemSelector: 'tr',
                            placeholder: '<tr class="active"/>',
                            onDragStart: function ($item, container, _super) {
                                oldIndex = $item.index();
                                $item.appendTo($item.parent());
                                _super($item, container);
                            },
                            onDrop: function ($item, container, _super) {
                                var field, newIndex = $item.index();

                                if (newIndex !== oldIndex) {
                                    self.sortableItems.splice(newIndex, 0, self.sortableItems.splice(oldIndex, 1)[0]);
                                }
                                _super($item, container);
                                $.each(self.sortableItems, function (index, sortableItem) {
                                    sortableItem.Order = index;
                                });
                            }
                        });
                        $('.sortable-table').sortable("disable");
                        self.submitUrl = $('.sortable-table').data('submit-action');
                    });
            },
            mounted() {
                if ($('.view-switcher input').length) initViewsSwitcher();
            }
        });
    }

    function init(data) {
        data = Base64.decode(data);
        data = $.parseJSON(data);
        $.getScript('/Content/js/lib/vue/vue.js', function () {
            sortable = new Sortable();
            sortable.initialItems = data;
            sortable.sortableItems = data.slice();
        });
    }

    return {
        init: init
    };
}(jQuery));