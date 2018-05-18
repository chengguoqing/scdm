var km = new Vue({
	el: '#list_ijusd',
	data: {
		df_sd_sd: [ //普通列表
			{
				img: "http://m.flan1688.com/images/201711/thumb_img/3640_thumb_G_1511759598637.jpg", //封面
				name: "2017【一露玛娜】时尚潮流羽绒棉长棉报", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				num_s: 440,
				sd_sdf: "7LB77753"
			}, {
				img: "http://m.flan1688.com/images/201711/thumb_img/3031_thumb_G_1510611793322.jpg", //封面
				name: "2017【卡曼罗】时尚潮流修身90绒轻薄白鸭毛羽绒服", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				num_s: 440,
				sd_sdf: "7LB77753"
			}, {
				img: "http://m.flan1688.com/images/201712/thumb_img/3623_thumb_G_1512417745010.jpg", //封面
				name: "2017【欧雅诗丹】时尚潮流带毛领加厚长棉衣", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				num_s: 440,
				sd_sdf: "7LB77753"
			}, {
				img: "http://m.flan1688.com/images/201711/thumb_img/3621_thumb_G_1511666127713.jpg", //封面
				name: "2️017【兴潮汇】时尚潮流带毛领加厚棉衣", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				num_s: 440,
				sd_sdf: "7LB77753"
			}

		]
	},
	methods: {

	},
	mounted() {
		var th=this
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var kmn = self.chanshu; //获取页面传过来的值
			xiala(function() {
				
					for(var i = 0; i < 8; i++) {
						km.df_sd_sd.push(th.df_sd_sd[0])
					}
			
			},3000)
			shangla(function() {
				for(var i = 0; i < 8; i++) {
					th.df_sd_sd.push(th.df_sd_sd[0])
				}
			})
		})
	}
})

