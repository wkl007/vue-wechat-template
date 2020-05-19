import VConsole from 'vconsole'

// 调试工具，开发环境使用，线上关闭
const debug = process.env.VUE_APP_DEBUG === 'true'

let vConsole = {}
if (debug) vConsole = new VConsole()

export default vConsole
