let url_sd = "http://shenxianyan.com/"; //接口域名
var s = {
    mail: function (vs_s) {
        var sd_sf = false
        var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/ //验证邮箱
        if (re.test(vs_s)) {
            sd_sf = true
        }
        return sd_sf;
    },
    phone: function (vs_s) {
        var sd_sf = false
        if (vs_s.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && vs_s.length == 11) {
            sd_sf = true
        }
        return sd_sf;
    },
    car_t: function (vs_s) {
        var sd_sf = false
        var re = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        if (re.test(vs_s)) {
            sd_sf = true
        }
        return sd_sf;
    }
}
$(function () {
    /*登录按钮触发*/
    $(".ddsf_dfggxc").on("click", function () {
        $(".sd_df_dfggx").addClass("show")
    })
    /* 登录弹出层叉叉按钮触发*/
    $(".dsf_drf_dggx").on("click", function () {

        $(".sd_df_dfggx").removeClass("show")
    })
    $(".wesd_df_dggc").on("click", function () {
        $(this).toggleClass("act")
    })
    $(".sd_dtgdf_dg input").on("focus", function () {
        $(".dsf_sd_sdf_sf").removeClass("show")
    })
    $(".chshdf_sdff").on("click", function () {
        $(this).toggleClass("act")
    })
    /*登录按钮触发 */
    $(".dfg_dsd_dfgx").on("click", function () {
        let user_name = $("#email").val(),
            user_paw = $("#password").val()
        if (!user_name) {
            $(".dsf_sd_sdf_sf").addClass("show").text("请输入账号");
            return;
        }
        if (!user_paw) {
            $(".dsf_sd_sdf_sf").addClass("show").text("请输入面");
            return;
        }


        $('#user_logo').submit(function () {
            $(this).ajaxSubmit(function () {
           
            });
            return false; //阻止表单默认提交
        });
        /*    login(user_name, user_paw, function (data) {

            })*/
    })

})




function ajax(ur, dtat, callback, tye) {
    $.ajax({
        type: tye ? "post" : "get",
        url: url_sd + ur,
        data: dtat,
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        success: function (data) {
            callback(data.Response)
        },
        error: function (res) {
            alert("请求失败")
        },
        xhrFields: { //跨域用
            withCredentials: true
        },
        crossDomain: true //跨域用
    });
}

/*登录*/
function login(user, paw, cllback) {
    let df_sd = {}
    df_sd.email = user
    df_sd.password = paw
    ajax("app/BusinessCenter/login", df_sd, function (data) {
        cllback(data)
    })

}

function dsfsd(tiaj, sdf_ds, text) {
    if (tiaj) {
        $(sdf_ds).parents("li").removeClass("amk").find(".dfsdsf_dfgxc").addClass("show").text(text)

    } else {
        $(sdf_ds).parents("li").addClass("amk").find(".dfsdsf_dfgxc").removeClass("show")
    }
}


function chg_a(x, a, b, c) {
    var sdx = x
    $(sdx[0].children).map(function (x) {
        $(b).append('<option data-op="' + this.text + '" value="' + x + '">' + this.text + '</option>')
    })
    $(sdx[0].children[0].children).map(function (x) {
        $(c).append('<option data-op="' + this.text + '"  value=' + x + '">' + this.text + '</option>')
    })
    $(sdx).map(function (x) {
        $(a).append('<option data-op="' + this.text + '"  value="' + x + '">' + this.text + '</option>')
    })
    var sd_iux = ""; //市
    sd_iux = sdx[0].children;
    $(a).on("change", function () {
        var mh = $(this).val();
        $(b).empty()
        $(c).empty()
        $(b).append('<option >请选择</option>')
        $(c).append('<option >请选择</option>')
        sd_iux = sdx[mh].children;
        $(sdx[mh].children).map(function (x) {
            $(b).append('<option data-op="' + this.text + '"  value="' + x + '">' + this.text + '</option>')
        })
    })
    var q_y = ""
    $(b).on("change", function () {
        var mh = $(this).val();
        $(c).empty();
        $(c).append('<option >请选择</option>')
        $(sd_iux[mh].children).map(function (x) {
            $(c).append('<option data-op="' + this.text + '"  value="' + x + '">' + this.text + '</option>')
        })
    })
}
