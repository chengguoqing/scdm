var km = new Vue({
    el: '#z_index',
    data: {
        data_list: [
            {
                id: 0,
                name: "Sunbet",
                num: 0,
			}, {
                id: 1,
                name: "MG",
                num: 96,
			}, {
                id: 2,
                name: "OG",
                num: 100,
			}, {
                id: 3,
                name: "皇冠体育",
                num: 99,
			}, {
                id: 4,
                name: "PT",
                num: 40,
			}, {
                id: 5,
                name: "HB",
                num: 0,
			}, {
                id: 6,
                name: "AG",
                num: 0,
			}, {
                id: 7,
                name: "AB",
                num: 0,
			}
		]
    },
    methods: {

    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({

        });
    }
})
