import { reqGetUserInfo, reqLogin, reqRegister, reqGetCode } from "@/api"

const state = {
  token: '',
  nickName: ''
}

const mutations = {
  LOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, nickName) {
    state.nickName = nickName;
  }
}

const actions = {
  async getCode({dispatch, state, getters, commit} ,phone) {
    let result = await reqGetCode(phone);
    console.log(result);
  },
  async register({dispatch, state, getters, commit}, data) {
    let result = await reqRegister(data);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async login({dispatch, state, getters, commit}, data) {
    let result = await reqLogin(data);
    if(result.code == 200) {
      commit('LOGIN', result.data.token)
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async getUserInfo({dispatch, state, commit, getters} ) {
    let result = await reqGetUserInfo();
    if(result.code == 200) {
      commit('GETUSERINFO', result.data.nickName);
    }
  }
}

const getters = {

}

export default {state, mutations, actions, getters};