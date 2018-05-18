//收货地址编辑
var self = null
var km = new Vue({
	el: '#bianjishdz',
	data: {
		title_s: '',
		ty: "", //0收货地址  1发货地址
		cu: {
			shr: "", //收货人
			email: "", //电子邮件
			dizhi: "", //地区
			xiangxi: "", //详细地址
			tel: "", //联系方式
			yb: "" //邮政编码
		}
	},
	methods: {
		xz_qydf() {
			document.activeElement.blur();
			var th = this
			this.city(function(data) {
				th.cu.dizhi = data
			})

		},
		baocun_sd() { //保存按钮触发

			if(!this.cu.shr) {
				mui.toast('请输入收货人');
				return
			}
			if(!yanza.mail(this.cu.email)) {
				mui.toast('电子邮件格式错误');
				return
			}
			if(!this.cu.dizhi) {
				mui.toast('请选择地区');
				return
			}
			if(!this.cu.xiangxi) {
				mui.toast('请输入详细地址');
				return
			}
			if(!yanza.phone(this.cu.tel)) {
				mui.toast('手机号码格式错误');
				return
			}
			if(!this.cu.yb) {
				mui.toast('请输入邮政编码');
				return
			}
			if(self.bianji.ad_d) { //添加接口
				if(this.ty == 0) { //请求收货地址

				} else if(this.ty == 1) { //请求发货地址

				}
			} else { //编辑接口
				if(this.ty == 0) { //请求收货地址

				} else if(this.ty == 1) { //请求发货地址

				}
			}

				mui.back()
			console.log("验证完毕")

		}
	},
	mounted() {
		var th = this
		mui.plusReady(function() {
			self = plus.webview.currentWebview();

			th.title_s = self.bianji.title
			th.ty = self.bianji.ty
			km.cu = self.bianji
			console.log(JSON.stringify(km.cu))
		})
	}
})