import { reqGoodItemList } from "@/api";

const state = {
  itemList: {}
};

const mutations = {
  GETITEMLIST(state, data) {
    state.itemList = data;
  }
};

const actions = {
  async getItemList({ dispatch, getters, state, commit }, payload) {
    let result = await reqGoodItemList(payload);
    if(result.code == 200)
    commit("GETITEMLIST", result.data);
  },
};

const getters = {
  categoryView(state) {
    return state.itemList.categoryView || {};
  },
  skuInfo(state) {
    return state.itemList.skuInfo || {};
  },
  saleAttr(state) {
    return state.itemList.spuSaleAttrList || {};
  }
};

export default { state, mutations, actions, getters };
