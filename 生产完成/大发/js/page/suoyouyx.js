"use strict";var km=new Vue({el:"#suoyouyx",data:{caidan:[{name:"所有游戏",id:0,url:"youxilist.html"},{name:"真人游戏",id:1,url:"youxilist.html"},{name:"电子游戏",id:2,url:"youxilist.html"},{name:"PT老虎机",id:3,url:"youxilist.html"},{name:"MG老虎机",id:4,url:"youxilist.html"}],_self:""},methods:{},mounted:function(){var a=this;mui.plusReady(function(){a._self=plus.webview.currentWebview();var b=[];a.caidan.map(function(a){var c={};c.id=a.url+"?id="+a.id,c.url=a.url,c.extras={chanshu:a.id},b.push(c)});var c=new webviewGroup(a._self.id,{items:b,onChange:function(a){var b=document.querySelector(".mui-control-item.mui-active");b&&b.classList.remove("mui-active"),document.querySelector(".mui-control-item:nth-child("+(parseInt(a.index)+1)+")").classList.add("mui-active")}},140,0);mui(".mui-segmented-control").on("tap",".mui-control-item",function(a){var b=this.getAttribute("data-wid");c.switchTab(b)})})}});