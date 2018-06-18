<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addblog'
import showBlogs from './components/showblogs'
import listBlogs from './components/listblogs'
import Header from './components/header'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': Header,
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
