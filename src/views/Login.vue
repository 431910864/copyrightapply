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
        <van-field v-model="data.userName" placeholder="姓名" />
        <van-field v-model="data.userPhone" placeholder="手机号" />
        <van-field v-model="data.password" placeholder="密码" />
        <van-field v-model="data.code" placeholder="验证码" />
      </van-form>
    </div>
    <div class="submitBtn">登录</div>
  </div>
</template>
<script>
  import {
    Button
  } from 'vant';
  export default {
    name: 'HelloWorld',
    components: {
      Button
    },
    data() {
      return {
        data: {

        },
        logoImg: require('@/assets/images/logo.png')
      }
    },
    methods: {
      handleClick(item, key) {
        this.$router.push('/indexList')
      },
      onSubmit() {

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
