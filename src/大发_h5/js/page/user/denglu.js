var km = new Vue({
    el: '#denglu',
    data: {
        form: {
            user: "",
            paw: ""
        }
    },
    methods: {
        denglu_btn() {
            if (!this.form.user) {
                mui.toast('账号不能为空');
                return
            }
            if (this.form.user.length < 6 || this.form.user.length > 12) {
                mui.toast('账号长度6到12位');
                return
            }
            if (!this.form.paw) {
                mui.toast('密码不能为空');
                return
            }
            console.log(this.form)
        }
    },
    mounted() {
        mui(".mkhj_sd_sd").on("tap", ".wjmi", function () {
            mui.confirm("联系在线客服协助修改密码", "忘记密码", ["关闭", "联系客服"], function (e) {
                if (e.index == 1) {
                    zhuer('https://f88.live800.com/live800/chatClient/chatbox.jsp?companyID=684931&configID=137043&jid=6800595120&lan=zh&subject=%E5%92%A8%E8%AF%A2&prechatinfoexist=1&s=1')
                }
            });
        })
    }
})
