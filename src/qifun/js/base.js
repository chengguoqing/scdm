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
var player = new prismplayer({
    id: "J_prismPlayer", // 容器id
    source: "", // 视频地址
    autoplay: false, //自动播放：否
    width: "100%", // 播放器宽度
    height: "453px", // 播放器高度
    skinLayout: [{
            "name": "bigPlayButton",
            "align": "blabs",
            "x": 30,
            "y": 80
            },
        {
            "name": "controlBar",
            "align": "blabs",
            "x": 0,
            "y": 0,
            "children": [{
                    "name": "progress",
                    "align": "tlabs",
                    "x": 0,
                    "y": 0
                    },
                {
                    "name": "playButton",
                    "align": "tl",
                    "x": 15,
                    "y": 26
                    },
                {
                    "name": "timeDisplay",
                    "align": "tl",
                    "x": 10,
                    "y": 24
                    }]
            }]
});
$(function () {

    //    视频弹出层的叉叉按钮触发
    $(".close_icon_sd").on("click", function () {
        player.pause()
        $(".videk_sdf").removeClass("show")
        $(".prism-cover").css({
            "display": "block"
        })
    })
    //    头部的视频播放按钮触发
    $(".statr_vidure,.spiyuy_s").on("click", function () {
        let poster = $(this).attr("data-poster"), //封面
            src = $(this).attr("data-src"); //视频地址
        $(".videk_sdf").addClass("show")
        player.loadByUrl(src)
        $(".prism-cover").css({
            "background-image": 'url(' + poster + ')'
        })
    })
    $(".page_diuyz_s").on("click", function () {
        $(this).find(".f_i").toggleClass("act")
    })
})