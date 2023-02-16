import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css';
import userTempId from "./userTempId";
import store from "@/store";

let request = axios.create({
  baseURL: '/api',
  timeout: '5000'
})

request.interceptors.request.use(config => {
  let userId = userTempId();
  config.headers.userTempId = userId;
  let token = store.state.user.token;
  if(token) config.headers.token = token;
  nprogress.start();
  return config;
})

request.interceptors.response.use(res => {
  nprogress.done();
  return res.data;
})

export default request;