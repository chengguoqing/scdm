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
    $(".dsf_iuy_sdr").on("click", function () {

        $(".dsf_uy_sd").toggleClass("show")
    })
    $(".dfs_d_dertx").on("click", function () {
        $(".df_juyg_s_sd").addClass("show")
        $(".df_juyg_s_sd input").focus()
    })
    $(".df_juyg_s_sd input").on("blur", function () {
        $(".df_juyg_s_sd").removeClass("show")
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".duo_icond").addClass("show")
        } else {
            $(".duo_icond").removeClass("show")
        }
    })
    $(".duo_icond").on("click",function(){
         $("html,body").animate({scrollTop:0},200);
    })
    $(".df_ut_ddtxc a").on("click",function(){
            $(".df_ut_ddtxc a").removeClass("act")
        $(this).addClass("act")
    })

})








function chg_a(x, a, b, c) {
    var sdx = x
    $(sdx[0].children).map(function (x) {
        $(b).append('<option value="' + x + '">' + this.text + '</option>')
    })
    $(sdx[0].children[0].children).map(function (x) {
        $(c).append('<option value=' + x + '">' + this.text + '</option>')
    })
    $(sdx).map(function (x) {
        $(a).append('<option value="' + x + '">' + this.text + '</option>')
    })
    var sd_iux = ""; //市
    sd_iux = sdx[0].children;
    $(a).on("change", function () {
        var mh = $(this).val();
        $(b).empty().addClass("show")
        $(c).empty()
        $(b).append('<option >请选择</option>')
        $(c).append('<option >请选择</option>')
        sd_iux = sdx[mh].children;
        $(sdx[mh].children).map(function (x) {
            $(b).append('<option value="' + x + '">' + this.text + '</option>')
        })
    })
    var q_y = ""
    $(b).on("change", function () {
        var mh = $(this).val();
        $(c).empty().addClass("show");
        $(c).append('<option >请选择</option>')
        $(sd_iux[mh].children).map(function (x) {
            $(c).append('<option value="' + x + '">' + this.text + '</option>')
        })
    })
}
