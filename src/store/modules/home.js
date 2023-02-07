import { reqTypeNav } from "@/api";

const state = {
  typeArr: [],
};
const mutations = {
  TYPENAV(state, data) {
    state.typeArr = data;
  },
};
const actions = {
  async TypeNav({ state, dispatch, getters, commit }) {
    let result = await reqTypeNav();
    commit("TYPENAV", result.data);
  },
};
const getters = {};

export default {state, mutations, actions, getters};


