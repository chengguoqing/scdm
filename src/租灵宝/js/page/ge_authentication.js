//实名认证
mui.init({
	beforeback: function() {
		//获得列表界面的webview  
		var list = plus.webview.currentWebview().opener();
		//触发列表界面的自定义事件（refresh）,从而进行数据刷新  
		mui.fire(list, 'refresh');
		//返回true，继续页面关闭逻辑  
		return true;
	}
});
var self = {}

var picker_re = new mui.PopPicker({
	"layer": [3]
});
picker_re.setData(dsdd_sd)
var km = new Vue({
	el: '#authentication',
	data: {
		sheng_a: "",
		ben_id: "",
		company: "", //企业名称
		prov: "", //省id
		city: "", //市id
		area: "", //区id
		address: "", //详细地址
		mobile: "", //联系电话
		idnumber: "", //身份证号
		idcardfaceimg: "", //身份证正面照片
		idcardbackimg: "" //身份证反面照片
	},
	methods: {
		xsd_sdgfx: function() {
			document.activeElement.blur();
			var sd_ds = this
			picker_re.show(function(rl) {
				sd_ds.sheng_a = rl[0].text + "-" + rl[1].text + (rl[2].text ? '-' + rl[2].text : '')
				sd_ds.prov = rl[0].value
				sd_ds.city = rl[1].value
				sd_ds.area = rl[2].value
			})
		},
		quer_sdf: function() { //确认按钮触发
			if(!this.company) {
				mui.toast("姓名不能为空")
				return
			}
			if(!this.prov) {
				mui.toast("请选择省")
				return
			}
			if(!this.city) {
				mui.toast("请选择市")
				return
			}
			if(!this.area) {
				mui.toast("请选择区")
				return
			}
			if(!this.address) {
				mui.toast("详细地址不能为空")
				return
			}
			if(!this.mobile) {
				mui.toast("联系电话不能为空")
				return
			}
			if(!yanza.phone(this.mobile)) {
				mui.toast("联系电话格式错误")
				return
			}

			if(!this.idnumber) {
				mui.toast("身份证号码不能为空")
				return
			}
			if(!yanza.car_t(this.idnumber)) {
				mui.toast("身份证号码格式错误")
				return
			}
			if(!this.idcardfaceimg) {
				mui.toast("身份证正面照片")
				return
			}
			if(!this.idcardbackimg) {
				mui.toast("身份证反面照片")
				return
			}
			var addauthentication = {},
				sd_sdsd = this
			addauthentication.Services = "usercompany.addauthentication"
			if(self.member) {
				addauthentication.id = this.ben_id
			}
			addauthentication.usertoken = getusertoken();
			addauthentication.member = 1
			addauthentication.company = this.company
			addauthentication.mobile = this.mobile
			addauthentication.level1 = this.prov
			addauthentication.level2 = this.city
			addauthentication.level3 = this.area
			addauthentication.address = this.address
			addauthentication.idnumber = this.idnumber
			addauthentication.idcardfaceimg = this.idcardfaceimg
			addauthentication.idcardbackimg = this.idcardbackimg
			console.log(JSON.stringify(addauthentication))
			m_post(addauthentication, function(data) {
				mui.toast("认证成功")
				console.log(JSON.stringify(data))
				mui.back()
			})
		},
		yesd_d: function(title, hgssf) {
			var sd_sd = this

			sc.xz(title, function(url) {
				switch(hgssf) {
					case 1:
						sd_sd.license = url;
						break;
					case 2:
						sd_sd.idcardfaceimg = url;
						break;
					case 3:
						sd_sd.idcardbackimg = url;
						break;
				}
			})
		},
		d_sd_d: function(q, e) {
			e.stopPropagation()
			var sd_sd = this
			switch(q) {
				case 1:
					sd_sd.license = "";
					break;
				case 2:
					sd_sd.idcardfaceimg = "";
					break;
				case 3:
					sd_sd.idcardbackimg = "";
					break;
			}
		},

	},
	created: function() {

		var sd_df = this
		mui.plusReady(function() {
			self = plus.webview.currentWebview();
			if(self.member) {
				var authentication = {}
				authentication.Services = "usercompany.authentication"
				authentication.usertoken = getusertoken()
				authentication.member = self.member
				m_ajax(authentication, function(data) {
					sd_df.ben_id = data.id
					sd_df.company = data.company
					sd_df.mobile = data.mobile
					sd_df.prov = data.level1
					sd_df.city = data.level2
					sd_df.area = data.level3
					sd_df.sheng_a = data.area
					sd_df.address = data.address
					sd_df.idnumber = data.idnumber
					sd_df.industry = data.industry
					sd_df.idcardfaceimg = data.idcardfaceimg
					sd_df.idcardbackimg = data.idcardbackimg
				})
			}
		})

	}

})