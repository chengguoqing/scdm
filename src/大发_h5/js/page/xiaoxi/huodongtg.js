var km = new Vue({
	el: '#huodongtg',
	data: {
		d_dtas:[ 
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/27",isnew:true,url:'ddtgxq_a'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/28",isnew:true,url:'ddtgxq_b'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/29",isnew:"",url:'ddtgxq_a'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/30",isnew:"",url:'ddtgxq_b'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/12/31",isnew:"",url:'ddtgxq_a'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2018/1/1",isnew:true,url:'ddtgxq_b'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2018/1/2",isnew:true,url:'ddtgxq_a'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2018/1/2",isnew:true,url:'ddtgxq_b'},
		{img:"../img/ddf_a.png",name:"感恩酬礼，携手迎双旦",time:"2017/1/3",isnew:true,url:'ddtgxq_a'}
		]
	},
	methods: {

	},
	mounted() {
	
	}
})

mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});

function pullupRefresh() {
	var da_sde=km.d_dtas[0]
	for(var i=0;i<10;i++){
		km.d_dtas.push(da_sde)
	}
	this.endPullupToRefresh(false)
}