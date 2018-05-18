'use strict';

mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
var self = {};
var qiuy_s = {};
var picker_f = new mui.PopPicker({
	"layer": [3]
});

var km = new Vue({
	el: '#lease',
	data: {
		qiu_a: [],
		sd_dsds: "",
		tite: "",
		sd_sddr: ""
	},
	methods: {
		sd_ddf: function sd_ddf() {
			chug(4, this.sd_dsds);
		},
		tuausdf: function tuausdf(i_d) {
			mui.openWindow({
				url: 'lease_details.html',
				id: "lease_details",
				show: {
					aniShow: "pop-in", //动画
					duration: 500 //持续时间
				},
				extras: {
					"i_d": i_d
				}
			});
		},
		fensd_sdf: function fensd_sdf() {
			var sd_sdff = this;
			picker_f.show(function (rl) {
				var sd_sdrf = "";
				if (rl[0].text) {
					sd_sdrf = rl[0].value;
				}
				if (rl[1].text) {
					sd_sdrf = rl[1].value;
				}
				if (rl[2].text) {
					sd_sdrf = rl[2].value;
				}
				qiuy_s.father_id = sd_sdrf;
				sd_sdff.qiu_a = [];
				indt(sd_sdff, qiuy_s);
			});
		}
	},
	created: function created() {
		var sd_ssd = this;
		mui.plusReady(function () {
			self = plus.webview.currentWebview();
			if (self.idx == 1) {
				picker_f.setData(chuzhu);
			} else if (self.idx == 3) {
				picker_f.setData(chushou);
			} else if (self.idx == 5) {
				picker_f.setData(yunshu);
			} else if (self.idx == 7) {
				picker_f.setData(my_we);
			}
			sd_ssd.tite = self.tile;
			sd_ssd.sd_sddr = self.lie;
			qiuy_s.Services = "goodcatalog.more";
			qiuy_s.h_display = 1;
			qiuy_s.type = self.idx;
			qiuy_s.father_id = 0;
			qiuy_s.page = 1;
			qiuy_s.father_id = self.lei;
			indt(sd_ssd, qiuy_s);

			document.getElementById("strName").addEventListener("keydown", function (e) {
				if (13 == e.keyCode) {
					//点击了“搜索” 
					document.activeElement.blur(); //隐藏软键盘
				}
			}, false);
		});
	}

});

mui.ready(function () {
	mui(".gff_sd").on("tap", ".dsfdf_d", function () {
		var sd_d = document.getElementsByClassName("dsfdf_d");
		mui.each(sd_d, function (index, item) {
			item.classList.remove("act");
		});
		this.classList.add("act");
		var sd_drfsd = parseInt(this.getAttribute("data-lk"));
		chug(sd_drfsd);
	});
});
//# sourceMappingURL=lease.js.map
