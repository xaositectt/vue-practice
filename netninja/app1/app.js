const app1 = new Vue({
  el: '#app1',
  data: {
    message: function() {
      return 'hello'
    },
    message2: 'hey',
    link: 'http://www.google.com'
  },
  methods: {
    greet: function(name) {
      return `good day, ${name}, and ${this.message()}`
    }
  }
})