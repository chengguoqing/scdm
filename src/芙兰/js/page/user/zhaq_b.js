//修改密码
var km = new Vue({
    el: '#zhaq_b',
    data: {
    	s_sdr:"",
        buzs: ['show', '', ''],
        buzou: 0, //到了第几步
        djs: true,
        djs_time: 60,
        none_for: {
            yzm: "" //验证码
        },
        mima_a: {
            paw: "",
            qpaw: ""
        }
    },
    methods: {
        huoquyanz() { //获取验证码
            if (!this.none_for.yzm) {
                mui.toast('请输入验证码')
                return
            }
            var th = this
            if (this.djs) {
                this.djs = false
                this.djs_time--
                    var sdf_wer = setInterval(function () {
                        if (th.djs_time-- <= 0) {
                            th.djs = true
                            th.djs_time = 60
                            clearTimeout(sdf_wer)
                        }

                    }, 1000)
            }


        },
        submit(idx) {
            if (idx == 1) {
                if (!this.none_for.yzm) {
                    mui.toast('请输入验证码')
                    return
                }
                this.buzou = 1
                this.buzs = ['', 'show', '']
                console.log("步骤1验证完毕")
            }
            if (idx == 2) {
                if (!this.mima_a.paw) {
                    mui.toast('请输入密码')
                    return
                }
                if (!this.mima_a.qpaw) {
                    mui.toast('请确认密码')
                    return
                }
                if (this.mima_a.paw != this.mima_a.qpaw) {
                    mui.toast('两次输入的密码不一致')
                    return
                }
                        this.buzou = 2
                this.buzs = ['', '', 'show']
                console.log("步骤1验证完毕")
            }

        }

    },
    mounted() {
    	var th=this
    	mui.plusReady(function(){
    		 var self = plus.webview.currentWebview();
    		 th.s_sdr=self.title_s
    	})
    	
    }
})
