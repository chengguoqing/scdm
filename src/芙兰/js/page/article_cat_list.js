var km = new Vue({
				el: '#article_cat_list',
				data: {
					caidan: [{
						id: "0",
						url: "com/dianzhulist.html",
						name: "羽绒服"
					}, {
						id: "1",
						url: "com/dianzhulist.html",
						name: "棉衣"
					}, {
						id: "2",
						url: "com/dianzhulist.html",
						name: "毛呢大衣"
					}, {
						id: "3",
						url: "com/dianzhulist.html",
						name: "针织衫/毛衣/打底衫"
					}, {
						id: "4",
						url: "com/dianzhulist.html",
						name: "外套系列"
					}, {
						id: "5",
						url: "com/dianzhulist.html",
						name: "裤子系列"
					}, {
						id: "6",
						url: "com/dianzhulist.html",
						name: "马甲"
					}, {
						id: "7",
						url: "com/dianzhulist.html",
						name: "套装/套裙"
					}, {
						id: "8",
						url: "com/dianzhulist.html",
						name: "皮衣"
					}, {
						id: "9",
						url: "com/dianzhulist.html",
						name: "连衣裙"
					}, {
						id: "10",
						url: "com/dianzhulist.html",
						name: "风衣"
					}]
				},
				methods: {

				},
				mounted() {
					mui.init();
					var th = this;

					mui.plusReady(function() {
						qiehuan(th.caidan)

					});
				}
			})//店主圈