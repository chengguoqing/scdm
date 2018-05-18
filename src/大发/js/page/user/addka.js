//添加绑定银行卡
var km = new Vue({
    el: '#addka',
    data: {
        form: {
            name: "", //开户姓名
            yhkh: "", //银行卡号
            khcs: "", //开户城市
            khyh: "", //开户银行
            khzh: "" //开户支行
        }

    },
    methods: {
        chengshi() { //选择城市触发
            var th = this
            this.city(function (cs) {
                th.form.khcs = cs
            })

        },
        khyh_t() { //选择银行
            var th = this
            this.select_z(hhk_se, function (cs) {
                th.form.khyh = cs
            })

        },
        submit() { //提交
            if (!this.form.name) {
                mui.toast('请输入开户姓名');
                return
            }
            if (!this.form.yhkh) {
                mui.toast('请输入银行卡号');
                return
            }
            if (!this.form.khcs) {
                mui.toast('请选择开户城市');
                return
            }
            if (!this.form.khyh) {
                mui.toast('请选择开户银行');
                return
            }
            if (!this.form.khzh) {
                mui.toast('请输入开户支行');
                return
            }
            console.log("验证完毕")
        }
    },
    mounted() {




    }
})
