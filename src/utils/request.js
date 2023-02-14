import axios from 'axios';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import userTemp from './userTempId';


//控制进度条旋转器
nprogress.configure({ showSpinner: false })

let request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use(config => {
  nprogress.start();
  config.headers.userTempId = userTemp();
  return config;
})

request.interceptors.response.use(res => {
  nprogress.done();
  return res.data;
})

export default request;