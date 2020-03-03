<template>
	<view class="featured">
		<!-- 顶部导航 -->
		<nav-top/>
		<!-- 轮播 -->
		<swiper/>
	</view>
</template>

<script>
	import navTop from '../../components/navTop.vue'
	import swiper from '../../components/swiper.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			navTop, swiper
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
.featured {

}
</style>
