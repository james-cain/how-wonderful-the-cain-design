import api from '@/api/api';

/* eslint no-return-assign: 0 */
const user = {
  state: {
    roles: ['init'],
    userInfo: {},
  },
  mutations: {
    SETROLES: (state, roles) => {
      state.roles = roles;
    },
    SETUSERINFO: (state, info) => {
      state.userInfo = info;
    },
  },
  actions: {
    // 获取用户信息
    GetInfo({ commit }, params) {
      return new Promise((resolve, reject) => {
        api.getInfo(params).then((data) => {
          const roles = data.role;
          roles.push('401');
          roles.push('404');
          roles.push('except');
          roles.push('login');
          commit('SETROLES', roles);
          commit('SETUSERINFO', data);
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      });
    },
  },
};

export default user;
