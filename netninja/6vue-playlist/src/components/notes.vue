<template>
  <div>
    <h3> these are the notes</h3>
    <slot name="title"></slot>
    <i>
      <slot name="text"></slot>   
    </i>
  </div>
</template>

<script>


export default {
  props: {

  },
  data () {
    return {
      title: 'this is a slot',
    }
  },
  methods: {

  }
}
</script>

<style scoped>

i {
  font-size: 0.8em;
}
</style>
