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

const getters = {

}

export default {state, mutations, actions, getters};