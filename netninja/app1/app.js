const app1 = new Vue({
  el: '#app1',
  data: {
    message: function() {
      return 'hello'
    },
    message2: 'hey',
    link: 'http://www.google.com',
    linkString: '<a href="http://www.google.com">click me</a>',
    age: 23,
    xcoord: 0,
    ycoord: 0,
  },
  methods: {
    greet: function(name) {
      return `good day, ${name}, and ${this.message()}`
    },
    add: function(num) {
      this.age += num
    },
    subtract: function(num) {
      this.age -= num
    },
    updateXY: function(event) {
      console.log(event)
      this.xcoord = event.offsetX
      this.ycoord = event.offsetY

    },
    click: function() {
      alert('you clicked')
    },
    logName: function() {
      console.log('you entered your name')
    },
    logAge: function() {
      console.log('you entered your age')
    },
  }
})