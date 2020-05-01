<template>
  <div class="pageWrapper">
    <copyrightHead :backgroundImage="require('@/assets/images/banner_lv.png')" iconName="phoneIcon_lv" color="#40b97a" className="copyrightRegister"></copyrightHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-field v-model="data.busiName" placeholder="选择服务类型" disabled readonly />
        <van-field v-model="data.enterpriseName" placeholder="请输入您的企业名称或姓名" />
        <van-field v-model="data.mobile" placeholder="请输入手机号" />
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn">提交申请</div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 版权维权 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="softCopyRight" style="text-indent: 20px;line-height: 21px;font-size: .28rem;padding-left: 5px;padding-right: 5px;">
        <div>为保护创新创作，维护著作权人的合法权益，南山版权产业服务中心开通了线上维权咨询平台。版权是知识产权的重要组成部分，是文化产业的核心资源，对推动经济发展和社会进步有着极其重要的作用。南山版权产业服务中心将着力解决著作权人的烦恼，让他们专心创作、放心交易、版权无忧；帮助著作权人大力维权，让“尊重知识、尊重劳动、尊重创作、尊重版权”的理念不断深入人心，打造良好版权生态，推动版权产业的健康繁荣发展。</div>
        <div style="padding-top: 5px;">南山版权产业服务中心是中国版权保护中心指导下的非盈利性公共服务平台，是著作权人快速的维权通道，具有集约化、专业化、网络化、流程化、高效化、公益化六大特点。平台具备三大服务优势：首先是为著作权人提供一站式管家维权服务，避免权利人维权的繁琐流程；其次可以提供低成本维权解决方案，规避权利人的维权投入风险；第三能提供先进的互联网取证和存证服务，解决取证难、存证贵的痛点，最大限度地降低权利人的维权成本。</div>
      </div>
    </div>
    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 版权存证 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="softCopyRight" style="text-indent: 20px;font-size: 12px;line-height: 24px;padding-left: 5px;padding-right: 5px;">
        <div>过区块链不可篡改和可溯源等特性，将作品信息实时保存上链，形成有效的登记存证信息，作为维权的确权电子证据。</div>
      </div>
    </div>
    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 维权监测 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="softCopyRight" style="text-indent: 0px;line-height: 21px;font-size: .28rem;padding-left: 5px;padding-right: 5px;">
        <div>侵权证据取证：通过全网监测，发现侵权行为后通过远程电子公证系统，及时对侵权行为进行采集，同时结合区块链不可篡改的特性，将侵权证据进行上链固定，形成可信的版权侵权证据。</div>
        <div style="margin-top: 20px;">针对权利人提供的版权作品，在权利人指定的平台范围内（可以覆盖全网、全平台）进行7*24小时不间断监测。支持影视、体育、音乐、图文等类型作品监测。</div>
        <div style="margin-top: 20px;">针对互联网海量传播视频、音频、文字、游戏等各种作品类型进行监测，南山版权产业服务中心拥有专业的法律工作人员，根据委托人的授权，向涉嫌侵权的网站发送删除通知函，追踪网站删除侵权链接的情况，确保盗版内容及时、彻底删除。</div>

        <div style="margin-top: 20px;">投诉下架</div>
        <div>针对权利人的作品，向潜在侵权平台发送版权投诉函，平台方在收到投诉函后，就应负起监测、删除、排除的义务。以此预防侵权行为的发生。</div>

        <div style="margin-top: 20px;">中心设立“网络视频音频版权检测及调查取证服务平台”，针对互联网海量传播的视频、音频、文字、游戏等各种作品类型检测。根据委托人的授权，通过技术手段搜索侵权内容，想涉嫌侵权的网站、电商平台发送删除通知函。追踪侵权链接的删除情况，确保盗版内容及时、彻底删除。</div>
        <div>
          <img style="margin-top: 20px;width: 100%;" :src="require('@/assets/images/banquanweiquan2.png')" />
        </div>
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 固证诉讼 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="softCopyRight" style="text-indent: 20px;line-height: 21px;font-size: .28rem;padding-left: 5px;padding-right: 5px;">
        <div>根据权利人的委托，由专业维权人员通过远程电子公证与线下公证相结合等多元化方式，对侵权行为进行及时的证据固定，同时进行下线处理。根据需要申请行政执法或向法院起诉。</div>
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 司法鉴定 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="softCopyRight" style="line-height: 21px;font-size: .28rem;padding-left: 5px;padding-right: 5px;">
        <div style="text-indent: 20px;">中国版权保护中心版权鉴定委员会是我国专门从事版权鉴定的国家级专业机构。根据《人民法院对外委托司法鉴定管理规定》，中国版权保护中心版权鉴定委员会于2003年经最高人民法院审核批准，进入人民法院司法鉴定人名册（登记号：法38001号）。 </div>
        <div>中国版权保护中心的鉴定范围是作品或者制品异同性鉴定，即对文字、音乐、美术、摄影、影视、计算机软件、私服外挂、图形等作品和录音录像制品异同性进行比对并出具鉴定报告。</div>
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 登记流程 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="softCopyRight" style="padding: 0 3px;">
        <img style="margin-top: 0px;width: 100%;" :src="require('@/assets/images/banquanweiquan1.png')" />
      </div>
    </div>

    <div class="concatPhone"></div>
  </div>
