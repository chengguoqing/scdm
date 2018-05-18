mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        up: {
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    }
});


var km = new Vue({
    el: '#zhanghumx',
    data: {
        sd_sdf: ['', '', '', '', '', '', '', '', '', '']
    },
    methods: {

    },
    mounted() {}
})

function pullupRefresh() {
    for (var i = 0; i < 10; i++) {
        km.sd_sdf.push('')
    }
    this.endPullupToRefresh(false)

}
