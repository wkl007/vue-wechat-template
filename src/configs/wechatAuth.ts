import vueWechatAuth from '@/plugins/vueWechatAuth'
import { WECHAT_APP_ID } from '@/utils/constants'
import type { App } from 'vue'

/**
 * 微信授权登录插件配置
 * @param app
 */
export function setupWechatAuth (app: App<Element>): void {
  app.use(vueWechatAuth, { appid: WECHAT_APP_ID })
}
