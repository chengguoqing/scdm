//我的留言
var km = new Vue({
    el: '#liuyan',
    data: {
        liuyan: [
            {
                type: "投诉",
                time: "2017-10-19 15:31:02",
                title: "标题标题标题标题",
                text: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
            }, {
                type: "投诉",
                time: "2017-10-19 15:31:02",
                title: "标题标题标题标题",
                text: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
            }, {
                type: "投诉",
                time: "2017-10-19 15:31:02",
                title: "标题标题标题标题",
                text: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
            }, {
                type: "投诉",
                time: "2017-10-19 15:31:02",
                title: "标题标题标题标题",
                text: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
            }, {
                type: "投诉",
                time: "2017-10-19 15:31:02",
                title: "标题标题标题标题",
                text: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
            }, {
                type: "投诉",
                time: "2017-10-19 15:31:02",
                title: "标题标题标题标题",
                text: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
            }
        ],
        liu_le: [
            {
                name_s: "留言",
                cls: "act"
            },
            {
                name_s: "投诉",
                cls: ""
            }, {
                name_s: "询问",
                cls: ""
            }, {
                name_s: "售后",
                cls: ""
            }, {
                name_s: "求购",
                cls: ""
            },
        ],
        liuyaner: {
            zhuti: "", //留言主题
            neilong: "" //留言内容
        }
    },
    methods: {
        leixin_s(idx) { //留言类型切换
            this.liu_le.map(function (a) {
                a.cls = ""
            })
            this.liu_le[idx].cls = "act"

        },
        fabuliuyan() { //发布留言
            if (!this.liuyaner.zhuti) {
                mui.toast('请输入留言主题');
                return
            }
            if (!this.liuyaner.neilong) {
                mui.toast('请输入留言内容');
                return
            }
             mui('#share_pp').popover('toggle');
            console.log("验证完毕")
        }
    },
    mounted() {



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
    let liuyan = km.liuyan[0]
    for (var i = 0; i < 10; i++) {
        km.liuyan.push(liuyan)
    }
    this.endPullupToRefresh(false)
}
