'use strict';

//banner
Vue.component('banner', {
	props: {
		ba_r: ""
	},
	template: '\n\t<div class="swiper-container banee_sdfx">\n\t\t\t\t\t<div class="swiper-wrapper">\n\t\t\t\t\t\t<div class="swiper-slide" v-for="br in ba_r">\n\t\t\t\t\t\t\t<a :href="br.ad_link" class="mui-block" style="height: 100%;" v-if="br.ad_link"><img :src="br.ad_img" ></a>\n\t\t\t\t\t\t\t<img :src="br.ad_img" v-else> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="swiper-pagination "></div>\n\t\t\t\t</div>',
	data: function data() {
		return {};
	},

	methods: {},
	watch: {
		ba_r: {
			handler: function handler() {
				var mySwiper = new Swiper('.swiper-container', {
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true, //修改swiper的父元素时，自动初始化swiper
					autoplay: 5000,
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			},
			deep: true
		}
	}
});
