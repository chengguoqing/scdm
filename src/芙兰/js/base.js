var yanza = {
	mail: function(a) {
		var b = !1;
		return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
	},
	phone: function(a) {
		var b = !1;
		return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
	},
	car_t: function(a) {
		var b = !1;
		return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
	}
};
try {
	Vue.prototype.zhu = function(url, don, zhi) {
		mui.openWindow({
			url: url + '.html',
			id: url,
			show: {
				aniShow: don ? don : "pop-in", //动画
				duration: 300 //持续时间
			},
			extras: zhi
		});
	}

	Vue.prototype.c_index = function() {
		plus.webview.currentWebview().close()
		plus.webview.getLaunchWebview().evalJS("show_web('index_er.html','1')");

	}
Vue.prototype.city = function(callback) { //选择城市  
	document.activeElement.blur();
	var chengshi = new mui.PopPicker({
		"layer": [3]
	});
	chengshi.setData(cityData3)
	chengshi.show(function(rl) {
		var sd_sdf = ""
		sd_sdf = rl[0].text + "-" + rl[1].text
		if(rl[2].text) {
			sd_sdf += "-" + rl[2].text
		}
		try {
			callback(sd_sdf)
		} catch(e) {

		}
	})
}
Vue.prototype.select_z = function(data, callback) { //单选框
	document.activeElement.blur();
	var khyh = new mui.PopPicker();
	khyh.setData(data)
	khyh.show(function(rl) {
		var sd_sdf = rl[0].text
		try {
			callback(sd_sdf)
		} catch(e) {

		}
	})
}
}
catch(e) {

}
//下拉刷新
function xiala(shua, time) {
	var ws = plus.webview.currentWebview();
	ws.setPullToRefresh({
		support: true,
		height: '50px',
		range: '200px',
		contentdown: {
			caption: '下拉可以刷新'
		},
		contentover: {
			caption: '释放立即刷新'
		},
		contentrefresh: {
			caption: '正在刷新...'
		}
	}, function() {
		shua()
		if(time) {
			setTimeout(function() {
				ws.endPullToRefresh();
			}, time)
		} else {
			ws.endPullToRefresh();
		}

	});
}

function zhu(url, don, zhi) {
	mui.openWindow({
		url: url + '.html',
		id: url,
		show: {
			aniShow: don ? don : "pop-in", //动画
			duration: 300 //持续时间
		},
		extras: zhi
	});
}
//上拉加载
function shangla(call) {
	document.addEventListener("plusscrollbottom", function() {
		call()
	}, false);
}
//分享
function shareSystem() {
	plus.share.sendWithSystem({

		content: '独行工匠',
		href: 'http://duxinggj.com/'
	}, function() {
		console.log('分享成功');
	}, function(e) {
		console.log('分享失败：' + JSON.stringify(e));
	});
}

//窗口滑动切换
function qiehuan(da_iu) {
	var _self = plus.webview.currentWebview();
	var sd_dsd = []
	da_iu.map(function(a) {
		var sd_sff = {}
		sd_sff.id = a.url + a.id
		sd_sff.url = a.url
		sd_sff.extras = {
			chanshu: a.id
		}
		sd_dsd.push(sd_sff)
	})
	var group = new webviewGroup(_self.id, {
		items: sd_dsd,
		onChange: function(obj) {
			var c = document.querySelector(".mui-control-item.mui-active");
			if(c) {
				c.classList.remove("mui-active");
			}
			var target = document.querySelector(".mui-scroll .mui-control-item:nth-child(" + (parseInt(obj.index) + 1) + ")");
			target.classList.add("mui-active");
			if(target.scrollIntoView) {
				target.scrollIntoView();
			}
		}
	});

	mui(".mui-scroll").on("tap", ".mui-control-item", function(e) {
		var wid = this.getAttribute("data-wid");
		group.switchTab(wid);
	});
}

function pup_s(url, w, h, zhi) {
	var floatw = plus.webview.create(url, url, {
		width: w,
		height: h,
		margin: "auto",
		borderRadius: "20px",
		background: "rgba(0,0,0,0.5)",
		scrollIndicator: 'none',
		scalable: false,
		popGesture: 'none'
	}, {
		extras: zhi
	});
	floatw.addEventListener("loaded", function() {
		floatw.show('fade-in', 300);
		floatw = null;
	}, false);
}

function hasClass(elem, cls) {
	cls = cls || '';
	if(cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
	return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}