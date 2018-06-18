<template>
  <div id="add-blog">
    <h2>Add a new Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Planewalker</label>
        <input type="checkbox" value="planewalker" v-model="blog.categories">
        <label>Baatezu</label>
        <input type="checkbox" value="baatezu" v-model="blog.categories">
        <label>Tanar'ri</label>
        <input type="checkbox" value="tanar'ri" v-model="blog.categories">
        <label>Negative plane fiend</label>
        <input type="checkbox" value="shadow" v-model="blog.categories">
      </div>
      <div>
        <label>Author</label>
        <select v-model="blog.author">
          <option v-for="(author, index) in authors" v-bind:key="index">{{ author }}</option>
        </select>
      </div>
    </form>
    <h3 v-if="submitted">thanks for adding the post!</h3>
    <div id="preview">
      <h3>Blog preview:</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: </p>
      <p>
        {{ blog.content }}
      </p>
      <p>Blog Categories:</p>
      <ul v-for="(category, index) in blog.categories"  v-bind:key="index">
        <li>{{ index }}  {{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
    <button @click.prevent="post">Add Blog</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return { 
      blog: {
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      authors: ['Nameless One', 'Trias', 'Fhjull forked-tongue', 'Transcendent One'],
      submitted: false,
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userid: 1
      }).then((data) => {
        this.submitted= true
        console.log(data)
      })
    }
  }
}
</script>

<style>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
      margin: 20px auto;
      max-width: 500px;
  }
  label{
      display: block;
      margin: 20px 0 10px;
  }
  input[type="text"], textarea{
      display: block;
      width: 100%;
      padding: 8px;
  }
  #preview{
      padding: 10px 20px;
      border: 1px dotted #ccc;
      margin: 30px 0;
  }
  h3{
      margin-top: 10px;
  }
  #checkboxes input{
      display: inline-block;
      margin-right: 10px;
  }
  #checkboxes label{
      display: inline-block;
  }
</style>
