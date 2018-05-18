//游戏列表
var km = new Vue({
    el: '#youxilist',
    data: {
        youxidata: [
            {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }, {
                type: "OG",
                img: "img/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png",
                name: "东方厅（OG）",
                jiesao: "这是一款赚钱的游戏"
            }
        ]
    },
    methods: {

    },
    mounted() {
        mui.init({
            pullRefresh: {
                container: '#pullrefresh',
                up: {
                    contentrefresh: '正在加载...',
                    callback: pullupRefresh
                }
            }
        });
    }
})


function pullupRefresh() { //下拉加载触发
    var sd_sdrf = km.youxidata[0]
    for (var i = 0; i < 10; i++) {
        km.youxidata.push(sd_sdrf)
    }
    this.endPullupToRefresh(false) //false 还有数据  true没有数据了
}
