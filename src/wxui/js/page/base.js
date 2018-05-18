"use strict";

$("#showTooltips").on("click", function () {
    $(this).addClass("weui-btn_loading").find(".weui-loading").remove().end().find("span").before('<i class="weui-loading"></i>');
    var th = this;

    dx_alert("错误信息");

    setTimeout(function () {
        $(th).removeClass("weui-btn_loading").find(".weui-loading").remove();
    }, 2000);
});
$("body").on("click", ".weui-dialog__btn_primary", function () {
    $(".js_dialog").remove();
});

$("#cardNo").on('input', function () {
    this.value = this.value.replace(/[^\d]/g, '').replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
});

function dx_alert(msg) {
    $("body").append("<div class=\"js_dialog \" id=\"iosDialog2\" >\n            <div class=\"weui-mask\"></div>\n            <div class=\"weui-dialog\">\n                <div class=\"weui-dialog__bd\">" + msg + "</div>\n                <div class=\"weui-dialog__ft\">\n                    <a href=\"javascript:;\" class=\"weui-dialog__btn weui-dialog__btn_primary\">\u77E5\u9053\u4E86</a>\n                </div>\n            </div>\n        </div>");
}
