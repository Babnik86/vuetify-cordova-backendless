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
Backendless.initApp('CC614D4B-A8FF-57B9-FF33-DF67D0DEFC00', 'FDD743EA-8268-2C39-FFB9-858DF08CF500');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
