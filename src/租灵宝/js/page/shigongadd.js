//施工项目添加
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

var picker_a = new mui.PopPicker({
	"layer": [1]
});
var picker_b = new mui.PopPicker({
	"layer": [1]
});

var self = {}

var dtPicker = new mui.DtPicker({
	"type": "date",
	"beginYear": "1950" //开始时间

});

var km = new Vue({
	el: '#post_message',
	data: {
		kmhs: "",
		sheng_a: "",
		method_b: "", //分类 
		method_a: "" //招标方式
	},
	methods: {
		dsf_iuy_s: function() { //提交
			var da_ta = this.kmhs
			if(!da_ta.name) {
				mui.toast('标题不能为空');
				return
			}
			if(!da_ta.budget) {
				mui.toast('预算不能为空');
				return
			}
			if(!da_ta.projectname) {
				mui.toast('工程名称不能为空');
				return
			}
			if(!da_ta.type) {
				mui.toast('工程类型不能为空');
				return
			}

			if(!da_ta.deadline) {
				mui.toast('投标截止时间不能为空');
				return
			}
			if(!da_ta.projectcode) {
				mui.toast('项目编号不能为空');
				return
			}
			if(!da_ta.biddingcode) {
				mui.toast('招标编号不能为空');
				return
			}
			if(!da_ta.time) {
				mui.toast('招标开始时间不能为空');
				return
			}
			if(!da_ta.method) {
				mui.toast('请选择招标方式');
				return
			}
			if(!da_ta.cat_id) {
				mui.toast('请选择工程类别');
				return
			}
			if(!this.sheng_a) {
				mui.toast('请选择所在区域');
				return
			}
			if(!da_ta.address) {
				mui.toast('详细地址不能为空');
				return
			}
			if(!da_ta.content) {
				mui.toast('项目详情不能为空');
				return
			}
			m_post(da_ta, function(data) {
				mui.back()
			})

		},
		xsd_sdgfx: function() {
			document.activeElement.blur()
			var sd_ds = this
			picker_re.show(function(rl) {
				sd_ds.sheng_a = rl[0].text + "-" + rl[1].text + (rl[2].text ? '-' + rl[2].text : '')
				sd_ds.kmhs.level1 = rl[0].value
				sd_ds.kmhs.level2 = rl[1].value
				sd_ds.kmhs.level3 = rl[2].value
			})
		},
		tytew_sd: function(dta) {
			   document.activeElement.blur();
			var sd_Sd = this
			dtPicker.show(function(rs) {
				if(dta == 1) {
					sd_Sd.kmhs.deadline = rs.text
				} else if(dta == 2) {
					sd_Sd.kmhs.time = rs.text

				}

			})
		},

		kjghs_s: function(data) {
			var sd_sdf = {}
			sd_sdf.Services = "project.add"
			sd_sdf.usertoken = getusertoken()
			if(self.i_d) {
				sd_sdf.id = self.i_d
			}
			
			if(data) {
				sd_sdf.Services = "	project.edit"
				console.log()
				sd_sdf.id=data.id
				this.method_a = data.method_name
				this.method_b = data.cat_name
				this.sheng_a = data.areaer[1].name + ">" + data.areaer[2].name + ">" + data.areaer[3].name
				sd_sdf=assign_dsdf(sd_sdf, data);
			} else {
				sd_sdf.name = "" //标题
				sd_sdf.cat_id = "" //项目分类
				sd_sdf.budget = "" //预算
				sd_sdf.projectname = "" //	工程名称
				sd_sdf.type = "" //工程类型
				sd_sdf.deadline = "" //投标截止时间
				sd_sdf.projectcode = "" //	项目编号
				sd_sdf.biddingcode = "" //	招标编号
				sd_sdf.time = "" //招标开始时间
				sd_sdf.method = "" //招标方式
				sd_sdf.level1 = "" //
				sd_sdf.level2 = "" //
				sd_sdf.level3 = "" //
				sd_sdf.address = "" //详细地址
				sd_sdf.content = "" //项目详情
			}
			return sd_sdf;
		},
		feni_sdfx: function() { //招标方式
			   document.activeElement.blur();
			var sd_sdd = this
			picker_a.show(function(rs) {
				sd_sdd.kmhs.method  = rs[0].value
				sd_sdd.method_a= rs[0].text
			})
		},
		feni_sdfx_b: function() { //工程类别
			   document.activeElement.blur();
			var sd_sdd = this
			picker_b.show(function(rs) {
				sd_sdd.kmhs.cat_id = rs[0].value
				sd_sdd.method_b = rs[0].text
			})
		}
	},
	created: function() {
		var sd_ois = this
		mui.plusReady(function() {
			self = plus.webview.currentWebview();
			var projectlog = {}
			projectlog.Services = "project.projectlog"
			m_ajax(projectlog, function(data) { //获取分类信息
				var sd_sds = []
				data.methodlist.map(function(a) {
					var sd_sdf = {}
					sd_sdf.value = a.id
					sd_sdf.text = a.name
					sd_sds.push(sd_sdf)
				})
				var sd_sds_b = []
				data.projectlog.map(function(a) {
					var sd_sdf = {}
					sd_sdf.value = a.id
					sd_sdf.text = a.name
					sd_sds_b.push(sd_sdf)
				})
				picker_a.setData(sd_sds)
				picker_b.setData(sd_sds_b)
			})

			if(self.i_d) { //获取单条信息
				var userview = {}
				userview.Services = "project.userview"
				userview.usertoken = getusertoken()
				userview.id = self.i_d
				m_ajax(userview, function(data) {
					sd_ois.kmhs = sd_ois.kjghs_s(data)
				})
			} else {
				sd_ois.kmhs = sd_ois.kjghs_s()
			}
		})
	}

})