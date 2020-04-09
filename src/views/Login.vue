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
<!--        <van-field v-model="data.userName" placeholder="姓名" />-->
        <van-field v-model="data.username" placeholder="用户名" />
        <van-field type="password" v-model="data.password" placeholder="密码" />
        <div style="display: flex;flex-direction: row;height: 0.86rem;margin: 0 auto 0.3rem auto;width: 6.48rem;">
          <van-field maxlength="4" style="margin-bottom: 0;flex: 1;border-radius: 4px 0 0 4px;border-right: 0;" v-model="code" placeholder="验证码" />
          <vue-img-verify style="border-radius: 0 4px 4px 0;overflow: hidden;" @getImgCode="getImgCode" ref="vueImgVerify" />
        </div>
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn">登录</div>
    <div @click="$router.push('register')" style="text-align: center;padding: 20px;">没有账号？<span style="color: #2e4bd4;">去注册</span></div>
    <div style="height: 100px;"></div>
  </div>
</template>
<script>
  import {
    Button, Dialog
  } from 'vant';
  import { WeChatToken } from "../api/wechat";
  import VueImgVerify from '../components/vueImgVerify'

  export default {
    name: 'HelloWorld',
    components: {
      Button,
      VueImgVerify,
    },
    data() {
      return {
        code: '',
        imgCode: '',
        data: {
          password: '',
          username: '',
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
        if (this.data.password && this.data.username) {
          if (this.code.toLowerCase() !== this.imgCode.toLowerCase()) {
            Dialog({ message: '验证码错误' });
            return;
          }
          const data = { ...this.data };
          const user = await WeChatToken(data);
          const jwt = user.data;
          if (jwt && jwt.jwt) {
            this.$store.commit('SetToken', jwt.jwt);
            locache.set('token', jwt.jwt);
            this.$router.replace('mine');
          } else {
            Dialog({ message: '登陆失败' });
          }
        } else {
          Dialog({ message: '请输入用户名密码' });
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
