import Vue from 'vue'
import App from './App'
import router from './routes';

import Spin from '@/components/spin';
import Tip from '@/components/Tip';

import '@/assets/mui/css/mui.css';
import '@/assets/css/common.css';
import '@/assets/css/reset.css';

Vue.config.productionTip = false
Vue.use(Spin);
Vue.use(Tip);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
