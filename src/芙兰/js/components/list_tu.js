//图文列表-倒计时

Vue.component('list_tu', {
    props: {
        item: ""
    },
    template: `
     <section class="mui-col-xs-6 dsf_jhkh_as" @tap='zhu("/goods")'>
                    <p class="dsf_jgh_sdrt">
                        
                        <img :src="item.img">
                  <span class="dsfiyh_sd">剩余{{djs}}</span>
                    </p>
                    <section class="dsf_unhwer">
                    <p class="dianer dsf_uh_sd">
                    {{item.name}}
                    </p>
                    <p class="yeer mt5 pt5 btmer">
                    ￥{{item.money}} <del class="z9 fz12">￥{{item.ymoney}}</del>
                    </p>
                    </section>
                        </section>
                </section>
    `,
    data: function data() {
        return {
            djs: "" //明文的倒计时
        };
    },
    mounted() {
        this.djs = this.gt_sff(this.item.time_jd)
        setInterval(()=>   this.djs = this.gt_sff(this.item.time_jd),1000)
    },

    methods: {
        gt_sff(dateTimeStamp) {
            var leftTime = (new Date(parseInt(dateTimeStamp))) - (new Date()); //计算剩余的毫秒数 
            var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
            var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
            var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
            var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
            return days + "天" + hours + "小时" + minutes + "分" + seconds
        }
    }

});
