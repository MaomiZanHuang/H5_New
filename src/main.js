import Vue from 'vue'
import App from './App'
import router from './routes';

import '@/assets/mui/css/mui.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
