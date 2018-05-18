 $(function () {

     /*上传按钮触发*/
     $(".df_d_sfgxccx").on("click", function () {
         $(".sd_sdf_sf_a").click()
     })

     $("#zihaosd_sf").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(!sd_df, $(this), "字号名称不能为空")
     })

     $("#zcha_sdgx").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(!sd_df, $(this), "请输入正确的营业执照注册号")
     })

     $("#qiyemsdf").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(!sd_df, $(this), "企业名称不能为空")
     })
     
       $("#yinyezh").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(sd_df.length<15, $(this), "请输入正确的营业执照注册号")
     })
     
     
     $("#fuzren").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(!sd_df, $(this), "负者人不能为空")
     })
     $("#sfs_sfgx").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(!s.car_t(sd_df), $(this), "身份证号码格式错误")
     })

     $("#phone_a").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(!s.phone(sd_df), $(this), "手机号号码格式错误")
         if (s.phone(sd_df)) {
             $(this).next().addClass("act")
         } else {
             $(this).next().removeClass("act")
         }
     })
     $("#ds_sdggx").on("blur", function () {
         var sd_df = $(this).val()
         dsfsd(!sd_df, $(this), "短信验证码不能为空")
     })

 })





 /*file本地浏览图片*/
 function previewFile() {
     var file = document.querySelector('#ssd_ooie').files[0];
     var reader = new FileReader();
     reader.onloadend = function () {
         $(".xdsfdsfdxcvfd").attr("src", reader.result).addClass("show")
         $(".df_d_sfgxccx").text("重新上传")
     }
     if (file) {
         reader.readAsDataURL(file);
     } else {
         $(".xdsfdsfdxcvfd").attr("src", "").removeClass("show")
         $(".df_d_sfgxccx").text("上传")
     }
 }
