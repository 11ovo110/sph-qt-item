import { reqItemList, reqAddOrUpdateCar } from "@/api";

const state = {
  ItemList: {}
};

const mutations = {
  GETITEMLIST(state, data) {
    state.ItemList = data;
  }
};

const actions = {
  async getItemList({ dispatch, getters, state, commit }, skuId) {
    let result = await reqItemList(skuId);
    if(result.code == 200)
    commit("GETITEMLIST", result.data);
  },
  async addCar({dispatch, state, getters, commit}, {skuId, skuNum}) {
    let result = await reqAddOrUpdateCar(skuId, skuNum);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  }
};

const getters = {
  categoryView(state) {
    return state.ItemList.categoryView || {};
  },
  skuInfo(state) {
    return state.ItemList.skuInfo || {};
  },
  saleAttr(state) {
    return state.ItemList.spuSaleAttrList || {};
  },
  skuImageList(state) {
    return (state.ItemList.skuInfo || {}).skuImageList || [];
  }
};

export default { state, mutations, actions, getters };
