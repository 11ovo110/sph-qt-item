import { reqCarList } from "@/api";

const state = {
  carList: {}
};

const mutations = {
  GETDATALIST(state, data) {
    state.carList = data;
  }
};

const actions = {
  async getCarList({ dispatch, getters, state, commit },) {
    let result = await reqCarList();
    commit('GETDATALIST', result.data);
  },
};

const getters = {
  cartInfoList(state) {
    return (state.carList[0] || {}).cartInfoList || {}
  }
};

export default { state, mutations, actions, getters };
