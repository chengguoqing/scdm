"use strict";

//媒体列表
Vue.component('meiti', {
	props: {
		title: "",
		jixie: ""
	},
	template: "<section class=\"pt20 \">\n\t\t\t\t<p class=\"dsf_d_dfc cen\">\n\t\t\t\t\t<span>{{title}}</span>\n\t\t\t\t</p>\n\t\t\t\t<ul class=\"mui-table-view\">\n\t\t\t\t\t<li class=\"mui-table-view-cell mui-media\" v-for=\"ji in jixie\" @tap=\"jhg_sd(ji.id)\">\n\t\t\t\t\t\t<a href=\"javascript:;\">\n\t\t\t\t\t\t\t<img class=\"mui-media-object mui-pull-left dsf_df_dfgx\" :src=\"ji.medium\">\n\t\t\t\t\t\t\t<div class=\"mui-media-body\">\n\t\t\t\t\t\t\t\t{{ji.name}}\n\t\t\t\t\t\t\t\t<p class=\"ye mt2\">\n\t\t\t\t\t\t\t\t\t\u4EF7\u683C\uFF1A{{ji.budgetprice}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class='mui-ellipsis fz12' v-text=\"ji.brief\"></p>\n\t\t\t\t\t\t\t\t<p class=\"fz12 mui-ellipsis \" v-if=\"ji.mapaddr\">\n\t\t\t\t\t\t\t\t\t<i class=\"f_i map_icon_d\"></i> {{ji.mapaddr}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t</section>",
	data: function data() {
		return {};
	},

	methods: {
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
		}
	},
	watch: {}
});
