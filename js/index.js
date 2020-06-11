
/*
 * @Author: your name
 * @Date: 2020-06-11 09:22:56
 * @LastEditTime: 2020-06-11 11:54:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/js/index.js
 */

var dataSource = {
  message: 'hello',
  loggedIn: false,
  imageSrc: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  imageWidth: '100%',
  buttonClass: 'ui button',
  colorClass: 'violet',
  isloading: false,
  message1: '<h1>hello</h1>',
  items: [
    {text: 'nice'},
    {text: 'good'},
    {text: 'awesome'}
  ],
  counter: 0,
  message3: [],
  selected: '',
  options: [
    { value: 'hello' },
    { value: 'hola' },
    { value: '你好'}
  ]
}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  methods: {
    like(event) {
      this.counter += 1
      console.log(event)
    },
    process(event) {
      console.log(event.target.value)
    }
  }
})

vm.$watch('message', function (newValue, oldvalue) {
  console.log(newValue,oldvalue)
})