//我的维修
var my_we = [{
	"value": "165",
	"text": "车辆维修",
	children: [{
		"value": "167",
		"text": "重卡"
	}]
}, {
	"value": "166",
	"text": "土方机械",
	children: [{
		"value": "199",
		"text": "挖掘机"
	}, {
		"value": "200",
		"text": "装载机"
	}]
}, {
	"value": "195",
	"text": "混凝土机械"
}, {
	"value": "168",
	"text": "路面机械"
}, {
	"value": "196",
	"text": "桩工机械"
}, {
	"value": "197",
	"text": "矿山机械"
}, {
	"value": "198",
	"text": "特种设备"
}, {
	"value": "201",
	"text": "起重机械"
}]

// 我的运输
var yunshu = [{
	"value": "121",
	"text": "平板车"
}, {
	"value": "230",
	"text": "挖机平板车"
}, {
	"value": "216",
	"text": "栏板车"
}, {
	"value": "214",
	"text": "箱板车"
}, {
	"value": "215",
	"text": "插桩车"
}, {
	"value": "218",
	"text": "小卡车"
}]
//出售分类
var chushou = [{
	"value": "61",
	"text": "施工周转材料",
	children: [{
		"value": "86",
		"text": "H型钢"
	}, {
		"value": "87",
		"text": "钢板桩"
	}, {
		"value": "88",
		"text": "钢支撑"
	}, {
		"value": "89",
		"text": "钢板"
	}, {
		"value": "90",
		"text": "钢管"
	}, {
		"value": "236",
		"text": "拉森桩"
	}]
}, {
	"value": "62",
	"text": "施工机械设备",
	children: [{
			"value": "64",
			"text": "土方机械",
			children: [{
				"value": "71",
				"text": "挖掘机"
			}, {
				"value": "72",
				"text": "装载机"
			}, {
				"value": "73",
				"text": "推土机"
			}, {
				"value": "74",
				"text": "平地机"
			}, {
				"value": "75",
				"text": "轮式挖掘机"
			}]
		},
		{
			"value": "65",
			"text": "路面机械",
			children: [{
				"value": "76",
				"text": "滑模摊铺机"
			}, {
				"value": "77",
				"text": "摊铺机"
			}, {
				"value": "237",
				"text": "铣刨机"
			}, {
				"value": "238",
				"text": "单钢轮压路机"
			}, {
				"value": "239",
				"text": "双钢轮压路机"
			}, {
				"value": "240",
				"text": "胶轮压路机"
			}]
		},
		{
			"value": "66",
			"text": "起重机械",
			children: [{
				"value": "78",
				"text": "汽车吊"
			}, {
				"value": "79",
				"text": "履带吊"
			}, {
				"value": "241",
				"text": "随车吊"
			}, {
				"value": "242",
				"text": "叉车"
			}, {
				"value": "243",
				"text": "塔吊"
			}, {
				"value": "244",
				"text": "高空作业车"
			}]
		},
		{
			"value": "67",
			"text": "混凝土机械",
			children: [{
				"value": "80",
				"text": "泵车"
			}, {
				"value": "81",
				"text": "混凝土搅拌车"
			}, {
				"value": "245",
				"text": "拖泵"
			}, {
				"value": "246",
				"text": "车载泵"
			}, {
				"value": "247",
				"text": "混凝土搅拌站"
			}, {
				"value": "248",
				"text": "混凝土湿喷台车"
			}]
		},
		{
			"value": "68",
			"text": "桩机机械",
			children: [{
				"value": "82",
				"text": "旋挖钻"
			}, {
				"value": "83",
				"text": "水平定向钻"
			}, {
				"value": "249",
				"text": "打桩锤"
			}, {
				"value": "250",
				"text": "全套管钻机"
			}, {
				"value": "251",
				"text": "双轮铣"
			}, {
				"value": "252",
				"text": "机械手"
			}, {
				"value": "253",
				"text": "灌注桩"
			}, {
				"value": "254",
				"text": "高压旋喷"
			}, {
				"value": "255",
				"text": "搅拌桩"
			}, {
				"value": "256",
				"text": "压密注浆机"
			}, {
				"value": "257",
				"text": "降水"
			}, {
				"value": "258",
				"text": "TRD工法机"
			}, {
				"value": "259",
				"text": "咬合桩机"
			}, {
				"value": "260",
				"text": "顶管机"
			}, {
				"value": "266",
				"text": "静压植桩机"
			}]
		},
		{
			"value": "69",
			"text": "矿山机械",
			children: [{
				"value": "84",
				"text": "掘进机"
			}, {
				"value": "85",
				"text": "矿用自卸车"
			}, {
				"value": "261",
				"text": "潜孔钻机"
			}, {
				"value": "262",
				"text": "移动破碎机"
			}, {
				"value": "263",
				"text": "凿岩机"
			}, {
				"value": "264",
				"text": "破碎机"
			}]
		},
		{
			"value": "70",
			"text": "特种设备",
			children: [{
				"value": "160",
				"text": "空压机"
			}, {
				"value": "159",
				"text": "发电机组"
			}]
		}
	]
}]

