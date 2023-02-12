import axios from 'axios';

import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

let request = axios.create({
  baseURL: '/mock',
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