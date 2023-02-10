import { reqSearch } from "@/api";

const state = {
  SearchData: {}
};
const mutations = {
  GETLIST(state, data) {
    state.SearchData = data;
  }
};
const actions = {
  async getList({commit, dispatch, state, getters},payload={}) {
    let result = await reqSearch(payload);
    if(result.code === 200) 
    commit('GETLIST', result.data);
  }
};
const getters = {};

export default { state, mutations, actions, getters };
