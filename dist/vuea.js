(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Vuea = global.Vuea || {})));
}(this, (function (exports) { 'use strict';

function indexOf (arr, item) {
  if (Array.isArray(arr) && arr.length) {
    return arr.indexOf(item)
  }
}

function drop (arr, item) {
  var index = indexOf(arr, item);

  if (index > -1) {
    return arr.splice(index, 1)[0]
  }
}

function replace (arr, target, val) {
  var index = indexOf(arr, target);

  if (index > -1) {
    return arr.splice(index, 1, val)[0]
  }
}

function install (Vue) {
  Vue.drop = Vue.prototype.$drop = drop;
  Vue.replace = Vue.prototype.$replace = replace;
}

exports.drop = drop;
exports.replace = replace;
exports.install = install;
exports['default'] = install;

Object.defineProperty(exports, '__esModule', { value: true });

})));
