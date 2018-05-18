var km = new Vue({
	el: '#order_list',
	data: {
		_self: "",
		tabindex:0,
		caidan: [{
			name: "全部",
			id: 0,
			num: 2,
			url: "order_list_nei.html"
		}, {
			name: "待付款",
			id: 1,
			num: 0,
			url: "order_list_nei.html"
		}, {
			name: "待发货",
			id: 2,
			num: 0,
			url: "order_list_nei.html"
		}, {
			name: "待收货",
			id: 3,
			num: 0,
			url: "order_list_nei.html"
		}, {
			name: "已完成",
			id: 4,
			num: 0,
			url: "order_list_nei.html"
		}]
	},
	methods: {

	},
	mounted() {
		var th = this
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var kmn = self.cn_id; //获取页面传过来的值
			th.tabindex=kmn
			th._self = plus.webview.currentWebview();
			var sd_dsd = []
			th.caidan.map(function(a) {
				var sd_sff = {}
				sd_sff.id = a.url+"?id="+a.id
				sd_sff.url = a.url
				sd_sff.extras = {
					chanshu: a.id
				}
				sd_dsd.push(sd_sff)
			})

			th.group = new webviewGroup(th._self.id, {
				items: sd_dsd,
				onChange: function(obj) {
					console.log(JSON.stringify(obj))
					var c = document.querySelector(".mui-control-item.mui-active");
					if(c) {
						c.classList.remove("mui-active");
					}
					var target = document.querySelector(".mui-control-item:nth-child(" + (parseInt(obj.index) + 1) + ")");
					target.classList.add("mui-active");
				}
			}, 85, 0);

			mui(".mui-segmented-control").on("tap", ".mui-control-item", function(e) {
				var wid = this.getAttribute("data-wid");
				th.group.switchTab(wid);
			});
		})
	}
})