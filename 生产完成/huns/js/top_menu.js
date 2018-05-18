'use strict';

//图文列表
Vue.component('top_menu', {
	props: {
		kmhd: ''
	},
	template: '\t<section class="index_top pd bgff">\n\t\t\t\t<i class="f_i logo_icon fl cz" @tap="blck"></i>\n\t\t\t\t<section class="sd_uy_sd fl pr pl10" v-if="kmhd==\'idx\'">\n\t\t\t\n\t\t\t\t\t<input type="text" class="dsf_sdiue" placeholder="\u8BF7\u8F93\u5165\u4EA7\u54C1\u5173\u952E\u5B57" v-model="ser_sd" @blur="ser_iusd(ser_sd)">\n\t\t\t\t\t<i class="f_i sef_jinsd"></i>\n\t\t\t\t</section>\n\t\t\t\t\t<section class="sd_uy_sd fl pr pl10 ac" v-else>\n\t\t\t\t\t\t<img src="http://api.zulingbao.com/storage/shop/88/20170921153247_412.jpg">\n\t\t\t\t\t</section>\n\t\t\t\t<p class="ov tr ds_d_dfggx">\n\t\t\t\t<i class="f_i lie_hsd " :class="mkoisd" @tap="zhu(\'classify\')" v-if="kmhd==\'idx\'" ></i>\n\t\t\t\t\t<i class="f_i lie_hsd " :class="mkoisd" @tap="mkoisd?mkoisd=\'\':mkoisd=\'mkoisd\'" v-else></i>\n\t\t\t\t\t\n\t\t\t\t</p> \n\t\t\t\t<p class="qc"></p>\n\t\t\t\t<section class="dsf_d_sdd_df " :class="mkoisd" @touchmove.prevent>\n\t\t\t\t<section class="dsf_iuul mt40">\n\t\t\t\t\t<ul class="mui-table-view tm">\n\t\t\t\t\t\t<li class="mui-table-view-cell cf" v-for="mn in ul_data" @tap="mehf_ddf(mn.lx,mn.name)">\n\t\t\t\t\t\t\t{{mn.name}}\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</section>\n\t\t\t</section>\n\t\t\t</section>\n\t\t\t\t\t\n\t\t\t',
	data: function data() {
		return {
			mkoisd: "",
			ser_sd: "",
			ul_data: [{
				"name": "首页",
				lx: 20
			}, {
				"name": "关于我们",
				lx: 21
			}, {
				"name": "出租",
				"cls": "",
				lx: 1
			}, {
				"name": "求租",
				"cls": "ab",
				lx: 2
			}, {
				"name": "出售 ",
				"cls": "ad",
				lx: 3
			}, {
				"name": "求购",
				"cls": "ac",
				lx: 4
			}, {
				"name": "运输",
				"cls": "ae",
				lx: 5
			}, {
				"name": "维修",
				"cls": "af",
				lx: 7
			}, {
				"name": "工程案例",
				lx: 22
			}, {
				"name": "服务团队",
				lx: 23
			}, {
				"name": "联系我们",
				lx: 24
			}]
		};
	},

	methods: {
		blck: function blck() {
			mui.back();
		},
		ser_iusd: function ser_iusd(ss) {
			mui.openWindow({
				url: 'seek.html',
				id: "seek",
				show: {
					aniShow: "slide-in", //动画
					duration: 500 //持续时间
				},
				extras: {
					"seer": ss //页面传值
				} });
		},
		mehf_ddf: function mehf_ddf(x, name) {
			var sd_sd = {};
			sd_sd.id = x;
			sd_sd.name = name;
			this.$emit("meh", sd_sd);
			this.mkoisd = "";
		}
	},
	watch: {}
});
