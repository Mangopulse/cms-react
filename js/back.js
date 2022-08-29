window.back = window.back || {};
window.back.pages = window.back.pages || {};
window.back.finishCallbackForPopUp = function () { };
window.back.PopUpTitle = window.AppResources.SiteName;
window.back.alert = function (message) {
    alert(message);
};
window.back.confirm = function (message, callback, confirmlabel, cancellabel) {
    return confirm(message, callback, confirmlabel || window.AppResources.Yes, cancellabel || window.AppResources.No);
};

window.back.initialize = function () {
    $('button[type="submit"]').prop("disabled", false);
    $('button[type="submit"]').removeAttr("disabled");
    CallJqueryPlugins();
    initModal();
    window.back.initializemodules();
};
function initModal() {
    var modals = $('#default-modal, #over-modal');
    $.each(modals, function (index, modal) {
        if (modal.classList.contains('initialized')) return;
        $(modal).on("shown.bs.modal",
            function () {
                var modalid = "#" + $(this).attr("id");
                if ($(modalid).find("#mdn-crop-container").length > 0) {
                    var image = $("#mdn-crop-container #original-image");
                    image.attr("src", image.data("url"));
                    image.on("load", function () { $("#mdn-crop-container .upload-cropper").each(linkUp); });
                }
            }).on("hide.bs.modal",
                function (ev) {
                    var canceled = $(document.activeElement).hasClass("close"); /*|| $(document.activeElement).attr("id") == $(this).attr("id");*/
                    $(this).data("canceled", canceled);
                }).on("hidden.bs.modal",
                    function (data) {
                        var canceled = $(this).data("canceled");
                        if (!canceled) {
                            window.back.finishCallbackForPopUp();
                        }
                        window.back.finishCallbackForPopUp = function () { };
                        var modalid = $(this).attr("id");
                        $(modalid + " .modal-body").html("");
                        $(modalid + " .modal-title").html("");
                        $(modalid + " .modal-footer").html("");
                        if ($(".modal.show").length > 0)
                            $("body").addClass("modal-open");
                        else
                            $("body").removeClass("modal-open");
                    });
        $(modal).addClass('initialized');
    });
    $("#message-modal").on("hidden.bs.modal",
        function (data) {
            window.confirmCallback = null;
        });
    (function () {
        window.__alert = window.alert;
        window.alert = function (str) {
            $("#message-modal .modal-body").html(str);
            $("#message-modal .modal-footer").html('<button type="button" class="btn-new info" data-dismiss="modal">OK</button>');
            $("#message-modal").modal("show");
        };

        window.__confirm = window.confirm;
        window.confirm = function (str, callback) {

            if (typeof callback != "function") return true;
            window.confirmCallback = function (result) {
                callback(result);
                $("#message-modal").modal("hide");
                window.confirmCallback = null;
            }
            $("#message-modal .modal-body").html(str);
            $("#message-modal .modal-footer").html('<button type="button" class="btn-new success" onclick="window.confirmCallback(true)">OK</button>' +
                '<button type="button" class="btn-new danger" data-dismiss="modal" onclick="window.confirmCallback(false)">Cancel</button>');
            $("#message-modal").modal({ backdrop: 'static' }).modal("show");
        };
    })();
    $('body').keypress(function (e) {
        if (typeof window.confirmCallback == "function") {
            if (e.key == "Enter") {
                window.confirmCallback(true);
            }
            else if (e.key == "Escape") {
                window.confirmCallback(false);
            }
        }
    });
}
window.back.initializemodules = function () {
    window.searchmodule.init();
    window.jsonmodule.init();
    window.neweditormodule.init();
    window.pagingmodule.init();

    var windowSize = $(window).width();
    if (windowSize <= 768) {
        $("#sidebar").addClass("menu-min");
    }
    $(window).scroll(function () {
        scrollHandler();
    });
    scrollHandler();
    if ($("#page-data").data("title"))
        $(document).prop('title', window.AppResources.SiteName + " - " + $("#page-data").data("title"));
    initViewsSwitcher();

};
function scrollHandler() {
    var body = $('body'), scrolled = $(window).scrollTop();

    if (scrolled > 0 && scrolled <= 69) {
        body.removeClass('sticked');
    }
    else if (scrolled >= 70) {
        body.addClass('sticked');
    }
    else {
        body.removeClass('sticked');
    }
}
function initViewsSwitcher() {
    $(".view-switcher input").change(function () {
        var table = $(this).parents(".page-content").find(".data-table");
        table.removeClass("grid").removeClass("list").addClass($(this).val());
        setCookie("tablestyle", $(this).val(), "365");
    });

    var cookie = getCookie("tablestyle");
    if (!cookie) cookie = "list";
    $(".view-switcher input").attr("checked", false);
    $(".view-switcher label").removeClass("active");

    var radio = $(".view-switcher input[value='" + cookie + "']");
    radio.attr("checked", true);
    radio.parent().addClass("active");
    var table = radio.parents(".page-content").find(".data-table");
    table.removeClass("grid").removeClass("list").addClass(radio.val());
}

