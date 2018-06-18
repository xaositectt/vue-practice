import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

//mode changes the url and behaviour of routing
//default behavior is hash that points to a new 
//part of this same document
//history: you get the index.html back from the server
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

//custom directives
//globally registered

// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = '#' + Math.random().toString().slice(2,8);
//   }
// })

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide') {
      el.style.maxWidth = '75%'
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '50%'
    }

    if (binding.arg == 'column') {
      el.style.background = '#ddd'
      //el.style.padding = ''
    }
  }
})

//globally registered filters
// Vue.filter('to-uppercase', function(value) {
//   return value.toUpperCase()
// })

// Vue.filter('snippet', function(value) {
//   return value.slice(0,100)
// })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
