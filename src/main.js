import Vue from 'vue';
import App from './App';
import router from './routes';

import vueScroll from './vue-scroll-animate.js'

import Spin from '@/components/spin';
import Tip from '@/components/Tip';

import '@/assets/css/mui/mui.css';
import '@/assets/css/common.css';
import '@/assets/css/reset.css';

import store from './stores';

Vue.use(vueScroll);

Vue.config.productionTip = false
Vue.use(Spin);
Vue.use(Tip);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
