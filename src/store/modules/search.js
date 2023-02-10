import { reqSearchList } from "@/api"

const state = {
  dataList: {}
}
const mutations = {
  GETDATALIST(state, data) {
    state.dataList = data;
  }
}
const actions = {
  async getDateList({state, dispatch, commit, getters}, payload) {
    let result = await reqSearchList(payload);
    commit('GETDATALIST', result.data);
  }
}
const getters = {
  
}

export default {state, mutations, actions, getters};