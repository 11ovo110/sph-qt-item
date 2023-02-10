import { reqSearchList } from "@/api"

const state = {
  SearchList: {}
}
const mutations = {
  GETSEARCHLIST(state, data) {
    state.SearchList = data;
  }
}
const actions = {
 async getSearchList({commit, state, dispatch, getters}, payload) {
    let result = await reqSearchList(payload);
    commit('GETSEARCHLIST', result.data);
  }
}
const getters = {
  
}

export default {state, mutations, actions, getters};