function getCookie(key) {
    var name = key + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
}
function setCookie(key, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}
function CallJqueryPlugins() {
    //console.log("CallJqueryPlugins");
    $('.autosize').autosize({ append: "\n" });
    //$('[data-rel="tooltip"]').tooltip({ placement: $(this).data("placement") ? $(this).data("placement") : "bottom" });
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-rel=popover]').popover({ container: 'body' });

    loadPlaceholderImages();
    if ($('.mdnpulsate').length > 0) {
        $('.mdnpulsate').pulsate({
            color: '#438eb9', // set the color of the pulse
            reach: 20, // how far the pulse goes in px
            speed: 1000, // how long one pulse takes in ms
            pause: 0, // how long the pause between pulses is in ms
            glow: true, // if the glow should be shown too
            repeat: false, // will repeat forever if true, if given a number will repeat for that many times
            onHover: true // if true only pulsate if user hovers over the element
        });
    }
    $('.show-details-btn').click(function (e) {
        e.preventDefault();
        var div = $(this).parent().find(".details-div");
        OpenPopup(div.html());
    });
    $('.input-mask-date').mask('9999-99-99');
    $('.customcolorpicker').ace_colorpicker().removeClass('customcolorpicker')
        .on('change',
            function () {
                $(this).parent().find("input").val(this.value);
            });
    $('*[data-action="fullscreen"]').click(function (e) {
        e.preventDefault();
        $(this).closest(".widget-box").toggleClass("fullscreen");
        $(this).find("i").toggleClass("fa-expand");
        $(this).find("i").toggleClass("fa-compress");
    });
    $(".menuitem").click(function () {

        var current = $(this);
        if (!current.find("a").attr("href") || current.find("a").attr("href") == "#")
            return;
        $(".menuitem").each(function () {
            $(this).removeClass("active");
            $(this).removeClass("highlight");
        });
        current.addClass("active highlight");
        current.parent().closest("li.menuitem").addClass("active highlight");
    });
    $(".confirmtoedit").dblclick(function () {
        var input = $(this);
        if (!input.prop("readonly"))
            return;
        confirm(window.AppResources.AreYouSureEditTitle,
            function (result) {
                if (result) {
                    input.prop("readonly", false);
                }
            });
    });
    InitChosen();
    $("select.multi").change(function () {

    });
    try {

        //inititializeDateTimePickers();
        initializeJqueryDateTimePickers();
    }
    catch (err) { }
    $("form.form-horizontal input, form.form-horizontal select, form.form-horizontal textarea").change(function () {
        $(this).closest("form.form-horizontal").data("dirty", "true");
    });
    $(".form-horizontal:not('.post-form'), #searchform").submit(function () {
        var valid = true;
        var required = $(this).find('.form-group.required');
        required.each(function () {
            var field = $(this).find("input, textarea, select");
            if (field.length) {
                var val = field.val();
                if (!val) {
                    $(this).addClass("invalid");
                    valid = false;
                } else {
                    $(this).removeClass("invalid");
                }
            }
        });
        if (!valid)
            alert("Some required fields are empty!");

        if (valid) {
            $("select.multi").each(function () {
                var select = $(this);
                select.replaceWith($(document.createElement('input')).val(select.val()).attr("type", "text")
                    .attr("name", select.attr("name")).attr("id", select.attr("id")));
            });
        }

        return valid;
    });
    var limitedinputs = $("input.limited");
    //limitedinputs.keypress(limitInput);
    //limitedinputs.blur(limitInput);
    //limitedinputs.bind("paste", limitInput);
    $('.language-buttons .btn').click(function (e) {
        var target = $(this).find('input[type=radio]');
        var which = target.val();
        $('.language-forms').hide();
        $("." + which + "-form").show();
    });

    $(document).on('keyup', '.limited', limitInput);
    $(document).on('paste', '.limited', limitInput);
    $(document).on('blur', '.limited', limitInput);


    $(".file-preview object").each(function () {
        var file = $(this);
        var add = 0;
        var windowSize = $(window).width();
        if (windowSize <= 768) {
            add = 190;
        }
        var fullWidth = file.parent().width() + add;
        if (fullWidth >= 800) {
            file.width("800px");
            file.height("1000px");
        } else if (fullWidth >= 600) {
            file.width(fullWidth - 50 + "px");
            file.height("800px");
        } else {
            file.width(fullWidth - 30 + "px");
            file.height("600px");
        }
    });
    $(".dependant").each(function () {
        var el = $(this);
        var dependson = $(el.data("depends-on"));
        var dependsonvalue = el.data("dependson-value");
        if (dependson.length == 0) return;
        var show = false;
        if ((dependsonvalue == "true" || dependsonvalue == true) && dependson.is(":checked")) show = true;
        if ((dependsonvalue == "false" || dependsonvalue == false) && !dependson.is(":checked")) show = true;
        if (el.val() == dependsonvalue) show = true;
        if (show) el.show();
        else el.hide();

        dependson.change(function () {
            var value = $(this).attr("type") == "checkbox" ? $(this).is(":checked") : $(this).val();
            var dependants = $(".dependant[data-depends-on='#" + $(this).attr("id") + "']");
            if (value == dependants.data("dependson-value")) el.show();
            else el.hide();
        });
    });
}
function loadPlaceholderImages() {
    $(".placeholder").each(function () {
        var img = $(this);
        if (img.data("src")) {
            img.attr("src", addParameter(img.data("src"), "preset", "table-thumb"));
            img.fadeIn();
        }
    });
}
function limitInput() {
    var logic = $(this).data("logic"); //bytes, chars
    var len = logic == "bytes" ? lengthInUtf8Bytes($(this).val()) : $(this).val().length;
    var addedTo = parseInt($(this).data("addedto"));
    if (isNaN(addedTo)) addedTo = 0;
    if (addedTo > 0) addedTo += 6;
    var maxlength = parseInt($(this).attr("maxlength") || "100");
    if ($(this).parent().find(".fieldlength").length) {
        $(this).parent().find(".fieldlength").text($(this).val().length);
    }
    else {
        $(this).parent().append("<div class='fieldlength'>" + $(this).val().length + "</span>");
    }
    if (addedTo + len >= maxlength) {
        $(this).parent().find(".fieldlength").css("color", "red");
        $(this).addClass("invalid");
        $(this).removeClass("warning");
    }
    else if (addedTo + len + 10 >= maxlength) {
        $(this).parent().find(".fieldlength").css("color", "pink");
        $(this).addClass("warning");
        $(this).removeClass("invalid");
    } else {
        $(this).parent().find(".fieldlength").css("color", "#eee");
        $(this).removeClass("invalid");
        $(this).removeClass("warning");
    }
}
function InitChosen() {
    $('.chosen-select.autoadd').each(function () {
        var select = $(this);
        var values = (select.attr("value")).split(",");
        if (values) {
            var options = $.map(select.find("option"), function (op) {
                return op.value;
            });
            for (var v = 0; v < values.length; v++) {
                var value = values[v];
                var valuesplit = value.split(':');
                var optionvalue = value;
                var optiontext = value;
                if (valuesplit.length == 2) {
                    optiontext = valuesplit[0];
                    optionvalue = valuesplit[1];
                }
                if (jQuery.inArray(optionvalue, options) == -1) {
                    select.append('<option value="' + optionvalue + '" selected="selected">' + optiontext + '</option>');

                }
            }
        }
    });
    $('.chosen-select').each(function () {
        var el = $(this);
        el.addClass("tag-input-style");
        var multiple = el.data("multiple") == "true" || el.attr("multiple") || el.prop("multiple");
        el.chosen({ allow_single_deselect: multiple, width: "100%" });
    });

    $('.chosen-select.autoadd').each(function () {
        var select = $(this);
        select.parent().find(".chosen-container input").on("keyup", function (evt) {
            var stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            if (stroke == 9 || stroke == 13) { // 9 = tab key, 13 = enter
                evt.preventDefault();
                var value = $(this).val();
                if (value) {
                    select.append('<option value="' + value + '" selected="selected">' + value + '</option>');
                    select.trigger('chosen:updated');
                }
            }
        });
    });
}

