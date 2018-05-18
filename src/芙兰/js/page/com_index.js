var km = new Vue({
	el: '#pullrefresh',
	data: {
		caidan: [{
			name: "首页",
			id: 0,
			url: "item1mobile"
		}, {
			name: "热销类目",
			id: 1,
			url: "item2mobile"
		}, {
			name: "女上装",
			id: 2,
			url: "item3mobile"
		}, {
			name: "女下装",
			id: 3,
			url: "item4mobile"
		}, {
			name: "即将售罄",
			id: 4,
			url: "item5mobile"
		}, {
			name: "品牌散挑",
			id: 5,
			url: "item6mobile"
		}, {
			name: "芙兰分份",
			id: 6,
			url: "item7mobile"
		}, {
			name: "家居服",
			id: 7,
			url: "item8mobile"
		}, {
			name: "视频看货",
			id: 8,
			url: "item9mobile"
		}],
		banner: [{
			img: "http://m.flan1688.com/mobile/data/afficheimg/1511581325513453400.jpg",
			url: ""
		}, {
			img: "http://m.flan1688.com/mobile/data/afficheimg/1511742314338566236.jpg",
			url: ""
		}, {
			img: "http://m.flan1688.com/mobile/data/afficheimg/1511653730759151703.png",
			url: ""
		}],
		inde_f: [ //分类菜单
			{
				"img": "http://m.flan1688.com/mobile/images/201708/1502437873675421851.png",
				name: "商品分类",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1502438100948977744.png",
				name: "拼团",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1502437825920016519.png",
				name: "积分兑换",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1502437854287997849.png",
				name: "优惠活动",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1502437944451168467.png",
				name: "品牌街",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1502437970251778448.png",
				name: "促销",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1503476714083683271.png",
				name: "签到",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1503630301250923696.png",
				name: "秒杀活动",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1503481746878764575.png",
				name: "砍价",
				url: ""
			}, {
				"img": "http://m.flan1688.com/mobile/images/201708/1502438033575935060.png",
				name: "个人中心",
				url: ""
			}
		],
		toudiao: [ //头条
			{
				name: "1教你几招提升淘宝店铺转化率",
				url: ""
			}, {
				name: "2教你几招提升淘宝店铺转化率",
				url: ""
			}, {
				name: "3教你几招提升淘宝店铺转化率",
				url: ""
			}, {
				name: "4教你几招提升淘宝店铺转化率",
				url: ""
			}, {
				name: "5教你几招提升淘宝店铺转化率",
				url: ""
			}
		],
		nzdcx: [ //年终大促销
			{
				img: "http://m.flan1688.com/images/201711/thumb_img/3640_thumb_G_1511759598637.jpg", //封面
				name: "2017【一露玛娜】时尚潮流羽绒棉长棉报", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				time_jd: "1514269800000" //倒计时的时间戳
			}, {
				img: "http://m.flan1688.com/images/201711/thumb_img/3031_thumb_G_1510611793322.jpg", //封面
				name: "2017【卡曼罗】时尚潮流修身90绒轻薄白鸭毛羽绒服", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				time_jd: "1514279800000" //倒计时的时间戳
			}, {
				img: "http://m.flan1688.com/images/201712/thumb_img/3623_thumb_G_1512417745010.jpg", //封面
				name: "2017【欧雅诗丹】时尚潮流带毛领加厚长棉衣", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				time_jd: "1514269900000" //倒计时的时间戳
			}, {
				img: "http://m.flan1688.com/images/201711/thumb_img/3621_thumb_G_1511666127713.jpg", //封面
				name: "2️017【兴潮汇】时尚潮流带毛领加厚棉衣", //标题
				money: "89.90", //现价
				ymoney: "99.99", //原价
				time_jd: "1514270800000" //倒计时的时间戳
			}

		],
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
		var th = this
		mui.plusReady(function() {
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

function pullupRefresh() {
	var sd_sdf = km.df_sd_sd,
		th = this
	setTimeout(function() {
		for(var i = 0; i < 8; i++) {
			km.df_sd_sd.push(sd_sdf[0])
		}
		th.endPullupToRefresh(false)
	}, 3000)

}

function pulldownRefresh() {
	var sd_sdf = km.df_sd_sd,
		th = this
	setTimeout(function() {
		for(var i = 0; i < 8; i++) {
			km.df_sd_sd.push(sd_sdf[0])
		}
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 3000)

}