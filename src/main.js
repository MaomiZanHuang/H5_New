import Vue from 'vue';
import App from './App';
import router from './routes';

import vueScroll from './vue-scroll-animate.js'
import FastClick from 'fastclick';

import Spin from '@/components/spin';
import Tip from '@/components/Tip';

import store from './stores';

FastClick.attach(document.body);

Vue.use(vueScroll);

Vue.config.productionTip = false
Vue.use(Spin);
Vue.use(Tip);

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.user.user) {
    return next('/user/login');
  }
  let transitionName = 'fade';
  if (to.meta.depth > from.meta.depth) {
    transitionName = 'slide-left';
  } else if (to.meta.depth < from.meta.depth){
    transitionName = 'slide-right';
  }
  store.dispatch('setTransitionName', transitionName);
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
