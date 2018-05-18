var km = new Vue({
    el: '#lishi',
    data: {
        dsfd_a: [ //存款记录
            {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: "在线支付 3500",
                tindahao: "SN1712301072970",
                zhifu: "未支付"
            }
        ],
        dsfd_b: [ //转账记录
            {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }
        ],
        dsfd_c: [ //提现记录
            {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "未成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }, {
                time: "2017/12/30 04:41:59",
                zaixia: " 平台 KG 转出 103",
                zhifu: "成功"
            }
        ]

    },
    methods: {

    },
    mounted() {
        $(".mui-control-item").on("tap", function () {
            mui('#pullrefresh').pullRefresh().scrollTo(0, 0, 100);
        })
    }
})



mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        up: {
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    }
});

function pullupRefresh() {
    var s_sdrx = $(".mui-control-item.mui-active").index() //0存款 1转账  2提现 3投注

    if (s_sdrx == 0) {
        da_sde = km.dsfd_a[0]
    }
    if (s_sdrx == 1) {
        da_sde = km.dsfd_b[0]
    }
    if (s_sdrx == 2) {
        da_sde = km.dsfd_c[0]
    }
    for (var i = 0; i < 10; i++) {
        if (s_sdrx == 0) {
            km.dsfd_a.push(da_sde)
        }
        if (s_sdrx == 1) {
            km.dsfd_b.push(da_sde)
        }
        if (s_sdrx == 2) {
            km.dsfd_c.push(da_sde)
        }

    }
    this.endPullupToRefresh(false)
}
