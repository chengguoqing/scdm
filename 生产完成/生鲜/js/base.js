$(window).scroll(function(){$(this).scrollTop()>=200?$(".dou_dsftcc").addClass("show"):$(".dou_dsftcc").removeClass("show")}),$(".dou_dsftcc").on("click",function(){$("html,body").animate({scrollTop:0},200)}),document.querySelector("#pullrefresh").addEventListener("scroll",function(a){-a.detail.y>100?$(".top_icon_sd").addClass("show"):$(".top_icon_sd").removeClass("show")}),$(".top_icon_sd").on("click",function(){mui("#pullrefresh").pullRefresh().scrollTo(0,0,100)});