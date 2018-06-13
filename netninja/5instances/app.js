Vue.component('greeting', {
  template: `
  <div>
    <p>Hey there, I am {{ name }}</p> 
    <button @click="changeName()">change name</button>
  </div>
  `,
  data: function() {
    return { name: 'Paige' }
  },
  methods: {
    changeName: function() {
      this.name = 'Leila'
    },
  }
})

const app1 = new Vue({
  el: '#app1',
  data: {
    title: 'app one',
  },
  methods: {
    greet: function() {
      return `hello from ${this.title}`
    },
  },
  computed: {
  
  }
})

const app2 = new Vue({
  el: '#app2',
  data: {
    title: 'app two',
  },
  methods: {
    greet: function() {
      return `hello from ${this.title}`
    },
    changeTitle: function() {
      app1.title = 'changed title'
    }
  },
  computed: {
  
  }
})

const app3 = new Vue({
  el: '#app3',
  data: {
    title: 'app three',
  },
  methods: {
    greet: function() {
      return `hello from ${this.title}`
    },
  },
  computed: {
  
  }
})