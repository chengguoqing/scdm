//实名认证

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
var picker_re = new mui.PopPicker({
	"layer": [3]
});
picker_re.setData(dsdd_sd)
var payChanel;

function getPayChanel() {
	//设备信息加载完成，先获取微信的支付通道
	plus.payment.getChannels(function(channels) {
		for(var i in channels) {
			if(channels[i].id == "wxpay") {
				payChanel = channels[i];
			}
		}
	}, function(e) {
		alert("获取支付通道失败：" + e.message);
	});
}
document.addEventListener('plusready', getPayChanel, false);
var self = ""
var km = new Vue({
	el: '#authentication',
	data: {
		sheng_a: "",
		ben_id: "",
		company: "", //企业名称
		industry: "", //企业性质
		prov: "", //省id
		city: "", //市id
		area: "", //区id
		address: "", //详细地址
		mobile: "", //联系电话
		idnumber: "", //身份证号
		license: "", //企业营业执照
		idcardfaceimg: "", //身份证正面照片
		idcardbackimg: "", //身份证反面照片
		topay: -1,
		createtimestr: "",
		money: "",
		id_sd: 0,
		is_verify:0
	},
	methods: {
		lijizhifu: function() { //支付
			sd_sdf = {}
			sd_sdf.Services = "order.addorder"
			sd_sdf.h_display = 1
			sd_sdf.id = this.id_sd
			sd_sdf.good_table = "usercompany"
			sd_sdf.order_type = "vip"
			sd_sdf.final_amt = this.money 
			sd_sdf.usertoken = getusertoken()

				
			var order_id = "",
				sd_sdfsdf = this,
				order_id=""
				
				
			m_ajax(sd_sdf, function(data) {
				order_id = data.order_id
				mui.post("http://api.zulingbao.com/apptopay/wechat/beforepay.php", {
					order_id: data.order_id
				}, function(data) {
//					alert("order_id"+order_id+"  "+JSON.stringify(data)+"  "+JSON.stringify(payChanel))
					plus.payment.request(payChanel, data, function(result) {
						var infosee = {}
						infosee.Services = "order.infosee"
						infosee.id = sd_sdfsdf.id_sd
						infosee.order_type = "vip"
						infosee.order_id = order_id
//						alert(JSON.stringify(infosee))
						m_ajax(infosee, function(data) {
							mui.toast('支付成功');
							mui.back()
						})

					}, function(e) {
						console.log(JSON.stringify(e));
						alert("付费失败");
					});
				});
			})

		},
		xsd_sdgfx: function() {
			var sd_ds = this
			document.activeElement.blur()
			picker_re.show(function(rl) {
				sd_ds.sheng_a = rl[0].text + "-" + rl[1].text + (rl[2].text ? '-' + rl[2].text : '')
				sd_ds.prov = rl[0].value
				sd_ds.city = rl[1].value
				sd_ds.area = rl[2].value
			})
		},
		quer_sdf: function() { //确认按钮触发
			if(!this.company) {
				mui.toast("企业名称不能为空")
				return
			}
			if(!this.industry) {
				mui.toast("企业性质不能为空")
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
			if(!this.license) {
				mui.toast("请上传企业营业执照")
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
			addauthentication.member = 2
			addauthentication.company = this.company
			addauthentication.mobile = this.mobile
			addauthentication.level1 = this.prov
			addauthentication.level2 = this.city
			addauthentication.level3 = this.area
			addauthentication.address = this.address
			addauthentication.idnumber = this.idnumber
			addauthentication.industry = this.industry
			addauthentication.license = this.license
			addauthentication.idcardfaceimg = this.idcardfaceimg
			addauthentication.idcardbackimg = this.idcardbackimg
			var sd_sdf = this
			m_post(addauthentication, function(data) {
				mui.toast("认证成功")
				console.log(JSON.stringify(data))
				sd_sdf.money = data.money
				sd_sdf.id_sd = data.id
				mask.show()
				document.getElementById("dsf_iuy_ddertx").classList.add("show");
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
			self = {}
			try {
				self = plus.webview.currentWebview();
			} catch(e) {
				self.member = 2
			}
			if(self.member) {
				var authentication = {}
				authentication.Services = "usercompany.authentication"
				authentication.usertoken = getusertoken()
				authentication.member = self.member
				m_ajax(authentication, function(data) {
					sd_df.ben_id = data.id
					sd_df.id_sd = data.id
					sd_df.company = data.company
					sd_df.mobile = data.mobile
					sd_df.prov = data.level1
					sd_df.city = data.level2
					sd_df.area = data.level3
					sd_df.sheng_a = data.area
					sd_df.address = data.address
					sd_df.idnumber = data.idnumber
					sd_df.industry = data.industry
					sd_df.license = data.license
					sd_df.idcardfaceimg = data.idcardfaceimg
					sd_df.idcardbackimg = data.idcardbackimg
					sd_df.topay = data.topay
					sd_df.createtimestr = data.createtimestr
					sd_df.money = data.money
					sd_df.is_verify=data.is_verify
				})
			}
		})
	}

})

var mask = mui.createMask(function() {
	document.getElementById("dsf_iuy_ddertx").classList.remove("show");
});