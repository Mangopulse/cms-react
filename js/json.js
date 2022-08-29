window.jsonmodule = (function ($) {
    var containers,
        editors = [];
    var init = function () {
        containers = $('.jsonview');
        containers.each(function () {
            var container = $(this);
            var className = container.data("class");
            if (className && container.parent().find(".jsonform").length == 0) {
                $.ajax({
                    url: "/Shared/ClassJson",
                    data: "className=" + className + (container.data("isarray") ? "&isarray=" + container.data("isarray") : ""),
                    type: "GET",
                    dataType: "html"
                }).done(function (data) {
                    if (data) {
                        var editor = new JsonEditor(container, data);
                        editor.construct();
                        editors.push(editor);
                        if (container.data("defaulttab") != "json") {
                            editor.showJsonForm();
                            container.find("input, select, textarea").change(function () {
                                $(this).closest("form.form-horizontal").data("dirty", "true");
                            });
                        }
                    }

                }).fail(function () {
                    //do nothing
                });
            }
            formatJsonArea(container);
        });
        $(".form-horizontal").submit(function () {
            if (!editors || editors.length == 0) {
                return true;
            }
            for (var i = 0; i < editors.length; i++) {
                var editor = editors[i];
                if (editor.textarea.css('display') != 'none')
                    continue;
                var value = editor.generateJson();
                if (value)
                    editor.textarea.val(JSON.stringify(value));
                else
                    editor.textarea.val("");
                formatJsonArea(editor.textarea);
            }
        });
    },
        removeArrayRecord = function (elem) {
            if (confirm("Are you sure you want to delete?"))
                $(elem).parent().remove();
        },
        addArrayRecord = function (elem, key) {
            var editorid = $(elem).parents(".jsonform").parent().find("textarea").attr("id");
            $.grep(editors, function (editor) {
                return editor.id == editorid;
            })[0].addRecord(elem, key);
        },
        formatJsonArea = function (area) {
            area.css({
                'direction': 'ltr',
                'text-align': 'left',
                'max-height': '500px',
                'overflow': 'scroll',
            });
            var value = area.is("textarea") ? area.val() : area.html();
            if (!value) return;
            var ovalue = value;
            value = cleanup(value);
            try {
                var json = parseJson2(value, ovalue);
                if (json == null) {

                    value = ovalue;
                } else {
                    value = JSON.stringify(json, null, 4);
                }

            } catch (err) {
            }

            if (area.is("textarea")) {
                area.val(value);
                elasticTextarea(area);
                area.keyup(function() {
                    elasticTextarea($(this));
                });
            } else {
                area.css("white-space", "pre-wrap");
                area.html(value);
            }

        };

    var JsonEditor = function (textarea, jsonClass) {
        var self = this;
        self.id = textarea.attr("id");
        self.textarea = textarea;
        self.container = textarea.parent();
        self.constructed = false;
        self.samples = [];
        self.key = 0;
        self.jsonValues = self.textarea.val();
        self.container.addClass("jsonarea ltr");
        self.isarray = textarea.data("isarray") ? textarea.data("isarray") : false;
        var parsedJsonClass = parseJson(jsonClass);
        if (Array.isArray(parsedJsonClass)) {
            self.help = parsedJsonClass && parsedJsonClass.length > 0 ? parsedJsonClass[0].Help : "";
        }
        else {
            self.help = parsedJsonClass ? parsedJsonClass.Help : "";

        }
        self.construct = function () {
            self.container.prepend('<ul class="nav nav-tabs"><li class="nav-item"><a class="codebutton active nav-link"><i class="black fa fa-code"></i>Json</a></li>' +
                '<li class="nav-item"><a class="formbutton nav-link"><i class="orange fa fa-paragraph"></i>Form</a></li>' +
                '<li class="nav-item"><a class="previewbutton nav-link"><i class="purple fa fa-eye"></i>Preview</a></li>' +
                '</ul><span class="clearfix"><span>');
            self.container.append('<div class="jsonform" style="display: none;"></div>');
            self.container.append('<div class="jsonpreview" style="display: none;"><textarea class="col-12"></textarea></div>');
            self.form = self.container.find(".jsonform");
            self.preview = self.container.find(".jsonpreview");
            self.container.find(".codebutton").click(function () {
                self.textarea.show();
                self.form.hide();
                self.preview.hide();
                self.container.find(".nav-link").removeClass("active");
                self.container.find(".codebutton").addClass("active");
            });
            self.container.find(".formbutton").click(function () {
                self.showJsonForm();
            });
            self.container.find(".previewbutton").click(function () {
                self.preview.show();
                self.textarea.hide();
                self.form.hide();
                self.container.find(".nav-link").removeClass("active");
                self.container.find(".previewbutton").addClass("active");
                var value = self.generateJson();
                if (value)
                    self.preview.find("textarea").val(JSON.stringify(value));
                else
                    self.preview.find("textarea").val("");
                window.jsonmodule.formatJsonArea(self.preview.find("textarea"));
            });
        },
            self.showJsonForm = function () {
                self.container.find(".nav-link").removeClass("active");
                self.container.find(".formbutton").addClass("active");
                self.textarea.hide();
                self.preview.hide();
                self.form.show();

                if (!self.constructed) {
                    if (!jsonClass)
                        jsonClass = self.textarea.val();
                    self.constructForm(parseJson(jsonClass), parseJson(self.jsonValues), self.form);
                    initTags();
                    initIcons();
                    initColors();
                }
                self.listenToArabicChars();
                self.constructed = true;
            },
            self.constructForm = function (json, values, formgroup, index) {
                if (jQuery.isArray(json)) {
                    self.constructArrayForm(json, values, formgroup);
                } else {
                    self.constructObjectForm(json, values, formgroup, index);
                }
            },
            self.constructArrayForm = function (json, values, formgroup) {
                if (!values || values.length == 0) {
                    self.constructForm(json[0], null, formgroup, 0);
                } else {
                    jQuery.each(values, function (index, value) {
                        self.constructForm(json[0], value, formgroup, index);
                    });
                }
            },
            self.constructObjectForm = function (json, values, formgroup, index) {
                var objectrecord = $('<div class="json-record"></div>');
                if (index >= 0) {
                    if (index == 0) {
                        self.samples[self.key + ""] = json;
                        formgroup.append('<div class="col-1" onclick="window.jsonmodule.addArrayRecord(this, \'' + self.key + '\')"><a class="btn btn-new success light"><i class="ace-icon fa fa-plus bigger-120"></i></a></div>');
                        self.key++;
                    }

                    if (values == null)
                        return;
                    objectrecord.append('<a class="btn btn-new danger light" style="float: right" onclick="window.jsonmodule.removeArrayRecord(this)"><i class="ace-icon fa fa-trash bigger-120" ></i></a>' +
                        '<span class="clearfix"></span>');
                }
                var index = 0;
                jQuery.each(json, function (label, defaultValue) {
                    if (label == "Help") {
                        return;
                        index = 0;
                    }
                    if (defaultValue == ":") defaultValue = "";
                    if (jQuery.isArray(defaultValue)) {
                        self.help = defaultValue[0] ? defaultValue[0].Help : [];
                        var arrayrecord = $('<div class="form-group mango-help-form tight arraylabel"><label class="control-label bolder blue col-sm-2">' + label + '</label>' +
                            '<div class="col-sm-10"></div>');
                        objectrecord.append(arrayrecord);
                        self.constructArrayForm(defaultValue, values ? values[label] : null, arrayrecord.find(".col-sm-10"));
                        if (formgroup)
                            formgroup.append(objectrecord);
                        index = 0;
                    }
                    else if (jQuery.type(defaultValue) == "object") {
                        self.help = parseJson(defaultValue).Help;
                        var arrayrecord = $('<div class="form-group mango-help-form tight objectlabel"><label class="control-label bolder blue col-sm-2">' + label + '</label>' +
                            '<div class="col-sm-10"></div>');
                        objectrecord.append(arrayrecord);
                        self.constructObjectForm(defaultValue, values ? values[label] : null, arrayrecord.find(".col-sm-10"));
                        if (formgroup)
                            formgroup.append(objectrecord);
                        index = 1;
                    }
                    else {
                        //  var jsonData = parseJson(defaultValue);
                        if (index == 1 && jQuery.type(defaultValue) != "object") {
                            self.help = parsedJsonClass ? parsedJsonClass.Help : "";
                            index = 0;
                        }
                        var value = values ? values[label] : "";
                        objectrecord.append('<div class="form-group mango-help-form tight"><label class="control-label bolder blue col-sm-2">' + label + '</label>' +
                            '<div class="col-sm-10">' + self.generateField(label, value, defaultValue) + '</div>');
                    }
                });
                if (formgroup)
                    formgroup.append(objectrecord);
                else
                    return objectrecord;
            },
            self.addRecord = function (elem, key) {
                var form = $(elem).parent();
                var json = self.samples[key + ""];
                var objectrecord = $('<div class="json-record"></div>');

                objectrecord.append('<a class="btn btn-new danger light" style="float: right" onclick="window.jsonmodule.removeArrayRecord(this)"><i class="ace-icon fa fa-trash bigger-120"></i></a><span class="clearfix"></span>');

                jQuery.each(json, function (label, value) {
                    if (label == "Help") {
                        return;
                    }
                    if (jQuery.isArray(value)) {
                        var arrayrecord = $('<div class="form-group mango-help-form tight arraylabel"><label class="control-label bolder blue col-sm-2">' + label + '</label>' +
                            '<div class="col-sm-10"></div>');
                        objectrecord.append(arrayrecord);
                        self.constructArrayForm(value, json ? json[label] : null, arrayrecord.find(".col-sm-10"));
                    }
                    else if (jQuery.type(value) == "object") {
                        var arrayrecord = $('<div class="form-group mango-help-form tight objectlabel"><label class="control-label bolder blue col-sm-2">' + label + '</label>' +
                            '<div class="col-sm-10"></div>');
                        objectrecord.append(arrayrecord);
                        self.constructObjectForm(value, json ? json[label] : null, arrayrecord.find(".col-sm-10"));
                    }
                    else {
                        objectrecord.append('<div class="form-group mango-help-form tight ltr"><label class="control-label bolder blue col-sm-2">' + label + '</label>' +
                            '<div class="col-sm-10">' + self.generateField(label, "", value) + '</div>');
                    }
                });
                form.append(objectrecord);
                initTags();
                initIcons();
            },
            self.listenToArabicChars = function () {
                $(".jvalue").keyup(function () {
                    if (isArabic($(this).val())) {
                        $(this).css("text-align", "right");
                        $(this).css("direction", "rtl");
                    } else {
                        $(this).css("text-align", "left");
                        $(this).css("direction", "ltr");
                    }
                });
                $(".jvalue").each(function () {
                    if (isArabic($(this).val())) {
                        $(this).css("text-align", "right");
                        $(this).css("direction", "rtl");
                    } else {
                        $(this).css("text-align", "left");
                        $(this).css("direction", "ltr");
                    }
                });
            },
            self.generateField = function (label, value, defaultValue) {
                var helpValue = self.help && self.help[label] ? self.help[label] : '';
                if (value == "null" || value == null) value = "";
                if (defaultValue == "null" || defaultValue == null || defaultValue == ":") defaultValue = "";
                if (typeof (defaultValue) == "object") {
                    return self.constructObjectForm(defaultValue, "", null, -1).html();
                }

                var currentvalue = value ? value : defaultValue;
                var field = '<input type="text" id="' + label + '" value="' + (currentvalue) + '" class="col-12 jvalue' + ((label === 'Icon') ? ' iconpickerfield' : '') + '"/>';
                if ((currentvalue).length > 100 || (currentvalue + "").indexOf('"') > 0) {
                    field = '<textarea id="' + label + '" class="col-12 jvalue">' + (currentvalue) + '</textarea>';
                }
                if (typeof defaultValue == "boolean") {
                    var boolval = (currentvalue);
                    var fieldid = label + "-" + parseInt((Math.random() * 1000));
                    field = '<input type="checkbox" id="' + fieldid + '" name="' + label + '" value="true" ' + (boolval == true || boolval == "true" ? "checked" : "") + ' class="jvalue ace ace-switch ace-switch-6"/><span class="lbl"></span>';
                    field = '<div class="custom-control custom-switch"><input type="checkbox" class="custom-control-input jvalue" id="' + fieldid + '" name="' + label + '" ' + (boolval == true || boolval == "true" ? "checked" : "") + ' value="true">' +
                        '<label class="custom-control-label" for="' + fieldid + '">' + label + '</label></div>';
                }

                else if (defaultValue && (defaultValue + "").lastIndexOf(',') > 0 || (label === 'Color' && JS_CONFIG.Colors)) {
                    //+((label === 'Color') ? ' customcolorpicker' : '')
                    var multi = label.match(/s$/);
                    //if (multi) {
                    //var defaultValues = defaultValue.split(",").map(function(v) {
                    //    var value = v.split(":");
                    //    if (value.length > 1)
                    //        return value[1];
                    //    return value;
                    //});
                    // field = '<input type="text" id="' + label + '" value="' + (value ? value : "") + '" class="col-11 jvalue jsontag" data-source="' + defaultValues + '"/>' +
                    //     '<span class="help-button" data-rel="popover" data-trigger="hover" data-placement="left" data-content="' + defaultValues.join(", ") + '" title="" data-original-title="Example Values">?</span>';
                    field = '';
                    //} else {

                    field = '<select id="' + label + '" ' + (multi ? "multiple='true'" : '') + ' value="' + value + '" class="col-12 jvalue ' + (label == "Color" && JS_CONFIG.Colors ? "customcolorpicker" : "chosen-select autoadd") + '" >';
                    field += '<option value="">--</option>';
                    if (label == "Color" && JS_CONFIG.Colors) {
                        defaultValue = JS_CONFIG.Colors;
                    }
                    var values = defaultValue.split(",");
                    for (var i = 0; i < values.length; i++) {
                        if (values[i] === "") {
                            continue;
                        }
                        var option = values[i];
                        var label = option;
                        var id = option;
                        if (option.indexOf(":") > 0) {
                            id = option.split(":")[1];
                            label = option.split(":")[0];
                        }

                        field += '<option value="' + id + '" ' + (id == value || value.split(",").indexOf(id) >= 0 ? "selected" : "") + '>' + label + '</option>';
                    }
                    field += '</select>';
                    //}

                }
                field += '<span class="mango-help">' + helpValue + '</span>';

                return field;
            },
            self.generateJson = function () {
                var result = self.isarray ? [] : {};

                if (self.isarray) {
                    var records = self.form.find(".json-record");
                    result = getJsonArray(records);

                } else {
                    var record = self.form.find("> .json-record")[0];
                    var fromgroups = $(record).find("> .form-group");
                    for (var i = 0; i < fromgroups.length; i++) {
                        var formgroup = $(fromgroups[i]);
                        if (formgroup.hasClass("arraylabel")) {
                            result[formgroup.find("> label").text()] = getJsonArray(formgroup.find("> .col-sm-10 > .json-record"));
                        } else if (formgroup.hasClass("objectlabel")) {
                            result[formgroup.find("> label").text()] = getJsonObject(formgroup.find(".json-record")[0]);
                        } else {
                            var field = formgroup.find(".jvalue");
                            if (field.attr("type") == "checkbox")
                                result[formgroup.find("> label").text()] = field.is(':checked') + "";
                            else
                                result[formgroup.find("> label").text()] = field.val() + "";
                        }
                    }
                }
                return result;
            };

        function getJsonArray(records) {
            var result = [];
            $.each(records, function (ind, rec) {
                var obj = getJsonObject(rec);
                result.push(obj);
            });

            return result;
        }
        function getJsonObject(record) {
            var obj = {};
            var formgroups = $(record).find("> .form-group");
            $.each(formgroups, function (i, val) {
                var formgroup = $(val);
                if (formgroup.hasClass("arraylabel")) {
                    obj[formgroup.find("> label").text()] = getJsonArray(formgroup.find("> .col-sm-10 > .json-record"));
                } else if (formgroup.hasClass("objectlabel")) {
                    obj[formgroup.find("> label").text()] = getJsonObject(formgroup.find(".json-record")[0]);
                } else {
                    var fields = formgroup.find(".jvalue");
                    $.each(fields, function (j, field) {
                        var input = $(field);
                        if (input.attr("type") == "checkbox")
                            obj[formgroup.find("> label").text()] = input.is(':checked') + "";
                        else
                            obj[input.attr("id")] = input.val() + "";
                    });
                }
            });
            return obj;
        }
    };
    function parseJson(str, original) {
        try {
            return JSON.parse(str);
        } catch (ex) {
            //console.log(str + "\n" + ex);
            if (original)
                return parseJson(original);
            return str;
        }
    }
    function parseJson2(str, original) {
        try {
            return JSON.parse(str);
        } catch (ex) {
            if (original)
                return parseJson2(original);
            return null;
        }
    }

    /*helpers */
    function isArabic(text) {
        var pattern = /[\u0600-\u06FF\u0750-\u077F]/;
        return pattern.test(text);
    }

    function elasticTextarea(view) {
        var matches = view.val().match(/\n/g),
            breaks = matches ? matches.length : 2;
        view.attr('rows', breaks + 2);
    }

    function cleanup(json) {
        //json = json.split("'").join('"');
        json = json.split('\\"').join('"');
        json = json.split('\\').join('"');
        json = json.replace(/(?:\\[rn])+/g, "");
        json = json.split('"null"').join('""');
        json = json.split("'null'").join('""');
        json = json.split('null').join('""');
        return json;
    }

    function initTags() {
        $(".jsontag").each(function () {
            var fld = $(this);
            //fld.tag(
            //    {
            //        source: fld.data("source").split(","),
            //    }
            //);
            fld.bind('added',
                function () {
                    $(this).val($(this).val().split(', ').join(","));
                });
        });
        try {
            $('[data-rel=popover]').popover({ container: 'body' });
            InitChosen();
        } catch (err) {
        }
    }

    function initIcons() {
        try {
            initializeIconPickers();
        } catch (err) {
        }
    }

    function initColors() {
        try {
            $('.customcolorpicker').ace_colorpicker().removeClass('customcolorpicker')
                .on('change',
                    function () {
                        $(this).parent().find("input").val(this.value);
                    });
        } catch (err) {
        }
    }


    return {
        init: init,
        removeArrayRecord: removeArrayRecord,
        addArrayRecord: addArrayRecord,
        formatJsonArea: formatJsonArea,
        cleanup: cleanup
    };
}(jQuery));