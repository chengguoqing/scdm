//红包
var km = new Vue({
    el: '#hongbao',
    data: {
        hongbao: ["", "", "", "", "", "", ""]
    },
    methods: {

    },
    mounted() {}
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
    for(var i=0;i<10;i++){
        km.hongbao.push('')
    }
             this.endPullupToRefresh(false)//可以加载数据
}
