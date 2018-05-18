$(function () {


 

    $(".stat_icon").on("click", function () {
        let poster = $(this).attr("data-poster"), //封面
            src = $(this).attr("data-src"); //视频地址
        $(".videk_sdf").addClass("show")
        player.loadByUrl(src)
        $(".prism-cover").css({
            "background-image": 'url(' + poster + ')'
        })



    })

    //        视频和截图切换
    $(".dsf_s_sdfgx a").hover(function () {
        var idx = $(this).index()
        $(".dsf_s_sdfgx a").addClass("zc")
        $(this).removeClass("zc")
        $(".vide_img_q").removeClass("show").eq(idx).addClass("show")
    })

    
    $(".d_d_ngf_sd a").hover(function(){
        var idx=$(this).index()
        $(".d_d_ngf_sd a").removeClass("act").eq(idx).addClass("act")
        $(".df_d_wd_win").removeClass("show").eq(idx).addClass("show")
    })



})
