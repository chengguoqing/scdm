"use strict";

//验证码
Vue.component('yanzhen', {
	props: {
		tishi: "",
		ty_pe: ""

	},
	template: "\n\t<ul class=\"dsf_fort\">\n                    <li class=\"mui-input-row pr ds_dfgfc mt0\">\n                        <input type=\"tel\" :placeholder=\"tishi\" class=\"dsf_s_sdf mui-input-clear\" v-model=\"mobile\">\n                        <span class=\"fz12 dsf_d_dfgx\" @click=\"yasd_d\">\n                     \t{{s_ddff}}\n                        </span>\n                    </li>\n                   \n\n                </ul>\n\t",
	data: function data() {
		return {
			mobile: "", //手机号
			sd_dds: true,
			djs: 120,
			s_ddff: "获取验证码"
		};
	},

	methods: {
		yasd_d: function yasd_d() {
			//获取验证码按钮触发

			if (!yanza.phone(this.mobile)) {
				alert("手机号格式错误");
				return;
			}
			var sd_d = this,
			    registerByMobile = {};
			registerByMobile.Services = "ajaxverify.registerByMobile";
			registerByMobile.mobile = this.mobile;
			m_ajax(registerByMobile, function (data) {
				if (sd_d.ty_pe == 0) {
					//注册
					if (data.errcode == 1) {
						alert(data.errmsg);
						return;
					}
					sd_d.fasong();
					return;
				}
				if (sd_d.ty_pe == 1) {
					//其他验证
					if (data.errcode == 0) {
						alert(data.errmsg);
						return;
					}
					sd_d.fasong();
					return;
				}
			}, "", true);
		},
		fasong: function fasong() {
			var sd_d = this,
			    sendMobileVerifyCode = {};
			sendMobileVerifyCode.Services = "ajaxverify.sendMobileVerifyCode";
			sendMobileVerifyCode.mobile = sd_d.mobile;
			sd_d.$emit("tijiao", sd_d.mobile);
			if (sd_d.sd_dds) {
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
