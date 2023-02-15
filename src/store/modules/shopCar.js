import { reqCarList, reqAddOrUpdateCar, reqChangeChecked, reqDeleteGood } from "@/api";

const state = {
  carList: {}
};

const mutations = {
  GETGOOD(state, data) {
    state.carList = data;
  }
};

const actions = {
  async getGood({ dispatch, getters, state, commit }) {
    let result = await reqCarList();
    commit("GETGOOD", result.data);
  },
  async deleteGood({dispatch, state, commit, getters}, skuId) {
    let result = await reqDeleteGood(skuId);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async changeChecked({ dispatch, getters, state, commit }, {skuId, isChecked}) {
    let result = await reqChangeChecked(skuId, isChecked);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async changeNum({ dispatch, getters, state, commit }, {skuId, skuNum}) {
    let result = await reqAddOrUpdateCar(skuId, skuNum);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
};

const getters = {
  cartInfoList(state) {
    return (state.carList[0] || {}).cartInfoList || [];
  }
};

export default { state, mutations, actions, getters };
