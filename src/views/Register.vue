<template>
  <div class="pageWrapper">
    <header class="header">
      <div style="text-align: center;">
        <img class="logoImg" :src="logoImg" />
        <div class="title">南山版权产业服务中心</div>
      </div>
    </header>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-field v-model="data.username" placeholder="用户名" />
        <van-field v-model="data.realName" placeholder="姓名或企业名称" />
        <van-field v-model="data.mobile" placeholder="手机号" />
        <van-field type="password" v-model="data.password" placeholder="密码" />
        <van-field type="password" v-model="data.dPassword" placeholder="再次输入密码" />
        <div style="display: flex;flex-direction: row;height: 0.86rem;margin: 0 auto 0.3rem auto;width: 6.48rem;">
          <van-field maxlength="4" style="margin-bottom: 0;flex: 1;border-radius: 4px 0 0 4px;border-right: 0;" v-model="code" placeholder="验证码" />
          <vue-img-verify style="border-radius: 0 4px 4px 0;overflow: hidden;" @getImgCode="getImgCode" ref="vueImgVerify" />
        </div>
      </van-form>
    </div>
    <div class="submitBtn" @click="onSubmit">注册</div>
    <div style="height: 100px;"></div>
  </div>
</template>
<script>
  import {
    Button, Dialog
  } from 'vant';
  import { WeChatUser } from "../api/wechat";
  import VueImgVerify from "../components/vueImgVerify";

  export default {
    name: 'Register',
    components: {
      Button,
      VueImgVerify,
    },
    data() {
      return {
        code: '',
        imgCode: '',
        data: {
          mobile: '',
          password: '',
          realName: '',
          username: '',
          wxCode: '',
          dPassword: '',
          code: '',
        },
        logoImg: require('@/assets/images/logo.png')
      }
    },
    methods: {
      // 点击图片获取验证码
      getImgCode(code) {
        this.imgCode = code;
      },
      getCode() {
        return this.$refs.vueImgVerify.imgCode || this.imgCode;
      },
      async onSubmit() {
        this.imgCode = this.getCode();
        if (this.data.password === this.data.dPassword) {
          if (this.code.toLowerCase() !== this.imgCode.toLowerCase()) {
            Dialog({ message: '验证码错误' });
            return;
          }
          const data = { ...this.data };
          delete data.dPassword;
          delete data.code;
          const user = await WeChatUser(data);
          const jwt = user.data;
          if (jwt && jwt.jwt) {
            this.$store.commit('SetToken', jwt.jwt);
            this.$store.commit('SetUser', {
              mobile: jwt.mobile,
              realName: jwt.realName,
            });
            locache.set('token', jwt.jwt);
            locache.set('user', {
              mobile: jwt.mobile,
              realName: jwt.realName,
            });
            this.$router.replace('mine');
          } else {
            Dialog({ message: '登陆失败' });
          }
        } else {
          Dialog({ message: '两次密码输入的不一致' });
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
    background: #fff;

    .header {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 0 .4rem 0;

      .logoImg {
        width: auto;
        height: 1.2rem;
      }

      .title {
        font-family: PingFangSC-Medium;
        font-size: 0.36rem;
        color: #2e4bd4;
        letter-spacing: 0;
        text-align: center;
        margin-top: .2rem;
      }
    }

    .loginForm {
      margin: 0.4rem 0 0.8rem 0;

      .van-field {
        background: #ffffff;
        border: 1px solid #d1d2d8;
        border-radius: 4px;
        width: 6.48rem;
        height: .86rem;
        margin: 0 auto .3rem auto;
      }
    }

    .submitBtn {
      background: #2e4bd4;
      border-radius: 4px;
      width: 6.5rem;
      height: 0.88rem;
      margin: 0 auto 0 auto;
      text-align: center;
      line-height: 0.88rem;
      font-family: PingFangSC-Medium;
      font-size: 0.32rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
    }
  }
</style>
