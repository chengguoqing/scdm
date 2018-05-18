var picker = new mui.PopPicker({
	"layer": [3]
});
picker.setData(cityData3)
var km = new Vue({
	el: '#consignee',
	data: {
		new_sd: {
			"name": "",
			diqu: "",
			xiangxi: "",
			phone: ""
		},
		chengshu: [{
			"name": "独行工匠",
			diqu: "广东省深圳市南山区",
			xiangxi: "留仙洞村107栋",
			phone: "13538190372"
		}]
	},
	methods: {
		xz_qydf(idx) {
			let th = this
			    document.activeElement.blur();
			picker.show(function(rl) {
				if(idx >= 0) {
					th.chengshu[idx].diqu = rl[0].text + rl[1].text + rl[2].text
				} else {
					th.new_sd.diqu = rl[0].text + rl[1].text + rl[2].text
				}

			})

		},
		xingzheng() { //新增加收货地址
			if(!this.new_sd.name) {
				mui.toast('请输入收货人');
				return
			}
			if(!this.new_sd.diqu) {
				mui.toast('请选择地区');
				return
			}
			if(!this.new_sd.xiangxi) {
				mui.toast('请输入详细地址');
				return
			}
			if(!yanza.phone(this.new_sd.phone)) {
				mui.toast('手机号码格式错误');
			}
			var th = this,
				sd_uysd = {}
			sd_uysd.name = this.new_sd.name
			sd_uysd.diqu = this.new_sd.diqu
			sd_uysd.xiangxi = this.new_sd.xiangxi
			sd_uysd.phone = this.new_sd.phone
			this.chengshu.push(sd_uysd)
			mui.alert("添加成功!", function() {
				th.new_sd.name = ""
				th.new_sd.diqu = ""
				th.new_sd.xiangxi = ""
				th.new_sd.phone = ""
			})
		}
	},
	mounted() {
		mui('.mui-scroll-wrapper').scroll({

		});

	}
})