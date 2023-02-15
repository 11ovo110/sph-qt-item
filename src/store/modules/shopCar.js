import { reqCarList, reqAddOrUpdateCar, reqChangeChecked, reqDelateGood } from "@/api";

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
  async deleteGood({dispatch, state, commit, getters}, skuId) {
    let result = await reqDelateGood(skuId);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  deleteAll({dispatch, state, commit, getters}) {
    let goods = getters.cartInfoList;
    let arr = [];
    goods.forEach(good => {
      if(good.isChecked) {
        let ps = dispatch('deleteGood', good.skuId);
        arr.push(ps);
      }
    })
    return Promise.all(arr);
  }
};

const getters = {
  cartInfoList(state) {
    return (state.carList[0] || {}).cartInfoList || [];
  }
};

export default { state, mutations, actions, getters };
