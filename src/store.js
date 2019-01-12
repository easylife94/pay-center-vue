import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// store
const store = new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations: {
    login (state, userInfo) {
      console.log('userInfo:%o', userInfo)
      state.userInfo = userInfo
    },
    logout (state) {
      state.userInfo = null
    }
  }
})

export default store
