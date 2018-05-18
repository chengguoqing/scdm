"use strict";

var dsf_df = 0,
    //0=1列 1=2列 2=3列  3=轮播
df_dfx = "",
    dasf_sf = "",
    dsf_dfd = "",
    dsf_img = "",
    ljhd_ds = "",
    //轮播图
sds_df_id = "",
    //手机那块的id
df_kis_id = ""; //列表id
$(function () {
    $(".dsfs_dff_dggxc").on("click", function () {
        $(".sd_dfd_dfdrfgx").removeClass("act");
        $(this).parents(".sd_dfd_dfdrfgx").addClass("act");
    });

    $(".dsf_xdf_dfgxc").on("click", function () {
        $(this).parents(".wedsf_df_dfgx").find(".dsf_xdf_dfgxc").removeClass("act");
        $(this).addClass("act");
    });

    $(".dsf_df_dgxc button").on("click", function () {
        var sd_sfd = $(this).index();
        dsf_df = sd_sfd;
        $(".dsf_df_dgxc button").removeClass("act").eq(sd_sfd).addClass("act");
        $(".wedsf_df_dfgx").removeClass("show").eq(sd_sfd).addClass("show");
    });
    $(".sd_dsf_dsf_df.am").map(function () {
        for (var i = 0; i < 24; i++) {
            if (i < 10) {
                i = '0' + i;
            }
            $(this).append("<option>" + i + ":00</option>");
        }
    }

    /* 添加按钮触发事件*/
    );$(".sd_df_dggxc").on("click", function () {
        var df_d = $(".dsfdsf_df_dgxc").val();

        var dsf_d = $(".wedsf_df_dfgx").eq(dsf_df).find(".dsf_xdf_dfgxc.act").attr("data-type");

        if (!df_d) {
            alert("请输入模块名称");
            return;
        }
        $(".sd_df_gehgs").removeClass("show");
        if (dsf_df == 0) {
            skjh_sd(df_d, dsf_df, dsf_d);
            return;
        }
        if (dsf_df == 1) {
            skjh_sd(df_d, dsf_df, dsf_d);
            return;
        }
        if (dsf_df == 2) {
            skjh_sd(df_d, dsf_df, dsf_d);
            return;
        }
        if (dsf_df == 3) {
            if (!$("#dsf_sd_sfggx").length <= 0) {
                alert("你已添加了轮播图");
                return;
            }

            lunbo_s(df_d);
        }
    });

    $(".dsf_df_dggxc").on("click", function () {
        $(".sd_df_gehgs").removeClass("show");
    }
    /*添加模块按钮触发*/
    );$(".sd_f_df_dfgx").on("click", function () {
        $(".sd_df_gehgs.aa").addClass("show");
    }

    /* 照片展示按钮触发*/
    );$("body").on("click", "#dsf_sd_sfggx", function () {
        $("#ssd_ooie_sdfgx").click();
        ljhd_ds = $(this).parents("li").attr("data-id");
    });
    $("body").on("click", ".dfg_sf_Sf", function (e) {
        e.stopPropagation();
        $(this).parents(".sd_df_dfg_dfxc").remove();
        var df_df = "";
        $(".sd_df_dfg_dfxc.act.lunbo").map(function () {
            var sd_dsd = $(this).find("img").attr("src");
            df_df += "<div class=\"swiper-slide\"><img src=\"" + sd_dsd + "\"></div>";
        });
        $("#" + ljhd_ds).find(".swiper-wrapper").empty().append(df_df);
    });

    $("body").on("click", ".fdgdf_fdgf_dgfg", function () {
        df_dfx = $(this);
        $("#ssd_ooie_sdfgx_er").click();
    });
    $(".map_sd_sfgx").on("click", function () {

        $(".sd_sd_sfg_xdsgxc").addClass("show");
    });

    $(".sd_df_dfg_dfxc.ar").on("click", function () {
        //地图
        $("#ssd_ooie").click();
    }

    /*地图搜索按钮触发*/
    );$(".sd_sd_sdf_sfgxc button").on("click", function () {
        $(".map_sd_sfgx").val(localStorage.dizhi);
        $(".sd_sd_sfg_xdsgxc").removeClass("show");
    });

    $(".df_df_dgfxf input").on("keyup", function () {
        $(".df_df_dgfxf input").map(function () {
            if ($(this).val().length < 8 && $(this).val().length > 0) {
                $(this).parents("li").addClass("acm");
            } else {
                $(this).parents("li").removeClass("acm");
            }
        });
        if ($(".df_df_dgfxf li.acm").length >= 2) {
            $(this).parents("ul").find(".sd_df_huqx").addClass("act");
        } else {
            $(this).parents("ul").find(".sd_df_huqx").removeClass("act");
        }
    });
    $("#dsddf_sf").on("keyup", function () {
        if ($(this).val().length < 8 && $(this).val().length > 0) {
            $(this).parents("li").find(".sd_df_huqx").addClass("act");
        } else {
            $(this).parents("li").find(".sd_df_huqx").removeClass("act");
        }
    }

    /* 编辑头图标按钮触发*/
    );$("body").on("click", ".dsf_df_dfgxc.top", function (e) {
        e.stopPropagation();
        $(".sd_df_gehgs.ab").addClass("show");
        var ds_d_a = $(this).parent().find(".titke").text().trim(),
            ds_d_b = $(this).parent().find(".fubisdfx").text().trim();
        $("#ds_d_a").val(ds_d_a);
        $("#ds_d_b").val(ds_d_b);
        dsf_dfd = $(this);
        var df_did = $(this).parents("li").attr("data-id");
        sds_df_id = df_did;
    });

    $("body").on("click", ".dsf_df_dfgxc.text", function (e) {
        e.stopPropagation();
        $(".sd_df_gehgs.ac").addClass("show");
        $("#dsddf_sf").val($(this).prev().text().trim());
        dasf_sf = $(this);

        sds_df_id = $(this).parents("li").attr("id");
        df_kis_id = $(this).parents("li").attr("data-id");
    }

    /*大标题弹出层的修改按钮触发*/
    );$("body").on("click", ".ddfdtgfrtx.act", function () {
        var ds_d_a = $("#ds_d_a").val(),
            ds_d_b = $("#ds_d_b").val();
        $(dsf_dfd).parent().find(".titke").text(ds_d_a);
        $(dsf_dfd).parent().find(".fubisdfx").text(ds_d_b);
        $(".sd_df_gehgs").removeClass("show");
        $("#" + sds_df_id).find(".df_tieer_xf  span").text(ds_d_a);
    }
    /*修改按钮触发*/
    );$("body").on("click", ".awercdsf_sffx.act", function () {
        var dsf_d = $("#dsddf_sf").val();
        $(dasf_sf).prev().text(dsf_d);
        $(".sd_df_gehgs").removeClass("show");
        dsf_dgf(sds_df_id, df_kis_id);
    });

    $("body").on("click", ".sd_df_dfg_dfxc", function () {
        if ($(this).attr("id") == "dsf_sd_sfggx") {
            return;
        }

        if ($(this).hasClass("fdgdf_fdgf_dgfg")) {
            return;
        }
        $("#ssd_sdgxc").click();
        dsf_img = $(this).find(".sd_dsf_sfgxc");
    });

    $("body").on("click", ".dsf_df_dfgxccx", function () {
        var id_dsd = $(this).parent().attr("id");
        $("#w" + id_dsd).remove();
        $(this).parent().remove();
    });
});

