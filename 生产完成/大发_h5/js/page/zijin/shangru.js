"use strict";var km=new Vue({el:"#shangru",data:{hg_sd:{name:"",num:""},form:{zcje:""}},methods:{tijiao:function(){if(!this.form.zcje)return void mui.toast("请输入转账金额");document.getElementById("mySwitch").classList.contains("mui-active")?mui.toast("打开状态"):mui.toast("关闭状态"),console.log("验证完毕")}},mounted:function(){var a=window.location.search.split("titke=")[1].split("&")[0],b=window.location.search.split("num=")[1].split("&")[0];this.hg_sd.name=a,this.hg_sd.num=b,console.log(this.hg_sd)}});