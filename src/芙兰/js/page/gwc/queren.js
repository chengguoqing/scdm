//确认支付
var km = new Vue({
	el: '#queren',
	data: {
		dfdf_a: "", //隐藏-显示 使用店铺优惠券/积分
		dfdf_b: "", //隐藏-显示 缺货处理
		dfdf_c: "", //隐藏-显示 订单备注
		dfdf_d: "", //隐藏-显示 送货时间
		dfdf_e: "", //隐藏-显示 使用账户余额支付
		quhql: [{ //缺货处理
				id: "0",
				name: "现货先发",
				cls: "act"
			},
			{
				id: "1",
				name: "等待所有商品备齐后再发",
				cls: ""
			}, {
				id: "2",
				name: "取消订单",
				cls: ""
			}, {
				id: "3",
				name: "与店主协商",
				cls: ""
			}
		],
		shsj: [{ //送货时间
				id: "0",
				name: "仅工作日送货",
				cls: "act"
			},
			{
				id: "1",
				name: "仅周末送货",
				cls: ""
			}, {
				id: "2",
				name: "工作日/周末/假日均可",
				cls: ""
			}, {
				id: "3",
				name: "指定送货时间",
				cls: ""
			}
		],
		zhifu: [{//支付
			id: "0",
			name: "支付宝",
			cls: "act"
		}, {
			id: "1",
			name: "线下支付",
			cls: ""
		}],
		kuidi: [{//快递
			id: "0",
			name: "申通快递",
			cls: "act"
		}, {
			id: "1",
			name: "运费到付",
			cls: ""
		}, {
			id: "2",
			name: "德邦",
			cls: ""
		}]
	},
	methods: {
		zjg_sd(idx) { //缺货处理单选
			this.quhql.map(function(a) {
				a.cls = ""
			})
			this.quhql[idx].cls = "act"
		},
		zjg_sd_b(idx) { //送货时间单选
			this.shsj.map(function(a) {
				a.cls = ""
			})
			this.shsj[idx].cls = "act"
		},
		zjg_sd_c(idx) { //选择支付单选
			this.zhifu.map(function(a) {
				a.cls = ""
			})
			this.zhifu[idx].cls = "act"
			if(idx==1){
				tanh()
			}
		},zjg_sd_d(idx) { //选择快递公司
			this.kuidi.map(function(a) {
				a.cls = ""
			})
			this.kuidi[idx].cls = "act"
		},
		tijiao_sd(){
			plus.webview.currentWebview().close()
			this.zhu('dingdansc')
		}
		
	},
	mounted() {}
})

function tanh() {
	mui.confirm('5051.79本订单金额和转账方式需与商家私聊协商和确认', '商品总价', "", function(e) {
		if(e.index == 0) {

		} else {

		}
	})
}

mui('.mui-scroll-wrapper').scroll({

});

function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}