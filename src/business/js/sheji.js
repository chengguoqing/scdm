let dsfds_s = {}
chg_a(cityData3, ".sd_ii_a", ".sd_ii_b", ".sd_ii_c")



let img_ar = []
$(function () { 
    $(".sd_dsf_dsf_df.am").map(function () {
        for (let i = 0; i < 24; i++) {
            if (i < 10) {
                i = '0' + i
            }
            $(this).append(`<option>${i}:00</option>`)
        }

    })



    $("#tyiyte_sfgx").on("blur", function () { //店铺名称
        let df_dsd = $(this).val()
        if (!df_dsd) {
            return
        }
        dsfds_s.tiws = $(this).val()
        $("#jhggs_a").text($(this).val())
        sddf_ds()
    })
    $("#tyiyte_sfgx_b").on("blur", function () { //店铺全称
        let df_dsd = $(this).val()
        if (!df_dsd) {
            return
        }
        dsfds_s.tiws_b = $(this).val()
        $("#jhggs_b").text($(this).val())
        sddf_ds()
    })

    $(".map_sd_sfgx").on("click", function () {

        $(".sd_sd_sfg_xdsgxc").addClass("show")
    })

    $(".sd_df_dfg_dfxc.ar").on("click", function () { //地图
        $("#ssd_ooie").click()
    })

    /*地图搜索按钮触发*/
    $(".sd_sd_sdf_sfgxc button").on("click", function () {

        dsfds_s.tiws_d = localStorage.dizhi
        $(".map_sd_sfgx").val(localStorage.dizhi)
        $("#jhggs_d").text(localStorage.dizhi)
        sddf_ds()
        $(".sd_sd_sfg_xdsgxc").removeClass("show")

    })
    $(".dsfs_df_sfgx").on("click", function () { //弹出层叉叉
        $(".sd_sd_sfg_xdsgxc").removeClass("show")
    })

    /*营业时间*/
    $(".sd_dsf_dsf_df.am").on("change", function () {
        let df_df = $(".sd_dsf_dsf_df.aa").val() + "~" + $(".sd_dsf_dsf_df.ab").val()
        dsfds_s.tiws_e = df_df
        $("#jhggs_e").text(df_df)
        sddf_ds()
    })
    /*  电话*/
    $("#tyiyte_sfgx_f").on("blur", function () {
        let df_dsd = $(this).val()
        if (!df_dsd) {
            return
        }
        dsfds_s.tiws_f = $(this).val()
        $("#jhggs_f").text($(this).val())
        sddf_ds()
    })
    /*视频*/
    $("#tyiyte_sfgx_g").on("blur", function () {
        let df_dsd = $(this).val()
        dsfds_s.tiws_g = $(this).val()
        $("#jhggs_g").text($(this).val())
        sddf_ds() 
    })

    /* 照片展示按钮触发*/
    $("#dsf_sd_sfggx").on("click", function () {
        $("#ssd_ooie_sdfgx").click()
    })

    $("body").on("click", ".dfg_sf_Sf", function () {
        img_ar.splice($(this).parents(".sd_df_dfg_dfxc").index(), 1)
        $(this).parents(".sd_df_dfg_dfxc").remove()
        dsfds_s.tiws_h = img_ar
        sdf(img_ar)
        sddf_ds()
    })

})

function sdf(dfs) {
    $(".sd_sf_sfgx").hide()
    $(".sdf_sdf_sfgxx").addClass("show")
    $(".sdf_sdf_sfgxx span.sd_Sd_sfgx").empty()
    dfs.map(function (a, b) {
        $(".sdf_sdf_sfgxx span.sd_Sd_sfgx").append(`<img src="${a}" data-preview-src="" data-preview-group="1">`)
    })
    $(".df_xdfgx").text(dfs.length)
}

function sddf_ds() {
    localStorage.dsfds_s = JSON.stringify(dsfds_s)
    /* let uyts_s = "moban/门店模板.html?dhgs?=" + new Date().getDate()
     $(".sd_sfd_dggxc").attr("src", uyts_s)*/
}

function logo_df() {
    var file = document.querySelector('#ssd_ooie').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        $(".sd_df_dfg_dfxc.ar img").attr("src", reader.result)
        /*  dsfds_s.tiws_c = reader.result*/
        $(".logo_ddf_fg").addClass("act").find("img").attr("src", reader.result)


        sddf_ds()
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        $(".sd_df_dfg_dfxc.ar img").attr("src", "")
        dsfds_s.tiws_c = ""
        sddf_ds()
    }

}

function zaopian() {
    var file = document.querySelector('#ssd_ooie_sdfgx').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        if ($(".sd_df_dfg_dfxc.act").length <= 9) {
            let ds_df = ` <div class="sd_df_dfg_dfxc we act" >
                                                <i class="fa fa-close dfg_sf_Sf red fz24"></i>
                                            <span class="fz40 dsf_dsd_sf zc">+</span>
                                            <img src="${reader.result}">
                                            <p class="sd_tgihg_sd">更换</p>
                                        </div>`
            $("#dsf_sd_sfggx").before(ds_df)
            img_ar.push(reader.result)
            dsfds_s.tiws_h = img_ar
            sdf(img_ar)
            sddf_ds()
        }

    }
    if (file) {
        reader.readAsDataURL(file);
    } else {


    }
}

function codeAddress() {
    var address = document.getElementById("address").value;
    //通过getLocation();方法获取位置信息值
    geocoder.getLocation(address);
}