function initializeJqueryDateTimePickers() {
    if ($('.date-picker').length > 0) {
        $('.date-picker').each(function () {
            $(this).datetimepicker({ step: 15, rtl: true });
        });
    }
    if ($('.time-picker').length > 0) {
        $('.time-picker').each(function () {
            $(this).timepicker();
        });
    }

    //if ($('.date-picker').length > 0) {
    //    $('.date-picker').each(function () {
    //        $(this).datepicker();
    //    });
    //}
    var rangedate = $('.daterange');
    if (rangedate.length > 0) {
        rangedate.daterangepicker(
            {
                format: 'YYYY/MM/DD',
                ranges: {
                    'اليوم': [moment().format('YYYY/MM/DD'), moment().format('YYYY/MM/DD')],
                    'البارحة': [moment().subtract('days', 1).format('YYYY/MM/DD'), moment().subtract('days', 1).format('YYYY/MM/DD')],
                    'من سبعة أيام': [moment().subtract('days', 6).format('YYYY/MM/DD'), moment().format('YYYY/MM/DD')],
                    'من ثلاثين يوماً': [moment().subtract('days', 29).format('YYYY/MM/DD'), moment().format('YYYY/MM/DD')],
                    'هذا الشهر': [moment().startOf('month').format('YYYY/MM/DD'), moment().endOf('month').format('YYYY/MM/DD')],
                    'الشهر الماضي': [moment().subtract('month', 1).startOf('month').format('YYYY/MM/DD'), moment().subtract('month', 1).endOf('month').format('YYYY/MM/DD')],
                    'منذ سنة': [moment().subtract('years', 1).format('YYYY/MM/DD')]
                },
                opens: 'left',
            },
            function (start, end) {
                var onchange = rangedate.data("onchange");
                if (onchange)
                    eval(onchange.replace("_start", start.format('YYYY-MM-DD')).replace("_end", end.format('YYYY-MM-DD')));
            }
        );
    }
}

