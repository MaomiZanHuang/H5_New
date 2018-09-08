import Vue from 'vue';
import $ from 'axios';

import App from './App';
import router from './routes';

import vueScroll from './vue-scroll-animate.js'
import FastClick from 'fastclick';

import VueScroller from 'vue-scroller';

import Spin from '@/components/spin';
import Tip from '@/components/Tip';

import store from './stores';

$.interceptors.request.use(
  config => {
    config.headers['jwt'] = localStorage['jwt'];
    return config;
  },
  err => Promise.reject(err)
);

$.interceptors.response.use(function (res) {
  return res;
  }, function (err){
    if (err && err.response && err.response.status === 403) {
      router.push('/user/login');
    }
  return Promise.reject(err);
  });

FastClick.attach(document.body);

Vue.use(vueScroll);
Vue.use(VueScroller);

Vue.config.productionTip = false
Vue.use(Spin);
Vue.use(Tip);

// 注入的全局变量,APP的信息或者其它
Vue.prototype.IS_APP = !!window.zanhuang;
Vue.prototype.APP_NAME = '拇指赞';
Vue.prototype.APP_SITE = 'https://520cy.cn';
Vue.prototype.APP_LOGO = '//ugc.qpic.cn/gbar_pic/2wF3sr2LiaVvBkYLQacXpHDdNu7icXncRAUJEsDqtJoS83mn8dhBXxkA/0';
// 预防部落图片失效备用图片
Vue.prototype.APP_LOGO2 = '//cdn.520cy.cn/images/logo_6.png';
// 万普回调
Vue.prototype.APP_WAPSPAY_NOTIFYURL = 'http://520cy.cn/api/guest/waps_pay_cb';
Vue.prototype.APP_VERSION = '1.0';

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
