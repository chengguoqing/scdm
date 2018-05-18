"use strict";
$(function () {
    $(".wesd_Sf_sfgxc").on("click", function () {
        $(this).find(".chshdf_sdff").toggleClass("act"), $(this).find(".chshdf_sdff").hasClass("act") ? $(".dfg_dfggxc").addClass("act") : $(".dfg_dfggxc").removeClass("act")
    }), $("#youxiangsd").on("blur", function () {
        var a = $(this).val(),
            b = $(this);
        dsfsd(!s.mail(a), $(this), "邮箱格式错误"), s.mail(a) && ajax("app/BusinessCenter/check_email_exist", {
            email: a
        }, function (a) {
            console.log(0 == a.exist), dsfsd(0 != a.exist, b, a.message), 0 == a.exist && console.log(1)
        })
    }), $("#paw_a").on("blur", function () {
        var a = $(this).val();
        dsfsd(a.length < 8, $(this), "密码长度不足8位")
    }), $("#paw_b").on("blur", function () {
        var a = $(this).val();
        dsfsd(a.length < 8, $(this), "密码长度不足8位")
    }), $("#paw_b").on("blur", function () {
        var a = $(this).val(),
            b = $("#paw_a").val();
        dsfsd(a != b, $(this), "两次输入的密码不一致")
    }), $("#yamzdf").on("blur", function () {
        var a = $(this).val();
        $(this);
        dsfsd(a.length < 3, $(this), "验证码错误"), a.length > 3 && ajax("app/BusinessCenter/check_rd_code", {
            code: a
        }, function (a) {
            1 == a.opt && console.log(a)
        })
    }), $(".hyisd_sdfx").on("click", function () {
        $(this).prev().attr("src", url_sd + "app/BusinessCenter/rd_code?t=" + (new Date).getTime())
    }), $("body").on("click", ".dfg_dfggxc.act .sd_df_df", function () {
        for (var a = 0; a < $(".sd_df_dgf_fg li.bitian").length; a++)
            if (!$(".sd_df_dgf_fg li.bitian").eq(a).hasClass("amk")) return;
        var b = {};
        b.email = $("#youxiangsd").val(), b.password = $("#paw_b").val(), b.code = $("#yamzdf").val(), ajax("app/BusinessCenter/regist", b, function (a) {
            localStorage.user_em = b.email, window.location.href = "active_email.html"
        })
    })
});
