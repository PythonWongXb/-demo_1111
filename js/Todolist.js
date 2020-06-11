/*
 * @Author: your name
 * @Date: 2020-06-11 16:15:16
 * @LastEditTime: 2020-06-11 22:46:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/js/Todolist.js
 */


// 子类组件
// Vue.component('todo-item', {
//   props: ['content', 'index'],
//   template: '<li @click = "handleClick">{{content}}</li>',
//   methods: {
//     handleClick: function () {
//       this.$emit('delete', this.index)
//     }
//   }
// })



// 父类组件-Vue
var vm = new Vue({
  el: '#app',
  data: {
    message: '',
    flag: false,
    s: true,
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 },
      { name: 'wang', power: 50 },
    ],
  },
  watch: {
    message: function () {
      for (let i = 0; i < this.gridData.length; i++) {
        try {
          let name = this.gridData[i].name.toString().toUpperCase()
          let power = this.gridData[i].power.toString().toUpperCase()
          let input_content = this.message.toString().toUpperCase()
          if (
            name.search(input_content) >= 0 ||
            power.search(input_content) >= 0
          ) {
            console.log(name)
          } else {
            this.gridData[i] = []
          }
        } catch (error) {
          this.gridData = this.gridData
          console.log(this.gridData)
          console.log(error)
        }
      }
    },
  },
  methods: {
    handleSubmit: function () {
      alert('1')
      let list = []
      for (i = 0; i < this.gridData.length; i++) {
        var pow = this.gridData[i].name[0]

        if (pow === 'B') {
          list.push(pow)
        }
        console.log(pow)
      }
      // console.log(list)
    },

    handleDelete: function () {
      if (this.flag) {
        alert('递减')
      } else {
        alert('递增')
      }

      var n = []
      var p = []
      var old_p = []
      for (let i = 0; i < this.gridData.length; i++) {
        p.push(this.gridData[i].power)
        n.push(this.gridData[i].name)
        old_p.push(this.gridData[i].power)
      }

      if (this.flag) {
        for (let i = 0; i < this.gridData.length; i++) {
          this.gridData[i].power = p.sort()[i]
          this.gridData[i].name = n[search(old_p, p.sort()[i])]
        }
        this.flag = false
      } else {
        for (let i = 0; i < this.gridData.length; i++) {
          this.gridData[i].power = p.sort().reverse()[i]
          this.gridData[i].name = n[search(old_p, p.sort().reverse()[i])]
        }
        this.flag = true
      }

      console.log(n)
      console.log(search(p, 9000))
      console.log(n[2])
    },
  },
})


function search(arr, dst) {
  var i = arr.length
  while ((i -= 1)) {
    if (arr[i] == dst) {
      return i
    }
  }
  return 0
}

function sortNumber(a, b) {
  return a - b
}


// vm_1 = new Vue({
//   el: '#search',
//   data: {
//     message: 'dd'
//   }
// })