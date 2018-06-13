

<template>
  <div>
    <h3>{{ title }}</h3>
    <girls></girls>
  </div>
</template>

<script>
import Girls from './components/girls.vue'

export default {
  components: {
    'girls': Girls,
  },
  data () {
    return {
      title: 'App'
    }
  },
}
</script>

<style scoped>

</style>
