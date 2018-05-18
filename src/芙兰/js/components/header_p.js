//头部导航带菜单
Vue.component('header_p', {
	props: {
		title: "",
		ty_s: ""
	},
	template: `
<section class="mui-bar-nav">
     <header class="mui-bar mui-bar-nav asd_uy_dftx">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left z3" v-if="!ty_s"></a>
        <h1 class="mui-title z3">{{title}}</h1>
        <a class="mui-icon mui-icon-more mui-pull-right z9 " href="#topPopover"></a>
    </header>
  <div id="topPopover" class="mui-popover kj_kihj_sed">
        <div class="mui-popover-arrow"></div>
        <section>
            <ul class="s_dfmh_sdf fz14">
                <li v-for="(sdf,idx) in caidan" @tap="sdh_sd(sdf.url,idx)">
                    <i class="dx " :class="sdf.icon_s"></i>
                    <span>{{sdf.name}}</span>
                </li>
            </ul>
        </section>
    </div>
    </section>

    `,
	data: function data() {
		return {
			index_sdsd: "",
			caidan: [{
					"name": "首页",
					icon_s: "icon-zhuye",
					url: "index_er.html"
				},
				{
					"name": "分类",
					icon_s: "icon-fenlei",
					url: "catalog.html"
				},
				{
					"name": "店主圈",
					icon_s: "icon--xuanxiang-bangqiu",
					url: "article_cat_list.html"
				},
				{
					"name": "购物车",
					icon_s: "icon-cart",
					url: "gwc/flow.html"
				},
				{
					"name": "我的",
					icon_s: "icon-wode",
					url: "user/user_center.html"
				},
			]
		};
	},
	mounted() {
		var th = this
		mui.plusReady(function() {
			th.index_sdsd = plus.webview.getWebviewById('duxinggj');

		})

	},
	methods: {
		sdh_sd(sd_sd,idx) {
			plus.webview.currentWebview().close()
			plus.webview.getLaunchWebview().evalJS(`show_web('${sd_sd}','${idx+1}')`);

		}
	}

});