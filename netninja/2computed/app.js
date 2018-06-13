const app1 = new Vue({
  el: '#app1',
  data: {
    name: '',
    age: '',
    a: 0,
    b: 0,
    age: 23,
  },
  methods: {
    logName: function() {
      this.name= 
      console.log('you entered your name')
    },
    logAge: function() {
      console.log('you entered your age')
    },
    // addToA: function() {
    //   console.log('addToA')
    //   return this.a + this.age
    // },
    // addToB: function() {
    //   console.log()
    //   return this.b + this.age
    // },
  },
  computed: {
    addToA: function() {
      console.log('addToA')
      return this.a + this.age
    },
    addToB: function() {
      console.log('addToB')
      return this.b + this.age
    },
  }
})