function inititializeDateTimePickers() {
    if ($('.date-picker').length > 0) {
        $('.date-picker').each(function () {
            var parent = $(this).parent().parent();
            $(this).datetimepicker({
                widgetParent: parent,
                orientation: "right",
                direction: "bottom",
                format: 'YYYY-MM-DD',
                isRTL: true
            });
        });
    }
    if ($('.time-picker').length > 0) {
        $('.time-picker').each(function () {
            var parent = $(this).parent().parent();
            $(this).datetimepicker({
                pickDate: false,
                orientation: "right",
                widgetParent: parent,
            });
        });
    }
    //hijri
    if ($(".input-hijri").length > 0) {
        HijriDate.monthNames = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأول', 'جمادى الآخر', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
        HijriDate.monthShortNames = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأول', 'جمادى الآخر', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
        HijriDate.weekdayNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        HijriDate.weekdayShortNames = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        var cal1 = new Calendar(),
            cal2 = new Calendar(true, 0, false, true),
            date1 = $(".hijri-date input").get(0),
            date2 = $(".gregorian-date input").get(0),
            cal1Mode = cal1.isHijriMode(),
            cal2Mode = cal2.isHijriMode();

        $(".hijri-date").get(0).appendChild(cal1.getElement());
        $(".gregorian-date").get(0).appendChild(cal2.getElement());
        $(".gregorian-date input").attr("disabled", true);
        $(".input-hijri input").click(function () {
            $(".input-hijri .calendar").toggle();
        });
        //setDateFields();
        cal1.callback = function () {
            if (cal1Mode !== cal1.isHijriMode()) {
                cal2.disableCallback(true);
                cal2.changeDateMode();
                cal2.disableCallback(false);
                cal1Mode = cal1.isHijriMode();
                cal2Mode = cal2.isHijriMode();
            }
            else
                cal2.setTime(cal1.getTime());
            setDateFields();
        };

        cal2.callback = function () {
            if (cal2Mode !== cal2.isHijriMode()) {
                cal1.disableCallback(true);
                cal1.changeDateMode();
                cal1.disableCallback(false);
                cal1Mode = cal1.isHijriMode();
                cal2Mode = cal2.isHijriMode();
            }
            else
                cal1.setTime(cal2.getTime());
            setDateFields();
        };

        function setDateFields() {
            date1.value = moment(cal1.getDate().getDateString()).format("YYYY-MM-DD");
            date2.value = cal2.getDate().getDateString();
        }
        $(".gregorian-date").attr('readonly', true);
    }
    var rangedate = $('.daterange');
    if (rangedate.length > 0) {
        rangedate.daterangepicker(
            {
                format: 'YYYY/MM/DD',
                ranges: {
                    'اليوم': [moment().format('YYYY/MM/DD'), moment().format('YYYY/MM/DD')],
                    'البارحة': [moment().subtract('days', 1).format('YYYY/MM/DD'), moment().subtract('days', 1).format('YYYY/MM/DD')],
                    'من سبعة أيام': [moment().subtract('days', 6).format('YYYY/MM/DD'), moment().format('YYYY/MM/DD')],
                    'من ثلاثين يوماً': [moment().subtract('days', 29).format('YYYY/MM/DD'), moment().format('YYYY/MM/DD')],
                    'هذا الشهر': [moment().startOf('month').format('YYYY/MM/DD'), moment().endOf('month').format('YYYY/MM/DD')],
                    'الشهر الماضي': [moment().subtract('month', 1).startOf('month').format('YYYY/MM/DD'), moment().subtract('month', 1).endOf('month').format('YYYY/MM/DD')]
                },
                opens: 'left',
            },
            function (start, end) {
                var onchange = rangedate.data("onchange");
                if (onchange)
                    eval(onchange.replace("_start", start.format('YYYY-MM-DD')).replace("_end", end.format('YYYY-MM-DD')));
            }
        );
    }
}

