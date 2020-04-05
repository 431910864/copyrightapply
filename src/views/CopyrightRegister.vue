<template>
  <div class="pageWrapper">
    <copyrightHead className="copyrightRegister"></copyrightHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-field v-model="data.busiName" placeholder="选择服务类型" right-icon="play" readonly="" @click="handelEvent" />
        <van-field v-model="data.enterpriseName" placeholder="请输入您的企业名称或姓名" />
        <van-field v-model="data.mobile" placeholder="请输入手机号" />
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn">提交申请</div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 软件著作权 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="softCopyRight">
        <van-grid :gutter="10">
          <van-grid-item v-for="(item, key) in softCopyRightList" :key="key" :text="item" />
        </van-grid>
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 作品著作权 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="worksItem">
        <img :src="worksImg" class="worksImg" />
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 核心优势 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="advantageItem" v-for="(item, key) in advantageList" :key="key">
        <div class="fcircle">
          <div class="scircle">{{key + 1}}</div>
        </div>
        <div class="">
          <div class="title"> // {{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 登记流程 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="flowItem">
        <img :src="flowImg" class="flowImg" />
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto;">
        <van-divider slot :style="styleObj">
          ··· 办理时限 ···
        </van-divider>
        <div class="decorate">==</div>
      </div>
      <div class="handleItem">
        <img :src="handleImg" class="handleImg" />
      </div>
    </div>

    <div class="concatPhone">0755-86952852</div>
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
          "busiType": "",
          "enterpriseName": "",
          "financialDemandLimit": "",
          "iprCount": "",
          "mobile": "",
        },
        styleObj: {
          margin: 0,
          color: '#fc7c21',
          borderColor: '#fc7c21',
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
    background: #E53406;
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
          color: #fc7c21;
        }

        ;

        .content {
          margin: .1rem 0 .5rem 0;
        }

        .fcircle {
          background: #ffffff;
          border: 2px solid #fc7c21;
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
          border: 2px solid #fc7c21;
          width: 18px;
          height: 18px;
          border-radius: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Helvetica-Condensed-Black-Se;
          font-size: 0.3rem;
          color: #fc7c21;
          font-weight: bold;
        }
      }

      ;

      .decorate {
        text-align: center;
        color: #fc7c21;
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
      background: #fc7c21;
      border-radius: 4px;
      width: 6.9rem;
      height: 0.96rem;
      line-height: 0.96rem;
    }
  }
</style>
