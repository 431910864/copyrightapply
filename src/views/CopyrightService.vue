<template>
  <div class="pageWrapper">
    <copyrightHead :backgroundImage="backgroundImage" iconName="phoneIcon1" color="#5418cf" className="copyrightService"></copyrightHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-field v-model="data.busiName" placeholder="选择服务类型" right-icon="play" readonly="" @click="handelEvent" />
        <van-field v-model="data.enterpriseName" placeholder="请输入您的企业名称或姓名" />
        <van-field v-model="data.mobile" placeholder="请输入手机号" />
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn">提交申请</div>

    <div class="advantageSection serviceSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 服务内容 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div style="padding: 0rem 0 .4rem 0;">
        <van-grid :gutter="10" :column-num="3" :border="showBorder">
          <van-grid-item
            v-for="(item, key) in list"
            :key="key"
            :icon="item.icon"
            :text="item.name"
          />
        </van-grid>
      </div>
    </div>

    <coreAdvantage :data="advantageList" color="#9350e5"></coreAdvantage>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 登记流程 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="flowItem">
        <img :src="flowImg" class="flowImg" />
      </div>
    </div>

    <div class="concatPhone"></div>
  </div>
</template>

<script>
  import copyrightHead from '@/components/copyrightHead.vue'
  import coreAdvantage from '@/components/coreAdvantage.vue'
  import {WeChatCopyrightFinance} from "../api/wechat";
  import {Dialog} from "vant";
  export default {
    components: {
      copyrightHead,
      coreAdvantage
    },
    data() {
      return {
        show: false,
        showBorder: false,
        data: {
          "busiType": "",
          "enterpriseName": "",
          "financialDemandLimit": "",
          "iprCount": "",
          "mobile": "",
        },
        backgroundImage: require('@/assets/images/copyrightservice.png'),
        worksImg: require('@/assets/images/works.png'),
        flowImg: require('@/assets/images/flow_2.png'),
        handleImg: require('@/assets/images/handleDate_3.png'),
        styleObj: {
          margin: 0,
          fontFamily:'PingFangSC-Thin',
          fontSize:'0.32rem',
          color:'#9350e5',
          borderColor: '#9350e5',
        },
        busiType: {
          "RJCS":"软件测试",
          // "BQJY":"版权交易",
          "DCI_FW":"DCI服务",
          "ZFXMSB":"政府项目申报",
          "ZHUAN_LI":"专利",
          "SHANG_BIAO":"商标",
          // "WQJC":"维权监测",
          // "SSCZ":"诉讼存证",
        },
        list: [{
          name: '软件测试',
          icon: require('@/assets/images/service_6.png')
        }, {
          name: '政府项目申报',
          icon: require('@/assets/images/service_9.png')
        }, {
          name: '专利',
          icon: require('@/assets/images/service_10.png')
        }, {
          name: '商标',
          icon: require('@/assets/images/service_11.png')
        }],
        advantageList: [{
          title: '技术变现',
          content: '通过专利技术转让、授权、入股、质押贷款等方法，赚更多的钱。'
        }, {
          title: '技术保护',
          content: '专利权人具有独占使用、收益、处分其发明创造的权利。'
        }, {
          title: '高新认定',
          content: '享受税收减免优惠政策。'
        }, {
          title: '申请减缴',
          content: '个人、企业、事业单位，满足条件均可申请减缴'
        }, {
          title: '项目扶持',
          content: '可申请贴息或免息贷款可申请政府企业扶持资金。'
        }]
      }
    },
    computed: {
      actions() {
        let data = [];
        for (const i in this.busiType) {
          data.push({
            type: i,
            name: this.busiType[i]
          })
        }
        return data;
      }
    },
    methods: {
      handelEvent() {
        this.show = true;
      },
      onSelect(item) {
        this.show = false;
        this.data.busiType = item.type;
        this.data.busiName = item.name;
      },
      async onSubmit() {
        const datas = {...this.data};
        const { data } = await WeChatCopyrightFinance(datas) || {};
        if (data) {
          Dialog({ message: '申请成功' });
        } else {
          Dialog({ message: '申请失败' });
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
    background: #5418CD;
    line-height: .4rem;
    .concatPhone {
      font-family: PingFangSC-Semibold;
      font-size: 0.56rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      padding: .4rem 0;
    }

    .advantageSection {
      background: #fff;
      width: 6.9rem;
      padding: .3rem .3rem;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0.2rem auto 0rem auto;

      .decorate {
        text-align: center;
        color: #9350e5;
        font-size: .32rem;
      }

      .flowItem {
        text-align: center;

        .flowImg {
          width: 100%;
          height: auto;
        }
      }

      .handleItem {
        text-align: center;

        .handleImg {
          width: 100%;
          height: auto;
        }
      }

      .advantageItem {
        display: flex;

        .title {
          font-family: PingFangSC-Thin;
          font-size: 0.28rem;
          color: #fc7c21;
        }

        .content {
          margin: .1rem 0 .5rem 0;
        }
      }
    }

    .loginForm {

      .van-field {
        background: #ffffff;
        border: 1px solid #d1d2d8;
        border-radius: 4px;
        width: 6.9rem;
        height: .86rem;
        margin: 0 auto .3rem auto;
      }
    }

    .submitBtn {
      margin: .6rem auto 0.8rem auto;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 0.36rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      background: #9350e5;
      border-radius: 4px;
      width: 6.9rem;
      height: 0.96rem;
      line-height: 0.96rem;
    }
  }
</style>
