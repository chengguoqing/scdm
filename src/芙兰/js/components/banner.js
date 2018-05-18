//banner
Vue.component('banner', {
    props: {
        banner: ""
    },
    template: `
 <!--        banner-->
            <section class="banner_sdf">
                <div class="swiper-container df_sd_sdgxc">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide" v-for="bn in banner"> <img :src="bn.img"> 
                        </div>
                       
                    </div> 
                    <div class="swiper-pagination"></div>
                </div>
            </section>
    `,
    data: function data() {
        return {

        };
    },
    mounted() {

        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 5000,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    },
    methods: {

    }

});
