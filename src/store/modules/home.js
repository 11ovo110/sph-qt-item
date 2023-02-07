import { reqTypeNav } from "@/api";

const state = {
  typeArr: [],
};

const mutations = {
  TYPENAV(state, data) {
    state.typeArr = data;
  }
};

const actions = {
  async TypeNav({ dispatch, commit, state, getters }) {
    let result = await reqTypeNav();
    commit("TYPENAV", result.data);
  },
};

const getters = {};

export default { state, mutations, actions, getters };
