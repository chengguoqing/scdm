"use strict";

var self = {};
var km = new Vue({
	el: '#Inquiry_details',
	data: {
		deiy_s: "",
		good: ""
	},
	methods: {
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

			articleview.Services = "good.articleview";
			articleview.usertoken = "";
			articleview.h_display = 1;
			articleview.goodproduct_id = self.i_d;
			articleview.usertoken = getusertoken();

			m_ajax(articleview, function (data) {
				sdf_s.deiy_s = data;
				sdf_s.good = data.good;
				console.log(JSON.stringify(data));
			});
		});
	}

});

mui.init();
mui.ready(function () {});
//# sourceMappingURL=Inquiry_details.js.map
