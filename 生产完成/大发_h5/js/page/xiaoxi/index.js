"use strict";function pullupRefresh(){var a=$(".mui-control-item.mui-active").index(),b="";0==a&&(b=km.d_dtas[0]),1==a&&(b=km.date_lisrt[0]),2==a&&(b=km.date_lisrter[0]);for(var c=0;c<10;c++)0==a&&km.d_dtas.push(b),1==a&&km.date_lisrt.push(b),2==a&&km.date_lisrter.push(b);this.endPullupToRefresh(!1)}var km=new Vue({el:"#huodongtg",data:{d_dtas:[{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/27",isnew:!0,url:"ddtgxq_a"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/28",isnew:!0,url:"ddtgxq_b"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/29",isnew:"",url:"ddtgxq_a"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/30",isnew:"",url:"ddtgxq_b"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/31",isnew:"",url:"ddtgxq_a"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2018/1/1",isnew:!0,url:"ddtgxq_b"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2018/1/2",isnew:!0,url:"ddtgxq_a"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2018/1/2",isnew:!0,url:"ddtgxq_b"},{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/1/3",isnew:!0,url:"ddtgxq_a"}],date_lisrt:[{id:0,name:"官网系统升级",time:"2017/11/09"},{id:1,name:"官网系统升级",time:"2017/11/09"},{id:2,name:"官网系统升级",time:"2017/11/09"},{id:3,name:"官网系统升级",time:"2017/11/09"},{id:4,name:"官网系统升级",time:"2017/11/09"},{id:5,name:"官网系统升级",time:"2017/11/09"},{id:6,name:"官网系统升级",time:"2017/11/09"},{id:7,name:"官网系统升级",time:"2017/11/09"},{id:8,name:"官网系统升级",time:"2017/11/09"},{id:9,name:"官网系统升级",time:"2017/11/09"},{id:10,name:"官网系统升级",time:"2017/11/09"},{id:11,name:"官网系统升级",time:"2017/11/09"},{id:12,name:"官网系统升级",time:"2017/11/09"}],date_lisrter:[{id:0,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:1,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:2,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:3,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:4,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:5,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:6,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:7,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:8,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:9,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:10,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:11,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"},{id:12,name:"恭喜您，您的优惠单已完成（金额RMB：4.62，优惠名称：电子返水，请您注意查收）如有疑问请联系在线客服咨询。",time:"2017/11/09"}]},methods:{},mounted:function(){$(".mui-control-item").on("tap",function(){mui("#pullrefresh").pullRefresh().scrollTo(0,0,100)})}});mui.init({pullRefresh:{container:"#pullrefresh",up:{contentrefresh:"正在加载...",callback:pullupRefresh}}});