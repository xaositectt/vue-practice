<template>
  <div id="app">
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from './components/addblog'
import showBlogs from './components/showblogs'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
  },
  data () {
    return {
    
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>