function initializeIconPickers() {
    $('.iconpickerfield').each(function () {
        var icontext = $(this);
        var icon = $(this).val();
        icontext.removeClass('iconpickerfield');
        icontext.css('display', 'none');
        icontext.parent().append('<div id="picker"></div>');
        var picker = $(this).parent().find('#picker');
        picker.iconpicker({
            align: 'left', // Only in div tag
            arrowClass: 'btn-new info',
            arrowPrevIconClass: 'fa fa-chevron-left',
            arrowNextIconClass: 'fa fa-chevron-right',
            cols: 10,
            footer: true,
            header: true,
            icon: icon,
            iconset: 'fontawesome',
            labelHeader: '{0} ' + window.AppResources.Of + ' {1} ' + window.AppResources.Pages,
            labelFooter: '{0} - {1} ' + window.AppResources.Of + ' {2} ' + window.AppResources.Icons,
            rows: 5,
            search: true,
            searchText: window.AppResources.Search,
            selectedClass: 'btn-new warning',
            unselectedClass: 'btn-new primary'
        });
        picker.on('change', function (e) {
            icontext.attr('value', e.icon);
        });
    });
}

jQuery(function ($) {
    //editables
    if (typeof $.fn.editable != 'undefined') {
        $.fn.editable.defaults.mode = 'popup';
        $.fn.editableform.loading =
            "<div class='editableform-loading'><i class='ace-icon fa fa-spinner fa-spin fa-2x light-blue'></i></div>";
        $.fn.editableform.buttons =
            '<button type="submit" class="btn btn-new info editable-submit"><i class="ace-icon fa fa-check"></i></button>' +
            '<button type="button" class="btn editable-cancel"><i class="ace-icon fa fa-times"></i></button>';

        //editables

        //text editable
        $('.editable.text').each(function () {
            var emptyText = $(this).data('emptytext');
            var valueHolderId = $(this).data('valueholder');
            var valueHolder = $('#' + valueHolderId);

            $(this).editable({
                type: 'text',
                emptytext: emptyText,
                success: function (response, newValue) {
                    valueHolder.val(newValue);
                }
            });
        });

        //select2 editable 
        $('.editable.select').each(function () {
            var value = $(this).val();
            var source = $(this).data('source');
            if ($(this).data("encode") === "base64")
                source = $.parseJSON(Base64.decode(source));
            var emptyText = $(this).data('emptytext');
            var width = $(this).data('width');
            var placeholder = $(this).data('placeholder');
            var valueHolderId = $(this).data('valueholder');
            var valueHolder = $('#' + valueHolderId);

            $(this).editable({
                type: 'select2',
                value: value,
                //onblur:'ignore',
                source: source,
                emptytext: emptyText,
                select2: {
                    width: width,
                    placeholder: placeholder
                },
                success: function (response, newValue) {
                    if (valueHolder.length)
                        valueHolder.val(newValue);
                }
            });
        });

        //nested select2 editable
        $('.editable.nested-select').each(function () {
            var source = $(this).data('source');
            var value = $(this).val() == "" ? source[0] : $(this).val();
            var width = $(this).data('width');
            var placeholder = $(this).data('placeholder');
            var target = $('#' + $(this).data('target'));

            $(this).editable({
                type: 'select2',
                value: value,
                //onblur:'ignore',
                source: source,
                select2: {
                    'width': width,
                    placeholder: placeholder
                },
                success: function (response, newValue) {
                    if (value == newValue) return;

                    var newSource = (!newValue || newValue == "") ? [] : source[newValue];

                    //the destroy method is causing errors in x-editable v1.4.6+
                    //it worked fine in v1.4.5

                    target.editable('destroy').editable({
                        type: 'select2',
                        source: newSource
                    }).editable('setValue', null);

                    /*
                    //so we remove it altogether and create a new element
                    var city = $('#city').removeAttr('Id').get(0);
                    $(city).clone().attr('Id', 'city').text('Select City').editable({
                        type: 'select2',
                        value: null,
                        //onblur:'ignore',
                        source: newSource,
                        select2: {
                            'width': 140
                        }
                    }).insertAfter(city);//insert it after previous instance
                    $(city).remove();//remove previous instance
                    */
                }
            });
        });

        //text editor editable
        $('.editable.textarea').each(function () {
            var value = $(this).val();
            var name = $(this).attr('name');
            var emptyText = $(this).data('emptytext');
            var valueHolderId = $(this).data('valueholder');
            var valueHolder = $('#' + valueHolderId);

            $(this).editable({
                mode: 'inline',
                type: 'wysihtml5',
                value: value,
                emptytext: emptyText,
                name: name,

                wysihtml5: {
                    //css : {'max-width':'300px'}

                },
                success: function (response, newValue) {
                    valueHolder.val(newValue);
                }
            });
        });

        //update ace switch value on change to return a boolean not on,off
        $('.ace-switch').change(function () {
            if (!$(this).val())
                $(this).val($(this).is(":checked"));
        });

        //init duallistbox
        $('select.duallistboxselection').each(function () {
            var duallist = $(this).bootstrapDualListbox({
                infoTextFiltered: '<span class="label label-purple label-lg">Filtered</span>',
                nonSelectedListLabel: 'All',
                selectedListLabel: 'Selected'
            });
            var container = duallist.bootstrapDualListbox('getContainer');
            container.find('.btn').addClass('btn-new info');
        });

        $(document).one('ajaxloadstart.page',
            function (e) {
                //in ajax mode, remove remaining elements before leaving page
                try {
                    $('.editable').editable('destroy');
                } catch (e) {
                }
                $('[class*=select2]').remove();
                $('select.duallistboxselection').bootstrapDualListbox('destroy');
            });
    }
});
/** UI **/
function blockUi() {
    centerDiv("#busy");
    if (window.blockUiloader)
        window.blockUiloader.fadeIn("fast");
}
function UnblockUi() {
    if (window.headerloader)
        window.headerloader.style.display = "none";
    if (window.blockUiloader)
        window.blockUiloader.fadeOut("fast");
}
function centerDiv(id) {
    try {
        var winH = $(window).height();
        var winW = $(window).width();

        var dialog = $(id);

        var maxheight = dialog.css("max-height");
        var maxwidth = dialog.css("max-width");

        var dialogheight = dialog.height();
        var dialogwidth = dialog.width();

        if (maxheight != "none") {
            dialogheight = Number(maxheight.replace("px", ""));
        }
        if (maxwidth != "none") {
            dialogwidth = Number(maxwidth.replace("px", ""));
        }

        dialog.css('top', winH / 2 - dialogheight / 2);
        dialog.css('left', winW / 2 - dialogwidth / 2);
    } catch (e) {

    }
}


