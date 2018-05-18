 $(function () {
     $("input").map(function () {
         $(this).val("")
     })
     $(".wesd_Sf_sfgxc").on("click", function () {
         $(this).find(".chshdf_sdff").toggleClass("act")
         if ($(this).find(".chshdf_sdff").hasClass("act")) {
             $(".dfg_dfggxc").addClass("act")
         } else {
             $(".dfg_dfggxc").removeClass("act")
         }
     })

     $("#youxiangsd").on("blur", function () {
         var sd_df = $(this).val(),
             sd_dfsd = $(this)
         dsfsd(!s.mail(sd_df), $(this), "邮箱格式错误")
         if (s.mail(sd_df)) {
             ajax("app/BusinessCenter/check_email_exist", {
                 email: sd_df
             }, function (data) {
                 console.log(data.exist == 0)
                 dsfsd(data.exist != 0, sd_dfsd, data.message)
                 if (data.exist != 0) {
                     return
                 }
                 console.log(1)
             })
         }


     })
     $("#paw_a").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(sd_df.length < 8, $(this), "密码长度不足8位")
     })
     $("#paw_b").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(sd_df.length < 8, $(this), "密码长度不足8位")
     })

     $("#paw_b").on("blur", function () {
         var sd_df = $(this).val(),
             sd_sdf = $("#paw_a").val()
         dsfsd(sd_df != sd_sdf, $(this), "两次输入的密码不一致")
     })
     $("#yamzdf").on("blur", function () {
         var sd_df = $(this).val(),
             sd_sff = $(this)
         dsfsd(sd_df.length < 3, $(this), "验证码错误")
         if (sd_df.length > 3) {
             ajax("app/BusinessCenter/check_rd_code", {
                 code: sd_df
             }, function (data) {
                 dsfsd(data.opt != 1, $(sd_sff), data.message)

                 if (data.opt != 1) {

                     return;
                 }
                 console.log(data)
             })
         }
     })


     /*换一张按钮触发*/
     $(".hyisd_sdfx").on("click", function () {
         $(this).prev().attr("src", url_sd + "app/BusinessCenter/rd_code?t=" + new Date().getTime())
     })
     $("body").on("click", ".dfg_dfggxc.act .sd_df_df", function () {
         for (var i = 0; i < $(".sd_df_dgf_fg li.bitian").length; i++) {
             if (!$(".sd_df_dgf_fg li.bitian").eq(i).hasClass("amk")) {
                 return;
             }
         }


         $('#registssdf').submit(function () {
             $(this).ajaxSubmit(function () {
                 localStorage.user_em = sd_sd.email
                 window.location.href = "active_email.html"
             });
             return false; //阻止表单默认提交
         });

         /*let sd_sd = {}
         sd_sd.email = $("#youxiangsd").val()
         sd_sd.password = $("#paw_b").val()
         sd_sd.code = $("#yamzdf").val()
         
         ajax("app/BusinessCenter/regist", sd_sd, function (data) {
             localStorage.user_em = sd_sd.email
             window.location.href = "active_email.html"
         })*/
     })

 })
