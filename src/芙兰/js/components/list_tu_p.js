//图文列表-普通

Vue.component('list_tu_p', {
    props: {
        df_sd_sd: "",
        shouchang: "" //为真的话是收藏
    },
    template: `
       <section class="mui-row pd bgff pt10" @tap='zhu("/goods")'>
                     <section class="mui-col-xs-6 dsf_jhkh_as gd" v-for="item in df_sd_sd">
                    <p class="dsf_jgh_sdrt">
                        <i class="dx icon-biaoqian-rexiao rexiOu_sd"></i>
                        <img :src="item.img" class="la">
                    </p>
                    <section class="dsf_unhwer">
                    <p class="dianer dsf_uh_sd">
                    {{item.name}}
                    </p>
                    <p class="yeer mt15" >
                   ￥{{item.money}} <del class="z9 fz12">￥{{item.ymoney}}</del>
                    </p>
                    <p class="fz12" v-if="!shouchang">
                
                    <i class="dx icon-aixin red fz14 cz"></i>
                        <span class="mr5">{{item.num_s}}人</span>{{item.sd_sdf}}
                    </p>
                    <p class="btm  tr z9 fz14 pr10">
<span @tap.stop="dele_sd(item.id)" v-if="shouchang">
<i class="mui-icon mui-icon-trash z9 fz22"></i>
删除
</span>

                </p>
                        </section>
                </section>
            
            </section>
    `,
    data: function data() {
        return {

        };
    },
    mounted() {

    },

    methods: {
        dele_sd(id) {
            this.$emit("scc", id)
        }
    }

});
