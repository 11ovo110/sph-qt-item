import { reqSearch } from "@/api"

const state = {
  searchData: {}
}
const mutations = {
  GETGOODS(state, data) {
    state.searchData = data;
  }
}
const actions = {
  async getGoods({state, dispatch, getters, commit}, payload) {
    let result = await reqSearch(payload);
    if(result.code === 200) {
      commit('GETGOODS', result.data);
    }
  }
}
const getters = {
  
}

export default {state, mutations, actions, getters};