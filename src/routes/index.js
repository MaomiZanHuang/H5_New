import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import User from '@/pages/User';
import Order from '@/pages/Order';
import Suggest from '@/pages/Suggest';
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
      path: '/goods/:id',
      name: 'goods-detail',
      component: Home.Goods
    },
    {
      path: '/preorder',
      name: 'preorder',
      component: Home.Preorder
    },
    {
      path: '/catas',
      name: 'catas',
      component: Home.Catas
    },
    {
      path: '/order',
      name: 'order',
      component: Order.Order
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
