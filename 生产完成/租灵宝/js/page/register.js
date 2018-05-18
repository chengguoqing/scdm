'use strict';

//登录
mui.init({
	beforeback: function beforeback() {
		//获得列表界面的webview  
		var list = plus.webview.currentWebview().opener();
		//触发列表界面的自定义事件（refresh）,从而进行数据刷新  
		console.log(JSON.stringify(list));
		mui.fire(list, 'ref_dfresh');
		return true;
	}
});

var km = new Vue({
	el: '#register',
	data: {
		zmobile: "", //手机号
		zpassword: "", //密码
		smobile: "",
		smobilecode: "",
		sd_dds: true,
		djs: 120,
		s_ddff: "获取验证码"
	},
	methods: {
		dengl_ddf: function dengl_ddf() {
			//登录
			if (!this.zmobile) {
				alert("用户名不能为空");

				return;
			}
			if (!this.zpassword) {
				alert("密码不能为空");
				return;
			}
			var sd_d = this,
			    login = {};
			login.Services = "user.login";
			login.mobile = this.zmobile;
			login.password = this.zpassword;
			m_ajax(login, function (data) {
				setuser(sd_d, data);
			});
		},
		dsf_dsdgf: function dsf_dsdgf() {
			//手机动态码登录
			if (!this.smobile) {
				alert("手机号不能为空");
				return;
			}
			if (!this.smobilecode) {
				alert("验证码不能为空");
				return;
			}
			var sd_d = this,
			    login = {};
			login.Services = "user.login";
			login.mobile = this.smobile;
			login.mobilecode = this.smobilecode;
			m_ajax(login, function (data) {
				setuser(sd_d, data);
			});
		},
		yasd_d: function yasd_d() {
			//获取验证码按钮触发
			if (!yanza.phone(this.smobile)) {
				alert("手机号格式错误");
				return;
			}
			var sd_d = this,
			    sendMobileVerifyCode = {};
			sendMobileVerifyCode.Services = "ajaxverify.sendMobileVerifyCode";
			sendMobileVerifyCode.mobile = this.smobile;
			if (this.sd_dds) {
				m_ajax(sendMobileVerifyCode, function (data) {
					sd_d.sd_dds = false;
					sd_d.djs--;
					sd_d.s_ddff = sd_d.djs + "S后获取";
					var sd_ef_dd = setInterval(function () {
						if (sd_d.djs-- <= 0) {
							sd_d.djs = 120;
							sd_d.sd_dds = true;
							sd_d.s_ddff = "获取验证码";
							clearTimeout(sd_ef_dd);
						} else {
							sd_d.s_ddff = sd_d.djs + "S后获取";
						}
					}, 1000);
				});
			}
		}
	}

});
//# sourceMappingURL=register.js.map
