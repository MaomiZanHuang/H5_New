import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  // 当前选中的路由
  currentMenu: '/',
  transitionName: '',
  // 用户是否登录
  isLogin: false,

  // 分类
  goods_cata: []
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
    }
  }
});