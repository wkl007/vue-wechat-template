import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/configs/filter'
// import '@/configs/interceptor'
import '@/configs/registerServiceWorker'
import '@/configs/vant'
import '@/configs/vconsole'
import '@/configs/wechatTitle'

import '@/assets/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
