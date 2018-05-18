'use strict';

//添加子产品
mui.plusReady(function () {
	var tuwensan = plus.webview.getWebviewById('tuwensan');
	plus.webview.close(tuwensan);
	var tuwen = plus.webview.getWebviewById('tuwen');
	plus.webview.close(tuwen);
});

var picker_re = new mui.PopPicker({
	"layer": [3]
});
picker_re.setData(dsdd_sd);

var self = {};

var km = new Vue({
	el: '#tuwener',
	data: {
		name: "",
		good_id: "",
		budgetprice: "", //价格
		measure_unit: "", //单位
		rentstatus: "", //状态 （rentstatus=1待租，rentstatus=2在租）
		locationsn: "", //定位器编码
		sheng_a: "",
		prov: "", //省id
		city: "", //市id
		area: "", //区id
		searchaddr: "", //详细地址
		lat: "", //经度
		lng: "", //纬度
		sdd_sd: [{
			text: '1',
			value: '待租'
		}, {
			text: '2',
			value: '在租'
		}]
	},
	methods: {
		we_oiu_s: function we_oiu_s() {
			if (!this.name) {
				mui.toast("名称不能为空");
				return;
			}
			if (!this.budgetprice) {
				mui.toast("价格不能为空");
				return;
			}
			if (!this.measure_unit) {
				mui.toast("单位不能为空");
				return;
			}

			if (!this.rentstatus) {
				mui.toast("状态不能为空");
				return;
			}
			if (!this.locationsn) {
				mui.toast("定位器码不能为空");
				return;
			}
			if (!this.sheng_a) {
				mui.toast("地区区域不能为空");
				return;
			}
			if (!this.searchaddr) {
				mui.toast("详细地址不能为空");
				return;
			}
			var goodproductadd = {};
			if (self.zi_id) {
				goodproductadd.Services = "usergood.goodproductedit";
				goodproductadd.id = self.zi_id;
			} else {
				goodproductadd.Services = "usergood.goodproductadd";
			}
			goodproductadd.usertoken = getusertoken();
			goodproductadd.good_id = self.good_id;
			goodproductadd.name = this.name;
			goodproductadd.budgetprice = this.budgetprice;
			goodproductadd.measure_unit = this.measure_unit;
			goodproductadd.rentstatus = this.rentstatus;
			goodproductadd.locationsn = this.locationsn;
			goodproductadd.level1 = this.prov;
			goodproductadd.level2 = this.city;
			goodproductadd.level3 = this.area;
			goodproductadd.searchaddr = this.searchaddr;
			goodproductadd.lat = this.lat;
			goodproductadd.lng = this.lng;
			var sd_drsd = this;
			m_post(goodproductadd, function (data) {
				sd_drsd.zhu('tuwensan', 'fade-in', {
					good_id: self.good_id
				});
			});
		},
		xsd_sdgfx: function xsd_sdgfx() {
			document.activeElement.blur();
			var sd_ds = this;
			picker_re.show(function (rl) {
				sd_ds.sheng_a = rl[0].text + "-" + rl[1].text + (rl[2].text ? '-' + rl[2].text : '');
				sd_ds.prov = rl[0].value;
				sd_ds.city = rl[1].value;
				sd_ds.area = rl[2].value;
			});
		},
		quxiao: function quxiao() {
			mui.back();
		}
	},
	created: function created() {
		var sd_dsd = this;
		mui.plusReady(function () {
			self = plus.webview.currentWebview();
			sd_dsd.good_id = self.good_id;
			if (self.zi_id) {
				var goodproductview = {};
				goodproductview.Services = "usergood.goodproductview";
				goodproductview.usertoken = getusertoken();
				goodproductview.id = self.zi_id;
				m_ajax(goodproductview, function (data) {
					sd_dsd.name = data.name;
					sd_dsd.budgetprice = data.budgetprice; //价格
					sd_dsd.measure_unit = data.measure_unit; //单位
					sd_dsd.rentstatus = data.rentstatus; //状态 （rentstatus=1待租，rentstatus=2在租）
					sd_dsd.locationsn = data.locationsn; //定位器编码
					sd_dsd.searchaddr = data.searchaddr;
					sd_dsd.prov = data.area[1].father;
					sd_dsd.city = data.area[2].father;
					try {
						sd_dsd.area = data.area[3].father;
						sd_dsd.sheng_a = data.area[1].name + "-" + data.area[2].name + "-" + data.area[3].name;
					} catch (e) {
						sd_dsd.sheng_a = data.area[1].name + "-" + data.area[2].name;
					}
				});
			}
		});
	}
});

// 百度地图API功能
function G(id) {
	return document.getElementById(id);
}

var map = new BMap.Map("allmap");
map.centerAndZoom("北京", 12); // 初始化地图,设置城市和地图级别。

var ac = new BMap.Autocomplete( //建立一个自动完成的对象
{
	"input": "suggestId",
	"location": map
});
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野

ac.addEventListener("onhighlight", function (e) {
	//鼠标放在下拉列表上的事件
	var str = "";
	var _value = e.fromitem.value;
	var value = "";
	if (e.fromitem.index > -1) {
		value = _value.province + _value.city + _value.district + _value.street + _value.business;
	}
	str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

	value = "";
	if (e.toitem.index > -1) {
		_value = e.toitem.value;
		value = _value.province + _value.city + _value.district + _value.street + _value.business;
	}
	str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
	myGeo.getPoint(str, function (point) {
		if (point) {

			km.lat = point.lat;
			km.lng = point.lng;
		} else {
			alert("您选择地址没有解析到结果!");
		}
	});
	km.searchaddr = str;
	G("searchResultPanel").innerHTML = str;
});

var myValue;
ac.addEventListener("onconfirm", function (e) {
	//鼠标点击下拉列表后的事件
	var _value = e.item.value;
	myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
	G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
	myGeo.getPoint(myValue, function (point) {
		if (point) {
			km.lat = point.lat;
			km.lng = point.lng;
		} else {
			alert("您选择地址没有解析到结果!");
		}
	});
	km.searchaddr = myValue;
	setPlace();
});

function setPlace() {
	map.clearOverlays(); //清除地图上所有覆盖物
	function myFun() {
		var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
		map.centerAndZoom(pp, 18);
		map.addOverlay(new BMap.Marker(pp)); //添加标注
	}
	var local = new BMap.LocalSearch(map, { //智能搜索
		onSearchComplete: myFun
	});
	local.search(myValue);
}
//# sourceMappingURL=tuwener.js.map
