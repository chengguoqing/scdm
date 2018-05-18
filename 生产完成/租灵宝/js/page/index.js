"use strict";

try {
	plus.navigator.setStatusBarBackground("#FFFFFF");
} catch (e) {}
mui.init();
mui.ready(function () {

	var banner = {};
	banner.Services = "image.show";
	banner.h_display = 2;
	banner.h_identify = "home";

	var km = new Vue({
		el: '#app_index',
		data: {
			banner: "",
			multdisplay: "", //周转材料
			jixie: "", //机械
			sd_df: leiys

		},
		methods: {
			open: function open(url) {
				mui.openWindow({
					url: url + '.html',
					id: url,
					show: {
						aniShow: "slide-in-right", //动画
						duration: 500 //持续时间
					}
				});
			},
			df_wedf: function df_wedf(idx, tys) {
				var sd_dffx = "lease";
				if (idx == 2 || idx == 4) {
					sd_dffx = 'wanted';
				}
				this.zhu(sd_dffx, "", {
					"idx": idx,
					"tile": tys
				});
			},
			jhg_sd: function jhg_sd(idx) {
				mui.openWindow({
					url: "lease_details.html",
					id: "lease_details.html",
					show: {
						aniShow: "slide-in-right", //动画
						duration: 500 //持续时间
					},
					extras: {
						"i_d": idx //页面传值
					} });
			},
			sdf_jfssd: function sdf_jfssd() {
				if (getuser().groupid == 3) {
					mui.toast('你是业务员');
					return;
				}

				this.zhu("user_center");
			}

		},
		created: function created() {
			var sd_d = this;
			m_ajax(banner, function (data) {
				sd_d.banner = data.home_banner;
			}
			/*周转材料*/
			);var multdisplay = {};
			multdisplay.Services = "good.multdisplay";
			multdisplay.h_display = 1;
			multdisplay.h_method = 2;
			multdisplay.type = 1;
			multdisplay.cat_id = 1;
			m_ajax(multdisplay, function (data) {
				sd_d.multdisplay = data;
			});
			multdisplay.cat_id = 2;
			m_ajax(multdisplay, function (data) {
				sd_d.jixie = data;
			});
		}
	});
});
mui.plusReady(function () {
	window.addEventListener('refresh', function (e) {
		location.reload();
	});
});
//# sourceMappingURL=index.js.map
