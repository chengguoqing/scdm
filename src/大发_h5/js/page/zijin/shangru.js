var km = new Vue({
    el: '#shangru',
    data: {
        hg_sd:{"name":"",num:""},
        form: {
            zcje: "" //转账金额
        }

    },
    methods: {
        tijiao() {

            if (!this.form.zcje) {
                mui.toast('请输入转账金额');
                return
            }
            var isActive = document.getElementById("mySwitch").classList.contains("mui-active");
            if (isActive) {
                mui.toast('打开状态');
            } else {
                mui.toast('关闭状态');
            }
            console.log("验证完毕")
        }

    },
    mounted() {
        var name = window.location.search.split("titke=")[1].split("&")[0],
            num=window.location.search.split("num=")[1].split("&")[0]
   
        this.hg_sd.name=name
        this.hg_sd.num=num
        console.log(this.hg_sd)


    }
})
