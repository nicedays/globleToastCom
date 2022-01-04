<template>
	<div class="btn">
		<button @click="myClick">submit</button>
	</div>
</template>

<script>
	import tips from '../components/tips.vue'
	export default {
	  name: 'test',
	  data(){
		  return{
			  
		  }
	  },
	  methods:{
		  myClick(){
			  this.$Toast(tips,{text:"传递参数"},3000)
		  }
	  }
	  
	}
</script>

<style>
	.btn{
		width: 20px;
		height: 8px;
		margin: auto auto;
	}
</style>
