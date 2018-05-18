$(function () {

    //    图片验证码码点击
    $(".tuya_sr").on("click", function () {
        var img_s = "http://uc.vgame.com/verify/code" //图片验证码地址
        img_s += "?time=" + new Date().getTime()
        $(this).attr("src", img_s)
    })
    //    获取验证码点击
    var jhgg = true,
        opu = 60
    $(".huoquYas").on("click", function () {
        var phone = $("#user_phone").val().trim()
        if (!yanza.phone(phone)) {
            $("#user_phone").focus()
            mui.toast('手机号输入错误');
            return
        }
        var th = this

        if (jhgg == true) {
            jhgg = false
            $(this).text(opu-- + "s后重新获取").addClass("act")
            var sdf_wer = setInterval(function () {
                $(th).text((opu--) + "s后重新获取")
                if (opu < 0) {
                    $(th).text("获取验证码").removeClass("act")
                    jhgg = true
                    opu = 59
                    clearTimeout(sdf_wer)
                }
            }, 1000)
        }



    })

    //    完成注册按钮触发

    $(".submit_btnsd").on("click", function () {
        var user_name = $("#user_name").val().trim(), //姓名
            user_phone = $("#user_phone").val().trim(), //手机号
            tuxing = $("#tuxing").val().trim(), //图形验证码
            duanx = $("#duanx").val().trim() //短信验证码
        if (!user_name) {
            mui.toast('请输入您的姓名');
            $("#user_name").focus()
            return
        }
        if (!yanza.phone(user_phone)) {
            $("#user_phone").focus()
            mui.toast('手机号输入错误');
            return
        }
        if (!tuxing) {
            mui.toast('请输入图形验证码');
            $("#tuxing").focus()
            return
        }
        if (!duanx) {
            mui.toast('请输入短信验证码');
            $("#duanx").focus()
            return
        }
        console.log("验证完毕")
    })

})
