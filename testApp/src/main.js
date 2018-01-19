// Import Vue
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

// Import App Custom Styles
//import AppStyles from './assets/sass/main.scss';

import Backendless from 'backendless'
Backendless.initApp('APP_ID, API_KEY);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
