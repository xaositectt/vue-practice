<template>
  <div id="items">
    <h3>{{ toCapitalize() }}</h3>
    <h4>{{ listItemNames() }}</h4>
    <ul v-for="(item, index) in list" :key="index">
      <li>
        <h4 v-if="item.available">
          {{ item.name }}
        </h4>
        <button @click="item.available = !item.available">toggle</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [{name: 'Give an array of named objects'}]
    },
    title: {
      type: String,
      default: 'Give a title',
    }
  },
  data () {
    return {    
      newTitle: '',
    }
  },
  methods: {
    listItemNames: function () {
      let names = this.list.map(elem => elem.name)
      return names.join(', ')
    },
    toCapitalize: function () {
      return this.title[0].toUpperCase() + this.title.slice(1)
    },
    changeTitle: function() {
      //this.$emit('changeTitle', this.newTitle)
    }
  }
}
</script>

<style scoped>
#items{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: lightcyan;
}

ul{
    list-style-type: none;
    padding: 0;
}

li{
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>