//出租分类
var chuzhu = [{
		"value": "1",
		"text": "施工周转材料",
		children: [{
			"value": "26",
			"text": "H型钢"
		}, {
			"value": "27",
			"text": "钢板桩"
		}, {
			"value": "28",
			"text": "钢支撑"
		}, {
			"value": "29",
			"text": "钢板"
		}, {
			"value": "30",
			"text": "钢管"
		}, {
			"value": "219",
			"text": "拉森桩"
		}]
	},
	{
		"value": "2",
		"text": "施工机械设备",
		children: [{
				"value": "4",
				"text": "土方机械",
				children: [{
					"value": "205",
					"text": "装载机"
				}, {
					"value": "206",
					"text": "推土机"
				}, {
					"value": "228",
					"text": "挖机"
				}]
			},
			{
				"value": "5",
				"text": "路面机械",
				children: [{
					"value": "17",
					"text": "滑模摊铺机"
				}, {
					"value": "18",
					"text": "摊铺机"
				}, {
					"value": "19",
					"text": "铣刨机"
				}, {
					"value": "20",
					"text": "单钢轮压路机"
				}, {
					"value": "21",
					"text": "双钢轮压路机"
				}, {
					"value": "22",
					"text": "胶轮压路机"
				}, {
					"value": "267",
					"text": "马路切割机"
				}, {
					"value": "268",
					"text": "水泥地面磨光机"
				}]
			},
			{
				"value": "6",
				"text": "起重机械",
				children: [{
					"value": "153",
					"text": "叉车"
				}, {
					"value": "154",
					"text": "塔吊"
				}, {
					"value": "23",
					"text": "汽车吊"
				}, {
					"value": "24",
					"text": "履带吊"
				}, {
					"value": "25",
					"text": "随车吊"
				}, {
					"value": "169",
					"text": "高空作业车"
				}]
			},
			{
				"value": "7",
				"text": "混凝土机械",
				children: [{
					"value": "170",
					"text": "泵车"
				}, {
					"value": "171",
					"text": "混凝土搅拌车"
				}, {
					"value": "172",
					"text": "拖泵"
				}, {
					"value": "173",
					"text": "车载泵"
				}, {
					"value": "174",
					"text": "混凝土搅拌站"
				}, {
					"value": "175",
					"text": "混凝土湿喷台车"
				}]
			},
			{
				"value": "8",
				"text": "桩机机械",
				children: [{
					"value": "227",
					"text": "搅拌桩"
				}, {
					"value": "233",
					"text": "TRD工法机"
				}, {
					"value": "176",
					"text": "旋挖钻"
				}, {
					"value": "177",
					"text": "水平定向钻"
				}, {
					"value": "178",
					"text": "打桩锤"
				}, {
					"value": "179",
					"text": "全套管钻机"
				}, {
					"value": "225",
					"text": "灌注桩"
				}, {
					"value": "181",
					"text": "双轮铣"
				}, {
					"value": "226",
					"text": "高压旋喷"
				}, {
					"value": "220",
					"text": "机械手"
				}, {
					"value": "229",
					"text": "压密注浆机"
				}, {
					"value": "232",
					"text": "降水"
				}, {
					"value": "234",
					"text": "咬合桩机"
				}, {
					"value": "235",
					"text": "顶管机"
				}, {
					"value": "265",
					"text": "静压植桩机"
				}]
			},
			{
				"value": "9",
				"text": "矿山机械",
				children: [{
					"value": "182",
					"text": "掘进机"
				}, {
					"value": "183",
					"text": "矿用自卸车"
				}, {
					"value": "184",
					"text": "潜孔钻机"
				}, {
					"value": "185",
					"text": "移动破碎机"
				}, {
					"value": "186",
					"text": "凿岩机"
				}, {
					"value": "187",
					"text": "破碎机"
				}]
			}
		]
	},
	{
		"value": "203",
		"text": "挖机"
	}
]
//求购
var qiu_ergou = [{
		"value": "91",
		"text": "施工周转材料",
		children: [{
			"value": "116",
			"text": "H型钢"
		}, {
			"value": "117",
			"text": "钢板桩"
		}, {
			"value": "118",
			"text": "钢支撑"
		}, {
			"value": "119",
			"text": "钢板"
		}, {
			"value": "120",
			"text": "钢管"
		}, {
			"value": "231",
			"text": "金属材料"
		}]
	},
	{
		"value": "92",
		"text": "施工机械设备",
		children: [{
				"value": "94",
				"text": "土方机械",
				children: [{
					"value": "101",
					"text": "挖掘机"
				}, {
					"value": "102",
					"text": "装载机"
				}, {
					"value": "103",
					"text": "推土机"
				}, {
					"value": "104",
					"text": "平地机"
				}]
			},
			{
				"value": "95",
				"text": "路面机械",
				children: [{
					"value": "105",
					"text": "滑模摊铺机"
				}, {
					"value": "106",
					"text": "摊铺机"
				}, {
					"value": "107",
					"text": "铣刨机"
				}]
			},
			{
				"value": "96",
				"text": "起重机械",
				children: [{
					"value": "108",
					"text": "汽车吊"
				}, {
					"value": "109",
					"text": "履带吊"
				}]
			},
			{
				"value": "97",
				"text": "混凝土机械",
				children: [{
					"value": "110",
					"text": "泵车"
				}, {
					"value": "111",
					"text": "混凝土搅拌车"
				}]
			},
			{
				"value": "98",
				"text": "桩工机械",
				children: [{
					"value": "112",
					"text": "旋挖钻"
				}, {
					"value": "113",
					"text": "水平定向钻"
				}]
			},
			{
				"value": "99",
				"text": "矿山机械",
				children: [{
					"value": "114",
					"text": "掘进机"
				}, {
					"value": "115",
					"text": "矿用自卸车"
				}]
			},
			{
				"value": "100",
				"text": "特种设备",
				children: [{
					"value": "161",
					"text": "发电机组"
				}, {
					"value": "162",
					"text": "空压机"
				}]
			}

		]
	}
]
//求租
var f_qiu = [{
	value: '31',
	text: '施工周转材料',
	children: [{
		"value": "33",
		"text": "H型钢"
	}, {
		"value": "34",
		"text": "钢板桩"
	}, {
		"value": "35",
		"text": "钢支撑"
	}, {
		"value": "36",
		"text": "钢板"
	}, {
		"value": "37",
		"text": "钢管"
	}]
}, {
	value: '32',
	text: '施工机械设备',
	children: [{
		value: "39",
		text: "土方机械",
		children: [{
			"value": "46",
			"text": "挖掘机"
		}, {
			"value": "47",
			"text": "装载机"
		}, {
			"value": "48",
			"text": "推土机"
		}, {
			"value": "49",
			"text": "平地机"
		}, {
			"value": "50",
			"text": "轮式挖掘机"
		}]
	}, {
		value: "40",
		text: "路面机械",
		children: [{
			"value": "51",
			"text": "滑模摊铺机"
		}, {
			"value": "52",
			"text": "摊铺机"
		}]
	}, {
		value: "41",
		text: "起重机械",
		children: [{
			"value": "53",
			"text": "汽车吊"
		}, {
			"value": "54",
			"text": "履带吊"
		}]
	}, {
		value: "42",
		text: "混凝土机械",
		children: [{
			"value": "55",
			"text": "泵车"
		}, {
			"value": "56",
			"text": "混凝土搅拌车"
		}]
	}, {
		value: "43",
		text: "桩工机械",
		children: [{
			"value": "57",
			"text": "旋挖钻"
		}, {
			"value": "58",
			"text": "水平定向钻"
		}]
	}, {
		value: "44",
		text: "矿山机械",
		children: [{
			"value": "59",
			"text": "掘进机"
		}, {
			"value": "60",
			"text": "矿用自卸车"
		}]
	}, {
		value: "45",
		text: "特种设备",
		children: [{
			"value": "158",
			"text": "空压机"
		}, {
			"value": "157",
			"text": "发电机组"
		}]
	}]
}]