"use strict";

//图文列表
Vue.component('graphic_list', {
	props: {
		title: "",
		jixie: ""
	},
	template: "<section class=\"pt20 \">\n\t\t\t\t<p class=\"dsf_d_dfc cen\">\n\t\t\t\t\t<span>{{title}}</span>\n\t\t\t\t</p>\n\t\t\t\t<section class=\"bgff mui-row sdf_d_dfgg\">\n\t\t\t\t\t<section class=\"mui-col-xs-6\" v-for=\"py in jixie\" @tap=\"jhg_sd(py.id,py.ty_p)\">\n\t\t\t\t\t\t<p class=\"dsf_iu_sd\">\n\t\t\t\t\t\t\t<img :src=\"py.medium\">\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<section class=\"pl10 pt10\">\n\t\t\t\t\t\t\t<p class=\"dianer z3 fz15 dsf_d_sdf\" v-text=\"py.name\">\n\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"ye fz15 mt5\" v-text=\"py.budgetprice\">\n\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</section>\n\n\t\t\t\t\t</section>\n\n\t\t\t\t</section>\n\t\t\t</section>",
	data: function data() {
		return {};
	},

	methods: {
		jhg_sd: function jhg_sd(idx, ty_p) {
			if(ty_p == 1) {
				this.zhu("case_details", "fade-in", {
					shop_id: self.shopid,
					uid: self.user_id,
					"i_d": idx
				})
				return
			}
			if(ty_p == 2) {
				this.zhu("fuwu_details", "fade-in", {
					shop_id: self.shopid,
					uid: self.user_id,
					"i_d": idx
				})
				return
			}

			this.zhu("lease_details", "", {
				"i_d": idx
			})

		}
	},
	watch: {}
});