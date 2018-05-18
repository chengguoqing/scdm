//添加信息

mui.init({
	beforeback: function() {
		//获得列表界面的webview  
		var list = plus.webview.currentWebview().opener();
		//触发列表界面的自定义事件（refresh）,从而进行数据刷新  
		mui.fire(list, 'refr_sdresh');
		//返回true，继续页面关闭逻辑  
		return true;
	}
});

var ue = UE.getEditor('editor');
var picker_f = new mui.PopPicker({
	"layer": [3]
});
var self = {}

var picker = ""
var dtPicker = new mui.DtPicker({
	"type": "date",
	"beginYear": "1950" //开始时间

});

var km = new Vue({
	el: '#post_message',
	data: {
		fengg_s: "",
		cat_id: "", //分类
		sd_ss_a: "",
		name: "", //名称
		model: "", //需求
		mapaddr: "", //地点
		measure_unit: "", //单位
		leasetime: "", //时间
		budgetprice: "", //价格
		number: "", //数量
		contacts: "", //联系人
		mobile: "", //联系电话
		brief: "",
		content: "" //描述

	},
	methods: {

		fenleis: function() {
			document.activeElement.blur()
			var sd_Sd = this
			picker_f.show(function(rl) {
				sd_Sd.sd_ss_a = rl[0].text + "-" + rl[1].text + (rl[2].text ? '-' + rl[2].text : "")

				if(rl[1].text) {
					sd_Sd.cat_id = rl[1].value
				}
				if(rl[2].text) {
					sd_Sd.cat_id = rl[2].value
				}
			})

		},
		tytew_sd: function() {
			document.activeElement.blur()
			var sd_Sd = this
			dtPicker.show(function(rs) {
				sd_Sd.leasetime = rs.text
			})
		},
		uyt_tis: function() { //确认按钮触发

			if(!this.name) {
				alert("名称不能为空");
				return
			}
			if(!this.cat_id) {
				alert("分类不能为空");
				return
			}
			if(!this.model) {
				alert("需求不能为空");
				return
			}
			if(!this.mapaddr) {
				alert("地点不能为空");
				return
			}
			if(!this.measure_unit) {
				alert("单位不能为空");
				return
			}
			if(!this.leasetime) {
				alert("时间不能为空");
				return
			}
			if(!this.budgetprice) {
				alert("价格不能为空");
				return
			}
			if(!this.number) {
				alert("数量不能为空");
				return
			}
			if(!this.contacts) {
				alert("联系人不能为空");
				return
			}
			if(!this.mobile) {
				alert("联系电话不能为空");
				return
			}
			if(!yanza.phone(this.mobile)) {
				alert("联系电话格式错误")
				return
			}
			if(!this.brief) {
				alert("描述不能为空");
				return
			}
			var usergood_add = {},
				dsf_sds = this

			usergood_add.Services = "usergood.singleadd"
			if(self.bianji) {
				usergood_add.Services = "usergood.singleedit"
				usergood_add.good_id = self.bianji
			}

			usergood_add.usertoken = getusertoken()
			usergood_add.type = self.t_id
			usergood_add.cat_id = this.cat_id
			usergood_add.name = this.name //名称
			usergood_add.model = this.model //需求
			usergood_add.mapaddr = this.mapaddr //地点
			usergood_add.measure_unit = this.measure_unit //单位
			usergood_add.leasetime = this.leasetime //时间
			usergood_add.budgetprice = this.budgetprice //价格
			usergood_add.number = this.number //数量
			usergood_add.contacts = this.contacts //联系人
			usergood_add.mobile = this.mobile //联系电话
			usergood_add.brief = this.brief //描述
			usergood_add.content = ue.getContent(); //详情
			m_post(usergood_add, function(data) {
				mui.toast("提交成功");
				mui.back()
			})

		}
	},
	created: function() {
		var sdj_s = this
		mui.plusReady(function() {
			self = plus.webview.currentWebview();
			if(self.t_id == 2) {
				picker_f.setData(f_qiu)
			} else if(self.t_id == 4) {
				picker_f.setData(qiu_ergou)
			}
			if(self.bianji) {
				var singleview = {}
				singleview.Services = "usergood.singleview"
				singleview.usertoken = getusertoken()
				singleview.good_id = self.bianji
				m_ajax(singleview, function(data) {
					var sd_sdf = data.good
					sdj_s.sd_ss_a = data.catlog[0].name + "-" + data.catlog[1].name
					sdj_s.cat_id = data.catlog[1].id
					try {
						sdj_s.sd_ss_a += "-" + data.catlog[2].name
						sdj_s.cat_id = data.catlog[2].id
					} catch(e) {

					}
					setTimeout(function() {
						sdj_s.name = sd_sdf.name //名称
						sdj_s.model = sd_sdf.model //需求
						sdj_s.mapaddr = sd_sdf.mapaddr //地点
						sdj_s.measure_unit = sd_sdf.measure_unit //单位
						sdj_s.leasetime = sd_sdf.leasetime //时间
						sdj_s.budgetprice = sd_sdf.budgetprice //价格
						sdj_s.number = sd_sdf.number //数量
						sdj_s.contacts = sd_sdf.contacts //联系人
						sdj_s.mobile = sd_sdf.mobile //联系电话
						sdj_s.brief = sd_sdf.brief
						sdj_s.content = sd_sdf.content //描述
						ue.setContent(sd_sdf.content);
					}, 100)

				})
			}
		})
	}

})