import { reqSearch } from "@/api";

const state = {
  itemList: {}
}

const mutations = {
  GETITEMLIST(state, data) {
    state.itemList = data;
  }
}

const actions = {
  async getItemList({dispatch, getters, commit, state}, data) {
    let result = await reqSearch(data);
    if(result.code == 200)
    commit('GETITEMLIST', result.data);
  }
}

const getters = {
  attrsList(state) {
    return state.itemList.attrsList || [];
  },
  goodsList(state) {
    return state.itemList.goodsList || [];
  },
  trademarkList(state) {
    return state.itemList.trademarkList || [];
  },
  total(state) {
    return state.itemList.total;
  }
}

export default {state, mutations, actions, getters}