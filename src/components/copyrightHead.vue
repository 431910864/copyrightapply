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

    <div @click="toPhone" class="searchWrapper" style="display: flex;align-items: center;justify-content: center;background:#ffffff;box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);border-radius:4px;min-height:96px;">
      <div style="font-size:28px;letter-spacing:0;text-align:center;display: flex;align-items: center;justify-content: center;">
        <div><img style="width:28px;height:28px;" :src="getIcon" /></div>
        <div style="padding-left: 10px;height:32px;display: flex;align-items: center;line-height: 32px;padding-top: 4px;" :style="{color: color}">{{phone}}</div>
      </div>
<!--      <div style="width: 4.4rem; margin: 0 auto;">-->
<!--        <van-divider slot :style="{margin: 0, color: color, borderColor: color, fontSize: '.24rem', fontFamily:'PingFangSC-Thin'}">-->
<!--          · 登记前 先查询 提高成功率 ·-->
<!--        </van-divider>-->
<!--      </div>-->
<!--      <van-search v-model:value="value" @search="onInput" placeholder="请输入需要登记的版权信息" :class="className" />-->
    </div>
  </div>
</template>

<script>
  import { WeChatCopyrightFinanceExist} from "../api/wechat";
  import { Dialog } from 'vant';

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
      },
      iconName: {
        type: String,
        default: 'phoneIcon0',
      }
    },
    data() {
      return {
        borderImg: require('@/assets/images/border.png'),
        iconList: {
          phoneIcon0: require('@/assets/images/phone_icon0.png'),
          phoneIcon1: require('@/assets/images/phone_icon1.png'),
          phoneIcon2: require('@/assets/images/phone_icon2.png'),
          phoneIcon3: require('@/assets/images/phone_icon3.png'),
          phoneIcon4: require('@/assets/images/phone_icon4.png'),
          phoneIcon_lv: require('@/assets/images/phoneIcon_lv.png'),
          phoneIcon_cheng: require('@/assets/images/phoneIcon_cheng.png'),
          phoneIcon_qing: require('@/assets/images/phoneIcon_qing.png'),
          phoneIcon_huang: require('@/assets/images/phoneIcon_huang.png'),
          phoneIcon_lan: require('@/assets/images/phoneIcon_lan.png'),
          phoneIcon_zi: require('@/assets/images/phoneIcon_zi.png'),
        },
        value: '',
        phone: '0755-86952852',
      }
    },
    computed: {
      getIcon() {
        return this.iconList[this.iconName];
      }
    },
    methods: {
      toPhone() {
        window.location.href = (`tel:${this.phone}`);
      },
      async onInput(e) {
        const { message, error, ...rest } = await WeChatCopyrightFinanceExist(this.value);
        const msg = message ? (message + ' error: ' + error) : rest && rest.msg || '';
        Dialog({ message: msg });
      }
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
