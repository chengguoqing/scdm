function chg_a(a,b,c,d){var e=a;$(e[0].children).map(function(a){$(c).append('<option value="'+a+'">'+this.text+"</option>")}),$(e[0].children[0].children).map(function(a){$(d).append("<option value="+a+'">'+this.text+"</option>")}),$(e).map(function(a){$(b).append('<option value="'+a+'">'+this.text+"</option>")});var f="";f=e[0].children,$(b).on("change",function(){var a=$(this).val();$(c).empty().addClass("show"),$(d).empty(),$(c).append("<option >请选择</option>"),$(d).append("<option >请选择</option>"),f=e[a].children,$(e[a].children).map(function(a){$(c).append('<option value="'+a+'">'+this.text+"</option>")})});$(c).on("change",function(){var a=$(this).val();$(d).empty().addClass("show"),$(d).append("<option >请选择</option>"),$(f[a].children).map(function(a){$(d).append('<option value="'+a+'">'+this.text+"</option>")})})}var s={mail:function(a){var b=!1;return/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a)&&(b=!0),b},phone:function(a){var b=!1;return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/)&&11==a.length&&(b=!0),b},car_t:function(a){var b=!1;return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a)&&(b=!0),b}};$(function(){$(".dsf_iuy_sdr").on("click",function(){$(".dsf_uy_sd").toggleClass("show")}),$(".dfs_d_dertx").on("click",function(){$(".df_juyg_s_sd").addClass("show"),$(".df_juyg_s_sd input").focus()}),$(".df_juyg_s_sd input").on("blur",function(){$(".df_juyg_s_sd").removeClass("show")}),$(window).scroll(function(){$(this).scrollTop()>200?$(".duo_icond").addClass("show"):$(".duo_icond").removeClass("show")}),$(".duo_icond").on("click",function(){$("html,body").animate({scrollTop:0},200)}),$(".df_ut_ddtxc a").on("click",function(){$(".df_ut_ddtxc a").removeClass("act"),$(this).addClass("act")})});