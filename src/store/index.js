import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state:{
    //存放的键值对就是所要管理的状态
    UserInfo: {},
    Token: undefined,
  },
  mutations:{
    SetUserInfo(State, UserInfo){
      State.UserInfo = UserInfo
    },
    SetToken(State, Token){
      State.Token = Token
    }
  },
  actions:{
    SetUserInfo(State, UserInfo){
      State.commit('SetUserInfo', UserInfo)
    },
    SetToken(State, Token){
      State.commit('SetToken', Token)
    },
  },
  getters:{
    UserInfo(){
      return store.state.UserInfo;
    },
    Token(){
      return store.state.Token;
    },
  }
});

export default store
