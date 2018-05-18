"use strict";

//实名认证

var picker_re = new mui.PopPicker({
	"layer": [3]
});
picker_re.setData(dsdd_sd);
var self = "";
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
		idcardbackimg: "" //身份证反面照片
	},
	methods: {
		xsd_sdgfx: function xsd_sdgfx() {
			var sd_ds = this;
			document.activeElement.blur();
			picker_re.show(function (rl) {
				sd_ds.sheng_a = rl[0].text + "-" + rl[1].text + (rl[2].text ? '-' + rl[2].text : '');
				sd_ds.prov = rl[0].value;
				sd_ds.city = rl[1].value;
				sd_ds.area = rl[2].value;
			});
		},
		quer_sdf: function quer_sdf() {
			//确认按钮触发
			if (!this.company) {
				mui.toast("企业名称不能为空");
				return;
			}
			if (!this.industry) {
				mui.toast("企业性质不能为空");
				return;
			}
			if (!this.prov) {
				mui.toast("请选择省");
				return;
			}
			if (!this.city) {
				mui.toast("请选择市");
				return;
			}
			if (!this.address) {
				mui.toast("详细地址不能为空");
				return;
			}
			if (!this.mobile) {
				mui.toast("联系电话不能为空");
				return;
			}
			if (!yanza.phone(this.mobile)) {
				mui.toast("联系电话格式错误");
				return;
			}

			if (!this.idnumber) {
				mui.toast("身份证号码不能为空");
				return;
			}
			if (!yanza.car_t(this.idnumber)) {
				mui.toast("身份证号码格式错误");
				return;
			}
			if (!this.license) {
				mui.toast("请上传企业营业执照");
				return;
			}
			if (!this.idcardfaceimg) {
				mui.toast("身份证正面照片");
				return;
			}
			if (!this.idcardbackimg) {
				mui.toast("身份证反面照片");
				return;
			}
			var addauthentication = {},
			    sd_sdsd = this;
			addauthentication.Services = "usercompany.addauthentication";
			if (self.member) {
				addauthentication.id = this.ben_id;
			}
			addauthentication.usertoken = getusertoken();
			addauthentication.member = 2;
			addauthentication.company = this.company;
			addauthentication.mobile = this.mobile;
			addauthentication.level1 = this.prov;
			addauthentication.level2 = this.city;
			addauthentication.level3 = this.area;
			addauthentication.address = this.address;
			addauthentication.idnumber = this.idnumber;
			addauthentication.industry = this.industry;
			addauthentication.license = this.license;
			addauthentication.idcardfaceimg = this.idcardfaceimg;
			addauthentication.idcardbackimg = this.idcardbackimg;
			console.log(JSON.stringify(addauthentication));
			m_post(addauthentication, function (data) {
				mui.toast("认证成功");
				console.log(JSON.stringify(data));
				mask.show();
				document.getElementById("dsf_iuy_ddertx").classList.add("show");
			});
		},
		yesd_d: function yesd_d(title, hgssf) {
			var sd_sd = this;

			sc.xz(title, function (url) {
				switch (hgssf) {
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
			});
		},
		d_sd_d: function d_sd_d(q, e) {
			e.stopPropagation();
			var sd_sd = this;
			switch (q) {
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
		}

	},
	created: function created() {
		var sd_df = this;
		mui.plusReady(function () {
			self = plus.webview.currentWebview();
			if (self.member) {
				var authentication = {};
				authentication.Services = "usercompany.authentication";
				authentication.usertoken = getusertoken();
				authentication.member = self.member;
				m_ajax(authentication, function (data) {
					sd_df.ben_id = data.id;
					sd_df.company = data.company;
					sd_df.mobile = data.mobile;
					sd_df.prov = data.level1;
					sd_df.city = data.level2;
					sd_df.area = data.level3;
					sd_df.sheng_a = data.area;
					sd_df.address = data.address;
					sd_df.idnumber = data.idnumber;
					sd_df.industry = data.industry;
					sd_df.license = data.license;
					sd_df.idcardfaceimg = data.idcardfaceimg;
					sd_df.idcardbackimg = data.idcardbackimg;
				});
			}
		});
	}

});

var mask = mui.createMask(function () {
	document.getElementById("dsf_iuy_ddertx").classList.remove("show");
});
//# sourceMappingURL=authentication.js.map
