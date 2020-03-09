// uni.request封装

// sign
import md5 from 'js-md5'
let signfn = function() {
	// 方法
	let act = 'newspaper.item.article.catalog.get';
	
	// 时间戳
	let ts = _=> new Date().getTime().toString();
	
	// 随机32位数
	let nonce = ()=> {
		let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E'];
		let res = '';
		for (let i = 0; i < 32; i++) {
			let pos = Math.round(Math.random( ) * (arr.length-1));
			res += arr[pos]
		}
		return res;
	}
	// app_key
	let app_key = 'e70891ddafa5e012828c143390cdad9e';
	
	let signobj = {act, 'ts': ts(), 'nonce': nonce(), app_key};
	let sorted = {}; // 排好序的ksort
	let keys = Object.keys(signobj).sort((a, b)=> a - b); // 键值排序
	keys.forEach((key)=>{
	    sorted[key] = signobj[key];
	})
	// 转成字符串
	let signstr = JSON.stringify(sorted); 
	let signstr1 = signstr + '&key=c733e71b9b83908fc7278f04ea0b6bfc';
	let finalsign = signstr1.replace(/{|}|"/g, '').replace(':', '=').replace(',', '&');
	return md5(finalsign);
}
let sign = signfn()

const BASE_URL = 'https://apis.183read.cc/wx_api/v1/?'

export const myRequest = (options)=> {
	return new Promise((resovle, reject)=>{
		uni.request({
			url: BASE_URL + sign + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: res => {
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resovle(res)
			},
			fail: err => {
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}