window.mapmodule = (function ($) {
    var mapContainer = document.getElementById('mapContainer'),
        mapField = $(".mapConfig"),
        mapToggle = $("#toggleMap"),
        mapObject;


    var init = function () {
        if ($("#toggleMap").length == 0)
            return;
        mapContainer = document.getElementById('mapContainer');

        mapField = $(".mapConfig");
        mapToggle = $("#toggleMap");

        mapToggle.click(function () {
            if (mapToggle.is(":checked")) {
                loadGoogleScript();
            } else {
                mapField.val("");
                mapContainer.style.display = "none";
                mapContainer.innerHTML = "";
            }
        });
        if (mapField.val()) {
            mapToggle.checked = true;
            loadGoogleScript();
        }
    },
        loadGoogleScript = function () {
            $.getScript(window.back.pages.googlemapLink + "&callback=initMap");
        };
    window.initMap = function () {
        var zoom = 7;
        var latitude = 34.759666;
        var longitude = 38.023682;

        if (mapField.val()) {
            var config = JSON.parse(mapField.val());
            if (config != null) {
                latitude = config.lat;
                longitude = config.long;
                zoom = config.zoom;
            }
        }
        var mapOptions = {
            scaleControl: true,
            center: new google.maps.LatLng(latitude, longitude),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.SATELITE,
        };

        
        mapObject = new google.maps.Map(mapContainer, mapOptions);
        mapContainer.style.display = "block";

        google.maps.event.addListener(mapObject, 'zoom_changed', function () {
            setLocationAndEventListener();
        });
        google.maps.event.addListener(mapObject, 'mouseup', function () {
            setLocationAndEventListener();
        });

        var pin = 'https://admango.cdn.mangomolo.com/analytics/mangopulse/admin/images/pin.png';
        var marker = new google.maps.Marker({
            position: {
                lat: latitude, lng: longitude
            },
            map: mapObject,
            icon: pin,
            draggable: true,
            title: $("#Title").val()
        });
        google.maps.event.addListener(marker, 'mouseup', function () {
            mapObject.setCenter(marker.getPosition());
            setLocationAndEventListener();
        });

        function setLocationAndEventListener() {
            var center = mapObject.getCenter();
            var conf = {};
            conf.lat = center.lat();
            conf.long = center.lng();
            conf.zoom = mapObject.getZoom();
            var strConfig = JSON.stringify(conf);
            mapField.val(strConfig);
        }

        setLocationAndEventListener();
    };

    return {
        init: init
    };
}(jQuery));