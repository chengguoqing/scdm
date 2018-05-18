var km = new Vue({
    el: '#wdsc',
    data: {
        df_sd_sd: [{
            id:"0",
            img: "http://m.flan1688.com/images/201711/thumb_img/3640_thumb_G_1511759598637.jpg",
            name: "2017【一露玛娜】时尚潮流羽绒棉长棉报",
            money: "89.90",
            ymoney: "99.99",
            num_s: 440,
            sd_sdf: "7LB77753"
		}, {
                    id:"1",
            img: "http://m.flan1688.com/images/201711/thumb_img/3031_thumb_G_1510611793322.jpg",
            name: "2017【卡曼罗】时尚潮流修身90绒轻薄白鸭毛羽绒服",
            money: "89.90",
            ymoney: "99.99",
            num_s: 440,
            sd_sdf: "7LB77753" 
		}, {
                    id:"2",
            img: "http://m.flan1688.com/images/201712/thumb_img/3623_thumb_G_1512417745010.jpg",
            name: "2017【欧雅诗丹】时尚潮流带毛领加厚长棉衣",
            money: "89.90",
            ymoney: "99.99",
            num_s: 440,
            sd_sdf: "7LB77753"
		}, {
                    id:"3",
            img: "http://m.flan1688.com/images/201711/thumb_img/3621_thumb_G_1511666127713.jpg",
            name: "2️017【兴潮汇】时尚潮流带毛领加厚棉衣",
            money: "89.90",
            ymoney: "99.99",
            num_s: 440,
            sd_sdf: "7LB77753"
		}, {
                    id:"4",
            img: "http://m.flan1688.com/images/201711/thumb_img/3031_thumb_G_1510611793322.jpg",
            name: "2017【卡曼罗】时尚潮流修身90绒轻薄白鸭毛羽绒服",
            money: "89.90",
            ymoney: "99.99",
            num_s: 440,
            sd_sdf: "7LB77753"
		}, {
                    id:"5",
            img: "http://m.flan1688.com/images/201712/thumb_img/3623_thumb_G_1512417745010.jpg",
            name: "2017【欧雅诗丹】时尚潮流带毛领加厚长棉衣",
            money: "89.90",
            ymoney: "99.99",
            num_s: 440,
            sd_sdf: "7LB77753"
		}, {
                    id:"6",
            img: "http://m.flan1688.com/images/201711/thumb_img/3621_thumb_G_1511666127713.jpg",
            name: "2️017【兴潮汇】时尚潮流带毛领加厚棉衣",
            money: "89.90",
            ymoney: "99.99",
            num_s: 440,
            sd_sdf: "7LB77753"
		}]
    },
    methods: {
        scc(id){
            alert("删除的id="+id)
        }
    },
    mounted() {
        mui.init({
            pullRefresh: {
                container: "#pullrefresh",
                down: {
                    callback: pulldownRefresh
                },
                up: {
                    contentrefresh: "正在加载...",
                    callback: pullupRefresh
                }
            }
        })
    }
})


function pullupRefresh() {
    var a = km.df_sd_sd,
        b = this;
    setTimeout(function () {
        for (var c = 0; c < 8; c++) km.df_sd_sd.push(a[0]);
        b.endPullupToRefresh(!1)
    }, 3e3)
}

function pulldownRefresh() {
    var a = km.df_sd_sd;
    setTimeout(function () {
        for (var b = 0; b < 8; b++) km.df_sd_sd.push(a[0]);
        mui("#pullrefresh").pullRefresh().endPulldownToRefresh()
    }, 3e3)
}
