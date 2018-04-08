import axios from 'axios';
import { getStorage } from './common';
import { Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    const token = getStorage({ key: 'token' });
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    Message.error({
      message: `加载超时${error}`,
    });
    return Promise.reject(error);
  },
);

// respone拦截器
service.interceptors.response.use(
  response => response,
  (error) => {
    if (error) {
      Message.error({
        message: `响应拦截：${error}`,
      });
    }
    return Promise.reject(error);
  },
);

export default service;
