//收货地址
var km = new Vue({
    el: '#ssdz',
    data: { 
    	bito:"",
    	ty:"",
        dizi: [
            {
                moren: 0, //0默认  
                shr: "独行工匠", //收货人
                dizhi: "广东省-深圳市-南山区", // 地址
                xiangxi:"留仙洞村107栋",
                email: "5152351416@qq.com", //邮箱
                tel: "13538190372", //联系方式
                yb: "333300" //邮编

            }, {
                moren: 1, //0默认  
                shr: "独行工匠", //收货人
                dizhi: "广东省-深圳市-南山区-留仙洞村107栋", // 地址
                xiangxi:"留仙洞村107栋",
                email: "5152351416@qq.com", //邮箱
                tel: "13538190372", //联系方式
                yb: "333300" //邮编

            }, {
                moren: 1, //0默认  
                shr: "独行工匠", //收货人
                dizhi: "广东省-深圳市-南山区-留仙洞村107栋", // 地址
                xiangxi:"留仙洞村107栋",
                email: "5152351416@qq.com", //邮箱
                tel: "13538190372", //联系方式
                yb: "333300" //邮编

            }, {
                moren: 1, //0默认  
                shr: "独行工匠", //收货人
                dizhi: "广东省-深圳市-南山区-留仙洞村107栋", // 地址
                xiangxi:"留仙洞村107栋",
                email: "5152351416@qq.com", //邮箱
                tel: "13538190372", //联系方式
                yb: "333300" //邮编

            }, {
                moren: 1, //0默认  
                shr: "独行工匠", //收货人
                dizhi: "广东省-深圳市-南山区-留仙洞村107栋", // 地址
                xiangxi:"留仙洞村107栋",
                email: "5152351416@qq.com", //邮箱
                tel: "13538190372", //联系方式
                yb: "333300" //邮编

            }, {
                moren: 1, //0默认   
                shr: "独行工匠", //收货人
                dizhi: "广东省-深圳市-南山区-留仙洞村107栋", // 地址
                xiangxi:"留仙洞村107栋",
                email: "5152351416@qq.com", //邮箱
                tel: "13538190372", //联系方式
                yb: "333300" //邮编

            }
        ]

    },
    methods: {
        she_sd(idx){//设默认地址
            this.dizi.map(function(a){
              a.moren=1  
            })
              this.dizi[idx].moren=0
        },
        delect(idx){//删除
            mui.confirm("你确认要删除该收货地址吗？",e=>{
                if(e.index==1){
                     this.dizi.splice(idx, 1);
                }
            })
        }
    },
    mounted() {
    	var th=this
    	mui.plusReady(function(){
    		  var self = plus.webview.currentWebview();
    		  km.bito=self.title
    		  km.ty=self.ty
    	})
        mui('.mui-scroll-wrapper').scroll({

        });
    }
})
