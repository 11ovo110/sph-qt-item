import { reqPhoneCode, reqRegister, reqLogin, reqUserInfo } from "@/api";

const state= {
  token: '',
  nickName: ''
};
const mutations = {
  LOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, nickName) {
    state.nickName = nickName;
  }
};
const actions = {
 async getPhoneCode({dispatch, state, getters, commit} ,phone) {
  let result = await reqPhoneCode(phone);
  console.log(result.data);
 },
 async register({dispatch, state, getters, commit}, data) {
  let result = await reqRegister(data);
  if(result.code == 200) {
    console.log(result.message);
    return 'ok';
  }else {
    return Promise.reject(new Error(result.message));
  }
 },
 async login({dispatch, state, getters, commit}, data)  {
  let result = await reqLogin(data);
  console.log(result);
  if(result.code == 200) {
    commit('LOGIN', result.data.token);
    return 'ok';
  }else {
    return Promise.reject(new Error(result.message));
  }
 },
 async getUserInfo({dispatch, state, getters, commit}) {
  let result = await reqUserInfo();
  if(result.code == 200) {
    commit('GETUSERINFO', result.data.nickName);
  }
 }
};
const getters = {};

export default {state, mutations, actions, getters};
