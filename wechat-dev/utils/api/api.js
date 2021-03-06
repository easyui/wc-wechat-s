import { myRequest } from './request'
import config from '../../config'
export default {
  /**
   ****模板默认接口【勿删】
   */
  //原始方法
  myRequest,
  //核弹系统配置 
  configure: (data, url = `https://game.flyh5.cn/game/wx7c3ed56f7f792d84/data_system/api.php?a=web&code=${config.CONFIGURE}`) => { return myRequest(data, url, 'get', true, true) },
  //获取openid
  getOpenid: (data, url = 'api/oauth/oauth_login') => { return myRequest(data, url, 'post', false, true) },
  //上传头像昵称
  uploadUserInfo: (data, url = 'api/oauth/perfect_info') => { return myRequest(data, url, 'post', false, true) },
  /**
   ****项目接口
   */
  //示例
  getTest: (data, url = '/api/oauth/encrypt') => { return myRequest(data, url) },
}