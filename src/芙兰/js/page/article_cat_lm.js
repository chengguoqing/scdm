//文章列表页

mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					up: {
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
			});

			var km = new Vue({
				el: '#article_cat_lm',
				data: {
					jg_sdf:[1,2,3,4,5]
				},
				methods: {

				},
				mounted() {}
			})
			/**
			 * 上拉加载具体业务实现
			 */
			function pullupRefresh() {
				var sd_sdf = km.jg_sdf,
					th = this
				setTimeout(function() {
					for(var i = 0; i < 8; i++) {
						km.jg_sdf.push(sd_sdf[0])
					}
					th.endPullupToRefresh(false)
				}, 3000)
			}