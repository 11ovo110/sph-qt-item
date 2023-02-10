import Vue from 'vue';
import Vuex from 'vuex';

import home from '@/store/modules/home.js';
import search from '@/store/modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    home,
    search
  }
})