export default {
  state: {
    demo: 0
  },
  mutations: {
    setNewMsgNum (state, value) {
      // 设定用户信息
      // 第一个参数是 state， 外置的第一个参数是prop名称，第二个参数是值
      state.demo = value
    }
  },
  actions: {
    setNewMsgNumAction ({commit}, value) {
      commit('setNewMsgNum', value)
    }
  }
}