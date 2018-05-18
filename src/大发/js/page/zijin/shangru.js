var km = new Vue({
	el: '#shangru',
	data: {
		hg_sd: "",
		form: {
			zcje: "" //转账金额
		}

	},
	methods: {
		tijiao() {

			if(!this.form.zcje) {
				mui.toast('请输入转账金额');
				return
			}
			var isActive = document.getElementById("mySwitch").classList.contains("mui-active");
			if(isActive) {
				mui.toast('打开状态');
			} else {
				mui.toast('关闭状态');
			}
			console.log("验证完毕")
		}

	},
	mounted() {
		var th = this
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			th.hg_sd = self.data_s
		})

	}
})