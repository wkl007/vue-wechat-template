/**
 * 判断url
 * @param path
 * @returns {boolean}
 */
export const isUrl = path => {
  /* eslint no-useless-escape:0 */
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

/**
 * 防抖
 * @param func
 * @param delay
 * @returns {Function}
 */
export const debounce = (func, delay) => {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 截流
 * @param func
 * @param gapTime
 * @returns {Function}
 */
export const throttle = (func, gapTime) => {
  let _lastTime = 0

  return function (...args) {
    const _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      func.apply(this, args)
      _lastTime = _nowTime
    }
  }
}

/**
 * 冒泡排序
 * @param arr
 * @param fn 升序(a, b) => a - b) 降序 (a, b) => b - a)
 * @returns {*}
 */
export const bubbleSort = (arr, fn) => {
  let len = arr.length
  while (len--) {
    for (let i = 0;
      i < len;
      i++
    ) {
      if (fn(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

/**
 * 是否拥有类名
 * @param el
 * @param className
 * @returns {boolean}
 */
export const hasClass = (el, className) => {
  return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * 添加类名
 * @param el
 * @param className
 */
export const addClass = (el, className) => {
  if (!hasClass(el, className)) el.className += ' ' + className
}

/**
 * 移除类名
 * @param el
 * @param className
 */
export const removeClass = (el, className) => {
  if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }
}

/**
 * 切换类名
 * @param el
 * @param className
 */
export const toggleClass = (el, className) => {
  if (!el || !className) return
  let classString = el.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  el.className = classString
}

/**
 * 获取值
 * @param el
 * @param name
 * @param val
 * @returns {*}
 */
export const getData = (el, name, val) => {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

/**
 * 获取距离
 * @param el
 * @returns {{top: number, left: number, width: number, height: number}}
 */
export const getRect = el => {
  if (el instanceof window.SVGElement) {
    const rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

/**
 * 是否是空对象
 * @param object
 * @returns {boolean}
 */
export const isEmptyObj = object => {
  return Object.keys(object).length === 0
}

/**
 * 检查timestamp是否在有效期内
 * @param timestamp 项目更新时间
 * @param validityPeriod 项目有效期
 * @returns {boolean}  true 不需要更新,false需要更新
 */
export const checkTimestampValid = (timestamp, validityPeriod = 24) => {
  const currentDate = new Date()
  const targetDate = new Date()
  targetDate.setTime(timestamp)
  if (currentDate.getMonth() !== targetDate.getMonth()) return false
  if (currentDate.getDate() !== targetDate.getDate()) return false
  if (currentDate.getHours() - targetDate.getHours() > validityPeriod) return false
  // if (currentDate.getMinutes() - targetDate.getMinutes() > 1)return false;
  return true
}

/**
 * 是否是ios
 * @returns {boolean}
 */
export const isIOS = () => {
  const isIphone = navigator.userAgent.includes('iPhone')
  const isIpad = navigator.userAgent.includes('iPad')
  return isIphone || isIpad
}
