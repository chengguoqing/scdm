//施工项目列表

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

var km = new Vue({
	el: '#shigong',
	data: {
		sd_sdzs: [{
			"name": "全部",
			type: 0
		}, {
			"name": "总承包",
			type: 1
		}, {
			"name": "专业分包",
			type: 2
		}, {
			"name": "劳务清包",
			type: 3
		}],
		mare_list: []
	},
	methods: {
		fenlei_sd: function(idx) { //头部切换
			this.sd_sdzs.map(function(a) {
				a.cls = ""
			})
			this.sd_sdzs[idx].cls = "act"
			this.mare_list = []
			more.page = 1
			more.cat_id = idx
			this.sd_dsdf(more)
		},
		bianji: function(id) { //编辑
			this.zhu("shigongadd", "", {
				i_d: id
			})
		},
		sanchu: function(id, idex) {
			var sd_sdf = this,
				gooddel = {}
			gooddel.Services = "project.del"
			gooddel.usertoken = getusertoken()
			gooddel.id = id
				var sd_ssdf=confirm("确认删除？")
			if(sd_ssdf){
					sd_sdf.mare_list.splice(idex, 1)
					m_ajax(gooddel, function() {
						mui(".mui-table-view-cell").each(function() {
							mui.swipeoutClose(this)
						})
						mui.toast("删除成功")
					})
				}
		
		},
		sd_dsdf: function(more, lksd) {
			var sd_sd = this
			try {
				lksd(sd_sd.mare_list.length)
			} catch(e) {

			}
			m_ajax(more, function(data) {
				data.prolist.map(function(a) {
					sd_sd.mare_list.push(a)
				})
				if(sd_sd.mare_list.length < 1) {
					document.getElementById("ds_d_dd_dfw").classList.add("show");
				} else {
					document.getElementById("ds_d_dd_dfw").classList.remove("show");
				}
			})

		}
	},
	created: function() {
		more.Services = "project.usermore"
		more.usertoken = getusertoken()
		more.page = 1
		more.cat_id = 0
		this.sd_dsdf(more)
	}

})
mui.plusReady(function() {
	window.addEventListener('ref_dfresh', function(e) {
		location.reload();

	})
})

function pullupRefreshts() {
	var sd_s = this
	more.page++;
	more.keyword = ""
	km.sd_dsdf(more, function(da_l) {
		if(da_l <= 0) {
			sd_s.endPullupToRefresh(true)
			return
		}
		sd_s.endPullupToRefresh(false)
	})
}