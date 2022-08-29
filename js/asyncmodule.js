
window.back.formSubmitDelegate = function (e) {
    
    var $this = $(this);
    if ($this.find("[data-confirm=true][clicked=true]").length > 0) {
        confirm($this.find("[data-confirm='true'][clicked=true]").data("confirmmessage"), function () {
            submitForm($this);
        });
    } else {
        var sresult = submitForm($this);
        if (!sresult) {
            e.preventDefault();
        }
        return sresult;
    }
    return false;
};

window.back.linkClickDelegate = function (e) {
    if (e.ctrlKey) return true;
    var $this = $(this);
    if ($this.data("confirmmessage")) {
        e.preventDefault();
        confirm( $this.data("confirmmessage"),  function (result) {
            var url = $this.data("href") || $this.attr("href");
            if (result)
                window.back.loadUrl(url, $this);
        });
        return true;
    }
    var href = $this.attr("href");
    var mediapreview = $this.data("mediapreview");
    if (mediapreview) {
        e.preventDefault();
        if (mediapreview == window.AppResources.MediaTypesByKey["image"]) {
            $.colorbox({ href: href, scalePhotos: true, maxWidth: '100%', maxHeight: '100%' });
        }
        else if (mediapreview == window.AppResources.MediaTypesByKey["video"]) {
            if (href.indexOf("youtube.com") != -1)
                window.open(href);
            else if (href.indexOf("mangomolo") != -1) {
                $.colorbox({
                    html: "<iframe width='600' height='340' src='"+ href + "'></iframe>"
                });
            } else {
                $.colorbox({
                    html: "<video width='400' height='300' controls autoplay><source src='"
                        + href + "' type='video/mp4'>Your browser does not support the video tag.</video>"
                });
            }
        }
        else if (mediapreview == window.AppResources.MediaTypesByKey["audio"]) {
            if (href.indexOf("mangomolo") != -1) {
                $.colorbox({
                    html: "<iframe width='600' height='340' src='" + href + "'></iframe>"
                });
            } else 
            $.colorbox({
                html: "<audio width='400' height='300' controls autoplay><source src='"
                    + href + "' type='audio/mp3'>Your browser does not support the audio tag.</audio>"
            });
        } else {
            $.colorbox({
                html: '<a href="' + href + '" class="notajax" target="_blank"><i class="fa fa-file bigger-250 yellow"></i></a>'
            });
        }
        return true;
    }
    if (!href || href && (href.indexOf("#") ==0)) {
        if ($this.data("tabajaxurl") && !$this.data("loaded")) { //for ajax tabs
            $.get($this.data("tabajaxurl")).done(function (data) {

                if ($this.data("appendto")) {
                    $($this.data("appendto")).append(data);
                    $($this.data("appendto")).closest(".tab-pane").find(".spinner").hide();
                }
                else {
                    $(href).html(data);
                    $(href).closest(".tab-pane").find(".spinner").hide();
                }
                $this.data("loaded", "true");
            });
        }
        return true;
    }
    if (href.indexOf("http") != -1 && href.indexOf("http") < 10)
        return true;

    if ($this.data("mdnindex"))
        href += "&index=" + $this.data("mdnindex");

    //check for dirty forms
    var form = $("form.form-horizontal, .form-container");

    if (form.data("dirty") == "true" && !form.hasClass("notajax") && $this.data("loadtype") != "popup") {
        if (confirm(window.AppResources.YouHaveUnsavedChangesMessage)) {
            return window.back.loadUrl(href, $this, null, e);
        }
        return false;
    } else {
        return window.back.loadUrl(href, $this, null, e);
    }
};
var request = false;
window.back.loadUrl = function (href, elem, panelrefresh, e) {
    request = true;
    var segments = href.replace("//", "--").split("/");
    if (segments.length == 1) return ""; 
    var area = segments[1].toLowerCase();
    if (area != "manage" && area != "admin" && area != "technical" && area != "community" && area != "assets") area = "";
    if (area != window.back.currentArea.toLowerCase() && elem && elem.data("loadtype") != "popup") {
        return true;
    }
    if (e)
        e.preventDefault();
    navigateTo(true, panelrefresh);
    function navigateTo(continueCallback, prefresh) {
        //if (prefresh)
        //    elem.find(".well").prepend("<img src='/content/Images/lod.GIF' width='30px'>");

        if (!prefresh)
            blockUi();
        var settings = elem && elem.data("postbody") ? {
            //timeout: 20000,
            type: "POST", data: elem.data("postbody"),
            url: href
        } : {
            // timeout: 20000,
            type: "GET", url: href
        };
        $.ajax(settings).done(function (data, textStatus, jqXHR) {
            if (elem && elem.data("refreshpage")) {
                window.location.reload();
                return;
            }
            if (!prefresh)
                UnblockUi();
            request = false;
            if (!prefresh)
                window.back.finishLoading(data, elem, href, jqXHR.status);
            else {

                if (jqXHR.status != 206) {
                    elem.html(data);
                    window.back.initialize();
                }
            }
        }).fail(function (jqXHR, textStatus) {
            if (!panelrefresh)
                UnblockUi();
            request = false;
            if (textStatus == 'timeout')
                alert("Timeout (check your internet connection)");
            else
                alert('<div class="under-construction"><h3>An Error Has Occured</p></div>').addClass('full-message');
        });
        return true;
    }
};
window.back.finishLoading = function (data, elem, href, status) {
    if (elem && elem.data("closeaftersubmit"))
        bootbox.hideAll();
    if (elem && elem.data("refreshpanel")) {
        bootbox.hideAll();
        $.gritter.add({
            title: window.AppResources.Notification,
            time: 1000,
            text: '<i class="icon-bell-alt icon-animated-bell"></i> ' + window.AppResources.SuccessfullySaved,
            class_name: 'gritter-center gritter-success ',
        });

        window.back.loadUrl(elem.data("refreshurl"), $(elem.data("refreshpanel")), true);
    }
    else if (elem && elem.data("container") && status != 206) {
        if (elem.data("appendtoconainer"))
            $(elem.data("container")).append(data);
        else
            $(elem.data("container")).html(data);

        if (elem.data("removeparentifclick"))
            elem.parent().remove();
    } else if (elem && elem.data("loadtype") == "popup") {
        var b = OpenPopup(data, elem.data("title") ? elem.data("title") : "", !elem.data("nobuttons"), elem.data("buttontitle"), elem.data("modal-style"), elem.data("modal-fixed"));
    } else if ($(data).hasClass("login-box")) {
        bootbox.dialog({
            message: data,
            title: window.back.PopUpTitle,
            buttons: {}
        });
    } else {
        var pagecontent = status == 206 ? $(".hidden-content") : $(".main-content-inner");
        pagecontent.html(data);
        window.scrollTo(0, 0);
        if (elem && elem.data("resetform") == "yes") {
            elem[0].reset();
        }
        if (elem && elem.data("submitcallback")) {
            if (typeof window[elem.data("submitcallback")] === 'function') {
                formok = window[elem.data("submitcallback")]();
                //e.preventDefault();
            }
        }
        $('.gritter-item-wrapper').remove();
        if ($(elem)) {
            if (href == Referrer) {
                
            }
            if (pagecontent.find("#noredirect").length == 0) {
                var pageheader = $("#page-data");
                if ($(elem).data("dontchangeurl") == undefined && pageheader.data("url")) {
                    window.history.pushState("cmslink", pageheader.data("title"), pageheader.data("url"));
                }
                else if ($(elem).data("redirecturl") != undefined)
                    window.history.pushState("cmslink", $(elem).data("redirecturl"), $(elem).data("redirecturl"));
                else if (pageheader.data("url")) {
                    window.history.pushState("cmslink", pageheader.data("title"), pageheader.data("url"));
                }
                if (pageheader && pageheader.data("title"))
                    $(document).prop('title', window.AppResources.SiteName + " | " + pageheader.data("title"));

            }

            var alertMessages = pagecontent.find(".notification");
            var top = 20;
            if (alertMessages.length) {
                alertMessages.each(function () {
                    var alertMessage = $(this);
                    var message = alertMessage.find("strong").text();
                    var details = alertMessage.find(".details").text();
                    $.gritter.add({
                        title: window.AppResources.Notification,
                        details: details,
                        time: 2000,// alertMessage.hasClass("alert-warning") ? 60000 : 3000,
                        text: '<i class="icon-bell-alt icon-animated-bell"></i> ' + message.replaceAll("\n", "<br \>"),
                        class_name: 'gritter-center gritter-' + alertMessage.data("gritterclass") + '" style="top: ' + top + 'px"',
                    });
                    top += 30;
                });

            }
        }
    }
};
window.onpopstate = function (event) {
    if (event && event.state)
        window.back.loadUrl(document.location.href);
};

