var self = ""

var payChanel;

function getPayChanel() {
	//设备信息加载完成，先获取微信的支付通道
	plus.payment.getChannels(function(channels) {
		for(var i in channels) {
			if(channels[i].id == "wxpay") {
				payChanel = channels[i];
			}
		}
	}, function(e) {
		alert("获取支付通道失败：" + e.message);
	});
}
document.addEventListener('plusready', getPayChanel, false);

var km = new Vue({
	el: '#lease_details',
	data: {
		deiy_s: "",
		good: "",
		gallery: "",
		sd_sd_tel: ""
	},
	methods: {
		lijic: function(good_id, jia) { //电话立即查看显示
			var sd_sdxf = this,
				sd_sdf = {}
			sd_sdf.Services = "order.addorder"
			sd_sdf.h_display = 1
			sd_sdf.id = self.i_d
			sd_sdf.good_table = "goodproduct"
			sd_sdf.order_type = "see"
			sd_sdf.final_amt = jia
			if(getusertoken()) {
				sd_sdf.usertoken = getusertoken()
			}
			var order_id=""
			m_ajax(sd_sdf, function(data) {
				order_id=data.order_id
				mui.post("http://api.zulingbao.com/apptopay/wechat/beforepay.php", {
					order_id: data.order_id
				}, function(data) {
					plus.payment.request(payChanel, data, function(result) {
						var infosee = {}
						infosee.Services = "order.infosee"
						infosee.id = self.i_d
						infosee.order_type = "see"
						infosee.order_id = order_id
					
						m_ajax(infosee, function(data) {
							sd_sdxf.sd_sd_tel = data.mobile
						})

					}, function(e) {
						console.log(JSON.stringify(e));
						alert("付费失败");
					});
				});
			})

		},
		dimh_sd: function(lat, lng) {
			mui.openWindow({
				url: 'map.html',
				id: "map",
				show: {
					aniShow: "slide-in-right", //动画
					duration: 500 //持续时间
				},
				extras: {
					lat: lat,
					lng: lng
				} //页面传值
			});
		},
		sd_iy_d: function(title, id) {
			if(getusertoken()) {
				this.zhu('appointment', 'slide-in-bottom', {
					'title': title,
					't_id': id
				})
			} else {
				this.zhu("register", "")
			}

		}

	},
	created: function() {
		var sdf_s = this
		mui.plusReady(function() {
			self = plus.webview.currentWebview();
			var articleview = {}
			articleview.Services = "good.view";
			articleview.usertoken = ""
			articleview.h_display = 1
			articleview.usertoken = getusertoken()
			articleview.goodproduct_id = self.i_d
			m_ajax(articleview, function(data) {
				sdf_s.deiy_s = data
				sdf_s.good = data.good
				sdf_s.gallery = data.gallery
				sdf_s.gallery.map(function(a) {
					a.ad_img = a.large
				})
				if(sdf_s.good.updatetimestr != 0 && sdf_s.good.rentstartstr != 0) {
					sdf_s.good.kjhgs = sdf_s.good.updatetimestr + " - " + sdf_s.good.rentstartstr
				} else {
					sdf_s.good.kjhgs = "长期有效"
				}
			})
		})
	}

})

mui.init()
mui.ready(function() {

})