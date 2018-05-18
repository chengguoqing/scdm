$(function () {
    //添加新的车辆
    $(".tadd_bsd.aa").on("click", function () {
        $(".cheliang_s.aa").append(`
            <section class="mt10 cheliang_row">
                <p class="z3">绑定车辆${$(".cheliang_s.aa .cheliang_row").length+1}</p>
                <section class="rou_rom mt10">
                    <p>
                        <input type="text" placeholder="车牌号" value="" class="cph">
                    </p>
                    <p>
                        <input type="text" placeholder="车型" value="" class="chexing">
                    </p>
                    <p>
                        <input type="text" placeholder="车主姓名" value=""  class="chezhu">
                    </p>
                </section>
                <p class="xinx_btn_s">
                    <a>是</a>
                    <a>否</a>
                </p>

            </section>`)
        chesd(1)
    })
    //    添加经销商

    $(".tadd_bsd.ab").on("click", function () {
        $(".cheliang_s.ab").append(`       <section class="mt10 cheliang_row">
                <p class="z3">经销商1</p>
                <section class="rou_rom mt10">
                    <p>
                        <input type="text" placeholder="请填写经销商" value=""  class="jxs">
                    </p>
                    
                     <p class="xinx_btn_s">
                    <a>是</a>
                    <a>否</a>
                </p>
                </section>
            </section>`)
        chesd(2)
    })

    //    是按钮触发
    $("body").on("click", ".cheliang_s.aa .xinx_btn_s a:nth-child(1)", function () {
        var cheliang_row = $(this).parents(".cheliang_row"),
            cph = $(cheliang_row).find(".cph").val().trim(), //车牌号
            chexing = $(cheliang_row).find(".chexing").val().trim(), //车型
            chezhu = $(cheliang_row).find(".chezhu").val().trim()
        if (!cph) {
            mui.toast('请输入车牌号')
            $(cheliang_row).find(".cph").focus()
            return
        }
        if (!chexing) {
            mui.toast('请输入车型')
            $(cheliang_row).find(".chexing").focus()
            return
        }
        if (!chezhu) {
            $(cheliang_row).find(".chezhu").focus()
            mui.toast('请输入车主姓名')
            return
        }

    })

    //    经销商 是按钮触发
    $("body").on("click", ".cheliang_s.ab .xinx_btn_s a:nth-child(1)", function () {
        var cheliang_row = $(this).parents(".cheliang_row"),
            jxs = $(cheliang_row).find(".jxs").val().trim() //经销商
        if (!jxs) {
            $(cheliang_row).find(".jxs").focus()
            mui.toast('请输入经销商')
            return
        }

    })
    //    否按钮触发
    $("body").on("click", ".xinx_btn_s a:nth-child(2)", function () {
        if ($(".cheliang_s.aa .cheliang_row").length > 1 || $(".cheliang_s.ab .cheliang_row").length > 1) {
            $(this).parents(".cheliang_row").remove()
            chesd(1)
            chesd(2)
        }
    })


    //    提交信息按钮触发
    $(".tijiao").on("click", function () {
        var cheliang_row_a=$(".cheliang_s .cheliang_row")
        for(var i=0;i<$(cheliang_row_a).find("input").length;i++){
            if(!$(cheliang_row_a).find("input").eq(i).val()){
                $(cheliang_row_a).find("input").eq(i).focus()
                 mui.toast( $(cheliang_row_a).find("input").eq(i).attr("placeholder"))
                return
            }
        }
   
    })

})



function chesd(ty) {
    if (ty == 1) {
        $(".cheliang_s.aa .cheliang_row").map(function (a) {
            $(this).find("p.z3").text("绑定车辆" + (a + 1))
        })
    } else if (ty == 2) {
        $(".cheliang_s.ab .cheliang_row").map(function (a) {
            $(this).find("p.z3").text("经销商" + (a + 1))
        })
    }

}
