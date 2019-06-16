import Vue from 'vue';
import Router from 'vue-router';


import Home from '@/pages/Home';
import Suggest from '@/pages/Suggest';
import User from '@/pages/User';
import Order from '@/pages/Order';
import Square from '@/pages/Square';
import BlankView from '@/pages/Blank';
import Activity from '@/pages/Activity';

// 路由文件


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: '',
      component: BlankView,
      children: [
        {
          name: 'home',
          path: '/',
          component: Home.Index,
          meta: {
            depth: 0,
            keepAlive: true
          }
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
          meta: { depth: 2, auth: true }
        },
        {
          path: '/cata/:id',
          name: 'catas',
          component: Home.Catas,
          meta: { depth: 1 }
        },
        {
          path: '/preorder/:id',
          name: 'preorder',
          component: Home.Preorder,
          meta: { depth: 3, auth: true }
        },
      ]
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
      meta: {
        depth: 0,
        keepAlive: true
      }
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: Suggest.Index
    },
    {
      path: '/activity',
      name: 'home-activity',
      component: BlankView,
      children: [
        {
          name: 'zfb-activity',
          path: '/activity/zfb',
          component: Activity.Zfb,
          meta: {
            depth: 0
          }
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      meta: {depth:0},
      component: BlankView,
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
          name: 'userinfo',
          path: '/user/userinfo',
          component: User.UserInfo,
          meta: {
            depth: 1,
            auth: true
          }
        },
        {
          name: 'security',
          path: '/user/security',
          component: User.Security,
          meta: {
            depth: 1,
            auth: true
          }
        },
        {
          name: 'activity',
          path: '/user/activity',
          component: User.Activity,
          meta: {
            depth: 1
          }
        },
        {
          name: 'bill',
          path: '/user/bill',
          component: User.Bill,
          meta: {
            auth: true,
            depth: 1
          }
        },
        {
          name: 'feedback',
          path: '/user/feedback',
          component: User.Feedback,
          meta: {
            depth: 1,
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
        },
        {
          name: 'spotadv',
          path: '/user/spotadv',
          component: User.SpotAdv,
          meta: {
            depth: 1,
            keepAlive: true
          }
        },
        {
          name: 'taskadv',
          path: '/user/taskadv',
          component: User.TaskAdv,
          meta: {
            depth: 1,
            keepAlive: true
          }
        },
        {
          name: 'taskadv',
          path: '/user/qqlogin',
          component: User.QQLogin,
          meta: {
            depth: 1,
            keepAlive: true
          }
        },
        {
          name: 'login',
          path: '/user/login',
          component: User.Login,
          meta: {
            depth: 1
          }
        },
        {
          name: 'reg',
          path: '/user/reg',
          component: User.Reg,
          meta: {
            depth: 1
          }
        },
        {
          name: 'findpwd',
          path: '/user/findpwd',
          component: User.FindPwd,
          meta: {
            depth: 2
          }
        },
        {
          name: 'findpoints',
          path: '/user/findpoints',
          component: User.FindPoints,
          meta: {
            depth: 3,
            auth: true
          }
        },
        {
          name: 'charge',
          path: '/user/charge',
          component: User.Charge,
          meta: {
            depth: 2,
            auth: false
          }
        },
        {
          name: 'pay',
          path: '/user/pay',
          component: User.Pay,
          meta: {
            depth: 2,
            auth: false
          }
        }
      ]
    }
  ]
});
