<script>
	export default {
		onLaunch: ()=> {

		},
		onShow: function() {
			console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
.ff_bold{
	font-family: 'PingFang-SC-Bold';
	font-weight: bold;
}
.ff_medium{
	font-family: PingFang-SC-Medium;
	font-weight: 400;
}
/* 清除浮动 */
.clearFix:after{
clear:both;
display:block;
visibility:hidden;
height:0;
line-height:0;
content:"";
}
</style>
