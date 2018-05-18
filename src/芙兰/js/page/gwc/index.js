var km = new Vue({
	el: '#gwc_id_sd',
	data: {
		quanxun_s: "act", //全选
		_self: "",
		embed: "",
		gwc_lis: [{
			name: "网站自营",
			cls: "act",
			bianji: "",
			list_s: [{
				img: "https://m.flan1688.com/images/201702/thumb_img/438_thumb_G_1487835357399.jpg",
				title: "时尚潮流衬衣时尚潮流衬衣(现货)",
				yanse: "白色",
				cima: "M",
				xjia: "32.00",
				yjia: "96.00",
				jian: "1",
				cls: "act",
			}, {
				img: "https://m.flan1688.com/images/201702/thumb_img/438_thumb_G_1487835357399.jpg",
				title: "时尚潮流衬衣时尚潮流衬衣(现货)",
				yanse: "白色",
				cima: "M",
				xjia: "32.00",
				yjia: "96.00",
				jian: "1",
				cls: "act",
			}]
		}, {
			name: "网站自营2",
			cls: "act",
			bianji: "",
			list_s: [{
				img: "https://m.flan1688.com/images/201702/thumb_img/438_thumb_G_1487835357399.jpg",
				title: "时尚潮流衬衣时尚潮流衬衣(现货)",
				yanse: "白色",
				cima: "M",
				xjia: "32.00",
				yjia: "96.00",
				jian: "1",
				cls: "act",
			}]
		}]
	},
	methods: {
		bianji_s(idx) {
			if(this.gwc_lis[idx].bianji == "act") {
				this.gwc_lis[idx].bianji = ""
			} else {
				this.gwc_lis[idx].bianji = "act"
			}
		},
		delect(idx, ied) {
			this.gwc_lis[idx].list_s.splice(ied, 1)
			if(this.gwc_lis[idx].list_s.length == 0) {
				this.gwc_lis.splice(idx, 1)
			}
		},
		sd_iydr(idx) { //一级勾选按钮触发
			var cla_sd = this.gwc_lis[idx].cls
			if(cla_sd == "act") {
				this.gwc_lis[idx].cls = ""
				this.gwc_lis[idx].list_s.map(function(a) {
					a.cls = ""
				})
			} else {
				this.gwc_lis[idx].cls = "act"
				this.gwc_lis[idx].list_s.map(function(a) {
					a.cls = "act"
				})
			}

			var s_hsd_s = 0
			this.gwc_lis.map(function(a) {
				if(a.cls == "act") {
					s_hsd_s++
				}
			})
			if(s_hsd_s == this.gwc_lis.length) {
				this.quanxun_s = "act"
			} else {
				this.quanxun_s = ""
			}

		},
		gx_jhs(idx, ied) { //勾选按钮触发
			var cla_sd = this.gwc_lis[idx].list_s[ied].cls
			if(cla_sd == "act") {
				this.gwc_lis[idx].list_s[ied].cls = ""
			} else {
				this.gwc_lis[idx].list_s[ied].cls = "act"
			}
			var s_hsd_s = 0
			this.gwc_lis[idx].list_s.map(function(a) {
				if(a.cls == "act") {
					s_hsd_s++
				}
			})
			if(s_hsd_s == this.gwc_lis[idx].list_s.length) {
				this.gwc_lis[idx].cls = "act"
			} else {
				this.gwc_lis[idx].cls = ""
			}

			var s_hsd_b = 0
			this.gwc_lis.map(function(a) {
				if(a.cls == "act") {
					s_hsd_b++
				}
			})
			if(s_hsd_b == this.gwc_lis.length) {
				this.quanxun_s = "act"
			} else {
				this.quanxun_s = ""
			}

		},
		tanchui_sd: function() { //点击弹出下拉框
			this._self.setStyle({
				zindex: 1,
				mask: "rgba(0,0,0,0.5)"
			});
			this.embed.show("slide-in-bottom", 200);
		}
	},
	mounted() {
		var th = this
		mui.plusReady(function() {
			th._self = plus.webview.getWebviewById('gwc/flow.html');
		if(plus.webview.currentWebview().ht){
		document.querySelector(".dsf_jg_ewte").classList.add("show")
			
		}

			th.embed = plus.webview.create('/xiangqing/gouwuche.html?id_gw', '', {
				top: '20%',
				bottom: '0px',
				zindex: 10,
			});
			th._self.addEventListener("maskClick", function() { //蔗照层点击
				km.embed.hide("auto");
			})
		
			th.embed.hide();
		})
	}
})