<template>
  <div class="headWrapper">
    <div class="header" :style="{backgroundImage: 'url(' + `${backgroundImage}` + ')' }">
      <!-- <div class="subTitle">南·山·版·权·产·业·服·务·中·心</div>
      <div class="mainTitle">品质保障 一站式服务</div>
      <div class="desc">
        <div class="text">想你所想 提供个性化服务</div>
        <div class=""><img :src="borderImg" class="borderImg" /></div>
      </div> -->
    </div>

    <div class="searchWrapper">
      <div style="width: 4.4rem; margin: 0 auto;">
        <van-divider slot :style="{margin: 0, color: color, borderColor: color, fontSize: '.24rem', fontFamily:'PingFangSC-Thin'}">
          · 登记前 先查询 提高成功率 ·
        </van-divider>
      </div>
      <van-search placeholder="请输入需要登记的版权信息" :class="className" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      backgroundcolor: {
        type: String,
        default: '#E53406'
      },
      color: {
        type: String,
        default: '#ffbd3f'
      },
      className: {
        type: String,
        default: 'finance'
      },
      backgroundImage: {
        type: String,
        default: require('@/assets/images/register.png')
      }
    },
    data() {
      return {
        borderImg: require('@/assets/images/border.png'),
      }
    },
    methods: {

    }
  }
</script>

<style scoped="scoped" lang="less">
  .headWrapper {
    text-align: center;
    padding: 0rem 0 0.6rem 0;

    .header {
      background: url('~@/assets/images/register.png') no-repeat center center;
      background-size: cover;
      padding: 2rem 0 2rem 0;
    }

    ;

    .mainTitle {
      font-family: FZLTDHK--GBK1-0;
      font-size: 0.56rem;
      color: #ffffff;
      letter-spacing: 0;
      margin: 0.1rem 0;
    }

    .subTitle {
      font-family: PingFangSC-Regular;
      font-size: 0.2rem;
      color: #ffffff;
      letter-spacing: 0;
    }

    .desc {
      font-family: PingFangSC-Regular;
      font-size: 0.3rem;
      color: #fc7c21;
      letter-spacing: 0;
      width: 3.8rem;
      margin: 0 auto;
      background: #fff;
      position: relative;

      .text {
        position: relative;
        z-index: 10;
      }

      .borderImg {
        width: 4.2rem;
        position: absolute;
        top: .2rem;
        left: -.2rem;
        z-index: 9;
      }
    }

    .searchWrapper {
      padding: .4rem .4rem;
      background: #fff;
      border-radius: 4px;
      width: 6.9rem;
      margin: -0.8rem auto 0.2rem .4rem;
      box-sizing: border-box;

      .van-search__content {
        background: #ffffff;
        border: 1px solid #fc7c21;
        border-radius: 4px;
        width: 6.06rem;
        height: 0.68rem;
      }

      .copyrightFinance {
        .van-search__content {
          border: 1px solid #2e4bd4;
          ;
        }
      }

      .copyrightRegister {
        .van-search__content {
          border: 1px solid #fc7c21;
        }
      }

      .copyrightService {
        .van-search__content {
          border: 1px solid #9350e5;
        }
      }

    }
  }
</style>
