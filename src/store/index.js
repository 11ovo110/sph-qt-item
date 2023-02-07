import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    typeArr: []
  },
  mutations: {
    TYPENAV(state, data) {
      state.typeArr = data;
    }
  },
  actions: {},
  getters: {},
  modules: {
    home
  }
})