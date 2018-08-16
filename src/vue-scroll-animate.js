let Vue
let isVueLoaded = true

if (typeof require === 'undefined') {
  Vue = Window.Vue
} else {
  Vue = require('vue')
}

if (!Vue) {
  isVueLoaded = false
  console.warn('Vue is not loaded yet. Please make sure it is loaded before installing vue-scroll-animate.')
}

let vScroll = {}
vScroll.config = {}

vScroll.install = (Vue, options = {}) => {
  vScroll.config = options
  // requestAnimationFrame
  window.requestAnimFrame = (() => {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback, element) {
        window.setTimeout(callback, 1000 / 60)
      }
  })()

  Vue.prototype.$scroll = (num, type, tagName, speed) => {
    if (type !== "scrollTop" && type !== "scrollLeft") {
      console.error('type：scrollTop/scrollLeft')
      return
    }
    const getTag = document.getElementById(tagName) || document.getElementsByClassName(tagName)[0] || document.body
    let scrollTop = getTag.scrollTop
    let scrollLeft = getTag.scrollLeft
    let start = scrollTop
    let end = num
    let rate = speed
    const _end = end
    start = eval(type)

    if (start === end || typeof start != 'number') {
      return
    }
    end = end || 0
    rate = rate || 2
    const step = function () {
      start = start + (end - start) / rate
      if (Math.abs(start - _end) < 1) {
        type === 'scrollTop' ? getTag.scrollTop = end : getTag.scrollLeft = end
        return
      }
      type === 'scrollTop' ? getTag.scrollTop = start : getTag.scrollLeft = start
      requestAnimationFrame(step)
    }
    step()
  }
}

export default vScroll