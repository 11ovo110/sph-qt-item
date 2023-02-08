import request from "@/utils/request"

const state = {
  typeArr: []
}

const mutations = {
  TYPENAV(state, data) {
    state.typeArr = data;
  }
}

const actions = {
 async TypeNav({dispatch, state, getters, commit}) {
    let result = await request.get('/product/getBaseCategoryList');
    commit('TYPENAV', result.data);
  }
}

const getters = {

}

export default {state, mutations, actions, getters};