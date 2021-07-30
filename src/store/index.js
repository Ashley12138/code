import { createStore } from 'vuex'

export default createStore({
  state: {
    token:'', //用户登录验证
  },
  mutations: {
    setToken(state, value){
      // 更新token
      state.token = value;
      // 更新token时,需要在浏览器本地做备份, 因为浏览器刷新时vuex状态管理数据会初始化, 但是本地localStorage不会初始化, 需要从localStorage重新获取token
      sessionStorage.setItem("token",value);
    },
  },
  actions: {
  },
  modules: {
  }
})
