<template>
	<view class="journalDetailsPage">
		<!-- 详情 -->
		<view class="header">
			<view class="top">
				<!-- 左边图片 -->
				<view class="img">
					<!-- <image src="" mode=""></image> -->
				</view>
				<!-- 右边详情 -->
				<view class="details">
					<view class="title"></view>
					<view class="info">
						<!-- <text>期数</text>
						<text>月刊</text>
						<text>页码</text> -->
					</view>
					<view class="btn">
						<navigator url="" class="nowRead"></navigator>
						<navigator url="" class="oldList"></navigator>
					</view>
				</view>
			</view>
			<!-- 简介 -->
			<view class="introduction"></view>
		</view>
		<!-- 本期目录&原貌预览 -->
		<view class="directory_preview"></view>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			voicebtn
		}
	}
</script>

<style lang="less">
.journalDetailsPage{
	.header{
		height: 581rpx;
		width: 750rpx;
		margin: auto;
		.top {
			display: flex;
			justify-content: space-between;
			height: 320rpx;
			margin: 30rpx 30rpx 39rpx 30rpx;
			.img {
				width: 240rpx;
				height: 320rpx;
				background-color: #ccc;
			}
			.details {
				height: 320rpx;
				width: 370rpx;
				background-color: #ccc;
			}
		}
	}
}
</style>
