<template>
  <div id="list-blogs" v-theme:column="'wide'">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="(blog, key) in filteredBlogs" v-bind:key="key">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/search'

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

  },
  //locally registered
  filters: {
    'to-uppercase': function(value) {
      return value.toUpperCase()
    },
    'snippet': function(value) {
      return value.slice(0,100)
    }
  },
  directives: {
    'rainbow': function(el, binding, vnode) {
      el.style.color = '#' + Math.random().toString().slice(2,8);
    }
  },
  mixins: [searchMixin],
}
</script>

<style>
  #list-blogs{
      max-width: 800px;
      margin: 0px auto;
  }

  #list-blogs h2{
    font-size: 1em;
  }

  #list-blogs input {
    width: 100%;
  }

  .single-blog{
      padding: 20px; 
      margin: 20px 0;
      box-sizing: border-box;
      background: #eee;
  }
</style>
