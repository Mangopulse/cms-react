window.linkedlist = (function ($) {
    var list;
    var init = function () {
        list = $(".linkedlist");
            list.each(function() {
                var sources = $(this).data("source").split(',');
                var bases = $(this).data("base").split(',');
                var linkedlist = $(this);
                for (var b = 0; b < bases.length; b++) {
                    var base = $(bases[b]);
                    let source = eval(sources[b]);

                    base.change(function () {
                        updateList($(this), linkedlist,source , false);
                    });
                    if (base.val().length)
                        updateList(base, linkedlist, source, true);
                }
            });
        },
        updateList = function (base, target, source, load) {
            var value = base.val() + "";
            var values = value ? value.split(",") : null;
            target.empty();

            var multiple = base.attr("multiple") == "multiple";
            var required = base.data("required") == "true";
            var selectedItems = getSelectedItems(target, load);

            if (!multiple && !required)
                target.append($("<option value=''>--</option>"));
            var listData = jQuery.grep(source, function (value) {
                return values ? values.indexOf(value["key"]) >= 0 : false;
            });
            var dataexists = false;
            $.each(listData, function (key, val) {
                if (val.value.length) {
                    var optgroup = null;
                    if (multiple) {
                        //var existing = jQuery.grep(list.find("optgroup"), function (group) {
                        //    return val.display == group.label;
                        //});
                        //if (!existing.length)
                        optgroup = $('<optgroup label="' + val.display + '"></optgroup>');
                    }
                    $.each(val.value, function (id, option) {
                        var existing = jQuery.grep(target.find("option"), function (opt1) {
                            return option.id == opt1.value;
                        });
                        if (!existing.length) {
                            var selected = selectedItems.indexOf(option.id) >= 0;
                            dataexists = true;
                            (optgroup != null ? optgroup : target).append($("<option " + (selected ? "selected" : "") + "></option>")
                                .attr("value", option.id)
                                .text(option.display));
                        }

                    });
                    if (optgroup)
                        target.append(optgroup);
                }

            });
            if (!dataexists) {
                target.closest(".form-group").hide();
            } else {
                target.closest(".form-group").show();
            }
            if (target.hasClass("chosen-select")) {
                target.trigger('chosen:updated');
            }
        };
    var getSelectedItems = function (select, getvalue) {
        if (getvalue && select.data("value"))
            return select.data("value").split(",");
        var values = [];
        select.find('option').each(function () {
            var option = $(this);
            var value = option.val();
            if (option.is(':selected')) {
                values.push(value);
            }
        });
        return values;
    }

    return {
        init: init
    }

}(jQuery));