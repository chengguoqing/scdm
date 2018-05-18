//修改密码
var km = new Vue({
	el: '#change_password',
	data: {
		mobilecode: "", //验证码
		password: "", //密码
		repassword: "", //确认密码
		sd_dds: true,
		djs: 120,
		s_ddff: "获取验证码"
	},
	methods: {
		mimaqiang: function() { //密码强度
			var sd_s = this.password
			document.getElementById('dsf_d_df').classList.remove("aa", "ab", "ac");
			if(pass_qd(sd_s)) {
				document.getElementById('dsf_d_df').classList.add(pass_qd(sd_s));
			}
		},
		tijiao: function(phone) {

			this.mobile = phone
		},
		register: function() { //会员注册按钮触发

			if(!this.mobile) {
				mui.toast("请验证手机号");
				return
			}
			if(!yanza.phone(this.mobile)) {
				mui.toast("手机号格式错误");
				return
			}
			if(!this.mobilecode) {
				mui.toast("验证码不能为空");
				return
			}
			if(this.password.length < 6) {
				mui.toast("密码长度不够");
				return
			}
			if(this.repassword.length < 6) {
				mui.toast("确认密码长度不够");
				return
			}
			if(this.repassword != this.password) {
				mui.toast("两次密码输入不一致");
				return
			}
			var register = {},
				sd_dsdf = this
			register.Services = "user.resetPassword"
			register.mobile = this.mobile
			register.mobilecode = this.mobilecode
			register.password = this.password
			register.repassword = this.repassword
			m_ajax(register, function(data) {
				mui.toast("密码修改成功请重新登录");
				localStorage.removeItem("user")
				sd_dsdf.close()
				sd_dsdf.zhu("register")
			})
		}
	},
	created: function() {

	}

})