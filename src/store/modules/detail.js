import { reqItemList, reqAddOrUpdata } from "@/api";

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
    console.log(result);
    if(result.code == 200)
    commit("GETITEMLIST", result.data);
  },
  async addCar({dispatch, getters, state, commit}, {skuId, skuNum}) {
    let result = await reqAddOrUpdata(skuId, skuNum);
    console.log(result);
  }
};

const getters = {
  categoryView(state) {
    return state.ItemList.categoryView || {}
  },
  skuInfo(state) {
    return state.ItemList.skuInfo || {}
  },
  saleAttr(state) {
    return state.ItemList.spuSaleAttrList || {}
  },
  skuImageList(state) {
    return (state.ItemList.skuInfo || {}).skuImageList || []
  }
};

export default { state, mutations, actions, getters };
