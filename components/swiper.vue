<template>
	<view class="swiper_container">
		<swiper class="swiper"
			 indicator-dots
			 autoplay
			 interval=3000
			 circular
			 indicator-color="#FFFFFF"
			 indicator-active-color="#FF0000"
			 previous-margin="10rpx"
			 next-margin="10rpx"
		 >
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
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
.swiper_container{
	.swiper{
		  width: 100%;
		  height: 294rpx;
		  margin: 30rpx 0rpx;
		  background-color: #FFFFFF;
		.swiper-item{
			width: 690rpx;
			height: 294rpx;
			margin: 0 10rpx;
			border-radius: 6px;
		}
		.uni-bg-red {
			background-color: red;
		}
		.uni-bg-green {
			background-color: green;
		}
		.uni-bg-blue {
			background-color: blue;
		}
	}
}
</style>
