import { reqGoodList } from "@/api";

const state = {
  dataList: {}
};

const mutations = {
  GETDATALIST(state, data) {
    state.dataList = data;
  }
};

const actions = {
  async getDataList({ dispatch, getters, state, commit }, payload) {
    let result = await reqGoodList(payload);
    commit("GETDATALIST", result.data);
  },
};

const getters = {};

export default { state, mutations, actions, getters };
