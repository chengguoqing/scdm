//banner
Vue.component('load', {
    props: {
        isshow: "",
        text:''
    },
    template: `<section class="s_jh_rtxc" :class="isshow">
  <section class="cz_w df_jh_dsert">
            <section class="cz_a ">
                <section class="s_jgh_drtxc cf yj4 ov pd pt10 pm10 bgff">
                   <img src="../img/load.gif" class="fl">
                    <section class="ov">
                        <p class="z3 tl pl20">
{{text}}
                        
                        </p>
                    </section>
                </section>
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

    }

});
