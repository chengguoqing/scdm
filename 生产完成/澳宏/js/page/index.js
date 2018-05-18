"use strict";
var _console, ssd_sd = [1, 2, 3, 4];
console.log(ssd_sd.join(",")), $(function () {
    map_d(), zoomSlider()
});
var zoomWidth = 992,
    maxWidth = 1920,
    ratio = 1,
    viewWidth = window.innerWidth,
    zoomSlider = function () {
        ratio = viewWidth < 768 ? viewWidth / zoomWidth : viewWidth < zoomWidth ? zoomWidth / (zoomWidth + (zoomWidth - 750)) : 1;
        var a = maxWidth * ratio;
        $(".my-slide img ").each(function () {
            $(this).css({
                width: a,
                "max-width": a,
                "margin-left": -(a - viewWidth) / 2
            })
        })
    };
$(window).resize(function () {
    viewWidth = window.innerWidth, zoomSlider()
});
