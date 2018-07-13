import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Suggest from '@/pages/Suggest';
import User from '@/pages/User';
import Order from '@/pages/Order';
import Square from '@/pages/Square';
// 路由文件


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home.Index,
      meta: { depth: 0 }
    },
    {
      path: '/hotgoods',
      name: 'hotgoods',
      component: Home.HotGoods,
      meta: { depth: 1 }
    },
    {
      path: '/goods/:id',
      name: 'goods-detail',
      component: Home.Goods,
      meta: { depth: 2 }
    },
    {
      path: '/preorder',
      name: 'preorder',
      component: Home.Preorder,
      meta: { depth: 3 }
    },
    {
      path: '/catas',
      name: 'catas',
      component: Home.Catas,
      meta: { depth: 1 }
    },
    {
      path: '/order',
      name: 'order',
      component: Order.Order,
      meta: { depth: 0 }
    },
    {
      path: '/square',
      name: 'square',
      component: Square.Index,
      meta: { depth: 0 }
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
      meta: {depth:0},
      children: [
        {
          name: 'index',
          path: '/user/index',
          component: User.Index,
          meta: {
            depth: 0,
            keepAlive: true
          }
        },
        {
          name: 'about',
          path: '/user/about',
          component: User.About,
          meta: {
            depth: 1,
            keepAlive: true
          }
        }
      ]
    }
  ]
});
