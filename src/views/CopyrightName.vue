<template>
  <div class="pageWrapper">
    <van-cell-group class="cellGroupMarginBottom">
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="流水号" :value="CopyrightName.serialNumber" />
    </van-cell-group>
    <van-cell-group class="cellGroupMarginBottom">
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="名称" :value="CopyrightName.copyrightName" />
<!--      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="版权类型" :value="Type" />-->
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="著作权人" :value="CopyrightName.copyrightOwner" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="渠道" :value="CopyrightName.busiChl" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="加急" :value="urgentType" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="加急天数" :value="CopyrightName.urgentDays" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="交件日期" :value="CopyrightName.deliveryDate" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="起算日期" :value="CopyrightName.issueDate" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="预计出证日" :value="CopyrightName.planIssueDate" />
    </van-cell-group>
    <van-cell-group>
      <van-cell :title-class="cellTitleStyle" value-class="cellValueStyle1" title="状态" :value="GetStatus(CopyrightName.status)" />
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: "CopyrightName",
    data() {
        return {
          cellTitleStyle: 'cellTitleStyle',
          cellValueStyle: 'cellValueStyle',
          CopyrightName: {},
        }
    },
    computed: {
      Type() {
        const { status }  = this.CopyrightName;
        return this.$store.getters.BType[status] || status;
      },
      urgentType() {
        const { urgentType }  = this.CopyrightName;
        const Type = { 'YES': '是', 'NO': '否' }
        return  Type[urgentType];
      }
    },
    mounted() {
      const CopyrightName = locache.get('CopyrightName');
      if (CopyrightName) {
        this.CopyrightName = CopyrightName;
        document.title = CopyrightName.copyrightName;
      }
    },
    methods: {
      GetStatus(item) {
        const Status = this.$store.state.Status;
        return Status[item];
      },
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
    background: #f4f4f4;
    .cellGroupMarginBottom {
      margin-bottom: .2rem;
    }
    .cellTitleStyle {
      color: #151515;
      font-size: .28rem;
    }
    .cellValueStyle {
      color: #151515;
      font-size: .28rem;
    }
    .cellValueStyle1 {
      color: #2e4bd4;
      font-size: .28rem;
    }
  }
</style>
