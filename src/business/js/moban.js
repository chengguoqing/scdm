$(function () {
    var dsfds_s = localStorage.dsfds_s
    var sd_sd = $.parseJSON(dsfds_s)
    $("#jhggs_a").text(sd_sd.tiws)
    $("#jhggs_b").text(sd_sd.tiws_b)
    if (sd_sd.tiws_c) {
        $(".logo_ddf_fg").addClass("act").find("img").attr("src", sd_sd.tiws_c)
    } else {
        $(".logo_ddf_fg").removeClass("act")
    }
    if (sd_sd.tiws_d) {
        $("#jhggs_d").text(sd_sd.tiws_d)
    }
    if (sd_sd.tiws_e) {
        $("#jhggs_e").text(sd_sd.tiws_e)
    }
    if (sd_sd.tiws_f) {
        $("#jhggs_f").text(sd_sd.tiws_f)
    }
    if (sd_sd.tiws_g) {
        $(".sd_sd_sdfggxx").hide()
        $(".J_prismPlayer").addClass("show")

        var player = new prismplayer({
            id: "J_prismPlayer", // 容器id
            source: sd_sd.tiws_g, // 视频地址
            autoplay: true, //自动播放：否
            width: "100%", // 播放器宽度
            height: "200px" // 播放器高度
        });
    } else {
        $(".sd_sd_sdfggxx").show()
        $(".J_prismPlayer").removeClass("show")
    }
    if (sd_sd.tiws_h&&sd_sd.tiws_h.length>0) {
        $(".sd_sf_sfgx").hide()
        $(".sdf_sdf_sfgxx").addClass("show")
        $(".sdf_sdf_sfgxx span.sd_Sd_sfgx").empty()
        sd_sd.tiws_h.map(function (a, b) {
            console.log(a)
            $(".sdf_sdf_sfgxx span.sd_Sd_sfgx").append(`<img src="${a}" data-preview-src="" data-preview-group="1">`)
        })
        $(".df_xdfgx").text(sd_sd.tiws_h.length)

    } else {
        $(".sd_sf_sfgx").show()
        $(".sdf_sdf_sfgxx").removeClass("show")
    }





})
