import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'
import axios from 'axios'

// new Vue({
//   router,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
new Vue({
  el: '#app',
  router,
  vuetify,
  axios,
  render: h => h(App),
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  }
})