//转账

var km = new Vue({
	el: '#zhaunzhang',
	data: {
		jiner:"",//获取传过来的金额
		mask: "",
		is_zzfs: "", //是否显示转账方式弹出层
		chengshi: "",
		xiangxi: "", //详细地址
		is_cheng: "", //是否显示支行城市
		jiazais: "", //是否显示加载
		zzfs: [{
				id: 0,
				name: "网银",
				type: 0,
				cls: "red"
			},
			{
				id: 1,
				name: "ATM自动柜员机",
				type: 1,
				cls: ""
			},
			{
				id: 2,
				name: "ATM现金存款",
				type: 1,
				cls: ""
			},
			{
				id: 3,
				name: "银行柜台",
				type: 1,
				cls: ""
			},
			{
				id: 4,
				name: "手机银行",
				type: 0,
				cls: ""
			},
			{
				id: 5,
				name: "支付宝",
				type: 0,
				cls: ""
			}
		]
	},
	methods: {
		close_s() {
			this.mask.close()
		},
		zzfs_sdf() { //转账方式点击触发
			this.mask.show() //显示蔗照
			this.is_zzfs = "show"
		},
		dih_kjh(idx) { //转账弹出层列表点击
			this.zzfs.map(function(a) {
				a.cls = ""
			})
			this.zzfs[idx].cls = "red"

			if(this.zzfs[idx].type == 1) {
				this.is_cheng = "show"
			} else {
				this.is_cheng = ""
			}
		},
		xzcs() {
			var th = this
			this.city(function(data) {
				th.chengshi = data
			})
		},
		zzwc_btn() { //转账完成按钮触发

			if(this.is_cheng) {
				if(!this.chengshi) {
					mui.toast('请选择支行城市');
					return
				}
				if(!this.xiangxi) {
					mui.toast('请输入支行地址');
					return
				}

			}
			this.jiazais = "show"
			setTimeout(a => {
				this.jiazais = ""
			}, 2000)
		}

	},
	mounted() {
		this.mask = mui.createMask(function() {
			km.is_zzfs = ""
		});
		var th=this
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();

			var jiner = self.jiner; //获取页面传过来的值
			km.jiner=jiner
			
		})
		mui('.mui-scroll-wrapper').scroll({

		});
	}
})