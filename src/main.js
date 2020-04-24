import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import './plugins/ionic.js'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import router from './router'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
