window.back.pages.facebookbotmodule = (function ($, ko) {
    var messengerprofileproperties;

    function MessengerProfileProperties() {
        var self = this;
        self.AccountLinkingUrl = ko.observable();
        self.PersistentMenus = ko.observableArray();
        self.GetStarted = ko.observable();
        self.Greetings = ko.observableArray();
        self.WhiteListedDomains = ko.observableArray();
        self.PaymentSettings = ko.observable();
        self.TargetAudience = ko.observable();
        self.HomeExtension = ko.observable();

        function PersistentMenu(data) {
            var self = this;
            var name = $.grep(window.Locales, function (locale) {
                return locale.id === data.locale;
            });
            self.Locale = ko.observable(data.locale);
            self.Name = ko.observable(name.length ? name[0].text : data.locale);
            self.ComposerInputDisabled = ko.observable(data.composer_input_disabled ? true : false);
            self.Buttons = ko.observableArray($.map(data.call_to_actions || [],
                function (button) {
                    return new Button(button);
                }));

            self.addNewButton = function () {
                var button = new Button();
                self.Buttons.push(button);
                initEditables();
            }

            self.removeButton = function (button) {
                confirm(window.AppResources.AreYouSureToDelete, function (result) {
                    if (result) {
                        self.Buttons.remove(button);
                    }
                });
            }

            function Button(data) {
                var self = this;
                var pagename = $.grep(window.Pages, function (page) {
                    return page.id === data.url;
                });
                var fallbackpagename = $.grep(window.Pages, function (page) {
                    return page.id === data.fallback_url;
                });
                self.Type = ko.observable(data.type);
                self.Title = ko.observable(data.title);
                self.Url = ko.observable(data.url);
                self.PageName = ko.observable(pagename.length ? pagename[0].text : data.url);
                self.WebviewHeightRatio = ko.observable(data.webview_height_ratio);
                self.MessengerExtensions = ko.observable(data.messenger_extensions ? true : false);
                self.FallbackUrl = ko.observable(data.fallback_url);
                self.FallbackPageName = ko.observable(fallbackpagename.length ? fallbackpagename[0].text : data.fallback_url);
                self.WebviewShareButton = ko.observable(data.webview_share_button);
                self.Payload = ko.observable(data.payload);
                self.Buttons = ko.observableArray($.map(data.call_to_actions || [],
                    function (button) {
                        return new Button(button);
                    }));
                self.Widgets = ko.observableArray(SetDualBoxListItem(window.Widgets, data.payload));

                self.addNewButton = function () {
                    var nestedbutton = new Button();
                    self.Buttons.push(nestedbutton);
                    initEditables();
                }

                self.removeButton = function (nestedbutton) {
                    confirm(window.AppResources.AreYouSureToDelete, function (result) {
                        if (result) {
                            self.Buttons.remove(nestedbutton);
                        }
                    });
                }
            }
        }

        function GetStarted(data) {
            var self = this;
            self.Payload = ko.observable(data ? data.payload : "");
            self.Widgets = ko.observableArray(SetDualBoxListItem(window.Widgets, data ? data.payload : ""));
        }

        function Greeting(data) {
            var self = this;
            var name = $.grep(window.Locales, function (locale) {
                return locale.id === data.locale;
            });
            self.Locale = ko.observable(data.locale);
            self.Text = ko.observable(data.text);
            self.Name = ko.observable(name.length ? name[0].text : data.locale);
        }

        function PaymentSetting(data) {
            var self = this;
            self.PrivacyUrl = ko.observable(data ? data.privacy_url : "");
            self.PublicKey = ko.observable(data ? data.public_key : "");
            self.Testers = ko.observableArray(data ? data.testers : "");
        }

        function TargetAudience(data) {
            var self = this;
            self.AudienceType = ko.observable(data ? data.audience_type : "");
            self.Countries = ko.observable(data ? $.map(data.countries,
                function (countries) {
                    return new CountriesFilter(countries);
                }) : "");

            function CountriesFilter(data) {
                var self = this;
                self.BlackList = ko.observableArray(data ? data.blackList : "");
                self.WhiteList = ko.observableArray(data ? data.whiteList : "");
            }
        }

        function HomeExtension(data) {
            var self = this;
            self.Url = ko.observable(data ? data.url : "");
            self.WebviewHeightRatio = ko.observable(data ? data.webview_height_ratio : "");
            self.WebviewShareButton = ko.observable(data ? data.webview_share_button : "");
            self.InTest = ko.observable(data ? data.in_test : false);
        }

        function DualBoxListItem(data, selected) {
            var self = this;
            self.Value = data.id;
            self.Text = data.text;
            self.Selected = selected;
        }

        function SetDualBoxListItem(data, selecteditems) {
            var selected = selecteditems ? selecteditems.split(',') : "";
            var options = [];
            $.each(data, function (index, value) {
                var isselected = $.inArray(value.id, selected) > -1;
                options.push(new DualBoxListItem(value, isselected));
            });
            return options;
        }

        self.init = function (data) {
            self.AccountLinkingUrl(data.account_linking_url);

            var persistentMenus = $.map(data.persistent_menu || [],
                function (persistentmenu) {
                    return new PersistentMenu(persistentmenu);
                });
            self.PersistentMenus(persistentMenus);

            var getStarted = new GetStarted(data.get_started);
            self.GetStarted(getStarted);

            var greetings = $.map(data.greeting || [],
                function (greeting) {
                    return new Greeting(greeting);
                });
            self.Greetings(greetings);

            self.WhiteListedDomains(data.whitelisted_domains);

            var paymentSettings = new PaymentSetting(data.payment_settings);
            self.PaymentSettings(paymentSettings);

            var targetAudience = new TargetAudience(data.target_audience);
            self.TargetAudience(targetAudience);

            var homeExtension = new HomeExtension(data.home_url);
            self.HomeExtension(homeExtension);
        }

        self.addNewGreeting = function () {
            var greeting = new Greeting({}, "");
            self.Greetings.push(greeting);
            initEditables();
        }

        self.removeGreeting = function (greeting) {
            confirm(window.AppResources.AreYouSureToDelete, function (result) {
                if (result) {
                    self.Greetings.remove(greeting);
                }
            });
        }

        self.addNewMenu = function () {
            var menu = new PersistentMenu();
            self.PersistentMenus.push(menu);
            initEditables();
        }

        self.removeMenu = function (menu) {
            confirm(window.AppResources.AreYouSureToDelete, function (result) {
                if (result) {
                    self.PersistentMenus.remove(menu);
                }
            });
        }

    }

    function init(data) {
        //data = Base64.decode(data);
        data = $.parseJSON(data);
        messengerprofileproperties = new MessengerProfileProperties();
        messengerprofileproperties.init(data);
        ko.cleanNode($('#facebookbooteditform')[0]);
        ko.applyBindings(messengerprofileproperties, $('#facebookbooteditform')[0]);
        initEditables();
    }

    function initEditables() {
        $.each($('.editable.select:not(.editable-rendered)'), function () {
            var source = $(this).data('source');
            var emptyText = $(this).data('emptytext');
            var width = $(this).data('width');
            var placeholder = $(this).data('placeholder');
            var valueHolderId = $(this).data('valueholder');
            var valueHolder = $(this).closest('.form-group').find('#' + valueHolderId);
            var nameHolderId = $(this).data('nameholder');
            var nameHolder = $(this).closest('.form-group').find('#' + nameHolderId);

            $(this).editable({
                type: 'select2',
                emptytext: emptyText,
                select2: {
                    width: width,
                    data: source,
                    placeholder: placeholder
                },
                display: function (newValue) {
                    var localename = $.grep(window.Locales, function (locale) {
                        return locale.id === newValue;
                    });

                    var pagename = $.grep(window.Pages, function (page) {
                        return page.id === newValue;
                    });

                    var name = localename.length ? localename : pagename;

                    if (name.length && nameHolder.length) {
                        var localeName = name[0].text;
                        nameHolder.attr('value', localeName);
                        nameHolder.val(localeName);

                        if (newValue)
                            $(this).text(localeName);
                    }
                    else if (newValue)
                        $(this).text(newValue);

                    $(this).trigger('change');
                },
                success: function (response, newValue) {
                    if (valueHolder.length) {
                        valueHolder.attr('value', newValue);
                        valueHolder.val(newValue);
                        valueHolder.trigger('change');
                    }
                }
            }).addClass('editable-rendered');
        });

        $.each($('.editable.textarea:not(.editable-rendered)'), function () {
            var value = $(this).text();
            var name = $(this).attr('name');
            var emptyText = $(this).data('emptytext');
            var valueHolderId = $(this).data('valueholder');
            var valueHolder = $(this).closest('.form-group').find('#' + valueHolderId);

            $(this).editable({
                type: 'wysihtml5',
                value: value,
                emptytext: emptyText,
                name: name,

                wysihtml5: {
                    //css : {'max-width':'300px'}
                },
                success: function (response, newValue) {
                    valueHolder.attr('value', newValue);
                    valueHolder.val(newValue);
                    valueHolder.trigger('change');
                }
            }).addClass('editable-rendered');
        });

        $.each($('.editable.text:not(.editable-rendered)'), function () {
            var value = $(this).text();
            var emptyText = $(this).data('emptytext');
            var valueHolderId = $(this).data('valueholder');
            var valueHolder = $(this).closest('.form-group').find('#' + valueHolderId);

            $(this).editable({
                type: 'text',
                value: value,
                emptytext: emptyText,
                success: function (response, newValue) {
                    valueHolder.attr('value', newValue);
                    valueHolder.val(newValue);
                    valueHolder.trigger('change');
                }
            }).addClass('editable-rendered');
        });
    }

    function updatePayloadValues(listbox, valueHolderId) {
        var values = listbox.val().join();
        var valueHolder = listbox.closest('.form-group').find('#' + valueHolderId);
        valueHolder.val(values);
        valueHolder.trigger('change');
    }

    ko.bindingHandlers.dualList = {
        init: function (element) {
            var duallist = $(element).bootstrapDualListbox({
                selectorMinimalHeight: 200,
                infoTextFiltered: '<span class="label label-purple label-lg">Filtered</span>',
                nonSelectedListLabel: 'All',
                selectedListLabel: 'Selected'
            });
            var container = duallist.bootstrapDualListbox('getContainer');
            container.find('.btn').addClass('btn btn-new info btn-bold');

            $(element).on('change', function () {
                // save selected to an observable
                var valueHolderId = duallist.data('valueholder');
                updatePayloadValues(duallist, valueHolderId);
            });

            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).bootstrapDualListbox('destroy');
            });
        },
        update: function (element) {
            $(element).bootstrapDualListbox('refresh', true);
        }
    }

    ko.bindingHandlers.withProperties = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // Make a modified binding context, with a extra properties, and apply it to descendant elements
            var childBindingContext = bindingContext.createChildContext(
                bindingContext.$rawData,
                null, // Optionally, pass a string here as an alias for the data item in descendant contexts
                function (context) {
                    ko.utils.extend(context, valueAccessor());
                });
            ko.applyBindingsToDescendants(childBindingContext, element);

            // Also tell KO *not* to bind the descendants itself, otherwise they will be bound twice
            return { controlsDescendantBindings: true };
        }
    };

    return {
        init: init
    }
}(jQuery, ko));

function updateCheckboxValue(checkbox) {
    var checked = checkbox.checked == undefined ? checkbox.prop('checked') : checkbox.checked;
    $(checkbox).attr('value', checked);
    $(checkbox).val(checked);
    //$(checkbox).trigger('change');
}

function updateShareButtonValue(checkbox) {
    var value = checkbox.prop('checked') ? "show" : "hide";
    var valueHolderId = checkbox.data('valueholder');
    var valueHolder = checkbox.closest('.form-group').find('#' + valueHolderId);
    valueHolder.val(value);
    valueHolder.trigger('change');
}