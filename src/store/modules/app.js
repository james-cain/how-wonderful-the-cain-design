/* eslint no-return-assign: 0 */
const app = {
  state: {
    sidebar: {
      opened: true,
    },
    currentPath: '',
  },
  mutations: {
    TOGGLE_SIDEBAR: state => state.sidebar.opened = !state.sidebar.opened,
    SETCURRENTPATH: (state, currentPath) => {
      state.currentPath = currentPath;
    },
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    SETCURRENTPATH: ({ commit }, currentPath) => {
      commit('SETCURRENTPATH', currentPath);
    },
  },
};

export default app;
