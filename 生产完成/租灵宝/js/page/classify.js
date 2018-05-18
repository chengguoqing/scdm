"use strict";

try {
	plus.navigator.setStatusBarBackground("#077BD9");
} catch (e) {}
mui.init();

mui.ready(function () {
	var more = {};
	more.Services = "catalog.more";
	more.h_display = 1;
	more.type = 1;
	var km = new Vue({
		el: '#fen_lei',
		data: {
			more: "",
			type: leiys
		},
		methods: {
			sd_sdf: function sd_sdf(idx) {
				more.type = idx;
				this.fen_s(more);
			},
			fen_s: function fen_s(das) {
				var sd_r = this;
				m_ajax(das, function (data) {
					sd_r.more = data;
				});
			},
			fns_soid: function fns_soid(d, m) {
				var sd_dffx = "lease",
				    tys = ["", "出租", "求租", "出售", "求购", "运输", "", "维修"];

				if (m == 2 || m == 4) {
					sd_dffx = 'wanted';
				}
				this.zhu(sd_dffx, "", {
					"idx": m,
					"lei": d,
					"tile": tys[m]
				});
			}
		},
		created: function created() {
			this.fen_s(more);
		}
	});
});
//# sourceMappingURL=classify.js.map
