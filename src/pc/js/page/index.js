"use strict";

var _console,
    ssd_sd = [1, 2, 3, 4];
console.log(ssd_sd.join(",")), $(function () {
    zoomSlider();
});
var zoomWidth = 992,
    maxWidth = 1920,
    ratio = 1,
    viewWidth = window.innerWidth,
    zoomSlider = function zoomSlider() {
    ratio = viewWidth < 768 ? viewWidth / zoomWidth : viewWidth < zoomWidth ? zoomWidth / (zoomWidth + (zoomWidth - 750)) : 1;
    var a = maxWidth * ratio;
    $(".my-slide img ").each(function () {
        $(this).css({
            width: a,
            "max-width": a,
            "margin-left": -(a - viewWidth) / 2
        });
    });
};
$(window).resize(function () {
    viewWidth = window.innerWidth, zoomSlider();
});

//菜单的数据
var caids_s = [{
    "name": "口袋大小的便携式充电器",
    "src": "https://d2211byn0pk9fi.cloudfront.net/spree/taxons/22/hover_menu/normal/6_%288%29.jpg?1500345891"
}, {
    "name": "超紧凑型便携式充电器",
    "src": "https://d2211byn0pk9fi.cloudfront.net/spree/taxons/21/hover_menu/normal/5_%288%29.jpg?1500345741"
}, {
    "name": "高容量便携式充电器",
    "src": "https://d2211byn0pk9fi.cloudfront.net/spree/taxons/20/hover_menu/normal/4_%287%29.jpg?1500345472"
}, {
    "name": "电池盒",
    "src": "https://d2211byn0pk9fi.cloudfront.net/spree/taxons/65/hover_menu/normal/Batty_Cases.jpg?1502254577"
}, {
    "name": "Jump Starter Power Pack",
    "src": "https://d2211byn0pk9fi.cloudfront.net/spree/taxons/17/hover_menu/normal/A1502111.jpg?1509600184"
}];

caids_s.map(function (a) {
    $(".df_iyu_sd_d.aa ul").append(" <li data-src=\"" + a.src + "\"><a href=\"#\">" + a.name + "</a></li>");
});
$(".df_iyu_sd_d.aa img").attr("src", caids_s[0].src);

$(".df_iyu_sd_d ul li").hover(function () {
    console.log(2);
    var img_sd = $(this).attr("data-src");
    $(this).parents(".df_iyu_sd_d").find("img").attr("src", img_sd);
});
