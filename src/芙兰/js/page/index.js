var km = new Vue({
	el: '#app_slider',
	data: {
		caidan: [{
			name: "首页",
			id: 0,
			url: "com/index.html"
		}, {
			name: "热销类目",
			id: 1,
			url: "com/index_list.html"
		}, {
			name: "女上装",
			id: 2,
			url: "com/index_list.html"
		}, {
			name: "女下装",
			id: 3,
			url: "com/index_list.html"
		}, {
			name: "即将售罄",
			id: 4,
			url: "com/index_list.html"
		}, {
			name: "品牌散挑",
			id: 5,
			url: "com/index_list.html"
		}, {
			name: "芙兰分份",
			id: 6,
			url: "com/index_list.html"
		}, {
			name: "家居服",
			id: 7,
			url: "com/index_list.html"
		}, {
			name: "视频看货",
			id: 8,
			url: "com/index_list.html"
		}]

	},
	methods: {

	},
	mounted() {

		document.getElementById('app_slider').addEventListener('slide', function(e) {
			if(e.detail.slideNumber == 1) {

			}
		})

		mui.init();
		var th=this;
		
		mui.plusReady(function() {
			qiehuan(th.caidan)

		});

	}
})