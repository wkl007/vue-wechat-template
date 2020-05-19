import dayjs from 'dayjs'
import numeral from 'numeral'

/**
 * 格式化时间
 * @param date
 * @param format
 * @returns {string}
 */
export function dateFormat (date, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) return
  return dayjs(date).format(format)
}

/**
 * 获取两个 Dayjs 对象的时间差，默认毫秒。
 * @param date1
 * @param date2
 * @param format
 * @returns {*}
 */
export function dateDiff (date1, date2 = dayjs(), format = 'millisecond') {
  if (!date1) return
  return dayjs(date1).diff(date2, format)
}

/**
 * 格式化数字
 * @param number
 * @param format
 * @returns {*}
 */
export function numberFormat (number, format = '0,00.00') {
  return numeral(number).format(format)
}
