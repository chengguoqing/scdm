function cz($) {
    layer.open({
        type: 1,
        title: false, //不显示标题栏
        closeBtn: false, //不显示关闭按钮
        area: ['280px', '318px'], //宽高
        content: '<div class="sd_ut_sdf cen pt40 pm20 bgff"> <p class="z6 fz12 df_d_dfgc"> 您未办理会员或你的试用期已到期<br> 如需继续访问请办理会员服务 </p> <p class="mt20"> <img src="images/qc.png" class="df_wxddf"> </p> <p class="mt20 z6 fz12"> 微信扫码关注公众号 </p> <p class="mt40"> <button class="layui-btn layui-btn-normal layui-btn-small tihgs_d">办会员</button> <button class="layui-btn layui-btn-primary layui-btn-small tihgs_d">退出</button> </p> </div>',
        success: function (layero) {
            var btn = layero.find('.tihgs_d');
            $(btn).eq(0).on("click", function () {
                layer.closeAll();
                window.location.href = "充值会员.html"
            })
            $(btn).eq(1).on("click", function () {
                layer.closeAll();
            })
        }
    });
}


function chg_a(x, a, b, c, $, form) {
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
    form.on('select(sd_ii_a)', function (data) {
        var mh = data.value;
        $(b).empty()
        $(c).empty()
        $(b).append('<option >请选择</option>')
        $(c).append('<option >请选择</option>')
        sd_iux = sdx[mh].children;
        $(sdx[mh].children).map(function (x) {
            $(b).append('<option value="' + x + '">' + this.text + '</option>')
        })
        form.render('select')
    })
    var q_y = ""
    form.on('select(sd_ii_b)', function (data) {
        var mh = data.value;
        $(c).empty();
        $(c).append('<option >请选择</option>')
        $(sd_iux[mh].children).map(function (x) {
            $(c).append('<option value="' + x + '">' + this.text + '</option>')
        })
        form.render('select')
    })
    form.render('select')

}
