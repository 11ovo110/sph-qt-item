import axios from 'axios';
import userTemp from './userTempId';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '@/store';

let request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use(config => {
  nprogress.start();
  config.headers.userTempId = userTemp();
  let token = store.state.user.token;
  if(token) {
    config.headers.token = token;
  }
  return config;
})

request.interceptors.response.use(res => {
  nprogress.done();
  return res.data;
})

export default request;