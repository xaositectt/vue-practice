<template>
  <div>
    <app-header 
    :mainTitle="capitalizedMainTitle()"
    :listTitle="listTitle"></app-header>
    <h3>{{ title }}</h3>
    <p>Detailing the list {{listTitle}}</p>
    <lister 
    :title="listTitle" 
    :list="girls"></lister>
    <app-footer :title="listTitle"></app-footer>
  </div>
</template>

<script>
import List from './components/lister'
import Header from './components/header'
import Footer from './components/footer'

export default {
  components: {
    'lister': List,
    'app-header': Header,
    'app-footer': Footer

  },
  data () {
    return {
      title: 'vue practice',
      listTitle: 'Favorite girls',
      girls: [
        {name: 'Paige', age: 23, available: true},
        {name: 'Leila', age: 28, available: true},
        {name: 'Fansen', age: 28, available: false}
      ]
    }
  },
  methods: {
    capitalize: function(string) {
      return string[0].toUpperCase() + string.slice(1)
    },
    updateTitle(newTitle) {
    },
    capitalizedMainTitle: function() {
      return this.capitalize(this.title)
    }
  },
  computed: {
    
  }
}
</script>

<style scoped>

</style>
