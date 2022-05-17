export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

/**
 * 定時執行函數，代替setInterval
 * @param {*} fn 执行函数
 * @param {*} delay 延迟
 * @returns 返回一个对象，上门挂载了消除定时器api；clearTimeout
 */

export function execInterval(fn:Function, delay:number) {
  const obj = {
    clearTimeout: <any>null,
  } // 当前函数作用域
  let timer: any = null
  function exec() {
    if (timer) {
      clearTimeout(timer)
    }

    fn()
    timer = setTimeout(exec, delay)
  }
  exec()
  // 定时器消除函数
  obj.clearTimeout = () => {
    clearTimeout(timer)
    timer = null
  }
  return obj
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param
 */
export function throttle(func:Function, wait:number, immediate = true) {
  let timeout:number|null
  return function (...args:[]) {
    if (timeout) {
      return
    }
    if (immediate) {
      func.apply(this, args)
    }

    timeout = setTimeout(() => {
      if (!immediate) {
        func.apply(this, args)
      }
      timeout = null
    }, wait)
  }
}

/**
 * 函数防抖
 * @returns
 */

export function debounce(fn:Function, delay:number) {
  let timer: any = null
  return function (...args:[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}
