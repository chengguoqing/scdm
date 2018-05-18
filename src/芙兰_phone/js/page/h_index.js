 var sd_sd = [17817, 17142, 9588, 9423, 10036]
 $('#container').highcharts({
     title: {
         text: '对数折线图',
         style: {
             display: "none"
         }
     },
     plotOptions: {

         line: {
             dataLabels: {
                 enabled: true,
                 color: "#fff",
                 formatter: function () {
                     if ((sd_sd.length - 1) == this.key) {
                         return "<span class='sd_uy_srtcf yj'><span></span></span>";
                     }


                 },
                 useHTML: true
             }
         }
     },
     series: [{
         data: sd_sd,
         pointStart: 0,
         lineWidth: 1, //线条宽度
         color: "red",
         stickyTracking: true,
            }]
 });

 //        会员权益折叠

 $(".dsf_ih_dsd").on("click", function () {
     $(this).toggleClass("act")
     $(".df_hg_sd_sf").fadeToggle()
 })
 //获取芙兰值
 var sd_s = $(".gund_sd").attr("data-nmm"),
     sd_ssrt=0
 var sd_sdf = setInterval(function () {
     sd_ssrt+=100
     $(".gund_sd").text(sd_ssrt)
     if(sd_s<=sd_ssrt){
          $(".gund_sd").text(sd_s)
         clearTimeout(sd_sdf)
     }
 }, 1)
