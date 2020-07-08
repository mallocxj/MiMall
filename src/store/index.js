import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
const state = {
  username:"",
  cartCount:0
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  },
  //plugins: [createPersistedState()]//默认localstorege
  plugins: [createPersistedState({
    storage:window.sessionStorage
  })]//默认localstorege
})
