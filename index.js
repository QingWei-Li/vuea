function indexOf (arr, item) {
  if (Array.isArray(arr) && arr.length) {
    return arr.indexOf(item)
  }
}

export function drop (arr, item) {
  var index = indexOf(arr, item)

  if (index > -1) {
    return arr.splice(index, 1)[0]
  }
}

export function replace (arr, target, val) {
  var index = indexOf(arr, target)

  if (index > -1) {
    return arr.splice(index, 1, val)[0]
  }
}

export function install (Vue) {
  Vue.drop = Vue.prototype.$drop = drop
  Vue.replace = Vue.prototype.$replace = replace
}

export default install
