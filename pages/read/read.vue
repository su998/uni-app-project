<template>
	<view class="read">
		<view class="featured_journals">
			<view class="featured_journals_header">
				<text class="title">精选期刊</text>
				<text class="more">查看更多 ></text>
			</view>
			<view class="featured_journals_container">
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
				<view class="featured_journal_item"></view>
			</view>
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
.read{
	margin: 30rpx 30rpx 29rpx 30rpx;
	.featured_journals {
		.featured_journals_header{
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			border-bottom: 1px solid red;
			.title {
				font-family: 'PingFang-SC-Bold';
				font-weight: bold;
				font-size: 32rpx;
			}
			.more {
				font-family: 'PingFang-SC-Medium';
				color: #999999;
				font-size: 24rpx;
			}
		}
		.featured_journals_container {
			width: 100%;
			display: flex;
			flex-flow: row wrap;
			.featured_journal_item {
				width: 150rpx;
				height: 200rpx;
				background-color: #ccc;
			}
			.featured_journal_item:not(:first-child) {
				margin-right: 30rpx;
				margin-bottom: 30rpx;
			}
		}
	}
		
}
</style>
