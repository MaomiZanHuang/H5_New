import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  // 当前选中的路由
  currentMenu: '/',
  transitionName: ''
};
export default new Vuex.Store({
  state,
  mutations: {
    setCurrentMenu(state, path) {
      state.currentMenu = path;
    },
    setTransitionName(state, name) {
      state.transitionName = name;
    }
  },
  actions: {
    setCurrentMenu({commit}, path) {
      commit('setCurrentMenu', path);
    },
    setTransitionName({commit}, name) {
      commit('setTransitionName', name);
    }
  }
});