import { reqBanner, reqFloor, reqTypeNav } from "@/api"

const state = {
  bannerArr: [],
  floorArr: [],
  typeArr: [],
}

const mutations = {
  GETBANNER(state, data) {
    state.bannerArr = data;
  },
  GETFLOOR(state, data) {
    state.floorArr = data;
  },
  GETTYPENAV(state, data) {
    state.typeArr = data;
  },
}

const actions = {
  async getBanner({dispatch, getters, commit, state}) {
    let result = await reqBanner();
    if(result.code == 200)
    commit('GETBANNER', result.data);
  },
  async getFloor({dispatch, getters, commit, state}) {
    let result = await reqFloor();
    if(result.code == 200)
    commit('GETFLOOR', result.data);
  },
  async getTypeNav({dispatch, getters, commit, state}) {
    let result = await reqTypeNav();
    if(result.code == 200) 
    commit('GETTYPENAV', result.data);
  },
}

const getters = {
  
}

export default {state, mutations, actions, getters};