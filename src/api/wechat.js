import axios from './index';
import { Dialog, Toast } from "vant";

export const limit = 20;
export const getPage = (list) => {
  try {
    const len = typeof list === 'number' ? list : list.length;
    if (len < limit) {
      return 1;
    }
    let count = 0;
    if (!list) {
      return 1;
    }
    if (len <= 0)
    if (len%10 > 1) {
      count = 1;
    }
    return Number(((len/limit) + '').split('.')[0]) + count;
  } catch (e) {
    return 1;
  }
};
export const getMaxPage = (count) => {
  try {
    return getPage(count);
  } catch (e) {
    return 1;
  }
};

export const pages = (list, count) => {
  const pageIndex = getPage(list);
  const maxPage = getMaxPage(count);
  return {
    pageIndex,
    maxPage,
  }
};
let timer = null;
export const toastMessage = (isClear) => {
  clearInterval(timer);
  if (isClear) {
    Toast.clear();
    return;
  }
  let message = '请稍后';
  const toast = Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true,
    message: '请稍后'
  });
  let second = 0;
  timer = setInterval(() => {
    if (second >= 3) {
      toast.message = `${message}${'.'.repeat(second)}`;
      second = 0;
    } else {
      second++;
      toast.message = `${message}${'.'.repeat(second)}`;
    }
  }, 1000);
}

export const post = async (url, data) => {
  return new Promise(async (resolve, reject) => {
    toastMessage();
    try {
      resolve(await axios.post(url, data));
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        // alert(error.response.data.error);
        Dialog({ message: error.response.data.error });
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
      }
      // console.log(error.config);

      resolve(error.response.data);
    } finally {
      toastMessage(true);
    }
  })
};

export const get = async (url, data, isLoading) => {
  return new Promise(async (resolve, reject) => {
    isLoading && toastMessage();
    try {
      const data = await axios.get(url, data);
      resolve(data.data || data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        // alert(error.response.data.error);
        Dialog({ message: error.response.data.error });
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      // console.log(error.config);

      resolve();
    } finally {
      isLoading && toastMessage(true);
    }
  })
};
// 常见问题
// Common Problem Controller
//
// 微信公众号-Token管理
// Wechat Token Controller
// /api/wechat/token
// 登录
export const WeChatToken = async (data) => {
  return await post('wechat/token', {
    password: '',
    username: '',
    ...data,
  })
};
//
// 微信公众号-业务员
// Wechat Salesman Controller
//
// 微信公众号-中心资讯
// Wechat Central Info Controller
export const WeChatCentralInfo = async (page) => {
  return await get(`/wechat/CentralInfo?limit=${limit}&page=${page}`, {
    limit,
    page,
  })
};
export const WeChatCentralInfoGetID = async (id) => {
  return await get(`/wechat/CentralInfo/${id}`, {
    id,
  })
};

export const WeChatSalesman = async (page) => {
  return await get(`/wechat/salesman?limit=${limit}&page=${page}`, {
    limit,
    page,
  })
};
//
// 微信公众号-常见问题
// Wechat Common Problem Controller
//
export const WeChatCommonProblem = async (page = 1) => {
  return await get(`/wechat/CommonProblem?limit=${limit}&page=${page}`, {
    totalElements: limit,
    totalPages: 1,
  })
};
export const WeChatCommonProblemGetID = async (id) => {
  return await get(`/wechat/CommonProblem${id}`, {
    id,
  })
};

// 微信公众号-接入微信公众号
// Agent Weixin Reply Controller
//
// 微信公众号-热门知识
// Wechat Hot Knowledge Controller
//

export const WeChatHotKnowledge = async (page) => {
  return await get(`/wechat/HotKnowledge?limit=${limit}&page=${page}`, {
    totalElements: limit,
    totalPages: page,
  })
};
export const WeChatHotKnowledgeGetID = async (id) => {
  return await get(`/wechat/HotKnowledge${id}`, {
    id,
  })
};
// 微信公众号-版权金融
// Webchat Copyright Finance Controller
// 查询提交申请
export const WeChatGetCopyrightFinance = async (page) => {
  return await get(`/wechat/CopyrightFinance?limit=${limit}&page=${page}`, {
    limit,
    page,
  })
};
// 提交申请
export const WeChatCopyrightFinance = async (data) => {
  return await post(`/wechat/CopyrightFinance`, {
    "busiType": "",
    "enterpriseName": "",
    "financialDemandLimit": "",
    "iprCount": "",
    "mobile": "",
    ...data,
  })
};


// 查询版权金融名称是否存在
export const WeChatCopyrightFinanceExist = async (val) => {
  if (!val) return;
  return await get(`/wechat/CopyrightFinance/exist?copyrightName=` + val, {
    "copyrightName": val,
  }, true)
};
// 微信公众号-用户管理
// Wechat User Controller
//
export const WeChatUser = async (data) => {
  return await post(`/wechat/user`, {
    mobile: '',
    password: '',
    realName: '',
    username: '',
    wxCode: '',
    ...data,
    openid: locache.get('openid'),
  })
};
export const WeChatUserPwd = async (data) => {
  return await post(`/wechat/user/pwd`, {
    newPwd: '',
    oldPwd: '',
    ...data,
  })
};
// 微信公众号-知产政策
// Wechat Ipr Policy Controller
//
export const WeChatIprPolicy = async (page) => {
  return await get(`/wechat/IprPolicy?limit=${limit}&page=${page}`, {
    totalElements: limit,
    totalPages: page,
  })
};
export const WeChatIprPolicyGetID = async (id) => {
  return await get(`/wechat/IprPolicy${id}`, {
    id,
  })
};
// 微信公众号-网页授权登录-获取code、openid
// Web Auth Controller
//
// 微信公众号-获取access_token
// Access Token Controller
//
export const WeChatOfficialWeBauthAuthorize = async (id) => {
  return await get(`/wechat/official/webauth/authorize`, {})
};

export const WeChatOfficialAccessTokenGetToken = async (code) => {
  return await get(`/wechat/official/accesstoken/getToken`, {
    // code,
  })
};
export const WeChatOfficialWebAuthGetOpenIdForCode = async (code) => {
  return await get(`/wechat/official/webauth/getOpenIdForCode?code=${code}&code1=${code}`, { code })
};
export const WeChatOfficialWebAuthGetWxUserInfo = async (openId) => {
  const userInfo = await get(`/wechat/official/webauth/getWxUserInfo?openId=${openId}`, { openId }, !locache.get('userInfo'));
  if (userInfo.errmsg) {
    locache.remove('userInfo');
    Dialog({ message: userInfo.errmsg })
    return null;
  }
  return userInfo;
};

//

export const WeChatTemplateFile = async (page) => {
  return await get(`/wechat/TemplateFile?limit=${limit}&page=${page}`, {
    limit,
    page,
  })
};
