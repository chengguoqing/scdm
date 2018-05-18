try {
	plus.navigator.setStatusBarBackground("#077BD9");
} catch(e) {

}
mui.plusReady(function () { 
plus.screen.lockOrientation("portrait-primary"); 
}); 
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
				duration: 500 //持续时间
			},
			extras: zhi
		});
	}
	Vue.prototype.zhu_er = function(url, don, zhi) {
		mui.openWindow({
			url: url + '.html',
			id: url,
			show: {
				aniShow: don ? don : "pop-in", //动画
				duration: 500 //持续时间
			},
			extras: zhi,
			createNew: true
		});
	}
	Vue.prototype.close = function() {
		var ws = plus.webview.currentWebview();
		ws.close();
	}

	Vue.filter('zh', function(value) {
		return value == 1 ? "待租" : "已租";
	});

} catch(e) {}

function indt(qw, sd_sd, cll_back, ssdf) {
	var sd_s = qw
	console.log(JSON.stringify(sd_sd))
	m_ajax(sd_sd, function(data) {
		console.log(JSON.stringify(data))
		try {
			data.goodlist.map(function() {})
		} catch(e) {
			data.goodlist = data.prolist
		}
		try {
			cll_back(data.goodlist.length)
		} catch(e) {

		}

		if(data.goodlist.length<=0){
			document.getElementById("ds_d_dd_dfw").classList.add("show")
		}else{
			try{
				document.getElementById("ds_d_dd_dfw").classList.remove("show")
			}catch(e){}
		
		}
		
		data.goodlist.map(function(a) {
			sd_s.qiu_a.push(a)
		}) 

	})
}

function setuser(tu_po, data) {
	var data = JSON.stringify(data)
	localStorage.user = data
	mui.back()

}

function setuser_icon(icon) {
	var user_data = ""
	try {
		user_data = JSON.parse(localStorage.user)
	} catch(e) {

	}
	user_data.logo = icon
	localStorage.user = JSON.stringify(user_data)
}

function getuser(data) {
	var user_data = ""
	try {
		user_data = JSON.parse(localStorage.user)
	} catch(e) {

	}
	if(!user_data) {
		tu_po.zhu("register");
		return;
	}
	return user_data;
}

function getusertoken(data) {
	var user_data = ""
	try {
		user_data = JSON.parse(localStorage.user)
	} catch(e) {

	}

	return !user_data.usertoken ? false : user_data.usertoken;
}

function chug(sd_drfsd, val) {
	qiuy_s.page = 1
	qiuy_s.is_new = 0
	qiuy_s.is_hot = 0
	qiuy_s.keyword = ""
	if(sd_drfsd == 1) { //最新
		qiuy_s.is_new = 1

	}
	if(sd_drfsd == 2) { //热门
		qiuy_s.is_hot = 1

	}
	if(sd_drfsd == 3) { //金额
		console.log(qiuy_s.desc)
		if(qiuy_s.desc == 'asc') {
			qiuy_s.desc = 'desc'
			km.sd_sdfs = ""
		} else {
			qiuy_s.desc = 'asc'
			km.sd_sdfs = "act"
		}

	}
	if(val) {
		qiuy_s.keyword = val
	}
	km.qiu_a = []

	mui('#pullrefresh').pullRefresh().refresh(true);
	mui('#pullrefresh').pullRefresh().scrollTo(0, 0, 100);
	indt(km, qiuy_s)
}

function pullupRefresh() { //下拉刷新
	var sd_s = this
	qiuy_s.page++;
	indt(km, qiuy_s, function(da_l) {
		if(da_l <= 0) {
			sd_s.endPullupToRefresh(true)
			return
		}
		sd_s.endPullupToRefresh(false)
	})
}
var leiys = [{
		"name": "出租",
		"cls": "",
		lx: 1
	},
	{
		"name": "求租",
		"cls": "ab",
		lx: 2
	},
	{
		"name": "出售 ",
		"cls": "ad",
		lx: 3
	},
	{
		"name": "求购",
		"cls": "ac",
		lx: 4
	},
	{
		"name": "运输",
		"cls": "ae",
		lx: 5
	},

	{
		"name": "维修",
		"cls": "af",
		lx: 7
	}
]

