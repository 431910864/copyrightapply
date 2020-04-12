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
    User: {},
    BType0: {
      "RJZZQ":"软件著作权",
      "ZPZZQ":"作品著作权",
    },
    BType1: {
      "ZYDK": "质押贷款",
      "ZQDJ":"质权登记",
      "CXZY":"撤销质押",
    },
    BType2: {
      "RJCS":"软件测试",
      "BQJY":"版权交易",
      "DCI_FW":"DCI服务",
      "ZFXMSB":"政府项目申报",
      "ZHUAN_LI":"专利",
      "SHANG_BIAO":"商标",
      "WQJC":"维权监测",
      "SSCZ":"诉讼存证",
    },
    Status: {
      SL: '受理',
      SCZ: '审查中',
      DBZ: '待补正',
      ZZCZ: '制证出证',
      YJA: '已结案'
    }
  },
  mutations:{
    SetUserInfo(State, UserInfo){
      State.UserInfo = UserInfo
    },
    SetToken(State, Token){
      State.Token = Token
    },
    SetUser(State, User){
      State.User = User
    },
  },
  actions:{
    SetUserInfo(State, UserInfo){
      State.commit('SetUserInfo', UserInfo)
    },
    SetToken(State, Token){
      State.commit('SetToken', Token)
    },
    SetUser(State, User){
      State.commit('SetUser', User)
    },
  },
  getters:{
    UserInfo(){
      return store.state.UserInfo;
    },
    Token(){
      return store.state.Token;
    },
    User(){
      return store.state.User;
    },
    BType() {
      return {
        ...store.state.BType0,
        ...store.state.BType1,
        ...store.state.BType2
      }
    }
  }
});

export default store
