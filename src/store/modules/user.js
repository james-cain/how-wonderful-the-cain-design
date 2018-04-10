import api from '@/api/api';

/* eslint no-return-assign: 0 */
const user = {
  state: {
    roles: [],
  },
  mutations: {
    SETROLES: (state, roles) => {
      state.roles = roles;
    },
  },
  actions: {
    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        api.getInfo().then((response) => {
          commit('SETROLES', response);
          // commit('SET_NAME', data.name)
          // commit('SET_AVATAR', data.avatar)
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
  },
};

export default user;
