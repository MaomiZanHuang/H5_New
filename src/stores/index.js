import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  // 当前选中的路由
  currentMenu: '/'
};
export default new Vuex.Store({
  state,
  mutations: {
    setCurrentMenu(state, path) {
      console.log('更改高了', path);
      state.currentMenu = path;
    }
  },
  actions: {
    setCurrentMenu({commit}, path) {
      commit('setCurrentMenu', path);
    }
  }
});