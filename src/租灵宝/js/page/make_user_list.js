//个人中心预约列表
var more = {}
more.page = 1
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
	el: '#make_user_list',
	data: {
		sd_sdzs: [{
			"name": "待处理",
			type: 1
		}, {
			"name": "跟进中",
			type: 2
		}, {
			"name": "已签约",
			type: 3
		}, {
			"name": "已失效",
			type: 4
		}],
		mare_list: []
	},
	methods: {
		fenlei_sd: function(idx,swerx) { //头部切换
			this.sd_sdzs.map(function(a) {
				a.cls = ""
			})
			this.sd_sdzs[idx].cls = "act"
			this.mare_list = []
			more.page = 1
			more.state = swerx
			this.sd_dsdf(more)
		},
		sd_dsdf: function(more, lksd) {
			var sd_sd = this
			m_ajax(more, function(data) {
				console.log(JSON.stringify(more)+"  "+JSON.stringify(data))
				try {
					lksd(data.prelist.length)
				} catch(e) {

				}
				data.prelist.map(function(a) {
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
		more.Services = "preorder.more"
		more.usertoken = getusertoken()
		this.sd_dsdf(more)
		mui.plusReady(function() {
			window.addEventListener('refresh', function(e) {
				location.reload();
			})
		})
	}

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