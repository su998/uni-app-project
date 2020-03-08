<template>
	<view class="voiceDetailsPage">
		<view class="header">
			<view class="img">
				<image src="" mode=""></image>
				<image class="logo" src="../../../static/images/read/听书标签-听书详情@2x.png" mode=""></image>
			</view>
			<view class="detail">
				<view class="title ff_bold">东宫&nbsp;&nbsp;(典藏版)</view>
				<view class="author ff_medium">艺术家: 匪我存思</view>
				<view class="content ff_medium">
					<text>总时长: &nbsp;22小时35分</text><br>
					<text>播放: &nbsp;155次</text><br>
					<text>章节: &nbsp;63章</text><br>
				</view>
				<navigator url="" class="nowRead ff_bold">立即阅读</navigator>
			</view>
		</view>
		<!-- 间隔 -->
		<view class="blank"></view>
		<!-- 目录 -->
		<view class="directory">
			
		</view>
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
.voiceDetailsPage{
	.header{
		width: 100%;
		padding: 30rpx 30rpx 40rpx 30rpx;
		display: flex;
		.img{
			width: 240rpx;
			height: 320rpx;
			background-color: #F0AD4E;
			border-radius: 10rpx;
			box-shadow: -10rpx 10rpx 30rpx #d0d2d7;
			position: relative;
			image{
				width: 240rpx;
				width: 240rpx;
			}
			.logo {
				width: 48rpx;
				height: 35rpx;
				position: absolute;
				left: 10rpx;
				bottom: 22rpx;
			}
		}
		.detail{
			height: 320rpx;
			margin-left: 60rpx;
			display: flex;
			flex-direction: column;
			.title{
				color: #333333;
				font-size: 32rpx;
				margin-top: 10rpx;
				margin-bottom: 14rpx;
			}
			.author{
				color: #999999;
				font-size: 24rpx;
				letter-spacing: 3rpx;
				line-height: 30rpx;
			}
			.content{
				margin-top: 24rpx;
				margin-bottom: 19rpx;
				line-height: 36rpx;
				text{
					color: #666666;
					font-size: 24rpx;
					letter-spacing: 3rpx;
				}
			}
			.nowRead{
				display: inline-block;
				font-size: 24rpx;
				color: #FFFFFF;
				width: 150rpx;
				height: 52rpx;
				background: -webkit-gradient(linear, 0 0, 0 100%, from(#EB6056), to(#E82515));
				border-radius: 150rpx;
				text-align: center;
				line-height: 52rpx;
			}
		}
	}
	// 分割线
	.blank {
		width: 100%;
		height: 10rpx;
		background-color: #F7F7F7;
	}
}
</style>
