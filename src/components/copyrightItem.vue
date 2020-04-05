<template>
  <div class="pageWrapper">
    <copyrightItemHead :itemImage="dataModule.itemImage"></copyrightItemHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect"/>
        <van-action-sheet v-model="show_1" :actions="actions_1" @select="onChoose"/>
        <van-action-sheet v-model="show_2" :actions="actions_2" @select="onOption"/>
<!--        <van-action-sheet v-model="show" :actions="dataModule.actions" @select="onSelect" />-->
        <van-field v-model="data.busiName" placeholder="选择服务类型" right-icon="play" readonly="" @click="handelEvent('kinds')" />
        <van-field v-model="data.enterpriseName" placeholder="请输入您的企业名称或姓名" />
        <div v-if="dataModule.type === 'finance'">
          <van-field v-model="data.iprCount" placeholder="请选择知识产权拥有数量" right-icon="play" readonly="" @click="handelEvent('num')" />
          <van-field v-model="data.financialDemandLimit" placeholder="请选择金融需求额度" right-icon="play" readonly="" @click="handelEvent('limit')" />
        </div>
        <van-field v-model="data.mobile" placeholder="请输入手机号" />
      </van-form>
    </div>
    <div @click="onSubmit" class="submitBtn" :style="{background: dataModule.color}">提交申请</div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 材料准备 ···
        </van-divider>
        <div class="decorate" :style="{color: dataModule.color}">==</div>
      </div>
      <div class="materials">
        <div class="" v-for="(item, key) in dataModule.list" :key="key">{{item}}</div>
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 登记流程 ···
        </van-divider>
        <div class="decorate" :style="{color: dataModule.color}">==</div>
      </div>
      <div class="flowItem">
        <img :src="dataModule.flowIcon" class="flowImg" />
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 办理时限 ···
        </van-divider>
        <div class="decorate" :style="{color: dataModule.color}">==</div>
      </div>
      <div class="handleItem">
        <img :src="dataModule.handleDateIcon" class="handleImg" />
      </div>
    </div>

  </div>
</template>

<script>
  import copyrightItemHead from '@/components/copyrightItemHead.vue'
  import {WeChatCopyrightFinance} from "../api/wechat";
  import {Dialog} from "vant";
  export default {
    props: {
      dataModule: {
        type: Object,
        default: {}
      },
      selectBusiType: {
        type: Object,
        default: {},
      }
    },
    components: {
      copyrightItemHead
    },
    data() {
      return {
        actions_1: [{
          name: '10以下'
        }, {
          name: '10-30'
        }, {
          name: '30-50'
        }, {
          name: '50以上'
        }],
        actions_2: [{
          name: '200万以下'
        }, {
          name: '200-500万'
        }, {
          name: '500-2000万'
        }, {
          name: '2000万以上'
        }],
        styleObj: {
          margin: 0,
          color: '',
          borderColor: '',
          fontSize: '.32rem',
          fontFamily: 'PingFangSC-Thin'
        },
        show: false,
        show_1: false,
        show_2: false,

        data: {
          "busiType": "",
          "enterpriseName": "",
          "financialDemandLimit": "",
          "iprCount": "",
          "mobile": "",
        },
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.styleObj.color = this.dataModule.color
        this.styleObj.borderColor = this.dataModule.color
        this.data.busiType = this.selectBusiType.busiType;
        this.data.busiName = this.selectBusiType.busiName;
      })
    },
    computed: {
      actions() {
        if (!this.dataModule || !this.dataModule.busiType) return [];
        let data = [];
        for (const i in this.dataModule.busiType) {
          data.push({
            type: i,
            name: this.dataModule.busiType[i]
          })
        }
        return data;
      }
    },
    methods: {
      handelEvent(type) {
        switch (type) {
          case 'kinds':
            this.show = true;
            break;
          case 'num':
            this.show_1 = true;
            break;
          case 'limit':
            this.show_2 = true;
            break;
          default:
            break
        }
      },
      onSelect(item) {
        this.show = false;
        this.data.busiType = item.type;
        this.data.busiName = item.name;
      },
      onChoose(item) {
        this.show_1 = false;
        this.data.iprCount = item.name;
      },
      onOption(item) {
        this.show_2 = false;
        this.data.financialDemandLimit = item.name;
      },
      async onSubmit() {
        const datas = {...this.data};
        const { data } = await WeChatCopyrightFinance(datas) || {};
        console.info(data);
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
    padding-bottom: .6rem;
    line-height: .4rem;
    .advantageSection {
      background: #fff;
      width: 6.9rem;
      padding: .3rem .3rem;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0.2rem auto 0rem auto;

      .worksItem {
        text-align: center;
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

      .decorate {
        text-align: center;
        color: #fc7c21;
        font-size: .32rem;
      }
    }

    .loginForm {
      .van-field {
        background: #ffffff;
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
