var km = new Vue({
    el: '#zhuce',
    data: {
        form: {
            user: "", //账号
            name: "", //真实姓名
            paw: "", //密码
            qpaw: "", //确认密码
            email: "", //邮箱
            qq: "", //qq
            phone: "", //电话
            tuiguang: "", //请输入推广码
            qukm: "", //取款密码
            qqukm: "", //确认取款密码
            yzm: "" //验证码

        }
    },
    methods: {
        zhuce() { //表单提交
            if (!this.form.user) {
                mui.toast('账号不能为空');
                return
            }
            if (this.form.user.length < 6 || this.form.user.length > 12) {
                mui.toast('账号长度6到12位');
                return
            }
            if (!this.form.name) {
                mui.toast('真实姓名不能为空');
                return
            }
            if (!this.form.paw) {
                mui.toast('密码不能为空');
                return
            }
            if (!this.form.qpaw) {
                mui.toast('请再次确认密码');
                return
            }
            if (this.form.paw != this.form.qpaw) {
                mui.toast('两次密码输入不一致');
                return
            }
            if (!yanza.mail(this.form.email)) {
                mui.toast('邮箱格式错误');
                return
            }

            if (!this.form.qq) {
                mui.toast('qq不能为空');
                return
            }
            if (!yanza.phone(this.form.phone)) {
                mui.toast('电话号码格式错误');
                return
            }
            if (document.querySelector(".sd_jug_xs.act")) {
                if (!this.form.qukm) {
                    mui.toast('请输入取款密码');
                    return
                }
                if (!this.form.qqukm) {
                    mui.toast('请确认取款密码');
                    return
                }

                if (this.form.qukm != this.form.qqukm) {
                    mui.toast('取款密码输入不一致');
                    return
                }
            }
            if (!this.form.yzm) {
                mui.toast('请输入验证码');
                return
            }
            
            console.log(this.form)
        }
    },
    mounted() {
        mui(".sjh_icosdr").on("tap", ".sd_jug_xs", function () {
            if (hasClass(this, "act")) {
                this.classList.remove("act")
                document.querySelector(".ds_sdsrtxc.aa").classList.remove("show")
                document.querySelector(".ds_sdsrtxc.ab").classList.remove("show")
            } else {
                this.classList.add("act")
                document.querySelector(".ds_sdsrtxc.aa").classList.add("show")
                document.querySelector(".ds_sdsrtxc.ab").classList.add("show")
            }
        })
    }
})
