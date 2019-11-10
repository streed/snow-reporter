import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import moment from 'moment'
import VueGraph from 'vue-graph'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Buefy);
Vue.use(VueGraph);

Vue.config.productionTip = false

Vue.filter('formatTimestamp', (value) => {
  return moment.unix(value).format('lll')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
