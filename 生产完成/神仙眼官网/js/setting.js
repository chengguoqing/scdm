"use strict";

/*设置*/
$(function () {

    /*忘记密码按钮触发*/
    $(".fdrfs_d_dggx").on("click", function () {
        $(".sd_df_gehgs").removeClass("show");
        $(".sd_df_gehgs.af").addClass("show");
    });

    $(".sdfs_dsdf_d").on("blur", function () {
        var ph_de = $(this).val().trim();
        dsfd_d(ph_de.length > 8, $(this), "密码格式错误");
        if ($(this).hasClass("aw")) {
            dsfd_d($(".sdfs_dsdf_d.aa").val() == $(".sdfs_dsdf_d.aw").val(), $(this), "两次输入的密码不一致");
        }
        xiu_d();
    }

    /*修改密码按钮触发*/
    );$(".ssd_dsf_dggx").on("click", function () {
        $(".sd_df_gehgs.ae").addClass("show");
    });

    $(".dfsg_df_dfg input").on("keyup", function () {
        var df_df = $(this).val().trim(),
            sd_dsd = $(this).attr("data-text");
        if (df_df.length < 8) {
            $(".dsf_df_dgg").text(sd_dsd + "长度不够");
            $(this).parents("li").removeClass("acb");
            return;
        } else {
            $(this).parents("li").addClass("acb");
            $(".dsf_df_dgg").html("&nbsp;");
        }
        if ($(this).hasClass("paw_b") && $("input.paw_b").val() != $("input.paw_a").val()) {
            $(".dsf_df_dgg").text("两次输入的新密码不一致");
            $(this).parents("li").removeClass("acb");
        } else {
            $(this).parents("li").addClass("acb");
            $(".dsf_df_dgg").html("&nbsp;");
        }

        if ($(".dfsg_df_dfg li.acb").length >= 3) {
            $(".sd_df_huqx.ae").addClass("act");
        } else {
            $(".sd_df_huqx.ae").removeClass("act");
        }
    }

    /*服务热线修改*/
    );$(".fuwu_dfg").on("click", function () {
        $(".sd_df_gehgs.ad").addClass("show");
    });

    $("#yye_sfg_df").on("keyup", function () {
        var ph_de = $(this).val().trim();
        dsfd_d(ph_de, $(this), "服务热线");
        if (ph_de) {
            $(".sd_df_huqx.ac").addClass("act");
        } else {
            $(".sd_df_huqx.ac").removeClass("act");
        }
    });

    $(".dsfd_df_dg").on("click", function () {
        $(".sd_df_gehgs.ac").addClass("show");
    }

    /*营业执照号按钮触发*/
    );$(".sd_Sd_sfgx").on("click", function () {
        $(".sd_df_gehgs.ab").addClass("show");
    }

    /*更换手机按钮触发*/
    );$(".gehuan_df").on("click", function () {
        $(".sd_df_gehgs.aa").addClass("show");
    }
    /*营业执照号输入框变化触发*/
    );$("#yye_sfg").on("keyup", function () {
        var ph_de = $(this).val().trim();
        dsfd_d(ph_de, $(this), "营业执照号不能为空");
        if (ph_de) {
            $(".sd_df_huqx.ac").addClass("act");
        } else {
            $(".sd_df_huqx.ac").removeClass("act");
        }
    }

    /* 弹出层的叉叉按钮触发*/
    );$(".dsf_df_dggxc").on("click", function () {
        $(".sd_df_gehgs").removeClass("show");
    }
    /*旧手机验证码*/
    );$(".dx_yaznds").on("blur", function () {
        var ph_de = $(this).val().trim();
        dsfd_d(ph_de.length > 3, $(this), "验证码错误");
    });
    $(".dx_yaznds").on("keyup", function () {
        var ph_de = $(this).val().trim();
        if (ph_de.length > 3) {
            $(this).next().addClass("act");
            $(this).parents("li").addClass("acb");
        } else {
            $(this).parents("li").removeClass("acb");
            $(this).next().removeClass("act");
        }
        xiu_d();
    });
    $("#new_phone").on("blur", function () {
        var ph_de = $(this).val().trim();
        dsfd_d(s.phone(ph_de), $(this), "手机号格式错误");
    });
});

function dsfd_d(a, b, c) {
    if (a) {
        $(b).parents("li").addClass("acb").find(".sd-tixdstsx").removeClass("show").text("");
    } else {
        $(b).parents("li").removeClass("acb").find(".sd-tixdstsx").addClass("show").text(c);
    }
    xiu_d();
}

function xiu_d() {
    if ($(".sd_dfpup_ul li.acb").length >= 3) {
        $(".sd_df_huqx.ab").addClass("act");
        $(".sd_df_huqx.af").addClass("act");
    } else {
        $(".sd_df_huqx.ab").removeClass("act");
        $(".sd_df_huqx.af").removeClass("act");
    }
}
