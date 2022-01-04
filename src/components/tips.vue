<template>
	<div class="tips">{{text}}</div>
</template>

<script>
	export default {
	  name: 'tips',
	  data(){
		  return{
			  text:""
		  }
	  }
	}
</script>

<style>
	.tips{
		height: 50px;
		position: absolute;
		top: 50%;
		left: 50%;
		padding: 10px;
		border-radius: 15px;
		background-color: #DDDDDD;
		text-align: center;
		line-height: 50px;
	}
</style>
