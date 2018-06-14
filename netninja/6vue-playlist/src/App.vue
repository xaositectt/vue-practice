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

    <button @click="iterateIndex()">toggle form</button>

    <keep-alive>
      <component :is="formTags[formIndex]"></component>
    </keep-alive>

    <note>
      <p slot="title">
      this is the title
      </p>
      <p slot="text">
        this is the text
      </p>
      <p slot="text">
        this is text too
      </p>
    </note>
    <app-footer :title="listTitle"></app-footer>
  </div>
</template>

<script>
import List from './components/lister'
import Header from './components/header'
import Footer from './components/footer'
import Note from './components/notes'
import FormOne from './components/formone'
import FormTwo from './components/formtwo'

export default {
  components: {
    'lister': List,
    'app-header': Header,
    'app-footer': Footer,
    'note': Note,
    'form-one': FormOne,
    'form-two': FormTwo,

  },
  data () {
    return {
      title: 'vue practice',
      listTitle: 'Favorite girls',
      girls: [
        {name: 'Paige', age: 23, available: true},
        {name: 'Leila', age: 28, available: true},
        {name: 'Fansen', age: 28, available: false}
      ],
      formIndex: 0,
      formTags: ['form-one', 'form-two']
    }
  },
  methods: {
    iterateIndex(array, elem) {
      console.log('the index was: ' + this.formIndex)
      this.formIndex = (this.formIndex + 1) % this.formTags.length
    },
    capitalize: function(string) {
      return string[0].toUpperCase() + string.slice(1)
    },
    updateTitle(newTitle) {
    },
    capitalizedMainTitle: function() {
      return this.capitalize(this.title)
    },
    changeCurrentForm() {
      let nextIndex = this.iterateIndex(this.formTags, this.currentForm)
      // this.currentForm = this.formTags[nextIndex]
    },
  },
  computed: {
    
  }
}
</script>

<style scoped>

</style>
