//充值
var km = new Vue({
	el: '#chongzhi',
	data: {
		toudiao: [ //头条
			{
				name: "    你敢冲我敢送！",
				url: ""
			}, {
				name: "    你敢冲我敢送！",
				url: ""
			}, {
				name: "    你敢冲我敢送！",
				url: ""
			}, {
				name: "    你敢冲我敢送！",
				url: ""
			}
		],
		cz_sdf: [{
			mum: 300,
			zm: "0",
			zs: "赠3000积分",
			zp: " 赠150退换券 ",
			cls: "act"
		}, {
			mum: 5000,
			zm: "40",
			zs: "赠5000积分",
			zp: " 赠250退换券 ",
			cls: ""
		}, {
			mum: 10000,
			zm: "100",
			zs: "赠10000积分",
			zp: " 赠500退换券 ",
			cls: ""
		}, {
			mum: 20000,
			zm: "200",
			zs: "赠20000积分",
			zp: " 赠1000退换券 ",
			cls: ""
		}, {
			mum: 30000,
			zm: "350",
			zs: "赠30000积分",
			zp: " 赠1500退换券 ",
			cls: ""
		}, {
			mum: 50000,
			zm: "1000",
			zs: "赠50000积分",
			zp: " 赠2500退换券 ",
			cls: ""
		}]
	},
	methods: {
		sdhng_s(idx) {
			this.cz_sdf.map(function(a) {
				a.cls = ""
			})
			this.cz_sdf[idx].cls = "act"
		}
	},
	mounted() {
		plus.navigator.setStatusBarBackground("#1E2429");
		mui('.mui-scroll-wrapper').scroll({

		});
		var old_back = mui.back;
		mui.back = function() {
				plus.navigator.setStatusBarBackground("#fff");
				old_back()
		}
	}
})