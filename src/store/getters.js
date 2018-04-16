const getters = {
  sidebar: state => state.app.sidebar,
  roles: state => state.user.roles,
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
};

export default getters;
