var km = new Vue({
	el: '#chunkuan',
	data: {
		nmu_s: 50, //用户充值金额
		sd_hg_s: "", //弹出支付的名称
		qc_img: "http://duxinggj.com/qc_er?text=http://duxinggj.com/phone/%E8%8A%99%E5%85%B0_phone/%E4%BC%9A%E5%91%98%E6%9C%BA%E5%88%B6/", //生成的二维码
		czje: [{
			num: 50,
			cls: "act"
		}, {
			num: 100,
			cls: ""
		}, {
			num: 200,
			cls: ""
		}, {
			num: 500,
			cls: ""
		}, {
			num: 1000,
			cls: ""
		}, {
			num: 2000,
			cls: ""
		}, {
			num: 5000,
			cls: ""
		}, {
			num: 10000,
			cls: ""
		}]
	},
	methods: {
		ding_drt(idx) {
			this.czje.map(function(a) {
				a.cls = ""
			})
			this.czje[idx].cls = "act"
			this.nmu_s = this.czje[idx].num

		},
		tanchu(sjh_s) {
			this.sd_hg_s = sjh_s
			mui('#zhifu_s').popover('toggle');
		},
		baocun_s() { //保存二维码


   var th=this

			var dtask = plus.downloader.createDownload(this.qc_img, {}, function(d, status) {
				plus.io.resolveLocalFileSystemURL(d.filename, function(entry) {
					plus.gallery.save(entry.toLocalURL(), function() {
						mui.toast('保存成功');
				
						if(th.sd_hg_s=="QQ钱包"){
									location.href = "mqq://";
						}else{
							location.href = "alipay://";
						}
					}, function(e) {
						mui.toast('保存成功');
					});
				}, function(e) {
					console.log(e.message)
				});
			});
			dtask.start();

		}
	},
	mounted() {
		mui('.mui-scroll-wrapper').scroll({

		});
	}
})