function submitForm($this) {
    blockUi();
    var callback = $this.find("#Callback").val();
    try {
        $.ajax({
            url: $this.attr("action"),
            data: $this.serialize(),
            type: $this.attr("method") || "POST",
            dataType: "html",//, timeout: 10000,
            xhrFields: {
                withCredentials: true
            }
        }).done(function (data, textStatus, jqXhr) {
            UnblockUi();
             try {
                if (callback) { // this is used only in case of popup (in iframe) having a form to be  saved and the response should returnr to the parent frame
                    parent.document.formCallback(data);
                }
            } catch (err) {
                console.log(err);
            }
            window.back.finishLoading(data, $this, "", jqXhr.status);
        }).fail(function (jqXhr, textStatus) {
            UnblockUi();
            if (!$this.data("dontdisablesbuttons"))
                $this.find(":submit").removeAttr('disabled');
            if (textStatus == 'timeout')
                window.back.alert("Timeout (check your internet connection)");
            else {
                window.back.alert(window.AppResources.AnErrorHasOccured);
            }

        });
        return false;
    }
    catch (err) {
        console.log("error while saving the form" + err)
        return true;
    }
}


// SHARED CODE
$(function () {
    $(window).bind("beforeunload", confirmExit);
    window.headerloader = document.getElementById("headerloader");
    if (window.headerloader)
        window.headerloader.style.display = "none";
    $(document).on('click', 'input:submit', function (e) {
        var $this = $(this);
        $this.parents("form:first").append('<input type=hidden name=' + e.target.name + ' />');
        $("input[type=submit]", $this.parents("form")).removeAttr("clicked");
        $this.attr("clicked", "true");
    });
    window.blockUiloader = $("#busy-holder");
    $(document).ajaxStart(function() {
        if (window.headerloader)
            window.headerloader.style.display = "inline-block";
    }).ajaxStop(function() {
        if (window.headerloader)
            window.headerloader.style.display = "none";

    });
    $(document).on("click", 'a:not(.notajax)', window.back.linkClickDelegate);
    $(document).on('submit', 'form:not(.notajax)', window.back.formSubmitDelegate);

});
function confirmExit() {
    var form = $("form.form-horizontal, .form-container");
    var elem = $(':focus');
    if (elem.length) {
        elem.blur();
    }
    if (form.data("dirty") == "true" && !form.hasClass("notajax")) {
        return window.AppResources.YouHaveUnsavedChangesMessage;
    }
    return;
}
