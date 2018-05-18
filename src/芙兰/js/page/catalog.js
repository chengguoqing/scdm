var km = new Vue({
	el: '#catalog',
	data: {
		sd_ihs: "",
		fenlei: [{
			id: 0,
			name: "热销类目",
			cls: "act",
			tup_sd: [{
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服0"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}]

		}, {
			id: 1,
			name: "即将售罄",
			cls: "",
			tup_sd: [{
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服1"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}]

		}, {
			id: 2,
			name: "女上装",
			cls: "",
			tup_sd: [{
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服2"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}]

		}, {
			id: 3,
			name: "库存老货清款区",
			cls: "",
			tup_sd: [{
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服3"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}]

		}, {
			id: 4,
			name: "女下装4",
			cls: "",
			tup_sd: [{
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}]

		}, {
			id: 5,
			name: "品牌散挑",
			cls: "",
			tup_sd: [{
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服5"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}]

		}, {
			id: 6,
			name: "芙兰分份",
			cls: "",
			tup_sd: [{
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服6"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}, {
				img: "http://m.flan1688.com/mobile/images/201712/1513710452363738805.png",
				name: "羽绒服"
			}]

		}]
	},
	methods: {
		hm_iy_s: function(idx) {
			this.fenlei.map(function(a) {
				a.cls = ""
			})
			this.fenlei[idx].cls = "act"
			this.sd_ihs = this.fenlei[idx]

		}
	},
	mounted() {
		this.sd_ihs = this.fenlei[0]
		mui('.mui-scroll-wrapper').scroll({

		});
	}
})