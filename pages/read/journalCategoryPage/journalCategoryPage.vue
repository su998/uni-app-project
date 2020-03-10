<template>
	<!-- 左边滑动导航 -->
	<view class="journalCategoryPage">
		<view class="left">
			<scroll-view scroll-Y="true" class="left-scroll-Y" :style="{height: navHeight+'px'}">
				<view class="left-item" :class="{selected: currentIndex === index}" v-for="(item, index) in leftNav" :key="index"
				 @click="leftNavSelected(index, item.class_id)">
					<text>{{item.class_name}}</text>
				</view>
			</scroll-view>
		</view>

		<!-- 右边书籍 -->
		<!-- <booklist :categoryId='categoryId'/> -->
		<view class="right">
			<scroll-view scroll-Y="true" class="right-scroll-Y" :style="{height: detailsHeight+'px'}">
			<view class="right-item" v-for="item in bookslist" :key="item.magazine_id">
				<!-- 左边书籍封面 -->
				<navigator url="../journalDetailsPage/journalDetailsPage">
					<view class="img">
						<image :src="item.lastest_image" mode="aspectFill"></image>
					</view>
				</navigator>
				<!-- 右边详情 -->
				<view class="details">
					<view class="title">{{item.magazine_name}}</view>
					<view class="content">
						<text>
							{{item.description}}
						</text>
					</view>
					<voicebtn/>
				</view>
			</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	// import booklist from '@/components/categoryPageBookList.vue'
	import voicebtn from '@/components/voicebtn.vue'
	export default {
		data() {
			return {
				leftNav: [], // 左侧导航
				bookslist: [], // 书籍列表
				currentIndex: 0, // 左侧导航当前下标
				userAgentHeight: 0,	// 用户手机高度
				navHeight:0,  // 元素所需高度
				detailsHeight: 0, // 右边盒子所需高度
				categoryId: '12360'
			};
		},
		components: {
		   voicebtn
		},
		onLoad() {
			this.getCateGoryList()
			this.getBooksList()
		},
		onReady() {
			this.getUserAgentHeight()
		},
		methods: {
			// 获取用户手机高度
			getUserAgentHeight() {
				let that = this
				uni.getSystemInfo({ 
					success(res) { 
						that.userAgentHeight = res.windowHeight //windoHeight为窗口高度，主要使用的是这个
						let leftScroll = uni.createSelectorQuery().select(".left-scroll-Y"); //想要获取高度的元素名（class/id）
						leftScroll.boundingClientRect(data=>{
							let userAgentHeight = that.userAgentHeight
							that.navHeight =userAgentHeight - data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						}).exec()
						let rightScroll = uni.createSelectorQuery().select(".right-scroll-Y");
						rightScroll.boundingClientRect(data=>{
						let userAgentHeight = that.userAgentHeight
						that.detailsHeight = userAgentHeight - data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						}).exec()
					}
				})
			},
			// 点击左导航
			leftNavSelected(index, id) {
				// 触发选中样式
				this.currentIndex = index
				this.categoryId = id
				this.getBooksList()
			},
			// 获取左侧导航
			getCateGoryList() {
				this.$request({
					url: 'magazine.class.get',
					data: {param:{"cover_format":"m","token":"","use_https":1} }
				}).then(res => {
					this.leftNav = res.class_list
					console.log(res)
				})
			},
			// 获取右侧书籍
			getBooksList() {
				console.log(this.categoryId)
				uni.showLoading({
					title: '加载中'
				})
				this.$request({
					url: 'magazine.class.item.list',
					data: {param:{"class_id":this.categoryId,"use_article":"1","cover_format":"s","page_num":1,"page_limit":"10","token":"","use_https":"0","use_all":0}}
				}).then(res => {
					this.bookslist = res.magazine_list
					uni.hideLoading()
					console.log(res)
				})
			},
		}
	}
</script>

<style lang="less">
page{
	height: 100%;
	.journalCategoryPage {
		height: 100%;
		display: flex;
		.left {
			height: 100%;
			width: 168rpx;
			background-color: #FAFAFA;
			::-webkit-scrollbar {
			  width: 0;
			  height: 0;
			  color: transparent;
			}
			.left-scroll-Y {
	
				.left-item {
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-family: 'PingFang-SC-Medium';
					font-weight: normal;
					color: #333333;
					font-size: 28rpx;
				}
	
				.selected {
					font-family: 'PingFang-SC-Bold';
					font-weight: bold;
					color: #E9200F;
					font-size: 28rpx;
					border-left: 4rpx solid #E9200F;
					box-sizing: border-box;
				}
			}
		}
	
		// 右边主体
		.right::-webkit-scrollbar {
		    display: none;
		}
		.right {
			// flex: 1;
			display: flex;
			flex-direction: column;
			padding: 42rpx 26rpx 42rpx 30rpx;
			overflow-y: auto;
			::-webkit-scrollbar {
			  width: 0;
			  height: 0;
			  color: transparent;
			}
			
			.right-item {
				height: 200rpx;
				width: 526rpx;
				display: flex;
				justify-content: space-between;
				margin-bottom: 28rpx;
				.img {
					width: 150rpx;
					height: 200rpx;
					background-color: #F0AD4E;
					image {
						width: 150rpx;
						height: 200rpx;
					}
				}
	
				.details {
					height: 200rpx;
					width: 345rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
	
					.title {
						height: 28rpx;
						font-family: 'PingFang-SC-Bold';
						font-weight: bold;
						color: #333333;
						font-size: 30rpx;
					}
	
					.content {
						width: 345rpx;
						height: 80rpx;
						text {
							font-family: 'PingFang-SC-Medium';
							font-weight: normal;
							color: #999999;
							font-size: 20rpx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
	}
}
	
</style>
