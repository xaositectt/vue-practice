<template>
  <div>
    <h3>List of my favorite girls</h3>
    <ul v-for="(girl, index) in girls" :key="index">
      <li>{{ index }} - {{ girl.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      girls: [
        {name: 'Paige', age: 23},
        {name: 'Leila', age: 28},
        {name: 'Fansen', age: 28}
      ]
    }
  },
}
</script>

<style scoped>
h3 {
  color: red;
}

</style>
