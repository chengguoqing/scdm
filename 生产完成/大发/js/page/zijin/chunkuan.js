"use strict";var km=new Vue({el:"#chunkuan",data:{nmu_s:50,sd_hg_s:"",qc_img:"http://duxinggj.com/qc_er?text=http://duxinggj.com/phone/%E8%8A%99%E5%85%B0_phone/%E4%BC%9A%E5%91%98%E6%9C%BA%E5%88%B6/",czje:[{num:50,cls:"act"},{num:100,cls:""},{num:200,cls:""},{num:500,cls:""},{num:1e3,cls:""},{num:2e3,cls:""},{num:5e3,cls:""},{num:1e4,cls:""}]},methods:{ding_drt:function(a){this.czje.map(function(a){a.cls=""}),this.czje[a].cls="act",this.nmu_s=this.czje[a].num},tanchu:function(a){this.sd_hg_s=a,mui("#zhifu_s").popover("toggle")},baocun_s:function(){var a=this;plus.downloader.createDownload(this.qc_img,{},function(b,c){plus.io.resolveLocalFileSystemURL(b.filename,function(b){plus.gallery.save(b.toLocalURL(),function(){mui.toast("保存成功"),"QQ钱包"==a.sd_hg_s?location.href="mqq://":location.href="alipay://"},function(a){mui.toast("保存成功")})},function(a){console.log(a.message)})}).start()}},mounted:function(){mui(".mui-scroll-wrapper").scroll({})}});