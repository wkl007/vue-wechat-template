import axios from 'axios'
import request from '@/utils/request'

export default class CommonServer {
  // 登录
  static login (data) {
    return request({
      url: '/web/authorize/handle',
      method: 'post',
      data
    })
  }

  // 微信签名
  static getWechatSignature (data) {
    return request({
      url: '/wechat/signature/create',
      method: 'post',
      data
    })
  }

  // 获取html代码片段
  static getHtmlContent (url) {
    return axios.get(url)
  }
}
