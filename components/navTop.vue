<template>
	<view class="nav">
		<navigator class="nav_item" :class="{nav_item_selected: index===currentIndex}" @click="seleted(index)" v-for="(item, index) in navlist" :key="index" :url="item.url" hover-class="navigator-hover">
			 {{item.text}}
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navlist: [
					{url: 'https://www.baidu.com/', text: '地球科学'},
					{url: 'https://www.baidu.com/', text: '环境'},
					{url: 'https://www.baidu.com/', text: '地球科学'},
					{url: 'https://www.baidu.com/', text: '地球科学'},
					{url: 'https://www.baidu.com/', text: '地球科学'}
				],
				// 当前下标
				currentIndex: 0
			};
		},
		methods:{
			seleted (index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="less">
	.nav {
		display: flex;
		width: 100%;
		height: 44px;
		line-height: 44px;
		justify-content: space-around;
		.nav_item {
			font-size: 15px;
			font-weight: Medium;
			color: #333333;
			font-family: 'PingFangSC-Medium';
		}
		.nav_item_selected {
			color: #E9200F;
			font-size: 18px;
			font-family: 'PingFangSC-Medium';
			font-weight: Medium;
		}
	}
</style>
