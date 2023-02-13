import { reqGoodItem } from "@/api";

const state = {
  goodDetail: {}
}

const mutations = {
  GETGOODITEM(state, goodDetail) {
    state.goodDetail = goodDetail;
  }
}

const actions = {
  async getGoodItem({dispatch, getters, state, commit}, skuId) {
    let result = await reqGoodItem(skuId);
    if(result.code == 200)
    commit('GETGOODITEM', result.data)
  }
}

// getters：类似于组件的computed 计算属性
// getters在项目中一般用于简化state的数据，可以让
const getters = {
  categoryView(state) {
    return state.goodDetail.categoryView || {};
  },
  SaleAttr(state) {
    return state.goodDetail.spuSaleAttrList || {};
  },
  skuInfo(state) {
    return state.goodDetail.skuInfo || {};
  }
}

export default {state, mutations, actions, getters};