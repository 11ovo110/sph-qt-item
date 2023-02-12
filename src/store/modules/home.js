import { reqTypeNav, reqBanner, reqFloor } from "@/api";

const state = {
  typeArr: [],
  bannerArr: [],
  floorArr: []
};

const mutations = {
  GETTYPENAN(state, data) {
    state.typeArr = data;
  },
  GETBANNER(state, data) {
    console.log(data);
    state.bannerArr = data;
  },
  GETFLOOR(state, data) {
    state.floorArr = data;
  }
};

const actions = {
  async getTypeNav({ state, dispatch, getters, commit }) {
    let result = await reqTypeNav();
    if(result.code == 200)
    commit('GETTYPENAN', result.data)
  },
  async getBanner({state, dispatch, getters, commit}) {
    let result = await reqBanner();
    if(result.code == 200)
    commit('GETBANNER', result.data)
  },
  async getFloor({state, dispatch, getters, commit}) {
    let result = await reqFloor();
    if(result.code == 200)
    commit('GETFLOOR', result.data)
  }
};

const getters = {};

export default { state, mutations, actions, getters };
