import axios from 'axios';
const baseURL = process.env.VUE_APP_URL;
const baseName = '';

axios.defaults.baseURL = baseURL + baseName;
axios.defaults.crossDomain = true;

axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (response.status === 200) {
      return response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
