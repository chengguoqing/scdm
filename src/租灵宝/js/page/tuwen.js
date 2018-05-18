//定位信息发布

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
var picker_f = new mui.PopPicker({
	"layer": [3]
});

var self = {}
var ue = UE.getEditor('editor');
var km = new Vue({
	el: '#tuwen',
	data: {
		type: self.t_id,
		h_display: 2,
		name: "", //名称
		keyword: "", //关键词
		brief: "", //描述
		cat_id: "", //分类id
		cat_text: "请选择",
		gallery: [], //相册id
		content: "" //详情
	},
	methods: {
		shangc_sd: function(title) { //上传图片
			var sd_sd = this
			if(this.gallery.length >= 5) {
				mui.toast("图片最多上传5张!")
				return
			}
			sc.xz(title, function(url) {
				var goodprocutgallery = {}
				goodprocutgallery.Services = "Image.goodprocutgallery"
				goodprocutgallery.usertoken = getusertoken()
				goodprocutgallery.Image = url
				m_post(goodprocutgallery, function(data) {
					sd_sd.gallery.push(data)
				})
			})
		},
		san_uiuy_s: function(idx,kjhjs) { //图片删除
			this.gallery.splice(idx, 1);
			if(kjhjs){
				var sd_sde={}
				sd_sde.Services="usergood.gpgallerydel"
				sd_sde.usertoken=getusertoken()
				sd_sde.gallery_id=kjhjs
				m_ajax(sd_sde,function(){
					mui.toast('删除成功');
				})
			}
		},
		dingwe: function() {
			document.activeElement.blur();
			var sd_sd = this
			picker_f.show(function(rl) {
				sd_sd.cat_text = rl[0].text + (rl[1].text ? '-' + rl[1].text : "") + (rl[2].text ? '-' + rl[2].text : "")
				if(rl[0].text) {
					sd_sd.cat_id = rl[0].value
				}
				if(rl[1].text) {
					sd_sd.cat_id = rl[1].value
				}
				if(rl[2].text) {
					sd_sd.cat_id = rl[2].value
				}
			})
		},
		next_yi_s: function() { //下一步按钮触发
			if(!this.name) {
				mui.toast("名称不能为空")
				return
			}
			if(!this.cat_id) {
				mui.toast("分类不能为空")
				return
			}
			if(!this.keyword) {
				mui.toast("关键词不能为空")
				return
			}
			if(!this.brief) {
				mui.toast("描述不能为空")
				return
			}
			if(this.gallery.length < 1) {
				mui.toast("相册不能为空")
				return
			}
			var add_sd = {},
				sd_sdse = []
			this.gallery.map(function(a) {
					if(a.id){
						sd_sdse.push(a.id)
					}
				if(	a.gallery_id){
					sd_sdse.push(a.gallery_id)
				}
					
			

			})
			if(self.bianji) {
				add_sd.Services = "usergood.edit"
				add_sd.good_id = self.bianji
			} else {
				add_sd.Services = "usergood.add"
			} 

			add_sd.type = self.t_id
			add_sd.usertoken = getusertoken()
			add_sd.h_display = this.h_display
			add_sd.name = this.name
			add_sd.cat_id = this.cat_id 
			add_sd.keyword = this.keyword
			add_sd.brief = this.brief
			add_sd.cat_id = this.cat_id  
			 
			add_sd.gallery = sd_sdse
			
			add_sd.content = ue.getContent(); //详情 
			var sder_sd = this
			console.log(sd_sdse)

			m_post(add_sd, function(data) {
				if(self.bianji) {
					sder_sd.zhu("tuwensan", 'fade-in', {
						good_id: data.good_id
					})
				} else {
					sder_sd.zhu("tuwener", 'fade-in', {
						good_id: data.good_id
					})
				}
 
			})

		}
	},
	created: function() {
		var sd_sd = this
		mui.plusReady(function() {
			try {
				self = plus.webview.currentWebview();
			} catch(e) {
				self.t_id = 1
				self.bianji = 656

			}
			if(self.t_id == 1) {
				picker_f.setData(chuzhu)
			} else if(self.t_id == 3) {
				picker_f.setData(chushou)
			} else if(self.t_id == 5) {
				picker_f.setData(yunshu)
			} else if(self.t_id == 7) {
				picker_f.setData(my_we)
			}

			if(self.bianji) {
				var view = {}
				view.Services = "usergood.view"
				view.usertoken = getusertoken()
				view.good_id = self.bianji
				m_ajax(view, function(data) {
					sd_sd.cat_text = ""
					data.catlog.map(function(a) {
						sd_sd.cat_text += a.name + "-"
						sd_sd.cat_id = a.id
					})
					sd_sd.cat_text = sd_sd.cat_text.substring(0, sd_sd.cat_text.length - 1)
					var sdd_sds = data
					var data = data.good
					sd_sd.name = data.name //名称
					sd_sd.keyword = data.keyword //关键词
					sd_sd.brief = data.brief //描述
					sd_sd.content = data.content //详情
					sd_sd.gallery = sdd_sds.gallery
					console.log(sdd_sds.gallery)
					setTimeout(function() {
						ue.setContent(data.content);
					}, 500)

				})
			}
	})
	}

})