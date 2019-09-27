<template>
  <div class='avatar'>
		<img src="../assets/xiamu.jpg" class='pic' alt="">
		<span class='greeting'>Hello!<br />
		Xiaoooyooo</span>
		<p class='info'>
			{{ avatar_message }}<br />{{today | timeFormat}}
		</p>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	data(){
		return{
			today:new Date(),
		}
	},
	computed:{
		...mapGetters(['length']),
		avatar_message(){
			return this.length == 0 ? 'Why not find something else to do?'
			: `You have ${this.length} tasks left, Fighting!`
		}
	},
	filters:{
		timeFormat(val){
			return val.toDateString()
		}
	}
};
</script>
<style lang="scss" scoped>
.avatar{
	padding: 20px 15px 0;
	.pic{
		height: 70px;
		width: 70px;
		border-radius: 50%;
		vertical-align: bottom;
	}
	.greeting{
		padding-left: 10px;
		font-weight: 200;
		color: $secondary-color;
		font-size: 30px;
	}
	.info{
		color: $secondary-color;
		line-height: 25px;
		padding: 15px 0;
    font-weight: 200;
    font-size: 18px;
	}
}
</style>