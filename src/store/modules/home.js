import { reqTypeNav, reqBanner, reqFloor } from "@/api";

const state = {
  typeArr: [],
  bannerArr: [],
  floorArr: []
}

const mutations = {
  TYPENAV(state, data) {
    state.typeArr = data;
  },
  GETBANNER(state, data) {
    state.bannerArr = data;
  },
  GETFLOOR(state, data) {
    state.floorArr = data;
  }
}

const actions = {
 async TypeNav({dispatch, state, getters, commit}) {
    let result = await reqTypeNav();
    if(result.code === 200) 
    commit('TYPENAV', result.data);
  },
  async getBanner({dispatch, state, getters, commit}) {
    let result = await reqBanner();
    if(result.code === 200) 
    commit('GETBANNER', result.data);
  },
  async getFloor({state, commit, dispatch, getters}) {
    let result = await reqFloor();
    if(result.code === 200)
    commit('GETFLOOR', result.data);
  }
}

const getters = {

}

export default {state, mutations, actions, getters};