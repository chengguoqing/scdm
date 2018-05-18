var km = new Vue({
	el: '#user_center',
	data: {
		qbdd: [ //全部订单
			{
				id: 0,
				name: "待付款",
				icon: "icon-fukuan",
				num: "3"
			}, {
				id: 1,
				name: "待发货",
				icon: "icon-daifahuo",
				num: "3"
			}, {
				id: 2,
				name: "待收货",
				icon: "icon-daifahuo1",
				num: "3"
			}, {
				id: 3,
				name: "已完成",
				icon: "icon-yiwancheng",
				num: "3"
			}
		]
	},
	methods: {
		dingbu(){
			   mui('#user_center').scroll().scrollTo(0,0,100);
		}
	},
	mounted() {
		mui('.mui-scroll-wrapper').scroll({

		});
	}
})