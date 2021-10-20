import { get, post } from './request'

const HttpManager= {
	//获取验证码图片
	verifyCode: (params) => get('/verifyCode', params),
	//登录
	getLoginStatus: (params) => post(`/login`, params),
	//发送验证码
	registesend: (params) => post('/registesend',params),
	//忘记密码，发送验证码
	forgetsend: (params) => post('/forgetsend' ,params),
	//重置验证码
	resetpassword: (params) => post('resetpassword',params),
	//用户注册
	register: (params) => post(`/register`, params),

  //获取轮播图
  getbanner: () => get(`banner/getbanner`),
  //获取头广告图
  getAllContent: () => get('content/getAllContent'),
  //获取手机
  getTopOne: () => get('product/getTopOne'),
  //获取电视
  getTopTwo: () => get('product/getTopTwo'),
  //获取电脑，平板
  getTopThree: () => get('product/getTopThree'),

  //获取其他分类
  getTopOther: () => get('category/getTopOther'),
}

export {HttpManager}

