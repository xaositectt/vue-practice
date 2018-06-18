<template>
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>All blog articles:</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="(blog, key) in filteredBlogs" v-bind:key="key">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      
      let select = data.body.slice(0, 10)
      console.log(select)
      this.blogs = select
    })
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => 
        blog.title.match(this.search)
      )
    }
  }
}
</script>

<style>
  #show-blogs{
      max-width: 800px;
      margin: 0px auto;
  }

  #show-blogs h2{
    font-size: 1em;
  }
  .single-blog{
      padding: 20px; 
      margin: 20px 0;
      box-sizing: border-box;
      background: #eee;
  }
</style>
