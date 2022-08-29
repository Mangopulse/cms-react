// Variables to hold the API and image size
var jcropApi = null;
var form, preview, pcnt, aspectratiopicker;
var img, pimg;
var boxwidth, boxheight, pcntwidth, pcntheight, boundx, boundy, imgaspectratio, aspectratio, boxaspectratio;
var path, cropresult/*, maxsize*/;
var rtl = $('html').attr('dir') === 'rtl';

var updatePreview = function (c) {
    var frame = preview.find('.preview-frame');
    var ratio = aspectratio && aspectratio !== 0 ? aspectratio : c && parseInt(c.w) > 0 ? c.w / c.h : imgaspectratio;
    var fwidth = 0;
    var fheight = 0;
    var frameratio = 1;

    if (frame.length) {
        var coverposition = frame.data('cover-position').toLowerCase();
        var framebackground = frame.data('template-bg');
        fwidth = frame[0].width;
        fheight = frame[0].height;
        frameratio = fwidth / fheight;
        if (frameratio > 1) {
            pcntheight = fheight;
            pcnt.height(pcntheight);
            pcntwidth = Math.round(pcntheight * ratio);
            pcnt.width(pcntwidth > fwidth ? fwidth : pcntwidth);
        } else {
            pcntwidth = fwidth;
            pcnt.width(pcntwidth);
            pcntheight = Math.round(pcntwidth / ratio);
            pcnt.height(pcntheight > fheight ? fheight : pcntheight);
        }

        if (coverposition === 'right' && !rtl)
            if (fwidth > pcntwidth) pcnt.css({ marginLeft: Math.round(fwidth - pcntwidth) + 'px' });
            else pcnt.css({ marginLeft: '0px' });
        else if (coverposition === 'left' && rtl)
            if (fwidth > pcntwidth) pcnt.css({ marginRight: Math.round(fwidth - pcntwidth) + 'px' });
            else pcnt.css({ marginRight: '0px' });
        else if (coverposition === 'bottom')
            if (fheight > pcntheight) pcnt.css({ marginTop: Math.round(fheight - pcntheight) + 'px' });
            else pcnt.css({ marginTop: '0px' });
    }
    else {
        pcntwidth = boxwidth;
        pcnt.width(pcntwidth);
        pcntheight = pcntwidth / ratio;
        pcnt.height(pcntheight);
        pcnt.css({
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: '0px'
        });
    }

    var rx = pcntwidth / (c && parseInt(c.w) > 0 ? c.w : boundx);
    var ry = pcntheight / (c && parseInt(c.w) > 0 ? c.h : boundy);

    var pimgwidth = Math.round(rx * boundx);
    var pimgheight = Math.round(ry * boundy);
    var marginTop = Math.round(ry * (c && parseInt(c.w) > 0 ? c.y : 0));
    var marginLeft = 0;
    var marginRight = 0;

    if (!rtl) marginLeft = Math.round(rx * (c && parseInt(c.w) > 0 ? c.x : 0));
    else marginRight = Math.round(rx * boundx) - pcntwidth - Math.round(rx * (c && parseInt(c.w) > 0 ? c.x : 0));

    if (frame.length)
        if (frameratio > 1 && pcntwidth > fwidth) {
            if (!rtl) marginLeft += pcntwidth - fwidth;
            else marginRight += pcntwidth - fwidth;
        } else if (pcntheight > fheight) marginTop += pcntheight - fheight;

    pimg.css({
        width: pimgwidth + 'px',
        height: pimgheight + 'px',
        marginTop: '-' + marginTop + 'px',
        marginLeft: '-' + marginLeft + 'px',
        marginRight: '-' + marginRight + 'px'
    });

    if (c && parseInt(c.w) > 0) {
        //Calculate the querystring
        var query = '?';
        //Add crop rectangle
        query += 'crop=(' +
            Math.max(0, c.x) +
            ',' +
            Math.max(0, c.y) +
            ',' +
            Math.max(0, c.x2) +
            ',' +
            Math.max(0, c.y2) +
            ')&cropxunits=' +
            boundx +
            '&cropyunits=' +
            boundy;

        //Now, update the input values.
        cropresult.val(path + query).trigger('change');
    }
};

function linkUp(unusedIndex, container, knock) {
    form = $(container);
    img = form.find('#original-image')[0];
    if (img === undefined) {
        return;
    }
    preview = form.find('#crop-preview');
    pcnt = form.find('#crop-preview .preview');
    pimg = form.find('#crop-preview .preview img');
    aspectratiopicker = form.find('#ratioforcrop');
    cropresult = form.find('.crop-settings-value');
    boundx = img.width;
    boundy = img.height;
    imgaspectratio = boundx / boundy;
    boxwidth = form.find('.original-image').width();
    boxheight = boxwidth / imgaspectratio;
    boxaspectratio = boxwidth / boundx;
    //maxsize = 3200 * boxaspectratio;
    aspectratio = aspectratiopicker.val();

    pcntwidth = pcnt.width();
    pcntheight = pcntwidth / (aspectratio && aspectratio !== 0 ? aspectratio : imgaspectratio);
    pcnt.height(pcntheight);

    //Find the URL of the original image minus the querystring.
    path = $(img).attr('src');
    pimg.attr('src', path);
    pimg.css({
        width: Math.round(boxwidth) + 'px',
        height: Math.round(boxheight) + 'px'
    });
    if (path.indexOf('?') > 0) path = path.substr(0, path.indexOf('?'));

    $(img).Jcrop({
        onChange: updatePreview,
        onSelect: updatePreview,
        boxWidth: boxwidth,
        boxHeight: boxheight,
        //maxSize: [maxsize, maxsize],
        aspectRatio: aspectratio
    },
        function () {
            // Store the API in the jcrop_api variable
            jcropApi = this;
        });

    aspectratiopicker.change(function () {
        aspectratio = $(this).val();
        updatePreview();
        jcropApi.setOptions({ aspectRatio: aspectratio });
    });
}

function unlink() {
    if (jcropApi) {
        jcropApi.destroy();
    }
}