function m_ajax(dat_a, call_blck, ty, xiu) {
	var sd_sd = ""
	try {
		sd_sd = plus.nativeUI.showWaiting("处理中，请等待...");
	} catch(e) {

	}
	dat_a.webface_access_token = 'buddhaaccesstoken'
	mui.ajax('http://api.zulingbao.com/webface/', {
		type: ty ? ty : "get", //HTTP请求类型
		data: dat_a,
		dataType: 'json', //服务器返回json格式数据

		success: function(data) {
			try {
				sd_sd.close()
			} catch(e) {

			}
			if(data.errcode != 0 && !xiu) {
				mui.toast(data.errmsg)
				return
			}
			if(data.data) {
				call_blck(data.data)
			} else {
				call_blck(data)
			}

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

function m_post(dat_a, call_blck, ty, xiu) {
	var sd_sd = ""
	try {
		sd_sd = plus.nativeUI.showWaiting("处理中，请等待...");
	} catch(e) {

	}
	dat_a.webface_access_token = 'buddhaaccesstoken'

	mui.ajax('http://api.zulingbao.com/webface/?Services=' + dat_a.Services, {
		data: dat_a,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		header: 'Content-Type:application/json;charset=utf-8',
		success: function(data) {
			try {
				sd_sd.close()
			} catch(e) {

			}
			if(data.errcode != 0 && !xiu) {
				alert(data.errmsg)
				return
			}
			if(data.data) {
				call_blck(data.data)
			} else {
				call_blck(data)
			}

		},
		error: function(xhr, type, errorThrown) {
			alert("请求失败")
			try {
				sd_sd.close()
			} catch(e) {

			}
		}
	});
}

function open(url) {
	mui.openWindow({
		url: url + '.html',
		id: url,
		show: {
			aniShow: "slide-in-right", //动画
			duration: 500 //持续时间
		}
	});
}

function pass_qd(val) {
	var aLvTxt = ['', 'aa', 'ab', 'ac'];
	var lv = 0;
	if(val.match(/[a-z]/g)) {
		lv++;
	}
	if(val.match(/[0-9]/g)) {
		lv++;
	}
	if(val.match(/(.[^a-z0-9])/g)) {
		lv++;
	}
	if(val.length < 6) {
		lv = 0;
	}
	if(lv > 3) {
		lv = 3;
	}
	return aLvTxt[lv];
};

//上传头像图片 
function uploadHead(imgPath, cllblack, sd_sdf) {
	var image = new Image();
	image.src = imgPath;
	var imgData = ""
	image.onload = function() {
		imgData = ""
		if(sd_sdf) {
			imgData = 'data:image/png;base64,' + getBase64Imageer(image);
		} else {
			imgData = 'data:image/png;base64,' + getBase64Image(image);
		}

		cllblack(imgData)
		var sd_sdff = {}
		sd_sdff.logo = imgData
		setzl(sd_sdff)
	}
}
//将图片压缩转成base64 
function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	var width = img.width;
	var height = img.height;
	// calculate the width and height, constraining the proportions 
	if(width > height) {
		if(width > 100) {
			height = Math.round(height *= 100 / width);
			width = 100;
		}
	} else {
		if(height > 100) {
			width = Math.round(width *= 100 / height);
			height = 100;
		}
	}
	canvas.width = width; /*设置新的图片的宽度*/
	canvas.height = height; /*设置新的图片的长度*/
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height); /*绘图*/
	var dataURL = canvas.toDataURL("image/png", 0.8);
	return dataURL.replace("data:image/png;base64,", "");
}
//将图片压缩转成base64 
function getBase64Imageer(img) {
	var canvas = document.createElement("canvas");
	var width = img.width;
	var height = img.height;
	// calculate the width and height, constraining the proportions 
	if(width > height) {
		if(width > 640) {
			height = Math.round(height *= 640 / width);
			width = 640;
		}
	} else {
		if(height > 640) {
			width = Math.round(width *= 640 / height);
			height = 640;
		}
	}
	canvas.width = width; /*设置新的图片的宽度*/
	canvas.height = height; /*设置新的图片的长度*/
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height); /*绘图*/
	var dataURL = canvas.toDataURL("image/png", 0.8);
	return dataURL.replace("data:image/png;base64,", "");
}

function setzl(data) {

	var sd_sdf = {}
	try {
		sd_sdf = JSON.parse(localStorage.user_zi_a)
	} catch(e) {
		sd_sdf = {}
	}
	if(data.logo) {
		sd_sdf.logo = data.logo //头像
	}
	if(data.level) {
		sd_sdf.level = data.level //城市id
	}
	if(data.chengshi) {
		sd_sdf.chengshi = data.chengshi //城市
	}
	if(data.address) {
		sd_sdf.address = data.address //详细地址
	}

	localStorage.user_zi_a = JSON.stringify(sd_sdf);
}

function getzl() {
	var data = ""
	try {
		data = JSON.parse(localStorage.user_zi_a)
	} catch(e) {

	}

	return data;
}
var sc = {
	xz: function(title, call_back) {
		if(mui.os.plus) {
			var a = [{
				title: "拍照"
			}, {
				title: "从手机相册选择"
			}];
			plus.nativeUI.actionSheet({
				title: title,
				cancel: "取消",
				buttons: a
			}, function(b) { /*actionSheet 按钮点击事件*/
				switch(b.index) {
					case 0:
						break;
					case 1:
						sc.pai(call_back); //拍照
						break;
					case 2:
						sc.xiang(call_back); //相册
						break;
					default:
						break;
				}
			})
		}
	},
	pai: function(call_back) {
		var sd_sdsd = ""
		var c = plus.camera.getCamera();
		c.captureImage(function(e) {
			plus.io.resolveLocalFileSystemURL(e, function(entry) {
				var s = entry.toLocalURL() + "?version=" + new Date().getTime();
				uploadHead(s, function(url) {
					call_back(url)
				}, true)

			}, function(e) {
				console.log("读取拍照文件错误：" + e.message);
			});
		}, function(s) {
			console.log("error" + s);
		}, {
			filename: "_doc/head.png"
		})

		return sd_sdsd
	},
	xiang: function(call_back) {
		var sd_sdsd = ""
		plus.gallery.pick(function(a) {
			plus.io.resolveLocalFileSystemURL(a, function(entry) {
				plus.io.resolveLocalFileSystemURL("_doc/", function(root) {
					root.getFile("head.png", {}, function(file) {
						file.remove(function() {
							entry.copyTo(root, 'head.png', function(e) {
									var e = e.fullPath + "?version=" + new Date().getTime();
									uploadHead(e, function(url) {
										call_back(url)
									}, true);
								},
								function(e) {
									console.log('copy image fail:' + e.message);
								});
						}, function() {
							console.log("delete image fail:" + e.message);
						});
					}, function() {
						entry.copyTo(root, 'head.png', function(e) {
								var path = e.fullPath + "?version=" + new Date().getTime();
								uploadHead(path, function(url) {
									call_back(url)
								}, true); /*上传图片*/
							},
							function(e) {
								console.log('copy image fail:' + e.message);
							});
					});
				}, function(e) {
					console.log("get _www folder fail");
				})
			}, function(e) {
				console.log("读取拍照文件错误：" + e.message);
			});

		}, function(a) {}, {
			filter: "image"
		})
		return
	}
}

function assign_dsdf(jsonbject1, jsonbject2) {
	var resultJsonObject = {};
	for(var attr in jsonbject1) {
		resultJsonObject[attr] = jsonbject1[attr];
	}
	for(var attr in jsonbject2) {
		resultJsonObject[attr] = jsonbject2[attr];
	}
	return resultJsonObject;
};