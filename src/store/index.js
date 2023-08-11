import Vue from 'vue';
import Vuex from 'vuex';
 
import home from './modules/home';
 
Vue.use(Vuex);
 
const store = new Vuex.Store({
  // 严格模式
  strict: import.meta.env.MODE !== 'production',
  modules: { home },
});
 
export default store;