function pullupRefresh() {
	var a = km.df_sd_sd,
		b = this;
	setTimeout(function() {
		for(var c = 0; c < 8; c++) km.df_sd_sd.push(a[0]);
		b.endPullupToRefresh(!1)
	}, 3e3)
}

function pulldownRefresh() {
	var a = km.df_sd_sd;
	setTimeout(function() {
		for(var b = 0; b < 8; b++) km.df_sd_sd.push(a[0]);
		mui("#pullrefresh").pullRefresh().endPulldownToRefresh()
	}, 3e3)
}
var km = new Vue({
	el: "#ss_listd",
	data: {
		caidan: [{
			id: "0",
			name: "羽绒服"
		}, {
			id: "1",
			name: "棉衣"
		}, {
			id: "2",
			name: "毛呢大衣"
		}, {
			id: "3",
			name: "针织衫/毛衣/打底衫"
		}, {
			id: "4",
			name: "外套系列"
		}, {
			id: "5",
			name: "裤子系列"
		}, {
			id: "6",
			name: "马甲"
		}, {
			id: "7",
			name: "套装/套裙"
		}, {
			id: "8",
			name: "皮衣"
		}, {
			id: "9",
			name: "连衣裙"
		}, {
			id: "10",
			name: "风衣"
		}],
		sd_dsdf: [{
			id: 0,
			cls: "act",
			name: "最新"
		}, {
			id: 1,
			cls: "",
			name: "销量"
		}, {
			id: 2,
			cls: "",
			name: "更新"
		}, {
			id: 3,
			ty: "ab",
			cls: "",
			name: "价格"
		}],
		df_sd_sd: [{
			img: "http://m.flan1688.com/images/201711/thumb_img/3640_thumb_G_1511759598637.jpg",
			name: "2017【一露玛娜】时尚潮流羽绒棉长棉报",
			money: "89.90",
			ymoney: "99.99",
			num_s: 440,
			sd_sdf: "7LB77753"
		}, {
			img: "http://m.flan1688.com/images/201711/thumb_img/3031_thumb_G_1510611793322.jpg",
			name: "2017【卡曼罗】时尚潮流修身90绒轻薄白鸭毛羽绒服",
			money: "89.90",
			ymoney: "99.99",
			num_s: 440,
			sd_sdf: "7LB77753"
		}, {
			img: "http://m.flan1688.com/images/201712/thumb_img/3623_thumb_G_1512417745010.jpg",
			name: "2017【欧雅诗丹】时尚潮流带毛领加厚长棉衣",
			money: "89.90",
			ymoney: "99.99",
			num_s: 440,
			sd_sdf: "7LB77753"
		}, {
			img: "http://m.flan1688.com/images/201711/thumb_img/3621_thumb_G_1511666127713.jpg",
			name: "2️017【兴潮汇】时尚潮流带毛领加厚棉衣",
			money: "89.90",
			ymoney: "99.99",
			num_s: 440,
			sd_sdf: "7LB77753"
		}, {
			img: "http://m.flan1688.com/images/201711/thumb_img/3031_thumb_G_1510611793322.jpg",
			name: "2017【卡曼罗】时尚潮流修身90绒轻薄白鸭毛羽绒服",
			money: "89.90",
			ymoney: "99.99",
			num_s: 440,
			sd_sdf: "7LB77753"
		}, {
			img: "http://m.flan1688.com/images/201712/thumb_img/3623_thumb_G_1512417745010.jpg",
			name: "2017【欧雅诗丹】时尚潮流带毛领加厚长棉衣",
			money: "89.90",
			ymoney: "99.99",
			num_s: 440,
			sd_sdf: "7LB77753"
		}, {
			img: "http://m.flan1688.com/images/201711/thumb_img/3621_thumb_G_1511666127713.jpg",
			name: "2️017【兴潮汇】时尚潮流带毛领加厚棉衣",
			money: "89.90",
			ymoney: "99.99",
			num_s: 440,
			sd_sdf: "7LB77753"
		}],
		sd_iyd: ""
	},
	methods: {
		dsf_iy_s: function() {
			this.sd_iyd ? this.sd_iyd = "" : this.sd_iyd = "akoisd_sd"
		},
		sd_uiyd: function(a) {
			this.sd_dsdf.map(function(a) {
				a.cls = ""
			}), this.sd_dsdf[a].cls = "act", "ac" == this.sd_dsdf[a].ty && "价格" == this.sd_dsdf[a].name ? this.sd_dsdf[a].ty = "ab" : "价格" == this.sd_dsdf[a].name && (this.sd_dsdf[a].ty = "ac")
		}
	},
	mounted: function() {
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
		if(mui.os.ios) {
			document.querySelector("#pullrefresh").addEventListener("scroll", function(a) {
				var b
				if(mui.os.ios) {
					b = -a.detail.y;
				} else {
					var sd_sdfxd = document.getElementById("pullrefresh")
					b = sd_sdfxd.scrollTop //获取滚到的距离
				}
				b >= 150 ? document.getElementById("f_uty_er_drt").classList.add("act") : document.getElementById("f_uty_er_drt").classList.remove("act"), console.log(b)
			})
		}
	}
});