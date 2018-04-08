import { Message, Loading } from 'element-ui';
import service from './fetch';
import { setStorage } from './common';
import router from '../router';

const CONFIG = {
  isNeedLoading: true,
  success() {},
  fail() {},
};
const request = (config) => {
  let loadingInstance;
  let params = {};
  const conf = Object.assign({}, CONFIG, config);
  if (conf.isNeedLoading) {
    loadingInstance = Loading.service({ fullscreen: true });
  }
  // 对get请求的特殊处理，get请求的参数必须是{params: {xxx}}格式
  // post请求的参数格式{xxx}即可
  if (conf.method === 'get') {
    params.params = conf.params;
  } else {
    params = conf.params;
  }
  service[conf.method](
    conf.url,
    params,
  ).then((response) => {
    if (conf.isNeedLoading) {
      loadingInstance.close();
    }
    const data = response.data;
    let finalData;
    // console.log(conf.url + '请求获取的数据：', data)
    switch (data.state) {
      case 0:
        if (data.token) {
          setStorage({
            key: 'token',
            data: data.token,
          });
        }
        finalData = data.data ? data.data : data;
        conf.success(finalData);
        break;
      case 200:
        // 只有登录接口才有token信息，才需要缓存
        if (data.token) {
          setStorage({
            key: 'token',
            data: data.token,
          });
        }
        finalData = data.data ? data.data : data;
        conf.success(finalData);
        break;
      case 301:
        Message.error({
          message: data.message,
        });
        router.push({
          path: '/',
        });
        break;
      default:
        Message.error({
          message: data.message,
        });
    }
  }).catch((error) => {
    if (conf.isNeedLoading) {
      loadingInstance.close();
    }
    Message.error({
      message: `加载失败：${error}`,
    });
    conf.fail(error);
  });
};

const promiseRequest = (config) => {
  let loadingInstance;
  let params = {};
  const conf = Object.assign({}, CONFIG, config);
  if (conf.isNeedLoading) {
    loadingInstance = Loading.service({ fullscreen: true });
  }
  // 对get请求的特殊处理，get请求的参数必须是{params: {xxx}}格式
  // post请求的参数格式{xxx}即可
  if (conf.method === 'get') {
    params.params = conf.params;
  } else {
    params = conf.params;
  }
  const promise = new Promise((resolve, reject) => {
    service[conf.method](
      conf.url,
      params,
    ).then((response) => {
      if (conf.isNeedLoading) {
        loadingInstance.close();
      }
      const data = response.data;
      let finalData;
      // console.log(conf.url + 'promise请求获取的数据：', data)
      switch (data.state) {
        case 0:
          if (data.token) {
            setStorage({
              key: 'token',
              data: data.token,
            });
          }
          finalData = data.data ? data.data : data;
          conf.success(finalData);
          break;
        case 200:
          // 只有登录接口才有token信息，才需要缓存
          if (data.token) {
            setStorage({
              key: 'token',
              data: data.token,
            });
          }
          finalData = data.data ? data.data : data;
          resolve(finalData);
          break;
        case 401:
          Message.error({
            message: data.message,
          });
          router.push({
            path: '/',
          });
          reject(data.message);
          break;
        default:
          Message.error({
            message: data.message,
          });
          reject(data.message);
      }
    }).catch((error) => {
      if (conf.isNeedLoading) {
        loadingInstance.close();
      }
      Message.error({
        message: `加载失败：${error}`,
      });
      reject(error);
    });
  });
  return promise;
};

export {
  request,
  promiseRequest,
};
