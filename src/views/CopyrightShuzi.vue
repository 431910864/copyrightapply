<template>
  <div class="pageWrapper">
    <copyrightHead :backgroundImage="backgroundImage" iconName="phoneIcon_huang" color="#eba51b" className="copyrightService"></copyrightHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-field v-model="data.busiName" placeholder="选择服务类型" disabled readonly />
        <van-field v-model="data.enterpriseName" placeholder="请输入您的企业名称或姓名" />
        <van-field v-model="data.mobile" placeholder="请输入手机号" />
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn">提交申请</div>

    <div class="advantageSection serviceSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 数字版权 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div style="padding: 0rem 0 .4rem 0;line-height: 21px;font-size: .28rem;">
        <div>DCI（Digital Copyright Identifier，数字版权唯一标识符）体系是中国版权保护中心为解决长期困扰版权产业发展的若干基础性问题，在多年从事国家版权公共服务的经验总结，以及深入研究国内外互联网版权保护的法律、技术和模式等的基础上，自主创新提出的互联网版权公共服务体系。</div>
        <div>DCI体系通过对互联网版权确权、授权和维权等的基础性公共服务支撑，解决版权产业因权属证明和信用缺失而造成的一系列问题，推动版权产业由传统“事后纠纷处理机制”向“事前利益分享机制+版权快速维权机制”转变，与互联网产业协同，打造“共建、共治、共享”的版权服务新生态。
      </div>
      </div>
    </div>

    <div class="advantageSection serviceSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 服务模式 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div style="padding: 0rem 0 .4rem 0;line-height: 21px;font-size: .28rem;">
        <div>电子版权认证证书是适应移动互联网时代要求下出台的版权服务新模式，2017年6月12日国家版权局发布通知（国版函［2017］14号）：电子版登记证书与纸质版登记证书的法律效力完全相同。其具有以下特点：</div>
        <div>（1）由具有《电子认证服务资质》的数字认证机构进行在线实名和企业信息认证，并对PDF格式的电子版权认证证书提供数字签名技术服务，国产密码算法的保护，以防伪造与篡改；</div>
        <div>（2）电子版权认证证书呈现的图文信息与纸质软件著作权登记证书完全一致，具有同等法律效力；</div>
        <div>（3）内嵌APP软件的唯一特征信息（Package_Id），实现权利与软件的关联绑定；</div>
        <div>（4）应用市场上架审核真伪无需去中国版权保护中心官网人工查询，自动化在线实时快速查验。</div>
      </div>
    </div>
    <div style="height: 40px"></div>
<!--    <div class="concatPhone">0755-86952852</div>-->
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
          "busiType": "SZBQ",
          "busiName": "数字版权",
          "enterpriseName": "",
          "financialDemandLimit": "",
          "iprCount": "",
          "mobile": "",
        },
        backgroundImage: require('@/assets/images/shuzipanquan.png'),
        worksImg: require('@/assets/images/works.png'),
        flowImg: require('@/assets/images/flow_2.png'),
        handleImg: require('@/assets/images/handleDate_3.png'),
        styleObj: {
          margin: 0,
          fontFamily:'PingFangSC-Thin',
          fontSize:'0.32rem',
          color:'#eba51b',
          borderColor: '#eba51b',
        },
        busiType: {
          "RJCS":"软件测试",
          "BQJY":"版权交易",
          "DCI_FW":"DCI服务",
          "ZFXMSB":"政府项目申报",
          "ZHUAN_LI":"专利",
          "SHANG_BIAO":"商标",
          "WQJC":"维权监测",
          "SSCZ":"诉讼存证",
        },
        list: [{
          name: '软件测试',
          icon: require('@/assets/images/service_6.png')
        }, {
          name: '版权交易',
          icon: require('@/assets/images/service_7.png')
        }, {
          name: 'DCI服务',
          icon: require('@/assets/images/service_8.png')
        }, {
          name: '政府项目申报',
          icon: require('@/assets/images/service_9.png')
        }, {
          name: '专利',
          icon: require('@/assets/images/service_10.png')
        }, {
          name: '商标',
          icon: require('@/assets/images/service_11.png')
        }, {
          name: '维权监测',
          icon: require('@/assets/images/service_12.png')
        }, {
          name: '诉讼存证',
          icon: require('@/assets/images/service_13.png')
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
    background: #d86b06;
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
        color: #eba51b;
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
      background: #eba51b;
      border-radius: 4px;
      width: 6.9rem;
      height: 0.96rem;
      line-height: 0.96rem;
    }
  }
</style>
