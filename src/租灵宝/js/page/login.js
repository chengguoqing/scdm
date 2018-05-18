var km = new Vue({
	el: '#item1',
	data: {
		mobilecode: "", //验证码
		password: "", //密码
		repassword: "", //确认密码
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
				alert("请验证手机号");
				return
			}
			if(!yanza.phone(this.mobile)) {
				alert("手机号格式错误");
				return
			}
			if(!this.mobilecode) {
				alert("验证码不能为空");
				return
			}
			if(this.password.length < 6) {
				alert("密码长度不够");
				return
			}
			if(this.repassword.length < 6) {
				alert("确认密码长度不够");
				return
			}
			if(this.repassword != this.password) {
				alert("两次密码输入不一致");
				return
			}
			var register = {},
				sd_dsdf = this
			register.Services = "user.register"
			register.mobile = this.mobile
			register.mobilecode = this.mobilecode
			register.password = this.password
			register.repassword = this.repassword
			m_ajax(register, function(data) {
				setuser(sd_dsdf, data)
			})
		}
	}

})

//注册页
mui.ready(function() {
	mui(".dsf_d_sdsf").on("tap", ".de_jyh_d", function() {
		open("register")
	})
})