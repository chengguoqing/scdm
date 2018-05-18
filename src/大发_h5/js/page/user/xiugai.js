//修改密码
var km = new Vue({
    el: '#xiugai',
    data: {
        title: "",
        zhutype: 0, //0修改登录密码 1支付密码
        form: {
            jpaw: "", //旧密码
            npaw: "", //新密码
            qpaw: "" //确认密码
        }
    },
    methods: {
        submit() { //提交按钮触发

            if (this.form.jpaw.length < 6 || this.form.jpaw.length > 20) {
                mui.toast('旧密码长度6到20位');
                return
            }
            if (this.form.npaw.length < 6 || this.form.npaw.length > 20) {
                mui.toast('新密码长度6到20位');
                return
            }
            if (this.form.qpaw.length < 6 || this.form.qpaw.length > 20) {
                mui.toast('确认新密码长度6到20位');
                return
            }
            if (this.form.npaw != this.form.qpaw) {
                mui.toast('两次密码输入不一致');
                return
            }
            console.log("验证完毕")
        }
    },
    mounted() {
        var th = this
        var wen_sd = decodeURI(window.location.search),
            id_s = wen_sd.split("id_s=")[1].split("&")[0],
            title = wen_sd.split("title=")[1].split("&")[0]


        th.title = title
        th.zhutype = id_s


    }
})
