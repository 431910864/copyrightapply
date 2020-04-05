<template>
  <div class="pageWrapper">
    <van-cell-group class="cellGroupMarginBottom">
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="流水号" value="内容" />
    </van-cell-group>
    <van-cell-group class="cellGroupMarginBottom">
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="名称" value="内容" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="版权类型" value="内容" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="著作权人" value="内容" />
      <van-cell :title-class="cellTitleStyle" :value-class="cellValueStyle" title="交件日期" value="内容" />
    </van-cell-group>
    <van-cell-group>
      <van-cell :title-class="cellTitleStyle" value-class="cellValueStyle1" title="状态" value="内容" is-link />
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
          }
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
