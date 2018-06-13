const app1 = new Vue({
  el: '#app1',
  data: {
    available: true,
    nearby: false,
    success: false,
    error: false,
    guys: ['Chandler', 'Joey', 'Ross'],
    girls: [
      {name: 'Rachel', occ: 'waitress', age: 25},
      {name: 'Monica', occ: 'barista', age: 26},
      {name: 'Phoebe', occ: 'masseuse', age: 28}
    ],
  },
  methods: {
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})