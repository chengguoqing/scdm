"use strict";
$(function () {
    $(".stat_icon").on("click", function () {
        var a = $(this).attr("data-poster"),
            b = $(this).attr("data-src");
        $(".videk_sdf").addClass("show"), player.loadByUrl(b), $(".prism-cover").css({
            "background-image": "url(" + a + ")"
        })
    }), $(".dsf_s_sdfgx a").hover(function () {
        var a = $(this).index();
        $(".dsf_s_sdfgx a").addClass("zc"), $(this).removeClass("zc"), $(".vide_img_q").removeClass("show").eq(a).addClass("show")
    }), $(".d_d_ngf_sd a").hover(function () {
        var a = $(this).index();
        $(".d_d_ngf_sd a").removeClass("act").eq(a).addClass("act"), $(".df_d_wd_win").removeClass("show").eq(a).addClass("show")
    })
});
