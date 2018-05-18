var km = new Vue({
	el: '#xq_index',
	data: {
		group: "",
		embed: "",
		_self: "",
		caidan: [{
			name: "商品",
			id: 0,
			url: "xiangqing/shangping.html"
		}, {
			name: "详情",
			id: 1,
			url: "xiangqing/xiangq.html"
		}, {
			name: "评价",
			id: 2,
			url: "xiangqing/pinglun.html"
		}]
	},
	methods: {
		sdf_df(x) {

			this.group.switchTab(this.caidan[x].url);
		},
		sd_jg_df() {
			this._self.setStyle({
				mask: "rgba(0,0,0,0.5)"
			});
			this.embed.show("slide-in-bottom", 200);
		}
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
					var c = document.querySelector(".df_iy_ert .box_a.act");
					if(c) {
						c.classList.remove("act");
					}
					var target = document.querySelector(".df_iy_ert .box_a:nth-child(" + (parseInt(obj.index) + 1) + ")");
					target.classList.add("act");
				}
			}, 45, 50);

			mui(".df_iy_ert").on("tap", ".box_a", function(e) {
				var wid = this.getAttribute("data-wid");
				th.group.switchTab(wid);
			});

			th.embed = plus.webview.create('/xiangqing/gouwuche.html', '', {
				top: '20%',
				bottom: '0px',
				popGesture: "node"
			});
		
			
			th._self.addEventListener("maskClick", function() { //蔗照层点击
				km.embed.hide("auto");
			})
			th.embed.hide();

		});
	}
})