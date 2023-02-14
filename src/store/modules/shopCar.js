import { reqCarList, reqChangeChecked, deleteGood, reqAddOrUpdateCar } from "@/api";

const state = {
  CarList: {}
};

const mutations = {
  GETCARLIST(state, data) {
    state.CarList = data;
  }
};

const actions = {
  async getCarList({ dispatch, getters, state, commit },) {
    let result = await reqCarList();
    if(result.code == 200)
    commit("GETCARLIST", result.data);
  },
  async changeChecked({ dispatch, getters, state, commit }, {skuId, isChecked},) {
    let result = await reqChangeChecked(skuId, isChecked);
    console.log(result);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.messgae));
    }
    
  },
  async changeNum({ dispatch, getters, state, commit }, {skuId, skuNum},) {
    let result = await reqAddOrUpdateCar(skuId, skuNum);
    console.log(result);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.messgae));
    }
    
  },
  async deleteGood({ dispatch, getters, state, commit }, skuId,) {
    let result = await deleteGood(skuId);
    console.log(result);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.messgae));
    }
    
  },
};

const getters = {
  cartInfoList(state) {
    return (state.CarList[0] || {}).cartInfoList || []
  },
};

export default { state, mutations, actions, getters };
