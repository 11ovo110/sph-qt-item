import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css';

nprogress.configure({ showSpinner: false });  // 取消显示小圈圈

let request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use(config => {
  nprogress.start();
  return config;
})

request.interceptors.response.use(res => {
  nprogress.done();
  return res.data;
})

export default request;