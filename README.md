# Vuea
[![Build Status](https://travis-ci.org/QingWei-Li/vuea.svg?branch=master)](https://travis-ci.org/QingWei-Li/vuea)
[![npm](https://img.shields.io/npm/v/vuea.svg)](https://www.npmjs.com/package/vuea)

> 🍔 Easy to drop or replace specified key in an array.

## Installation
```shell
npm i vuea -S
```

## Usage
```javascript
import Vue from 'vue'
import Vuea from 'vuea'

Vue.use(Vuea)

new Vue({
  data () {
    return { arr: ['a', 'b', 'c'] }
  },

  created () {
    this.$drop(this.arr, 'b') // return 'b', vm.arr equal ['a', 'c']
    this.$replace(this.arr, 'a', 'd') // return 'a', vm.arr equal ['d', 'c']
  }
})
```

```javascript
import { drop, replace } from 'vuea'

const arr = ['a', 'b', 'c']

drop(arr, 'b') // ['a', 'c']
replace(arr, 'a', 'd') // ['d', 'c']
```

## License
MIT
