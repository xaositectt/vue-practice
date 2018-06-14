<template>
  <div>
    <footer>
      <p>{{ footnote }} for {{ footerTitle }}</p>
    </footer>
  </div>
</template>

<script>
import {bus} from '../main.js'

export default {
 props: {
   title: {
     type: String, 
     required: true,
   },
 },
 data () {
    return {
      footnote: 'this is a footnote',
      footerTitle: this.title,
    }
  },
  created() {
    bus.$on('titleChanged', (newTitle) => {
      this.footerTitle = newTitle + ' in the footer!;)'
    })
  }
}
</script>

<style scoped>
  footer {
    background: lightgrey;
    padding: 6px;
  }
  p {
    color: #222;
    text-align: center;
  }
</style>
