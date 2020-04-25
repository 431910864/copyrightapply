<template>
  <div class="busCoopertion">
    <van-tree-select height="100vh" @click-nav="handelClick(active)" :items="items" :main-active-index.sync="active">
      <template #content>
        <div class="mainInfo">
          <component :is="curComponent"></component>
          <!-- <div class="title">{{dataModule.title}}:</div>
          <div class="content" v-for="(item, key) in dataModule.children" :key="key">
             <div class="subTitle">{{key + 1}}、{{item.subTiltle}}</div>
             <div class="detail">{{item.content}}</div>
          </div> -->
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
  import GovermentApply from '@/views/CooperationItems/GovermentApply'
  import RegisterTrademark from '@/views/CooperationItems/RegisterTrademark'
  import PatentApply from '@/views/CooperationItems/PatentApply'
  import SoftwareTest from '@/views/CooperationItems/SoftwareTest'
  import DICRegister from '@/views/CooperationItems/DICRegister'
  import CopyrightTrade from '@/views/CooperationItems/CopyrightTrade'
  import CopyrightFinance from '@/views/CooperationItems/CopyrightFinance'
  import CopyrightSafeguard from '@/views/CooperationItems/CopyrightSafeguard'
  import DigtalCopyright from '@/views/CooperationItems/DigtalCopyright'
  import RegisterCopyright from '@/views/CooperationItems/RegisterCopyright'

  export default {
    components: {
      GovermentApply,
      RegisterTrademark,
      PatentApply,
      SoftwareTest,
      DICRegister,
      CopyrightTrade,
      CopyrightFinance,
      CopyrightSafeguard,
      DigtalCopyright,
      RegisterCopyright
    },
    data() {
      return {
        active: 0,
        curComponent: 'RegisterCopyright',
        dataModule: {},
        componentObj: {
          0: 'RegisterCopyright',
          1: 'CopyrightSafeguard',
          2: 'CopyrightFinance',
          3: 'CopyrightTrade',
          4: 'DigtalCopyright',
          5: 'DICRegister',
          6: 'SoftwareTest',
          7: 'PatentApply',
          8: 'RegisterTrademark',
          9: 'GovermentApply',
        },
        items: [{
          text: '版权登记'
        }, {
          text: '版权维权'
        }, {
          text: '版权金融'
        }, {
          text: '版权贸易'
        }, {
          text: '数字版权'
        }, {
          text: 'DCI登记'
        }, {
          text: '软件测试'
        }, {
          text: '专利申请'
        }, {
          text: '商标注册'
        }, {
          text: '政府项目申报'
        }],
        dataList: [{
          title: '版权登记介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '版权维权介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '版权金融介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '版权贸易介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '数字版权介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: 'DCI登记介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '软件测试介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '专利申请介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '商标注册介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }, {
          title: '政府项目申报介绍',
          children: [{
            subTiltle: '软件著作权登记',
            content: '主要业务包括计算机软件著作权登记代理、计算机软件登记事项变更或补充登记代理、计算机软件著作权转让或专有许可合同登记代理、软件登记咨询、撤回计算机软件登记代理 、撤销计算机软件登记代理、查询计算机软件登记代理、调档查询计算机软件登记代理、补发或换发软件登记证书代理、计算机软件著作权质权登记代理，以及注销计算机软件著作权质权登记代理等业务。'
          }]
        }]
      }
    },
    methods: {
      handelClick(index) {
        this.curComponent = this.componentObj[index]
      }
    }
  }
</script>

<style lang="less" scoped>
  .busCoopertion {
    .van-sidebar-item {
      font-size: 0.28rem;
    }

    .van-sidebar-item--select {
      color: #2e4bd4;
      border-color: #2e4bd4;
    }

    .mainInfo {
      padding: .3rem 0.2rem .2rem .2rem;
      line-height: .5rem;
      font-size: .26rem;

      .title {
        font-weight: bold;
        margin: 0 0 0.2rem 0;
      }
    }
  }
</style>
