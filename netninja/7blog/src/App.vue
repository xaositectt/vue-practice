<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addblog'
import showBlogs from './components/showblogs'
import listBlogs from './components/listblogs'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
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
