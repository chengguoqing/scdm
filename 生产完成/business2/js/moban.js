"use strict";$(function(){var a=localStorage.dsfds_s,b=$.parseJSON(a);if($("#jhggs_a").text(b.tiws),$("#jhggs_b").text(b.tiws_b),b.tiws_c?$(".logo_ddf_fg").addClass("act").find("img").attr("src",b.tiws_c):$(".logo_ddf_fg").removeClass("act"),b.tiws_d&&$("#jhggs_d").text(b.tiws_d),b.tiws_e&&$("#jhggs_e").text(b.tiws_e),b.tiws_f&&$("#jhggs_f").text(b.tiws_f),b.tiws_g){$(".sd_sd_sdfggxx").hide(),$(".J_prismPlayer").addClass("show");new prismplayer({id:"J_prismPlayer",source:b.tiws_g,autoplay:!0,width:"100%",height:"200px"})}else $(".sd_sd_sdfggxx").show(),$(".J_prismPlayer").removeClass("show");b.tiws_h&&b.tiws_h.length>0?($(".sd_sf_sfgx").hide(),$(".sdf_sdf_sfgxx").addClass("show"),$(".sdf_sdf_sfgxx span.sd_Sd_sfgx").empty(),b.tiws_h.map(function(a,b){console.log(a),$(".sdf_sdf_sfgxx span.sd_Sd_sfgx").append('<img src="'+a+'" data-preview-src="" data-preview-group="1">')}),$(".df_xdfgx").text(b.tiws_h.length)):($(".sd_sf_sfgx").show(),$(".sdf_sdf_sfgxx").removeClass("show"))});