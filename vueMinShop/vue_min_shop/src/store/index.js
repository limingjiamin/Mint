import Vue from "vue";
import Vuex from "vuex";
import pers from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [pers()],
  state: {
    home: {
      serach: "",
    },
    mine: {
      login_id: "",
    },
  },
  getters: {},
  mutations: {
    HANDLE_ID(state, val) {
      state.mine.login_id = val;
    },
  },
  actions: {
    handle_id(context, val) {
      context.commit("HANDLE_ID", val);
    },
  },
  modules: {},
});
