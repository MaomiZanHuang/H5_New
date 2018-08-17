import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'axios';
import {user as USER_API, guest as GUEST_API} from '@/config/serverApi';

Vue.use(Vuex);

// 将常用的全局变量放在这个里面
const state = {
  // 当前选中的路由
  currentMenu: '/',
  transitionName: '',
  // 用户登录信息
  user: JSON.parse(localStorage['user'] || '{}'),

  /** 首页缓存的数据，还可能在其它地方用到 */
  // 分类
  goods_cata: [],
  charge_options: [],
  // 首页广告数据
  adv: {
    href: '#', // #表示不跳转
    pic: 'http://ugc.qpic.cn/gbar_pic/2wF3sr2LiaVtQE337kOWdsAKFuc2y57haIiborP8yNQ2ypXric7RS0rOg/0',
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
    setUser(state, user) {
      state.user = user;
      localStorage['user'] = JSON.stringify(user);
    },
    setUserPoints(state, points) {
      state.user.points = points;
      localStorage['user'] = JSON.stringify(state.user);
    },
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
    },
    setChargeOptions(state, data) {
      state.charge_options = data;
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
            commit('setGoodsCata', data);
            resolve(data);
          }).catch(err => {
            reject(err);
          })
      });
    },
    getChargeOptions({commit, state}) {
      return new Promise((resolve, reject) => {
        if (state.charge_options.length) {
          return resolve(state.charge_options);
        }
        $.get(GUEST_API.getChargeOptions)
          .then(({data}) => {
            commit('setChargeOptions', data);
          })
          .catch(err => {
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
    },
    // 刷新用户积分
    getUserPoints({ commit }) {
      return new Promise((resolve, reject) => {
        $.get(USER_API.getUserPoints)
          .then(({data}) => {
            commit('setUserPoints', data.points);
            resolve(data);
          })
          .catch(err => {
            reject(err);
          })
      });
    }
  }
});