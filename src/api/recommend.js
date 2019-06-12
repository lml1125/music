import jsonp from 'common/js/jsonp.js'
import {comonParams,options} from './config.js'

export function getRecommend(){
	const url ='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	
	const data = Object.assign({},comonParams,{
		uin: 0,
		platform: 'h5',
		needNewCode: 1,
	})
	
	return jsonp ( url,data,options )
}


export function getDiscList(){
	const url ='https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
	
	const data = Object.assign({},comonParams,{
		hostUin: 0,
		platform: "yqq",
		needNewCode: 0,
		sin:0,
		eim:29,
		sortId:5,
		categoryId:10000000,
		rnd:Math.random()
	})
	return jsonp ( url,data,options )
}
