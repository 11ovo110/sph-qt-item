import { reqTypeNav } from "@/api";
const state = {
  typeArr: []
};
const mutations = {
  TYPENAV(state, data) {
    console.log(data);
    state.typeArr = data;
  }
};
const actions = {
  async TypeNav({ commit, dispatch, state, getters }) {
    let result = await reqTypeNav();
    commit("TYPENAV", result.data);
  },
};
const getters = {};

export default { state, mutations, actions, getters };
