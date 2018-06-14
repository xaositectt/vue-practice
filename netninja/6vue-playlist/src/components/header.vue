<template>
  <div>
    <header>
    <h3>{{ pageTitle }}</h3>
    <h4>the list is titled {{ listTitle }}</h4>
    <p>update main title</p>
    <input v-model="newTitle">
    <button 
    @click="updateTitle()"
    >update</button>
    </header>
  </div>
</template>

<script>
import {bus} from '../main'

export default {
  props: {
    mainTitle: {
      type: String, 
      required: true,
    },
    listTitle: {
      type: String, 
      required: true,
    }
  },
  data () {
    return {
      pageTitle: this.mainTitle,
      newTitle: '',
    }
  },
  methods: {
    capitalize (string) {
      return string[0].toUpperCase() + string.slice(1)
    },
    updateTitle() {
    let newTitle = this.capitalize(this.newTitle)
    this.pageTitle = newTitle
    bus.$emit('titleChanged', newTitle)
    },
  }
}
</script>

<style scoped>
  header {
    background: lightgrey;
    padding: 10px;
  }
  h3 {
    color: #222;
    text-align: center;
  }

</style>
