import { reqGetCode, reqGetUserInfo, reqRegister, reqLogin } from "@/api"

const state = {
  token: '',
  nickName: ''
}

const mutations = {
  Login(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, nickName) {
    state.nickName = nickName;
  }
}

const actions = {
 async getPhoneCode({dispatch, state, getters, commit}, phone) {
  let result = await reqGetCode(phone);
    console.log(result);
 },
 async register({dispatch, state, getters, commit}, data) {
  let result = await reqRegister(data);
  if(result.code == 200) {
    return;
  }else {
    return Promise.reject(new Error(result.message))
  }
 },
 async login({dispatch, state, getters, commit}, data) {
  let result = await reqLogin(data);
  if(result.code == 200) {
    commit('Login', result.data.token);
    console.log(result);
  }else {
    return Promise.reject(new Error(result.message));
  }
 },
 async getUserInfo({dispatch, state, getters, commit}) {
  let result = await reqGetUserInfo();
  if(result.code == 200){
    commit('GETUSERINFO', result.data.nickName);
  }
 }
}

const getters = {

}

export default {state, mutations, actions, getters};