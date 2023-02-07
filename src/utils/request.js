import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
 
// axios.create 方法创建第二个axios
let request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 控制进度条旋转器（小圈圈）
nprogress.configure({ showSpinner: false });  

// 设置请求拦截器，开启进度条
request.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

//设置响应拦截器，关闭进度条
request.interceptors.response.use((res) => {
  nprogress.done();
  return res.data;
});

export default request;
