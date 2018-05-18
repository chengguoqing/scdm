/*推广*/
$(function () {
     $(".sd_df_dsf_gfgx").on("click", function () {
         $(this).find("input").focus()
     })
     $("body").on("click", ".wesd_df_dfgx i", function () {
         $(this).parent().remove()
     })
     $(".dsf_dsfggd").on("keyup", function () {
         var sd_df = $(".dsf_dsfggd").val()
         if (sd_df) {
             $(".dsf_df_df_dg").addClass("act")
         } else {
             $(".dsf_df_df_dg").removeClass("act")
         }
     })
     $("body").on("click", ".dsf_df_df_dg.act", function () {
         dsfs_d()
     })
     $('body').keypress(function (event) {
         if (event.which == 13) {
             dsfs_d()
         }
     });
     $(".dsfs_df_dggx").on("click", function () {
         $(".wesd_wdf_dggc").removeClass("show")
     })

     $(".sd_df_xdfgx").on("click", function () {
         $(".wesd_wdf_dggc.ab").addClass("show")
         $(".dsf_df_df_dg").removeClass("act")
     })

     $(".sdf_sdf_dgggxc").on("keyup", function () {
         var sd_df = $(this).val()
         if (sd_df) {
             $(".dsf_df_df_dg").addClass("act")
         } else {
             $(".dsf_df_df_dg").removeClass("act")
         }
     })

     $(".dsf_df_df_dg.aa").on("click", function () {
         $(".wesd_wdf_dggc").removeClass("show")
     })
     $(".ssd_df_dgf").on("click", function () {
         $(".dsf_df_df_dg").removeClass("act")
         $(".wesd_wdf_dggc.aa").addClass("show")
     })

 })


 function dsfs_d() {
     var sd_df = $(".dsf_dsfggd").val()

     if (sd_df && $(".wesd_df_dfgx").length < 10) {
         $(".dsf_dsfggd").before('<span class="wesd_df_dfgx yj4">' + sd_df + ' <i class="fa fa-close zc" ></i> </span>')
         $(".dsf_dsfggd").val("").focus()
         $(".dsf_df_df_dg").removeClass("act")
     }
 }