function zaopian() {
    var file = document.querySelector('#ssd_ooie_sdfgx').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        if ($(".sd_df_dfg_dfxc.act.lunbo").length <= 6) {
            var ds_df = " <div class=\"sd_df_dfg_dfxc we act lunbo\" > <i class=\"fa fa-close dfg_sf_Sf red fz24\"></i> <span class=\"fz40 dsf_dsd_sf zc\">+</span> <img src=\"" + reader.result + "\" class=\"sd_dsf_sfgxc\"> <p class=\"sd_tgihg_sd\">\u66F4\u6362</p> </div>";
            $("#dsf_sd_sfggx").before(ds_df);
            var df_df = "";
            $(".sd_df_dfg_dfxc.act.lunbo").map(function () {
                var sd_dsd = $(this).find("img").attr("src");
                console.log(sd_dsd);
                df_df += "<div class=\"swiper-slide\"><img src=\"" + sd_dsd + "\"></div>";
            });
            $("#" + ljhd_ds).find(".swiper-wrapper").empty().append(df_df);
            dsdfsf_dsf();
        }
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}

function sdhg_sfgx(df_sfg) {
    var file = document.querySelector('#ssd_ooie_sdfgx').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        $(dsf_img).attr("src", reader.result);
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}

function zaopianer() {
    var file = document.querySelector('#ssd_ooie_sdfgx_er').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        if ($(".sd_df_dfg_dfxc.act").length <= 6) {
            var ds_df = " <div class=\"sd_df_dfg_dfxc we act img_sdfxxfggxcc\"> <i class=\"fa fa-close dfg_sf_Sf red fz24\"></i> <span class=\"fz40 dsf_dsd_sf zc\">+</span> <img src=\"" + reader.result + "\" class=\"sd_dsf_sfgxc\" > <p class=\"sd_tgihg_sd\">\u66F4\u6362</p> <p class=\"sd_df_dgfgxcx\"> <span>\u672A\u547D\u540D</span> <img src=\"img/qianbi.png\" class=\"dsf_df_dfgxc text\"></p> </div>";
            $(df_dfx).before(ds_df);

            dsf_dgf($(df_dfx).parents("li").attr("id"), $(df_dfx).parents("li").attr("data-id"));
        }
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}

