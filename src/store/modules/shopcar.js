import { reqAddOrUpdate, reqCarList, reqchangeChecked, reqDeteleGood } from "@/api"

const state = {
  carList: []
}

const mutations = {
  GETCARLIST(state, carList) {
    state.carList = carList;
  }
}

const actions = {
  async getCarList({dispatch, state, getters, commit}) {
    let result = await reqCarList();
    if(result.code == 200)
    commit('GETCARLIST', result.data);
  },
  async changeChecked({dispatch, state, getters, commit}, {skuId, isChecked}) {
    console.log(isChecked);
    let result = await reqchangeChecked({skuId, isChecked});
    console.log(result);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async deleteGood({dispatch, state, getters, commit}, skuId) {
    let result = await reqDeteleGood(skuId);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async changeNum({dispatch, state, getters, commit}, {skuId, skuNum}) {
    let result = await reqAddOrUpdate({skuId, skuNum});
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  }
}

const getters = {
  cartInfoList(state) {
    return (state.carList[0] || {}).cartInfoList || []
  }
}

export default {state, mutations, actions, getters};