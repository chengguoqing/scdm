"use strict";

function gundf(a) {
    var b = $(a).offset().top - 120;
    $("html,body").animate({
        scrollTop: b
    }, 200)
}
var mySwiper_b = "";
$(function () {
    var a = !0;
    $("body").on("click", ".sdf_d_sdf_sr", function () {
        var b = $(this).attr("data-id");
        $(".dan_pup_sdf").addClass("show"), a && (a = !1, mySwiper_b = new Swiper(".swiper-container.ab", {
            pagination: ".swiper-pagination",
            paginationClickable: !0,
            prevButton: ".swiper-button-prev.ab",
            nextButton: ".swiper-button-next.ab",
            observer: !0,
            observeParents: !0
        })), mySwiper_b.slideTo(b, 1e3, !1)
    }), $(".close_icon_er").on("click", function () {
        $(".dan_pup_sdf").removeClass("show")
    });
    new Swiper(".swiper-container.aa", {
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        slidesPerView: 4,
        prevButton: ".swiper-button-prev.aa",
        nextButton: ".swiper-button-next.aa",
        slidesPerGroup: 2
    });
    $(window).scroll(function () {
        var a = $(this).scrollTop();
        return $(".dfds_diandf").removeClass("act"), a <= $("#dfdsf_a").offset().top - 120 ? void $(".dfds_diandf").eq(0).addClass("act") : a <= $("#dfdsf_b").offset().top - 120 ? void $(".dfds_diandf").eq(1).addClass("act") : a <= $("#dfdsf_c").offset().top - 120 ? void $(".dfds_diandf").eq(2).addClass("act") : a <= $("#dfdsf_d").offset().top - 120 ? void $(".dfds_diandf").eq(3).addClass("act") : a <= $("#dfdsf_e").offset().top - 120 ? void $(".dfds_diandf").eq(4).addClass("act") : a <= $("#dfdsf_f").offset().top - 120 ? void $(".dfds_diandf").eq(5).addClass("act") : void $(".dfds_diandf").eq(6).addClass("act")
    }), $(".uh_sdfgx").on("click", function () {
        gundf($(this).attr("href").split("html")[1])
    }), $(".dfds_diandf").on("click", function () {
        gundf($(this).attr("href"))
    }) 
    
    $(".dsf_d_srtxc img").on("click", function () {
        var sd_sd = $(this).attr("src") 
        $(".s_juyg_sd_srtxc").addClass("show").find("img").attr("src", sd_sd)
    }) 
    $(".colose_sdrx").on("click", function () {
        $(".s_juyg_sd_srtxc").removeClass("show")
    })
});