/**Media and urls*/
function addPreset(src, preset) {
    return addParameter(src, "preset", preset);
}
function addParameter(src, key, value) {
    if (!src)
        return src;
    return src + (src.indexOf("?") > 0 ? "&" : "?") + key + "=" + value;
}
function toString(obj) {
    var str = "";
    for (attr in obj) {
        str += attr + ": " + obj[attr] + "\n";
    }
    return str;
}
function removeParameter(url, key) {
    if (!url)
        return url;
    if (!url.indexOf(key) > 0)
        return url;
    var parts = url.split("?");
    var newurl = parts[0];
    if (parts.length > 1) {
        var params = parts[1].split("&");
        for (var i = 0; i < params.length; i++) {
            if (params[i].indexOf(key) < 0) {
                if (newurl.indexOf("?") > 0)
                    newurl += "&" + params[i];
                else
                    newurl += "?" + params[i];
            }

        }
    }
    return newurl;
}
function replaceAll(str, find, replace) {
    if (!str) return str;
    return str.split(find).join(replace);
}
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    if (!search && !replacement) return;
    return target.replace(new RegExp(search, 'g'), replacement);
};
//function MediaUrl(url) {
//    if (!url) return url;
//    if (url.indexOf("http") == 0)
//        return url;
//    if (url.lastIndexOf(JS_CONFIG.PublicMediaServer) < 0) {
//        url = JS_CONFIG.PublicMediaServer + (url.indexOf("/") == 0 ? "" : "/") + url;
//    }
//    if (url.lastIndexOf("http") < 0 && url.lastIndexOf("//") < 0)
//        url = "//" + url;
//    return url;
//}
function concatenate(array, separator) {
    array = jQuery.grep(array,
        function (item) {
            return item != "";
        });
    return array.join(separator);
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
function guidempty() {
    return "00000000-0000-0000-0000-000000000000";
}
function ConvertFormToJSON(form) {
    var array = form.serializeArray({ checkboxesAsBools: true });
    var json = {};

    jQuery.each(array,
        function () {
            if (json[this.name] !== undefined) {
                if (!json[this.name].push) {
                    json[this.name] = [json[this.name]];
                }
                json[this.name].push(this.value || '');
            } else {
                json[this.name] = this.value || '';
            }
        });
    return json;
}
function ConvertJSONObjToJSONString(json) {
    var jsonstring = "{";
    var i = 0;

    jQuery.each(json,
        function (index, value) {
            i++;
            if (value.constructor === Array) {
                value = JSON.stringify(value + "");
            }
            else if (value.indexOf("{") != 0 && value != "true" && value != "false")
                value = JSON.stringify(value);
            jsonstring += '"' + index + '":' + (value ? value : '""') + (i == Object.keys(json).length ? "" : ",");
        });
    jsonstring += "}";

    return jsonstring;
}
function arrayDiff(array1, array2) {
    return array1.filter(function (a) {
        return array2.indexOf(a) == -1;
    });
}
(function ($) {

    $.fn.serialize = function (options) {
        return $.param(this.serializeArray(options));
    };

    $.fn.serializeArray = function (options) {
        var o = $.extend({
            checkboxesAsBools: false
        }, options || {});

        var rselectTextarea = /select|textarea/i;
        var rinput = /text|number|hidden|password|search/i;

        return this.map(function () {
            return this.elements ? $.makeArray(this.elements) : this;
        })
            .filter(function () {
                return this.name && !this.disabled &&
                    (this.checked
                        || (o.checkboxesAsBools && this.type === 'checkbox')
                        || rselectTextarea.test(this.nodeName)
                        || rinput.test(this.type));
            })
            .map(function (i, elem) {
                var val = $(this).val();
                return val == null ?
                    null :
                    $.isArray(val) ?
                        $.map(val, function (val, i) {
                            return { name: elem.name, value: val };
                        }) :
                        {
                            name: elem.name,
                            value: (o.checkboxesAsBools && this.type === 'checkbox') ?
                                (this.checked ? 'true' : 'false') :
                                val
                        };
            }).get();
    };

})(jQuery);

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
        try {
            return encodeURIComponent(unescape(window.btoa(e)));
        } catch (ex) {
            try {
                return btoa(unescape(encodeURIComponent(e)));
            }
            catch (ex) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64
                    } else if (isNaN(i)) {
                        a = 64
                    }
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                }
                return t
            }
        }
    },
    decode: function (e) {
        try {
            return decodeURIComponent(escape(window.atob(e)));
        } catch (ex) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+\/\=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r)
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i)
                }
            }
            t = Base64._utf8_decode(t);
            return t
        }

    },
    _utf8_encode: function (e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function (e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

$.postJSON = function (url, data) {
    var o = {
        url: url,
        type: "POST",
        dataType: "json",
        contentType: 'application/json; charset=utf-8'
    };

    if (data !== undefined) {
        o.data = JSON.stringify(data);
    }

    return $.ajax(o);
};
function parseJson(str) {
    try {
        return JSON.parse(str);
    } catch (ex) {
        return str;
    }
}
function OpenPopup(data, title, showsuccess, btntitle, style, fixed) {
    var modalid = "#default-modal";//over-modal
    if ($(modalid).hasClass('show')) modalid = "#over-modal";

    $(modalid + " .modal-body").html(data);
    if (title) {
        $(modalid + " .modal-title").html(title);
    }
    if (showsuccess) {
        $(modalid + " .modal-footer").html('<button type="button" class="btn-new success" data-dismiss="modal"><i class="fa fa-check"></i>' + (btntitle || window.AppResources.Next) + '</button>');
    }
    style = style || "large";
    var options = {
        show: true,
        focus: true,
        keyboard: true,
        backdrop: fixed ? 'static' : true
    };
    if ($(modalid).data('modal'))
        $(modalid).data('modal').options = options;
    $(modalid).attr("class", "modal fade initialized").addClass(style);
    $(modalid).modal(options);
}

$(document).keydown(function (e) {
    var doPrevent;
    if (e.keyCode == 8) {
        var d = e.srcElement || e.target;
        if (d.tagName.toUpperCase() == 'INPUT' || d.tagName.toUpperCase() == 'TEXTAREA' || (d.tagName.toUpperCase() == 'DIV' & d.className.toUpperCase() == "NOTE-EDITABLE")) {
            doPrevent = d.readOnly || d.disabled;
        }
        else
            doPrevent = true;
    }
    else
        doPrevent = false;

    if (doPrevent)
        e.preventDefault();
});
function addHeadScripts() {
    if ($("#headscripts").html()) {
        var headscripts = Base64.decode($("#headscripts").html());
        $("head").append(headscripts);
    }

}

function RemoveFromArray(array, value) {
    return jQuery.grep(array, function (v) {
        return v != value;
    });
}
function imageLoaded(img) {
    return img.get(0).complete;
}

function Contains(array, key) {
    if (typeof array == "string") {
        array = array.split(',');
    }
    if (!array) return false;
    return array.indexOf(key) >= 0;
}
function lengthInUtf8Bytes(str) {
    // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
    var m = encodeURIComponent(str).match(/%[89ABab]/g);
    return str.length + (m ? m.length : 0);
}
function getUrlParameter(url, name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(url);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
};

//$(function () {
//    $("#datetimepicker").datetimepicker();
//});
var checkbox = '<div class="custom-control custom-checkbox">' +
    '<input type="checkbox" class="custom-control-input" id="{id}">' +
    '<label class="custom-control-label" for="{id}"></label></div>';
function initBulkActions(actions) {
    $(".data-table table thead").find('th').eq(0)
        .before('<th>' + checkbox.replaceAll('{id}', 'check-all') + '</th>');
    $(".data-table table tbody tr").each(function (n) {
        $(this).find('td').eq(0).before('<td>' + checkbox.replaceAll('{id}', 'check-row-' + n) + '</td>');
    });
    var bulkactions = $("<div id='bulk-actions'></div>");
    for (var a in actions) {
        var action = actions[a];
        bulkactions.append('<a data-href="' + action.Action + '" class="btn btn-new ' + action.Style + '">' +
            '<i class="' + action.Icon + '"></i>' + action.Label + '</a> ');
    }
    bulkactions.insertBefore(".page-operations");

    $("#check-all").change(function () {
        $("[id^=check-row]").prop("checked", $(this).is(":checked"));
    });
    $("[id^=check-row], #check-all").change(function () {
        var anychecked = $("[id^=check-row]:checked").length;
        if (anychecked) $("#bulk-actions").show();
        else $("#bulk-actions").hide();
        var ids = [];
        $.each($("[id^=check-row]:checked"),
            function (i, c) {
                var modelid = $(c).parents(".clickable-row").data("modelid");
                ids.push(modelid);
            });
        $("#bulk-actions a").each(function (i, a) {
            var base = $(a).data("href");
            $(a).attr("href", base + "?idsStr=[" + ids + "]");
        })
    });
}
function copyToClipboard(inputId, message) {
    /* Get the text field */
    var input = $("#" + inputId);

    /* Select the text field */
    input.select();
    input[0].setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    $.gritter.add({
        time: 5000,
        text: message ? message : "Link copied to clipboard!",
        class_name: 'gritter-center gritter-success '
    });
}


$(document).on('click', '.export-btn-audit', function (e) {
    e.preventDefault();

    var dateRange = $('input[name="DateRange"]').val();
    var userId = $('select[name="UserId"] option:selected').val();
    var title = $('input[name="Title"]').val();
    var type = $('select[name="RecordType"] option:selected').val();
    var operation = $('select[name="ControllerAction"] option:selected').val();
    var browser = $('input[name="Browser"]').val();
    var path = window.location.pathname;
    if (path == "/Search/Filter") {
        var userIds = $('#UserIds').val();
        var modifiedUserIds = $('#ModifiedByUsers').val();
        var publishedUserIds = $('#PublishedByUsers').val();
        var size = $('#Size').val();
        var tags = $('#Tags').val();
        var dateRange = $('#DateRange').val();
        var orderBy = $('#OrderBy').val();
        var ids = $('#Ids').val();
        var statuses = $('#Status').val();
        var termIds = $('#TermIds').val();
        var postTypeIds = $('#PostTypeIds').val();
        var query = $('#Query').val();
        var metasValue = $('.meta-value');
        var metasKeys = $('.meta-key');
        var metasData = {};
        var url = 'Size=' + size + '&Tags=' + tags + '&DateRange=' + dateRange + '&OrderBy=' + orderBy + '&Ids=' + ids + '&Statuses=' + (statuses||'') + '&TermIds=' + termIds
            + '&PostTypeIds=' + postTypeIds + '&Query=' + query + '&UserIds=' + userIds + '&ModifiedByUsers=' + modifiedUserIds + '&PublishedByUsers=' + publishedUserIds;
        var queryString = metasValue.map(function (index, obj) {
            metasData[metasKeys[index].name] = metasKeys[index].value;
            metasData[metasValue[index].id] = obj.value;
        });
        for (const [key, value] of Object.entries(metasData)) {
            url += '&' + `${key}=${value}`;
        }
        window.open('/Search/ExportToExcelAdvancedSearch?' + url, '_blank');
        return false;
    }
    window.open('/Admin/Audit/ExportToExcel?DateRange=' + dateRange + '&RecordType=' + type + '&Title=' + title + '&ControllerAction=' + operation + '&Browser=' + browser + '&UserId=' + userId, '_blank');
    return false;
});

$(document).on('click', '.export-btn-contenthub', function (e) {
    e.preventDefault();
    window.open('/Community/ContentHub/ExportToExcel', '_blank');
    return false;
});
$(document).on('click', '.export-btn-notification', function (e) {
    e.preventDefault();
    var url = '/Notifications/ExportToExcel?Query=' + $('#Query').val() + '&Types=' + $('#Types').val() + '&Status=' + $('#Status').val() + '&DateRange=' + $('#DateRange').val();
    console.log('url', url);
    window.open(url, '_blank');
    return false;
});
$(document).on('click', '.export-btn-userpackagepurchase', function (e) {
    e.preventDefault();
    window.open('/UserPackagePurchase/ExportToExcel', '_blank');
    return false;
});
$(document).on('click', '.export-btn-useraddress', function (e) {
    e.preventDefault();
    window.open('/UserAddress/ExportToExcel', '_blank');
    return false;
});