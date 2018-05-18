//店铺设置
var dtPicker = new mui.DtPicker({
	"type": "date",
	"beginYear": "1950" //开始时间

});
var ue = UE.getEditor('editor');
var km = new Vue({
	el: '#set_shop',
	data: {
		lmu: [{
			id: 1,
			name: "出租",
			cls: ""
		}, {
			id: 3,
			name: "出售",
			cls: ""
		}, {
			id: 5,
			name: "运输",
			cls: ""
		}, {
			id: 1,
			name: "维修",
			cls: ""
		}],
		sd_sdf: "",
		er_ssd_sdf: 1, //判读域名可用
		gallery: [] //相册id

	},
	methods: {
		sdf_sdf_s: function() { //二级域名查询
			var sd_sdf = this.sd_sdf.host
			var testing = {},
				sdd_srr = this
			testing.Services = "usershop.testing"
			testing.usertoken = getusertoken()
			testing.host = sd_sdf
			m_ajax(testing, function(data) {
				sdd_srr.er_ssd_sdf = data
			})

		},
		qye_sd: function() { //提交按钮触发
			var sd_sdfr = [],
				datys = this.sd_sdf
			this.lmu.map(function(a) {
				if(a.cls == "act") {
					sd_sdfr.push(a.id)
				}
			})
			if(this.er_ssd_sdf == 1 && !datys.id) {
				mui.toast('二级域名不可用');
				return
			}

			if(!datys.name) {
				mui.toast('店铺标题不能为空');
				return
			}

			if(!datys.kewords) {
				mui.toast('关键词不能为空');
				return
			}
			if(!datys.description) {
				mui.toast('seo描述不能为空');
				return
			}
			if(!datys.shop_logo) {
				mui.toast('请上传店铺logo');
				return
			}

			if(!datys.realname) {
				mui.toast('联系人不能为空');
				return
			}
			if(!datys.tel) {
				mui.toast('联系热线不能为空');
				return
			}
			if(!datys.ervicetime) {
				mui.toast('营业时间不能为空');
				return
			}
			if(!datys.adder) {
				mui.toast('公司地址不能为空');
				return
			}
			datys.content = ue.getContent();
			if(!datys.content) {
				mui.toast('详情描述不能为空');
				return
			}
			var add_sd = {},
				sd_sdse = []

			this.gallery.map(function(a) {
				sd_sdse.push(a.id)
			})
			add_sd.Services = "usershop.addshop"
			add_sd.usertoken = getusertoken()
			add_sd.gallery = sd_sdse

			add_sd = assign_dsdf(datys, add_sd);
			console.log(JSON.stringify(add_sd))
			m_post(add_sd, function(data) {
				if(!datys.id){
					mui.toast('店铺添加成功');
				}else{
					mui.toast('店铺修改成功');
				}
				
				location.reload();
			})
		},
		delimg: function(idx,id) { //图片删除
			this.gallery.splice(idx, 1);
			var delimg = {}
			delimg.Services = "usershop.delimg"
			delimg.usertoken=getusertoken()
			delimg.shop_id = this.sd_sdf.shopid
			delimg.id = id
			m_ajax(delimg, function() {
				mui.toast('banner删除成功');
			})
		},
		da_ta: function(data) {
			var addshop = {},
				sd_sdfdrt = this
			addshop.Services = "usershop.addshop"
			addshop.usertoken = getusertoken()
			addshop.h_display = 2
			if(data) {
				addshop = assign_dsdf(addshop, data); //合并json
				addshop.name = data.title
				addshop.shopid = data.id
				var sd_sdf = []
				data.banner.map(function(a) {
					var sd_sdfs = {}
					sd_sdfs.id = a.id
					sd_sdfs.small = a.large
					sd_sdf.push(sd_sdfs)
				})
				sd_sdfdrt.gallery = sd_sdf
				setTimeout(function() {
					ue.setContent(data.content);
				}, 500)
			} else {
				addshop.company = "" //公司名称
				addshop.name = "" //店铺名
				addshop.nav = [] //店铺栏目（1出租2求租3出售4求购5运输7维修）
				addshop.host = "" //二级域名
				addshop.kewords = "" //关键字
				addshop.description = "" //描述
				addshop.shop_logo = "" //店铺logo
				addshop.realname = "" //真实姓名
				addshop.tel = "" //电话
				addshop.ervicetime = "" //营业时间
				addshop.adder = "" //公司地址
				addshop.content = "" //公司简介
				addshop.gallery = [] //banner

			}
			return addshop;
		},
		shangc_sd: function(title) { //上传图片
			var sd_sd = this
			if(this.gallery.length >= 5) {
				mui.toast("图片最多上传5张!")
				return
			}
			sc.xz(title, function(url) {
				var goodprocutgallery = {}
				goodprocutgallery.Services = "Image.addshopgallery"
				goodprocutgallery.usertoken = getusertoken()
				goodprocutgallery.Image = url
				m_post(goodprocutgallery, function(data) {
					console.log(JSON.stringify(data))
					sd_sd.gallery.push(data)
				})
			})
		},
		tytew_sd: function() {
			document.activeElement.blur()
			var sd_Sd = this
			dtPicker.show(function(rs) {

				sd_Sd.sd_sdf.ervicetime = rs.text
			})
		},
		yesd_d: function(title, hgssf) {
			var sd_sd = this
			sc.xz(title, function(url) {
				sd_sd.sd_sdf.shop_logo = url
			})
		},
		d_sd_d: function(q, e) {
			e.stopPropagation()
			this.sd_sdf.shop_logo = this
		}
	},
	created: function() {
		var sd_khjs = this
		sd_khjs.sd_sdf = sd_khjs.da_ta()
		var view = {}
		view.Services = "usershop.view"
		view.usertoken = getusertoken()
		m_ajax(view, function(data) {
			sd_khjs.sd_sdf = sd_khjs.da_ta(data)
		})
	}

})