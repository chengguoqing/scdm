//滚到的头条
Vue.component('gundong', {
    props: {
        items:""
    },
    template: `
<div id="box">
  <ul id="con1" ref="con1" :class="{anim:animate==true}">
    <li v-for='item in items'  class="fz14 dian" @tap="zhu('/article_cat_xq')"><span class="tuijian_d">推荐</span> {{item.name}}</li>
  </ul>
</div>
    `,
    data: function data() {
        return {
            animate: false,
        };
    },
    created() {
        setInterval(this.scroll, 2000)
    },
    methods: {
        scroll() {
            let con1 = this.$refs.con1;
            con1.style.marginTop = '-30px';
            this.animate = !this.animate;
            var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
            setTimeout(function () {
                that.items.push(that.items[0]);
                that.items.shift();
                con1.style.marginTop = '0px';
                that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
            }, 500)
        }
    }

});
