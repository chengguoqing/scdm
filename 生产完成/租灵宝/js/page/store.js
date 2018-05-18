"use strict";

//商家店铺

var self = {};

var km = new Vue({
	el: '#store',
	data: {
		banner: "",
		sd_dfx: [],
		case_anli: [], //案例
		df_sdfx: "", //服务团队
		shuju_s: '',
		sd_sdf: 1,
		guyu: "", //关于
		lianix: "" //联系我们
	},
	methods: {
		liani_wo: function liani_wo() {
			var content = {},
			    sd_sddf = this;
			content.Services = "shopindex.content";
			content.shop_id = self.shopid;
			content.uid = self.user_id;
			m_ajax(content, function (data) {
				sd_sddf.lianix = data;
			});
		},
		team_s: function team_s() {
			//服务团队
			var team = {},
			    sd_sdr = this;
			team.Services = "shopindex.team";
			team.shop_id = self.shopid;
			team.uid = self.user_id;
			team.page = 1;
			m_ajax(team, function (data) {
				var sd_sdfr = data.teamlist;
				sd_sdfr.map(function (a) {
					a.medium = a.large;
					a.ty_p = 2;
				});
				sd_sdr.df_sdfx = sd_sdfr;
				if (sd_sdfr.length <= 0) {
					document.getElementById("fdsf_df_dsdff").classList.add("show");
				} else {
					document.getElementById("fdsf_df_dsdff").classList.remove("show");
				}
			});
		},
		case_kj: function case_kj() {
			//工程案例
			var shopcase = {},
			    sd_sdr = this;
			shopcase.Services = "shopindex.shopcase";
			shopcase.shop_id = self.shopid;
			shopcase.uid = self.user_id;
			shopcase.page = 1;
			m_ajax(shopcase, function (data) {
				var sd_sdfr = data.caselist;
				sd_sdfr.map(function (a) {
					a.medium = a.large;
					a.ty_p = 1;
				});
				sd_sdr.case_anli = sd_sdfr;
				if (sd_sdfr.length <= 0) {
					document.getElementById("fdsf_df_dsdff").classList.add("show");
				} else {
					document.getElementById("fdsf_df_dsdff").classList.remove("show");
				}
			});
		},
		mehf_ddf: function mehf_ddf(x) {
			var sd_sd = this;
			document.getElementById("fdsf_df_dsdff").classList.remove("show");
			switch (x.id) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 7:
					this.sd_sdf = 1;
					this.more(x.id, x.name);
					break;
				case 20:
					this.sd_sdf = 1;
					this.shkh_sd();
					break;
				case 21:
					this.sd_sdf = 2;
					break;
				case 22:
					this.sd_sdf = 3;
					this.case_kj();
					break;
				case 23:
					this.sd_sdf = 4;
					this.team_s();
					break;
				case 24:
					this.sd_sdf = 5;
					this.liani_wo();
					break;
			}
			//			this.mkoisd=""
		},
		more: function more(type, name) {

			var sd_sd = this;
			var shop_more = {};
			shop_more.Services = 'shopindex.more';
			shop_more.uid = self.user_id;
			shop_more.shop_id = self.shopid;
			shop_more.type = type;
			m_ajax(shop_more, function (data) {
				sd_sd.sd_dfx = [];
				var sd_sdf = {};
				sd_sdf.title = name;
				sd_sdf.list = data.goodlist;
				if (sd_sdf.list.length <= 0) {
					document.getElementById("fdsf_df_dsdff").classList.add("show");
				} else {
					document.getElementById("fdsf_df_dsdff").classList.remove("show");
				}
				sd_sd.sd_dfx[0] = sd_sdf;
			});
		},
		shkh_sd: function shkh_sd() {
			var shop_home = {},
			    sd_sd = this;
			shop_home.Services = 'shopindex.home';
			shop_home.uid = self.user_id;
			shop_home.shop_id = self.shopid;
			m_ajax(shop_home, function (data) {
				sd_sd.sd_dfx = [];
				data.map(function (a) {
					if (a.list.length > 0) {
						sd_sd.sd_dfx.push(a);
					}
				});
				if (sd_sd.sd_dfx.length <= 0) {
					document.getElementById("fdsf_df_dsdff").classList.add("show");
				} else {
					document.getElementById("fdsf_df_dsdff").classList.remove("show");
				}
			});
		}
	},
	created: function created() {
		sd_sd = this;
		mui.plusReady(function () {
			self = plus.webview.currentWebview();
			var shopindex = {};
			shopindex.Services = "shopindex.index";
			shopindex.uid = self.user_id;
			shopindex.shop_id = self.shopid;
			m_ajax(shopindex, function (data) {
				sd_sd.banner = data.banner;
				sd_sd.guyu = data.content;
				sd_sd.banner.map(function (a) {
					a.ad_img = a.large;
				});
			});
			sd_sd.shkh_sd();
		});
	}

});
//# sourceMappingURL=store.js.map
