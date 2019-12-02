import Vue from 'vue'
import Vuex from 'vuex'
import demo from './demo.js' // 状态管理 demo

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    message: 'old!'
  },
  mutations: {
    updateState (state, message) {
      state.message = message
    }
  },
  actions: {
    updateState ({commit}) {
      commit('updateState', 'new')
    }
  },
  modules: {
    demo
  }
})