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
    output: 'Your fav girl'
  },
  methods: {
    greet: function() {
      return `hello from ${this.title}`
    },
    readRefs: function() {
      console.log(this.$refs.input.value)
      this.output = this.$refs.input.value
    }
  },
  computed: {
  
  }
})