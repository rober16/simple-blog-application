import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
