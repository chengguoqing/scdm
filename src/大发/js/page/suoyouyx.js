//所有游戏
var km = new Vue({
    el: '#suoyouyx',
    data: {
        caidan: [{ 
            name: "所有游戏",
            id: 0,
            url: "youxilist.html"
            }, {
            name: "真人游戏",
            id: 1,
            url: "youxilist.html"
            }, {
            name: "电子游戏",
            id: 2,
            url: "youxilist.html"
            }, {
            name: "PT老虎机",
            id: 3,
            url: "youxilist.html"
            }, {
            name: "MG老虎机",
            id: 4,
            url: "youxilist.html"
            }],
        _self: ""
    },
    methods: {

    },
    mounted() { 
        var th=this
        mui.plusReady(function () {
            th._self = plus.webview.currentWebview();
            var sd_dsd = []
            th.caidan.map(function (a) {
                var sd_sff = {}
                sd_sff.id = a.url + "?id=" + a.id
                sd_sff.url = a.url
                sd_sff.extras = {
                    chanshu: a.id
                }
                sd_dsd.push(sd_sff)
            })

            var group = new webviewGroup(th._self.id, {
                items: sd_dsd,
                onChange: function (obj) {
                    var c = document.querySelector(".mui-control-item.mui-active");
                    if (c) {
                        c.classList.remove("mui-active");
                    }
                    var target = document.querySelector(".mui-control-item:nth-child(" + (parseInt(obj.index) + 1) + ")");
                    target.classList.add("mui-active");
                }
            }, 140, 0);
            mui(".mui-segmented-control").on("tap", ".mui-control-item", function (e) {
                var wid = this.getAttribute("data-wid");
                group.switchTab(wid);
            });

        })
    }
})
