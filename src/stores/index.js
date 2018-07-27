import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'axios';
import {guest as GUEST_API} from '@/config/serverApi';

Vue.use(Vuex);

// 将常用的全局变量放在这个里面
const state = {
  // 当前选中的路由
  currentMenu: '/',
  transitionName: '',
  // 用户登录信息
  user: {},

  /** 首页缓存的数据，还可能在其它地方用到 */
  // 分类
  goods_cata: [],
  // 首页广告数据
  adv: {
    href: '#', // #表示不跳转
    pic: 'https://cdn.520cy.cn/images/appbazaar.png',
    alt: '千寻软件市场'
  },
  // 首页公告
  notices: [],
  // 首页推荐数据
  home_page_goods: []
};
export default new Vuex.Store({
  state,
  mutations: {
    setCurrentMenu(state, path) {
      state.currentMenu = path;
    },
    setTransitionName(state, name) {
      state.transitionName = name;
    },
    setGoodsCata(state, catas) {
      state.goods_cata = catas;
    },
    setHomePageData(state, data) {
      state.adv = data.adv;
      state.home_page_goods = data.home_page_goods;
      state.notices = data.notices;
    }
  },
  actions: {
    setCurrentMenu({commit}, path) {
      commit('setCurrentMenu', path);
    },
    setTransitionName({commit}, name) {
      commit('setTransitionName', name);
    },
    setGoodsCata({commit}, catas) {
      commit('setGoodsCata', catas);
    },
    getGoodsCata({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.goods_cata.length) {
          return resolve(state.goods_cata);
        }
        $.get(GUEST_API.getGoodsCata)
          .then(({data}) => {
            console.log(data);
            commit('setGoodsCata', data);
            resolve(data);
          }).catch(err => {
            reject(err);
          })
      });
    },
    getHomePageData({ commit, state}) {
      return new Promise((resolve, reject) => {
        if (state.home_page_goods.length) {
          return resolve({
            adv: state.adv,
            home_page_goods: state.home_page_goods,
            notices: state.notices
          });
        }
        // 从服务端拉取
        $.get(GUEST_API.getHomePageData)
          .then(({data}) => {
            commit('setHomePageData', data);
          }).catch(err => {
            reject(err);
          });
      });
    }
  }
});