import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/suggestion-box-dc26e/databases/(default)/documents"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
