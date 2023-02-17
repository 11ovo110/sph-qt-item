import { reqGetCode, reqGetUserInfo, reqLogin, reqLoginOut, reqRegister } from "@/api"
import { REMOVE_TOKEN, GET_TOKEN, SET_TOKEN } from "@/utils/auth-token";


const state = {
  token: GET_TOKEN(),
  nickName: ''
}

const mutations = {
  LOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, nickName) {
    state.nickName = nickName;
  },
  LOGINOUT(state) {
    state.token = '';
    state.nickName = '';
    REMOVE_TOKEN();
  }
}

const actions = {
  async getCode({dispatch, state, commit, getters}, phone) {
    let result = await reqGetCode(phone);
    console.log(result);
  },
  async register({dispatch, state, commit, getters}, data) {
    let result = await reqRegister(data);
    if(result.code == 200) {
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async login({dispatch, state, commit, getters}, data) {
    let result = await reqLogin(data);
    if(result.code == 200) {
      commit('LOGIN', result.data.token);
      SET_TOKEN(result.data.token);
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async getUserInfo({dispatch, state, commit, getters},) {
    let result = await reqGetUserInfo();
    if(result.code == 200) {
      commit('GETUSERINFO', result.data.nickName);
      return;
    }else {
      return Promise.reject(new Error(result.message));
    }
  },
  async loginOut({dispatch, state, commit, getters}) {
    let result = await reqLoginOut();
    if(result.code == 200) {
      commit('LOGINOUT');
    }
  }
}

const getters = {

}

export default {state, mutations, actions, getters};