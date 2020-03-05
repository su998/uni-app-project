<template>
	<view class="preview">
		<view class="preview_item"></view>
		<view class="preview_item"></view>
		<view class="preview_item"></view>
		<view class="preview_item"></view>
		<view class="preview_item"></view>
		<view class="preview_item"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.preview{
	width: 100%;
	margin: 30rpx 31rpx 0 0;
	display: flex;
	flex-flow: wrap;
	.preview_item {
		height: 279.3rpx;
		width: 210rpx;
		background-color: #ccc;
		margin-left: 31rpx;
		margin-bottom: 31rpx;
	}
}
</style>
