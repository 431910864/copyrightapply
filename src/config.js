//
// export const setConfig = () => {
//   const wx = window.wx;
//   wx.config({
//     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//     appId: wxConfig.appID, // 必填，公众号的唯一标识
//     timestamp: '', // 必填，生成签名的时间戳
//     nonceStr: '', // 必填，生成签名的随机串
//     signature: '',// 必填，签名
//     jsApiList: [] // 必填，需要使用的JS接口列表
//   });
// };
import { WeChatOfficialWebAuthGetOpenIdForCode, WeChatOfficialWebAuthGetWxUserInfo } from './api/wechat';
import store from '../src/store';
import {Dialog} from "vant";
const WxMethods = function () {
  return this;
};


WxMethods.prototype = {
  // appSecret: 'b50f491c855a18d08831b3d447dfe196',
  // appID: 'wx817de49f68854dac',
  // BaseUrl: "https://kukumber.utools.club/noa/api/wechat/official/webauth/authorize?",
  BaseUrl: "https://open.weixin.qq.com/connect/oauth2/authorize?",
  JsApiData:"",
  GetCodes:{
    //公众号的唯一标识
    AppId:"wxcd8223c3fb7dc4fa",
    //授权后重定向的回调链接地址(填当前页)
    GetCodes: 'https://kukumber.utools.club/', // window.location.href,
    //返回类型，请填写code
    Response_type: "code",
    //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid）
    Scope: "snsapi_base",
    //重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
    State: Number(new Date()),
    //必须带此参数
    Wechat_Redirect:"#wechat_redirect"
  },
  //拼接获取code的地址
  ReturnGetCodeUrl() {
    return this.BaseUrl + "appid=" + this.GetCodes.AppId + "&redirect_uri="
      + this.GetCodes.GetCodes + "&response_type="
      + this.GetCodes.Response_type + "&scope=" + this.GetCodes.Scope + "&state="
      + this.GetCodes.State + this.GetCodes.Wechat_Redirect
  },
  //取localStorage数据
  GetStorage(name){
    return locache.get(name);
  },
  //获取地址栏code参数
  GetQueryString(name){
    var url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var newUrl = window.location.search.substr(1).match(url);
    if (newUrl != null) {
      return unescape(newUrl[2]);
    } else {
      return false;
    }
  },
  //获取code
  GetCode(){
    if (!this.GetStorage("openid")) {
      if (this.GetQueryString("code")) {
        locache.set('code', this.GetQueryString("code"));
        this.GetOpenId(this.GetQueryString("code"))
      } else {
        window.location.href = this.ReturnGetCodeUrl()
      }
    } else {
      this.GetUserInfo();
    }
  },
  async GetUserInfo() {
    const openid = this.GetStorage("openid");
    if (openid) {
      const lData = locache.get('userInfo') || {};
      let oldToken = locache.get('token');
      let newToken = oldToken;
      if (lData && lData.errmsg) {
        Dialog({ message: lData.errmsg });
        locache.remove('userInfo');
      } else {
        if (lData && lData.jwt && !oldToken) {
          oldToken = lData.jwt;
        }
        store.commit('SetToken', oldToken);
        locache.set('token', oldToken);
        store.commit('SetUserInfo', {
          ...lData,
        });
      }
      const data = await WeChatOfficialWebAuthGetWxUserInfo(openid);
      const dispatchData = data || lData || {};
      if (dispatchData && dispatchData.jwt && !newToken) {
        newToken = dispatchData.jwt;
      }
      store.commit('SetToken', newToken);
      locache.set('token', newToken);
      store.commit('SetUserInfo', {
        ...dispatchData,
      });
      locache.set('userInfo', data);
    }
  },
  async GetOpenId(code){
    var openid;
    if (!this.GetStorage("openid")) {
      var openids = await WeChatOfficialWebAuthGetOpenIdForCode(code) || {};
      openid = openids.openid;
      if (!openid) {
        window.location.href = this.ReturnGetCodeUrl()
      } else {
        locache.set('openid', openid);
      }
    } else {
      openid = this.GetStorage("openid");
    }
    if (openid) {
      this.GetUserInfo();
    }
  }
};

export default new WxMethods();
