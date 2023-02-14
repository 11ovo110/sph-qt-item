import { reqCarList, reqDeleteGood, reqchangeChecked, reqAddOrUpdateCar } from "@/api";

const state = {
  carList: {}
};

const mutations = {
  GETCARLIST(state, data) {
    state.carList = data;
  }
};

const actions = {
  async getCarList({ dispatch, getters, state, commit },) {
    let result = await reqCarList();
    if(result.code == 200) 
    commit('GETCARLIST', result.data);
  },
  async changeChecked({dispatch, getters, state, commit}, {skuId, isChecked}) {
    let result = await reqchangeChecked(skuId, isChecked);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async deleteGood({dispatch, getters, state, commit}, skuId) {
    let result = await reqDeleteGood(skuId);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async ChangeNum({dispatch, getters, state, commit}, {skuId, skuNum}) {
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
  },
};

export default { state, mutations, actions, getters };
