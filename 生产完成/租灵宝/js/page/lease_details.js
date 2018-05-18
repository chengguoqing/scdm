"use strict";

var self = "";

var km = new Vue({
	el: '#lease_details',
	data: {
		deiy_s: "",
		good: "",
		gallery: ""
	},
	methods: {
		dimh_sd: function dimh_sd(lat, lng) {
			mui.openWindow({
				url: 'map.html',
				id: "map",
				show: {
					aniShow: "slide-in-right", //动画
					duration: 500 //持续时间
				},
				extras: {
					lat: lat,
					lng: lng //页面传值
				} });
		},
		sd_iy_d: function sd_iy_d(title, id) {
			if (getusertoken()) {
				this.zhu('appointment', 'slide-in-bottom', {
					'title': title,
					't_id': id
				});
			} else {
				this.zhu("register", "");
			}
		}

	},
	created: function created() {
		var sdf_s = this;
		mui.plusReady(function () {
			self = plus.webview.currentWebview();
			var articleview = {};
			articleview.Services = "good.view";
			articleview.usertoken = "";
			articleview.h_display = 1;
			articleview.usertoken = getusertoken();
			articleview.goodproduct_id = self.i_d;
			m_ajax(articleview, function (data) {
				sdf_s.deiy_s = data;
				sdf_s.good = data.good;
				sdf_s.gallery = data.gallery;
				sdf_s.gallery.map(function (a) {
					a.ad_img = a.large;
				});
				if (sdf_s.good.updatetimestr != 0 && sdf_s.good.rentstartstr != 0) {
					sdf_s.good.kjhgs = sdf_s.good.updatetimestr + " - " + sdf_s.good.rentstartstr;
				} else {
					sdf_s.good.kjhgs = "长期有效";
				}
			});
		});
	}

});

mui.init();
mui.ready(function () {});
//# sourceMappingURL=lease_details.js.map