</template>

<script>
  import copyrightHead from '@/components/copyrightHead.vue'
  import {WeChatCopyrightFinance} from "../api/wechat";
  import {Dialog} from "vant";
  export default {
    components: {
      copyrightHead
    },
    data() {
      return {
        data: {
          "busiType": "BQWQ",
          "busiName": "版权维权",
          "enterpriseName": "",
          "financialDemandLimit": "",
          "iprCount": "",
          "mobile": "",
        },
        styleObj: {
          margin: 0,
          color: '#40b97a',
          borderColor: '#40b97a',
          fontSize: '.32rem',
          fontFamily: 'PingFangSC-Thin'
        },
        worksImg: require('@/assets/images/works.png'),
        flowImg: require('@/assets/images/flow_1.png'),
        handleImg: require('@/assets/images/handleDate_1.png'),
        show: false,
        busiType: {
          "RJZZQ":"软件著作权",
          "ZPZZQ":"作品著作权",
        },
        softCopyRightList: ['基础登记', '转让登记', '合同登记', '变更登记', '查询', '调档查询', '撤回'],
        advantageList: [{
          title: '项目申报',
          content: '软件著作权在各类项目申报中都有 明确的要求，登记软著之后可以使 项目申报更加快速和方便。'
        }, {
          title: '保护软件',
          content: '软件著作权可以保住软件，当企业或个人侵犯了你的著作权时，你可以通过法律途径维护自身权益。'
        }, {
          title: '入驻应用市场',
          content: '现在软件要进入应用市场，都会有 很详细的规定，软件著作权也是其 中一个必须的要求。'
        }, {
          title: '获得资金',
          content: '软件著作权是可以获得国家或政策 补助的，并且软件著作权一旦登记 成功后，还可能够转让等方式拓宽 自己的资金渠道。'
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
    background: #108641;
    line-height: .4rem;
    .concatPhone {
      font-family: PingFangSC-Semibold;
      font-size: 0.56rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      padding: .4rem 0;
    }

    ;

    .advantageSection {
      background: #fff;
      width: 6.9rem;
      padding: .3rem .3rem;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0.2rem auto 0rem auto;

      .worksItem {
        text-align: center;

        .worksImg {
          width: auto;
          height: 5rem;
        }
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
          color: #40b97a;
        }

        ;

        .content {
          margin: .1rem 0 .5rem 0;
        }

        .fcircle {
          background: #ffffff;
          border: 2px solid #40b97a;
          width: 24px;
          height: 24px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin: -0.06rem .2rem 0 0;
        }

        .scircle {
          background: #ffffff;
          border: 2px solid #40b97a;
          width: 18px;
          height: 18px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Helvetica-Condensed-Black-Se;
          font-size: 0.3rem;
          color: #40b97a;
          font-weight: bold;
        }
      }

      ;

      .decorate {
        text-align: center;
        color: #40b97a;
        font-size: .32rem;
      }

      ;
    }

    ;

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
      background: #40b97a;
      border-radius: 4px;
      width: 6.9rem;
      height: 0.96rem;
      line-height: 0.96rem;
    }
  }
</style>
