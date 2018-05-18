//用户中心分类

var more = {}

mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefreshts
		}
	}
});
var self = ""
var type_s = ""
var km = new Vue({
	el: '#user_fx_list',
	data: {
		tit_le: "",
		idf_df: [],
		sd_ids: "",
		ser_sd: "" //搜索的标题
	},
	methods: {
		bianji_sd: function(id) {
			if(self.ty_id == 2 || self.ty_id == 4) {
				this.zhu('post_message', 'fade-in', {
					't_id': self.ty_id,
					'bianji': id
				})
			} else {
				this.zhu('tuwen', 'fade-in', {
					't_id': self.ty_id,
					'bianji': id
				})
			}
		},

		tinaji: function(id) {
			if(id == 2 || id == 4) {
				this.zhu('post_message', 'fade-in', {
					t_id: id
				})
			} else {
				this.zhu('tuwen', 'fade-in', {
					t_id: id
				})
			}
		},
		chgg_li: function(more, lksd) {
			var df_sd = this
			m_ajax(more, function(data) {
				try {
					lksd(data.goodlist)
				} catch(e) {

				}
				data.goodlist.map(function(a) {
					df_sd.idf_df.push(a)
				})
				if(df_sd.idf_df.length < 1) {
					document.getElementById("ds_d_dd_dfw").classList.add("show");
				} else {
					document.getElementById('ds_d_dd_dfw').classList.remove("show"); //移除class

				}

			})
		},
		ss_dd_sdf: function() {
			more.page = 1
			more.keyword = this.ser_sd
			this.idf_df = []
			this.chgg_li(more)
		},
		sanchu: function(id, idex) {
			var sd_sdf = this,
				gooddel = {}
			gooddel.Services = "usergood.gooddel"
			gooddel.usertoken = getusertoken()
			gooddel.type = type_s
			gooddel.good_id = id
			var sd_ssdf=confirm("确认删除？")
			if(sd_ssdf){
				sd_sdf.idf_df.splice(idex, 1)
					m_ajax(gooddel, function() {
						mui(".mui-table-view-cell").each(function() {
							mui.swipeoutClose(this)
						})
						mui.toast("删除成功")
					})
			}
//			confirm("确认删除？", function(dd) {
//				if(dd.index == 1) {
//					sd_sdf.idf_df.splice(idex, 1)
//					m_ajax(gooddel, function() {
//						mui(".mui-table-view-cell").each(function() {
//							mui.swipeoutClose(this)
//						})
//						mui.toast("删除成功")
//					})
//				}
//			})
		}

	},
	created: function() {
		var sd_sdf = this
		mui.plusReady(function() {
			self = plus.webview.currentWebview();
			type_s = self.ty_id
			sd_sdf.tit_le = self.name_i + "管理"
			sd_sdf.sd_ids = self.ty_id
			document.getElementById("user_fx_list").classList.add("show");
			this.idf_df = []
			more.Services = "usergood.more"
			more.usertoken = getusertoken()
			more.h_display = 2
			more.keyword = ""
			more.page = 1
			more.type = type_s
			sd_sdf.chgg_li(more)
			window.addEventListener('refr_sdresh', function(e) {
				location.reload();
			})
			document.getElementById("strName").addEventListener("keydown", function(e) {
				if(13 == e.keyCode) { //点击了“搜索” 
					document.activeElement.blur(); //隐藏软键盘
				}
			}, false);
		})
	}

})

function pullupRefreshts() {
	var sd_s = this
	more.page++;
	more.keyword = ""
	km.chgg_li(more, function(da_l) {
		if(da_l <= 0) {
			sd_s.endPullupToRefresh(true)
			return
		}
		sd_s.endPullupToRefresh(false)
	})

}