var sd_ids=null;
var km = new Vue({
	el: '#gouwuche',
	data: {
		fenlei: [{
				name: "黑色"
			},
			{
				name: "焦糖"
			},
			{
				name: "米白"
			},
			{
				name: "香槟"
			}
		]

	},
	methods: {
		close_s:function(){
				sd_ids.hide("auto");
		}
	},
	mounted() {
		mui(".fenlei_uiy_sr").on('tap', 'span', function(e) {
			document.querySelector(".fenlei_uiy_sr span.act").classList.remove("act");
			this.classList.add("act")
		})
		mui('.mui-scroll-wrapper').scroll({

		});
		mui.plusReady(function() {
			 sd_ids= plus.webview.currentWebview();
			mui("#sdSdfgf").on("tap", "button", function() {
				sd_ids.hide("auto");
			})
			
			//	监听窗口隐藏
			sd_ids.addEventListener('hide', function() {
				var opener = plus.webview.currentWebview().opener();
				opener.setStyle({
					mask: "none"
				});
			})
 
		})
	}
})