var Vue = require('vue')
var Vueo = require('../dist/vuea')

Vue.use(Vueo)
var vm = new Vue({
  data () {
    return { arr: ['a', 'b', 'c'] }
  }
})

test('installed', () => {
  expect(Vue.drop).toBeDefined()
  expect(Vue.replace).toBeDefined()
  expect(Vue.prototype.$replace).toBeDefined()
  expect(Vue.prototype.$drop).toBeDefined()
})

test('`drop` is work', () => {
  expect(vm.$drop(vm.arr, 'b')).toBe('b')
  expect(vm.arr).toEqual(['a', 'c'])
})

test('`drop` undefined', () => {
  expect(vm.$drop('string', 'b')).toBeUndefined()
  expect(vm.$drop(vm.arr, 'e')).toBeUndefined()
  expect(vm.arr).toEqual(['a', 'c'])
})

test('`replace` is work', () => {
  expect(vm.$replace('string', 'b')).toBeUndefined()
  expect(vm.$replace(vm.arr, 'a', 'd')).toBe('a')
  expect(vm.arr).toEqual(['d', 'c'])
})

test('`replace` undefined', () => {
  expect(vm.$replace('string', 'b', 'd')).toBeUndefined()
  expect(vm.$replace(vm.arr, 'e', 'd')).toBeUndefined()
  expect(vm.arr).toEqual(['d', 'c'])
})
