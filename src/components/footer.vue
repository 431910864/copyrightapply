<template>
  <div class="pageWrapper" v-if="show">
    <div class="concatInfo" v-if="display">
      0755-86952852<br />
      深圳市南山区粤海街道深圳湾科技生态园<br />
      7栋B座三层南山知识产权保护中心A1窗口<br />
      邮箱：2689183185@qq.com
    </div>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/service" icon="apps-o">服务</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import {
    Button
  } from 'vant';
  export default {
    name: 'Footer',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      display: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Button
    }
  }
</script>

<style scoped lang="less">
  .concatInfo {
    font-family: PingFangSC-Regular;
    font-size: .2rem;
    color: #576b95;
    letter-spacing: 0;
    text-align: center;
    line-height: .4rem;
    padding: .3rem 0 70px 0;
  }
</style>
