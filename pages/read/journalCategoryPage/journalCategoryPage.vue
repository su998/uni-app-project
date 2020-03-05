<template>
	<!-- 左边滑动导航 -->
	<view class="journalCategoryPage">
		<view class="left">
			<scroll-view scroll-Y="true" class="left-scroll-Y" :style="{height: navHeight+'px'}">
				<view class="left-item" :class="{selected: currentIndex === index}" v-for="(item, index) in leftNav" :key="index"
				 @click="leftNavSelected(index)">
					<text>{{item.title}}</text>
				</view>
			</scroll-view>
		</view>

		<!-- 右边书籍 -->
		<view class="right">
			<scroll-view scroll-Y="true" class="right-scroll-Y" :style="{height: detailsHeight+'px'}">
			<view class="right-item" v-for="(item, index) in bookslist" :key="index">
				<!-- 左边书籍封面 -->
				<navigator url="../journalDetailsPage/journalDetailsPage">
					<view class="img">
						<!-- <image></image> -->
					</view>
				</navigator>
				<!-- 右边详情 -->
				<view class="details">
					<view class="title">{{item.title}}</view>
					<view class="content">
						<text>
							{{item.content}}
						</text>
					</view>
					<!-- <navigator url="" class="voicebtn">
						<image src="../../../static/images/read/语音@2x.png" mode="scaleToFill"></image>
						<text>语音朗读</text>
					</navigator> -->
					<voicebtn/>
				</view>
			</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import voicebtn from '@/components/voicebtn.vue'
	export default {
		data() {
			return {
				// 左侧导航
				leftNav: [{
						title: '全部分类'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
					{
						title: '新闻人物'
					},
				],
				currentIndex: 0, // 左侧导航当前下标
				// 书籍列表
				bookslist: [{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: '从本质上来讲，《易经》是阐述关于变化之书，长期被用作“卜筮”。后人多学习其哲理，因而成为一部博大精深的辩证法哲学书。“卜筮”就是对未来事态的发展进行预测，而《易经》便是总结这些预测的规律理论的书。《易经》含盖万有，纲纪群伦，是中国传统文化的杰出代表；广大精微，包罗万象，亦是中华文明的源头活水。其内容涉及哲学、政治、生活、文学、艺术、科学等诸多领域，是群经之首，儒家、道家共同的经典。'
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
					{
						imgurl: '',
						title: '财经',
						content: ''
					},
				],
				// 用户手机高度
				userAgentHeight: 0,
				// 元素所需高度
				navHeight:0,
				// 右边盒子所需高度
				detailsHeight: 0
			};
		},
		components: {
			voicebtn
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
							that.detailsHeight =userAgentHeight - data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
						}).exec()
						// console.log(that.navHeight)
						// console.log(that.detailsHeight)
					}
				})
			},
			// 点击左导航
			leftNavSelected(index) {
				// 触发选中样式
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="less">
	.journalCategoryPage {
		display: flex;
		.left {
			height: 100%;
			width: 168rpx;
			background-color: #FAFAFA;

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
		.right {
			// flex: 1;
			display: flex;
			flex-direction: column;
			margin: 42rpx 26rpx 42rpx 30rpx;
			overflow-y: auto;

			.right-item {
				height: 200rpx;
				width: 526rpx;
				display: flex;
				justify-content: space-between;
				margin-bottom: 28rpx;
				.img {
					width: 150rpx;
					height: 200rpx;
					background-color: #ccc;
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

					// .voicebtn {
					// 	display: inline-block;
					// 	width: 120rpx;
					// 	height: 40rpx;
					// 	line-height: 40rpx;
					// 	border: 1rpx solid #E9200F;
					// 	border-radius: 4rpx;
					// 	font-size: 20rpx;
					// 	color: #E9200F;
					// 	display: flex;
					// 	align-items: center;
					// 	justify-content: space-around;
					// 	image {
					// 		width: 20rpx;
					// 		height: 18rpx;
					// 	}
					// }
				}
			}
		}
	}
</style>