function dsf_dgf(id, yww_id) {
    var dsf_d = "";
    $("#" + id).find(".img_sdfxxfggxcc").map(function () {
        var imhs_d = $(this).find(".sd_dsf_sfgxc").attr("src"),
            text_s = $(this).find(".sd_df_dgfgxcx span").text();
        dsf_d += " <div class=\"sd_xf_xfg_xfgx\"> <img src=\"" + imhs_d + "\"> <p class=\"cen z14 fz16\"> " + text_s + " </p> </div>";
    });
    sds_df_id = yww_id;
    $("#" + yww_id).find(".dsf_df_dfgghxcx").empty().append(dsf_d);
}

function lunbo_s(tit) {
    var df_did = new Date().getTime();
    var hgs = "<li id=\"w" + df_did + "\" data-id=\"" + df_did + "\"> <label>" + tit + "</label> <div class=\"ov\"> <div class=\"sd_sf_dfg_dgc ab\"> <div class=\"sd_df_dfg_dfxc we act img_sdfxxfggxcc\" id=\"dsf_sd_sfggx\"> <span class=\"fz40 dsf_dsd_sf zc\">+</span> <img src=\"\"> <p class=\"sd_tgihg_sd\">\u66F4\u6362</p> </div> <p class=\"qc\"></p> <p class=\" dfg_sdf_sdgdf\"> \u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8 640*320\uFF0C\u56FE\u7247\u5927\u5C0F\u5728200K\u4EE5\u5185<br>\u652F\u6301\u683C\u5F0F\u4E3A\uFF1AJPEG/PNG\uFF0C\u6700\u591A\u4E0A\u4F206\u5F20 </p> <p class=\"qc\"></p> </div> </div> <p class=\"qc\"></p> </li>";
    $(".ddf_df_dfggcxc").append(hgs);
    $(".sd_df_df_dsggxc").append("<section class=\"banner_xsd pr\" id=\"" + df_did + "\"><span class=\"dsf_df_dfgxccx\"><i class=\"fa fa-close\"></i></span> <div class=\"swiper-container banner_ner\"> <div class=\"swiper-wrapper\"> <div class=\"swiper-slide\"><img src=\"\"></div> </div> <div class=\"swiper-pagination dsf_xd_xfgxc\"></div> </div> </section>");
}

function skjh_sd(tit, dfg_df, uyyd_s) {

    var df_did = new Date().getTime(),
        dfd_df = "";
    var hgs = "<li id=\"w" + df_did + "\" data-id=\"" + df_did + "\"> <label>" + tit + "</label> <div class=\"ov\"> <div class=\"sd_sf_dfg_dgc ab ac\"> <div class=\"cen fz18 pm20 pt10\"> <img src=\"img/add_com.png\" class=\"sd_dfx_dggxc\"> <span class=\"titke\">\u6807\u9898</span><img src=\"img/qianbi.png\" class=\"dsf_df_dfgxc top\"> <p class=\"mt5 fubisdfx\"> \u5BCC\u6807\u9898 </p> </div> <p class=\"qc\"></p> <div class=\"sd_df_dfg_dfxc we act fdgdf_fdgf_dgfg\"> <span class=\"fz40 dsf_dsd_sf zc\">+</span> <img src=\"\"> <p class=\"sd_tgihg_sd\">\u66F4\u6362</p> </div> <p class=\"qc\"></p> <p class=\" dfg_sdf_sdgdf\"> \u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8 640*320\uFF0C\u56FE\u7247\u5927\u5C0F\u5728200K\u4EE5\u5185<br>\u652F\u6301\u683C\u5F0F\u4E3A\uFF1AJPEG/PNG\uFF0C\u6700\u591A\u4E0A\u4F206\u5F20 </p> <p class=\"qc\"></p> </div> </div> <p class=\"qc\"></p> </li>";
    $(".ddf_df_dfggcxc").append(hgs);
    if (dfg_df == 0) {
        dfd_df = "aa";
    }
    if (dfg_df == 1) {
        dfd_df = "ab";
    }
    if (dfg_df == 2) {
        dfd_df = "ac";
    }

    $(".sd_df_df_dsggxc").append("<div class=\"sd_df_dgf_dfdgx " + dfd_df + "\" id=\"" + df_did + "\"><span class=\"dsf_df_dfgxccx\"><i class=\"fa fa-close\"></i></span><div class=\"pd pt10 pm10 " + (uyyd_s == 1 ? 'cen' : '') + " df_tieer_xf \"> <span>\u6807\u9898</span> </div> <div class=\" pd\"> <div class=\"dsf_df_dfgghxcx\"> </div> <p class=\"qc\"></p> </div> </div>");
}

function dsdfsf_dsf() {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000, //自动滑动 滚动速度
        pagination: '.swiper-pagination', //分页器的class的名字
        paginationClickable: true //点击标题跳转到指定的那页
    });
}
