import wx from 'weixin-js-sdk'
import images from '@/assets/images'
import CommonServer from '@/api/common'
import store from '@/store'
import { WEB_URL } from '@/utils/constants'

const DEFAULT_SHARE_TITLE = 'vue-chat-template'
const DEFAULT_SHARE_LINK = WEB_URL
const DEFAULT_SHARE_IMG = images.logo
export const DEFAULT_SHARE_DESC = 'vue-chat-template'

/**
 * 微信配置
 * @param jsApiList
 * @returns {Promise<unknown>}
 */
export function wxConfig (jsApiList = ['updateAppMessageShareData', 'updateTimelineShareData']) {
  return new Promise(async (resolve, reject) => {
    const { loginStatus } = store.getters
    if (loginStatus !== 2) return
    const data = {
      url: window.location.href,
    }
    const { appId, timeStamp, nonceStr, signature } = (await CommonServer.getWechatSignature(data)).data
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId, // 必填，公众号的唯一标识
      timestamp: timeStamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature, // 必填，签名，见附录1
      jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    wx.ready(() => {
      resolve('调用成功')
    })
    wx.error((err) => {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      reject(err)
    })
  })
}

/**
 * 微信分享
 * @returns {Promise<any>}
 * @param data
 * @param jsApiList
 */
export function wxShare (data = {}, jsApiList = ['updateAppMessageShareData', 'updateTimelineShareData']) {
  const { title = DEFAULT_SHARE_TITLE, link = DEFAULT_SHARE_LINK, imgUrl = DEFAULT_SHARE_IMG, desc = DEFAULT_SHARE_DESC } = data
  return new Promise((resolve, reject) => {
    wxConfig(jsApiList).then(res => {
      // 分享到朋友圈
      wx.updateTimelineShareData({
        title, // 分享标题
        link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl, // 分享图标
        success: () => { // 用户确认分享后执行的回调函数
          resolve('分享到朋友圈成功')
        }
      })
      // 分享给朋友
      wx.updateAppMessageShareData({
        title, // 分享标题
        desc, // 分享描述
        link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: () => { // 用户确认分享后执行的回调函数
          resolve('分享给朋友成功')
        }
      })
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 微信支付
 * @param data
 * @returns {Promise<any>}
 */
export function wxPay (data) {
  return new Promise((resolve, reject) => {
    const { timeStamp, nonceStr, signType, paySign, tPackage } = data
    wxConfig(['chooseWXPay']).then(res => {
      wx.chooseWXPay({
        timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr, // 支付签名随机串，不长于 32 位
        package: tPackage, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign, // 支付签名
        success: res => {
          resolve('支付成功')
        },
        fail: err => {
          reject(err)
        },
        cancel: err => {
          reject(err)
        }
      })
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 打开地图
 * @param data
 * @returns {Promise<any>}
 */
export function wxOpenLocation (data) {
  return new Promise((resolve, reject) => {
    const { latitude, longitude, name, address } = data
    wxConfig(['openLocation']).then(res => {
      wx.openLocation({
        latitude,
        longitude,
        name,
        address,
        scale: 16,
        infoUrl: '',
        success: res => {
          resolve('跳转成功')
        },
        fail: err => {
          reject(err)
        },
      })
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 微信地址
 * @returns {Promise<unknown>}
 */
export function wxOpenAddress () {
  return new Promise((resolve, reject) => {
    wxConfig(['openAddress']).then(res => {
      wx.openAddress({
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    }).catch(err => {
      reject(err)
    })
  })
}
