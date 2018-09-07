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

function m_ajax(url,dat_a, call_blck, ty, xiu) {
	var sd_sd = ""
	try {
		sd_sd = plus.nativeUI.showWaiting("处理中，请等待...");
	} catch(e) {

	}

	mui.ajax(url, {
		type: ty ? ty : "get", //HTTP请求类型
		data: dat_a,
		dataType: 'json', //服务器返回json格式数据

		success: function(data) {
			try {
				sd_sd.close()
			} catch(e) {

			}
			call_blck(data)

		},
		error: function(xhr, type, errorThrown) {
			//			alert("请求失败")
			try {
				mui.toast("服务接口内部错误")
				sd_sd.close()
			} catch(e) {

			}
		}
	});
}