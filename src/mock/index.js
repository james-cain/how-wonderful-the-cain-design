import Mock from 'mockjs';
import loginAPI from './login';

// 登陆相关
// Mock.mock(/\/login\/login/, 'post', loginAPI.loginByusername);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);

export default Mock;
