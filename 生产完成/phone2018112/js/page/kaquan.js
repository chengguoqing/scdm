"use strict";function pullupRefresh(){for(var a=0;a<10;a++)$(".qiche_s").append('<li>\n                        <p>\n                            <img src="img/leike.png" class="lo_sdsert">\n                        </p>\n                        <p class="fz16 z3  mt5">\n                            免费地图升级\n                        </p>\n                        <p class="dianer z9 mt5">\n                            介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍\n                        </p>\n                        <p class="mt10">\n                            <img src="img/qcihe.jpg" class="w100">\n                        </p>\n                    </li>');this.endPullupToRefresh(!1)}$(function(){mui.init({pullRefresh:{container:"#pullrefresh",up:{contentrefresh:"正在加载...",callback:pullupRefresh}}})});