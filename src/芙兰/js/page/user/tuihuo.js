var km = new Vue({
	el: '#tuihuo',
	data: {
		group: "",
		embed: "",
		_self: "",
		caidan: [{
			name: "退货申请",
			id: 0,
			url: "tuihuoshenqing.html"
		}, {
			name: "申请记录",
			id: 1,
			url: "t_shenqingjl.html"
		}]

	},
	methods: {

	},
	mounted() {

		var th = this
		mui.plusReady(function() {
			th._self = plus.webview.currentWebview();
			var sd_dsd = []
			th.caidan.map(function(a) {
				var sd_sff = {}
				sd_sff.id = a.url
				sd_sff.url = a.url
				sd_sff.extras = {
					chanshu: a.id
				}
				sd_dsd.push(sd_sff)
			})

			th.group = new webviewGroup(th._self.id, {
				items: sd_dsd,
				onChange: function(obj) {
					var c = document.querySelector(".mui-tab-item.mui-active");
					if(c) {
						c.classList.remove("mui-active");
					}
					var target = document.querySelector(".mui-tab-item:nth-child(" + (parseInt(obj.index) + 1) + ")");
					target.classList.add("mui-active");
				}
			}, 132, 0);

			mui(".tab_qiehuan_d").on("tap", ".mui-tab-item", function(e) {
				var wid = this.getAttribute("data-wid");
				th.group.switchTab(wid);
			});
		

		});
	}
})
