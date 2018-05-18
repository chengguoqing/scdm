var km = new Vue({
	el: '#profile',
	data: {

	},
	methods: {

	},
	mounted() {
		var dtPicker = new mui.DtPicker({
			"type": "date",
			"beginYear": "1950" //开始时间

		});
		mui(".chusqirws").on("tap", "input", function() {
			var th = this
			document.activeElement.blur();
			dtPicker.show(function(rs) {
				th.value = rs.text
			})
		})

		mui(".dsf_kh_sertx").on('tap', 'span', function(e) {
			document.querySelector(".dsf_kh_sertx span.act").classList.remove("act");
			this.classList.add("act")

		})
	}
})