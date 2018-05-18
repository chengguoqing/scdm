//提款
var zhanghao = [ //银行卡列表
    {
        value: 'zhanga',
        text: '交通银行[**** 6222222]'
    }, {
        value: 'zhanga',
        text: '交通银行[**** 6322222]'
    }, {
        value: 'zhanga',
        text: '交通银行[**** 6422222]'
    }, {
        value: 'zhanga',
        text: '交通银行[**** 6522222]'
    }, {
        value: 'zhanga',
        text: '交通银行[**** 6622222]'
    }, {
        value: 'zhanga',
        text: '交通银行[**** 6722222]'
    }, {
        value: 'zhanga',
        text: '交通银行[**** 6822222]'
    }, {
        value: 'zhanga',
        text: '交通银行[**** 6922222]'
    }

]
var km = new Vue({
    el: '#tikuan',
    data: {
        form: {
            money: 4,
            skzh: "交通银行[**** 6222222]",
            paw: ""
        }
    },
    methods: {
        khyh_t() { //选择账号
            var th = this
            this.select_z(zhanghao, function (cs) {
                th.form.skzh = cs
            })

        },
        tijiao() { //提交按钮触发
            if (!this.form.money) {
                mui.toast('请输入提款金额');
                return
            }
            if (!this.form.skzh) {
                mui.toast('请选择收款账号');
                return
            }
             	if(this.form.paw.length < 6 || this.form.paw.length > 20) {
                mui.toast('密码格式6-20位');
                return
            }
            console.log("验证成功")
        }
    },
    mounted() {}
})
