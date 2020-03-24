<template>
  <div class="pageWrapper">
    <copyrightHead :backgroundImage="backgroundImage" color="#576b95" className="copyrightFinance"></copyrightHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <van-action-sheet v-model="show_1" :actions="actions_1" @select="onChoose" />
        <van-action-sheet v-model="show_2" :actions="actions_2" @select="onOption" />
        <van-field v-model="data.type" placeholder="选择服务类型" right-icon="play" readonly="" @click="handelEvent('kinds')" />
        <van-field v-model="data.userPhone" placeholder="请输入您的企业名称" />
        <van-field v-model="data.count" placeholder="请选择知识产权拥有数量" right-icon="play" readonly="" @click="handelEvent('num')" />
        <van-field v-model="data.limit" placeholder="请选择金融需求额度" right-icon="play" readonly="" @click="handelEvent('limit')" />
        <van-field v-model="data.password" placeholder="请输入手机号" />
      </van-form>
    </div>
    <div class="submitBtn">提交申请</div>
    <financeItem title='质押贷款' :data="list1" color="#2e4bd4"></financeItem>
    <financeItem title='质权登记' :data="list2" color="#2e4bd4"></financeItem>
    <financeItem title='撤销质权' :data="list3" color="#2e4bd4"></financeItem>
    <coreAdvantage :data="advantageList" color="#2e4bd4"></coreAdvantage>

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

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
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
  import coreAdvantage from '@/components/coreAdvantage.vue'
  import financeItem from '@/components/financeItem.vue'
  export default {
    components: {
      copyrightHead,
      coreAdvantage,
      financeItem
    },
    data() {
      return {
        show: false,
        show_1: false,
        show_2: false,
        data: {

        },
        backgroundImage: require('@/assets/images/finance.png'),
        worksImg: require('@/assets/images/works.png'),
        flowImg: require('@/assets/images/flow.png'),
        handleImg: require('@/assets/images/handleDate_2.png'),
        styleObj: {
          margin: 0,
          color: '#2e4bd4',
          borderColor: '#2e4bd4',
          fontSize: '.32rem',
          fontFamily: 'PingFangSC-Thin'
        },
        actions: [{
          name: '质押贷款'
        }, {
          name: '质权登记'
        }, {
          name: '撤销质权'
        }],
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
        softCopyRightList: ['基础登记', '转让登记', '合同登记', '变更登记', '查询', '调档查询', '撤回'],
        list1: [{
          title: '质押贷款',
          content: '是能够为资质优良的文化企业增加版权质押融资新渠道；二是针对文化企业轻资产特点，促进银行提高版权质押融资比例，并适当降低利率；三是通过深度整合，将贷款周期由四个月缩短至两个月；四是将综合融资成本由8%-10%降低为6%。'
        }, {
          title: '质押贷款',
          content: '产品原理通过与金融机构深度合作，对著作权相关质押流程中企业资信审查、尽职调查及著作权标的物的权利证明、质权查询、质押登记等工作流程深度整合(改多机构串联逐个参与的工作流程为多机构并行审批)，大为缩短金融机构审批完成后的版权质押放款时间；与此同时，通过平台的整合议价能力，增大版权资产融资抵押比例和折现率，降低银行、评估、担保各方费率。'
        }],
        list2: [{
          title: '质权登记',
          content: '是能够为资质优良的文化企业增加版权质押融资新渠道；二是针对文化企业轻资产特点，促进银行提高版权质押融资比例，并适当降低利率；三是通过深度整合，将贷款周期由四个月缩短至两个月；四是将综合融资成本由8%-10%降低为6%。'
        }],
        list3: [{
          title: '撤销质权',
          content: '产品原理通过与金融机构深度合作，对著作权相关质押流程中企业资信审查、尽职调查及著作权标的物的权利证明、质权查询、质押登记等工作流程深度整合(改多机构串联逐个参与的工作流程为多机构并行审批)，大为缩短金融机构审批完成后的版权质押放款时间；与此同时，通过平台的整合议价能力，增大版权资产融资抵押比例和折现率，降低银行、评估、担保各方费率。'
        }],
        advantageList: [{
          title: '极速批',
          content: '放贷金融机构在流程和审查标准层面深度对接，在匹配资方、融资方案制定、放款程序办理中进行三段式加速，理想情况下二个月内完成贷款发放。'
        }, {
          title: '低成本',
          content: '所需要的著作权登记以及质押登记手续直接和登记机构进行业务对接，通过平台与金融机构、评估担保机构议价，去除中间冗余环节，节省因为信息不对称浪费的代理费用和业务时间。'
        }, {
          title: '增入口',
          content: '一方面，依托著作权登记人群为金融机构增加有价值客户入口；另一方面，为文化企业提供全新的间接融资渠道，并最大程度免除贷款人四处奔波之忧。'
        }, {
          title: '多增值',
          content: '业务成功后可为融资企业提供持续的版权融资顾问服务，在国家级版权登记机构建立版权融资信用档案，为金融机构提供企业著作权相关贷款增信记录及权威数据支持。'
        }]
      }
    },
    methods: {
      handelEvent(type) {
        switch (type) {
          case 'kinds':
            this.show = true;
            break
          case 'num':
            this.show_1 = true;
            break
          case 'limit':
            this.show_2 = true;
            break
          default:
            break
        }
      },
      onSelect(item) {
        this.show = false;
        this.data.type = item.name;
      },
      onChoose(item) {
        this.show_1 = false;
        this.data.count = item.name;
      },
      onOption(item) {
        this.show_2 = false;
        this.data.limit = item.name;
      },
      onSubmit() {

      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
    background: #0049D2;
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
        color: #2e4bd4;
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
      background: #007FE7;
      border-radius: 4px;
      width: 6.9rem;
      height: 0.96rem;
      line-height: 0.96rem;
    }
  }
</style>
