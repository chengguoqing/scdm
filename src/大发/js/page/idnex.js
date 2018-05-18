var km = new Vue({
    el: '#index_ise',
    data: {
        num_s:0,//初始化默认数据
        sd_srt: [
            {
                name: "真人",
                data: [
                    {
                        num: 1,
                        img: "img/case/73ad8995-b5d3-442f-8a20-ed7d92f91b2b.png", //封面
                        name: " 东方厅（OG）", //标题
                        url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2" //跳转地址
                    }, {
                        num: 1,
                        img: "img/case/20171219094653_5180.png",
                        name: " 金龙（AB真人）",
                        url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/cdf_a.png",
                        name: "猛龙传奇",
                        url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/cdf_b.png",
                        name: "快乐农庄",
                   url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/cdf_c.png",
                        name: "封神榜",
                        url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/cdf_d.png",
                        name: "摇滚之夜",
                         url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/cdf_e.png",
                        name: " 街头烈战",
                        url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/cdf_f.png",
                        name: " 英雄荣耀",
                         url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/cdf_g.png",
                        name: " 亚特兰蒂斯",
                       url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/8EDD116946A244D38B2EA5B9E96379BE.jpg",
                        name: " ？青龙（AG真人）",
                       url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/0F6A5D972D684A688A9E03E14E92CA4A.jpg",
                        name: "PT真人",
                     url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/7FA45AF7DC4B4ED18B7240619BF91E92.jpg",
                        name: "  朱雀（BBIN真人）",
                      url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }
                ]
            }, {
                name: "体育",
                data: [
                    {
                        num: 1,
                        img: "img/case/48dfe27c-4213-48df-b7bb-d8246e484590.png", //封面
                        name: " 沙巴体育", //标题
                     url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/ab55ff5a-4139-4c52-81de-ce9954ae28c0.png", //封面
                        name: "  188体育", //标题
                       url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/1ed6e0e5-dda3-4a9c-852a-1821f7e24d83.png", //封面
                        name: " 皇冠体育", //标题
                        url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    },

            ]
            },
            {
                name: "彩票",
                data: [
                    {
                        num: 1,
                        img: "img/case/FE7F7ECC527746B0B906557003E4D8C5.jpg", //封面
                        name: " BBIN彩票", //标题
                       url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/440BDB867A00456E8B11EE092E335912.jpg", //封面
                        name: "  KG彩票", //标题
                   url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/1a977873-9a87-4bb7-968a-8671ea39eecf.jpg", //封面
                        name: " CG彩票", //标题
                         url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    },

            ]
              },
            {
                name: "电子",
                data: [
                    {
                        num: 1,
                        img: "img/case/dsf_a.jpg", //封面
                        name: " AG捕鱼", //标题
                       url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/dsf_b.jpg", //封面
                        name: " AG老虎机", //标题
                     url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/dsf_c.jpg", //封面
                        name: " BBIN老虎机", //标题
                       url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/dsf_d.jpg", //封面
                        name: " MG老虎机", //标题
                     url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/dsf_e.jpg", //封面
                        name: " PT老虎机", //标题
                       url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/dsf_f.jpg", //封面
                        name: " QT老虎机", //标题
 url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }, {
                        num: 1,
                        img: "img/case/dsf_g.png", //封面
                        name: " HB老虎机", //标题
                  url: "http://www.allbetgame.net/h5/?token=12a8a05458aa&sessionId=6750cf1ac0834937b7094e24f5732c7e&loginType=2"
                    }

            ]
            },
            {
                name: "我的游戏",
                data: ''
                   }

        ]
    },
    methods: {
        qieguna(idx) {//切换变化数据
            this.num_s=idx
        },
        lcoal_s(url){//列表点击跳转
            mui.confirm('您在OG的余额不足，是否将资金自动转入OG',' ',["直接进入","自动转入"],function(e){
              if(e.index==0){//直接进入
                  window.location.href=url
              }else{//自动转入
                                window.location.href=url 
              }
            })
        }
    },
    mounted() {
        mui.init();



        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 5000,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
        mui('.mui-scroll-wrapper').scroll({

        });
    }
})
