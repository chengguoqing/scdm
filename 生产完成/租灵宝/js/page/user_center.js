'use strict';

//用户中心

var km = new Vue({
	el: '#user_center',
	data: {
		user: ""
	},
	methods: {
		tuichu_sd: function tuichu_sd() {
			localStorage.clear();
			mui.openWindow({
				url: 'register.html',
				id: "register",
				show: {
					aniShow: "pop-in", //动画
					duration: 500 //持续时间
				}
			});
		},
		sdd_sdf: function sdd_sdf() {
			var viewprofile = {},
			    sd_sdre = this;
			viewprofile.Services = "user.viewprofile";
			viewprofile.usertoken = getusertoken();
			if (!viewprofile.usertoken) {
				mui.plusReady(function () {
					sd_sdre.zhu("register");
				});

				return;
			}
			m_ajax(viewprofile, function (data) {
				sd_sdre.user = data;
				console.log(JSON.stringify(data));
			});
		}
	},
	created: function created() {
		this.sdd_sdf();
	}

});

mui.init();

mui.plusReady(function () {
	var ws = plus.webview.currentWebview();
	if (ws.id == "user_center") {
		document.getElementById("index_wersdsd").classList.add("show");
		document.getElementById("dsf_d_srertx").classList.add("act");
	}
	window.addEventListener('ref_dfresh', function (e) {
		location.reload();
	});
});

document.getElementById("dsfd_a").classList.remove("show");
document.getElementById("dsfd_b").classList.remove("show");
if (getuser().groupid == 3) {
	document.getElementById("dsfd_b").classList.add("show");
} else {
	document.getElementById("dsfd_a").classList.add("show");
}
//# sourceMappingURL=user_center.js.map
