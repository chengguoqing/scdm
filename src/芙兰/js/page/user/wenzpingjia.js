var km = new Vue({
	el: '#wenzpingjia',
	data: {
		sd_iys: [{
			id: 0,
			text: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 1,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 2,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 3,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 5,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 6,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 7,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 8,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, {
			id: 9,
			text: "内容内容内容内容内容内容",
			time: "2018-1-10"
		}, ]
	},
	methods: {
		dele_sd(idx) {
			var th=this
			mui.confirm("你确认要删除吗？", function(e) {
				if(e.index == 0) {
					th.sd_iys.splice(idx, 1);
					mui.toast('删除成功')
					mui(".mui-table-view-cell").each(function() {
							mui.swipeoutClose(this)
						})
				}
			})

		}
	},
	mounted() {
		mui('.mui-scroll-wrapper').scroll({

		});
	}
})