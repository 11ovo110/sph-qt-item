import Vuex from 'vuex';
import Vue from 'vue';

import home from './modules/home'
import search from './modules/search'
import detail from './modules/detail'
import shopCart from './modules/shopCart';

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
    search,
    detail,
    shopCart
  }
})