import { reqAddOrUpdate, reqDetail } from "@/api"

const state = {
  goodDetail: {}
}

const mutations = {
  GETDETAIL(state, data) {
    state.goodDetail = data;
  }
}

const actions = {
  async getDetail({dispatch, state, getters, commit}, skuId) {
    let result = await reqDetail(skuId);
    if(result.code == 200)
    commit('GETDETAIL', result.data);
  },
  async addGood({dispatch, state, getters, commit}, {skuId, skuNum}) {
    let result = await reqAddOrUpdate({skuId, skuNum});
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  }
}

const getters = {
  categoryView(state) {
    return state.goodDetail.categoryView || {};
  },
  skuInfo(state) {
    return state.goodDetail.skuInfo || {};
  },
  SaleAttr(state) {
    return state.goodDetail.spuSaleAttrList || {};
  },
  skuImageList(state) {
    return (state.goodDetail.skuInfo || {}).skuImageList || [];
  }
}

export default {state, mutations, actions, getters};