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
        var th = this

        mui(".mui-segmented-control").on("tap", ".mui-control-item", function (e) {
            var wid = this.getAttribute("data-wid");
            alert("id="+wid)
        });


    }
})
