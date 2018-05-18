$(function () {
    mui.init({
        pullRefresh: {
            container: '#pullrefresh',
            up: {
                contentrefresh: '正在加载...',
                callback: pullupRefresh
            }
        }
    });
})


function pullupRefresh() {//下拉刷新
    for (var i = 0; i < 10; i++) {
        $(".qiche_s").append(`<li>
                        <p>
                            <img src="img/leike.png" class="lo_sdsert">
                        </p>
                        <p class="fz16 z3  mt5">
                            免费地图升级
                        </p>
                        <p class="dianer z9 mt5">
                            介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                        </p>
                        <p class="mt10">
                            <img src="img/qcihe.jpg" class="w100">
                        </p>
                    </li>`)
    }



    this.endPullupToRefresh(false)
}
