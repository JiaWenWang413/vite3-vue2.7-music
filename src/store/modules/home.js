const state = {
    home: 0,
  };
   
  const mutations = {
    // 当前主题色
  SET_HOME_DEMO(state, data) {
    state.home = data;
  },
  };
   
  const actions = {
    // increment({ commit }) {
    //   commit('increment');
    // },
  };
   
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };