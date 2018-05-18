//登录
mui.init({
	beforeback: function() {
		//获得列表界面的webview  
		var list = plus.webview.currentWebview().opener();
		//触发列表界面的自定义事件（refresh）,从而进行数据刷新  
		console.log(JSON.stringify(list))
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
		dengl_ddf: function() { //登录
			
			if(!this.zmobile) {
				mui.toast("用户名不能为空");

				return
			}
			if(!this.zpassword) {
				mui.toast("密码不能为空");
				return
			}
			if(!validate()){
					mui.toast("验证码不正确");
				return
			}
			var sd_d = this,
				login = {}
			login.Services = "user.login"
			login.mobile = this.zmobile
			login.password = this.zpassword
			m_ajax(login, function(data) {
				setuser(sd_d, data)
			})
		},
		dsf_dsdgf: function() { //手机动态码登录
			if(!this.smobile) {
				mui.toast("手机号不能为空");
				return
			}
			if(!this.smobilecode) {
				mui.toast("验证码不能为空");
				return
			}
			var sd_d = this,
				login = {}
			login.Services = "user.login"
			login.mobile = this.smobile
			login.mobilecode = this.smobilecode
			m_ajax(login, function(data) {
				setuser(sd_d, data)
			})
		},
		yasd_d: function() { //获取验证码按钮触发
			if(!yanza.phone(this.smobile)) {
				mui.toast("手机号格式错误");
				return
			}
			var sd_d = this,
				sendMobileVerifyCode = {}
			sendMobileVerifyCode.Services = "ajaxverify.sendMobileVerifyCode"
			sendMobileVerifyCode.mobile = this.smobile
			if(this.sd_dds) {
				m_ajax(sendMobileVerifyCode, function(data) {
					sd_d.sd_dds = false
					sd_d.djs--
						sd_d.s_ddff = sd_d.djs + "S后获取"
					var sd_ef_dd = setInterval(function() {
						if(sd_d.djs-- <= 0) {
							sd_d.djs = 120
							sd_d.sd_dds = true
							sd_d.s_ddff = "获取验证码"
							clearTimeout(sd_ef_dd)
						} else {
							sd_d.s_ddff = sd_d.djs + "S后获取"
						}

					}, 1000)
				})
			}

		}
	}

})

//设置一个全局的变量，便于保存验证码
var code;

function createCode() {
	//首先默认code为空字符串
	code = '';
	//设置长度，这里看需求，我这里设置了4
	var codeLength = 4;
	var codeV = document.getElementById('code');
	//设置随机字符
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	//循环codeLength 我设置的4就是循环4次
	for(var i = 0; i < codeLength; i++) {
		//设置随机数范围,这设置为0 ~ 36
		var index = Math.floor(Math.random() * 36);
		//字符串拼接 将每次随机的字符 进行拼接
		code += random[index];
	}
	//将拼接好的字符串赋值给展示的Value
	codeV.value = code;
}

//下面就是判断是否== 的代码，无需解释
function validate() {
	var oValue = document.getElementById('input').value.toUpperCase(),
		ssd_sd = false
	if(oValue == 0) {
	
	} else if(oValue != code) {
		
		oValue = ' ';
		createCode();
	} else {
		ssd_sd = true
	}
	return ssd_sd;
}

//设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
window.onload = function() {

	createCode();
}