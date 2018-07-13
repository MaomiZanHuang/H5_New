import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Suggest from '@/pages/Suggest';
import User from '@/pages/User';
// 路由文件


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home.Index
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: Suggest.Index
    },
    {
      path: '/user',
      name: 'user',
      component: User.Index,
      children: [
        {
          name: 'index',
          path: '/user/index',
          component: User.Index,
          meta: {keepAlive: true}
        },
        {
          name: 'about',
          path: '/user/about',
          component: User.About,
          meta: {keepAlive: true}
        }
      ]
    }
  ]
});
