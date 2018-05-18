//团队添加
var ue = UE.getEditor('editor');
mui.init({
	beforeback: function() {
		//获得列表界面的webview  
		var list = plus.webview.currentWebview().opener();
		console.log(JSON.stringify(list))
		mui.fire(list, 'shuasd');
		return true;
	}
});

var self = {}

var km = new Vue({
	el: '#tuanduiadd',
	data: {
		t_aa: ""
	},
	methods: {
		add_btn: function() {
			var f_data = this.t_aa
			if(!f_data.name) {
				mui.toast('请输入姓名');
				return
			}
			if(!f_data.position) {
				mui.toast('请输入职位');
				return
			}
			if(!f_data.hours) {
				mui.toast('请输入工作经验');
				return
			}
			if(!f_data.brief) {
				mui.toast('请输入简介');
				return
			}
			f_data.content = ue.getContent();
			m_post(f_data, function(data) {
				mui.back()
			})
		},
		yesd_d: function(title, hgssf) {
			var sd_sd = this
			sc.xz(title, function(url) {
				sd_sd.t_aa.Image = url
			})
		},
		d_sd_d: function(q, e) {
			e.stopPropagation()
			this.t_aa.Image = ""

		},
		data_p: function(data) { //数据初始化
			var dyuys = {}
			if(self.i_d) {
				dyuys.Services = "shopteam.edit"
				dyuys.id = self.i_d
				dyuys.shop_id = self.shop_id
			} else {
				dyuys.Services = "shopteam.add"
			}

			dyuys.usertoken = getusertoken()
			if(data) {
				dyuys.name = data.name
				dyuys.position = data.position //职位
				dyuys.hours = data.hours //工作经验
				dyuys.brief = data.brief //简介
				dyuys.Image = data.large.length < 10 ? '' : data.large //照片
				dyuys.content = data.content //详情
				setTimeout(function() {
					ue.setContent(data.content);
				}, 500)

			} else {
				dyuys.name = ""
				dyuys.position = "" //职位
				dyuys.hours = "" //工作经验
				dyuys.brief = "" //简介
				dyuys.Image = "" //照片
				dyuys.content = "" //详情
			}
			return dyuys

		}
	},
	created: function() {
		var sd_ersd = this
		mui.plusReady(function() {
			self = plus.webview.currentWebview();
			if(self.i_d) {
				var view = {}
				view.Services = "shopteam.view"
				view.usertoken = getusertoken()
				view.id = self.i_d
				view.shop_id = self.shop_id
				m_ajax(view, function(data) {
					sd_ersd.t_aa = sd_ersd.data_p(data)

				})
			} else {
				sd_ersd.t_aa = sd_ersd.data_p()
			}
		})
	}

})