export default function (func, wait, immediate) {
  let timeout

  return function () {
    let context = this
    let args = arguments

    let callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }, wait)

    if (callNow) {
      func.apply(context, args)
    }
  }
}
