<template>
  <div class="pageWrapper">
    <header class="header" />
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-field v-model="data.oldPwd" placeholder="密码" />
        <van-field v-model="data.newPwd" placeholder="新密码" />
        <van-field v-model="data.twoPwd" placeholder="再次输入密码" />
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn">确认修改</div>
  </div>
</template>
<script>
  import {
    Button, Dialog
  } from 'vant';
  import {WeChatUserPwd} from "../api/wechat";
  export default {
    name: 'EditPassword',
    components: {
      Button
    },
    data() {
      return {
        data: {
          newPwd: '',
          oldPwd: '',
          twoPwd: ''
        },
        logoImg: require('@/assets/images/logo.png')
      }
    },
    methods: {
      async onSubmit() {
        if (this.data.newPwd === this.data.twoPwd) {
          const data = { ...this.data };
          delete data.twoPwd;
          const { error } = await WeChatUserPwd(data)
          !error && this.$router.replace('mine');
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
      padding: .4rem 0 .4rem 0;
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
