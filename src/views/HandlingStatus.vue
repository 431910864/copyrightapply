<template>
  <div class="pageWrapper">
    <van-steps class="handlingStatusVanSteps" active-color="#2e4bd4" active-icon="passed" inactive-icon="passed" direction="vertical" :active="0">
      <van-step v-for="(item, index) in arrData" :key="index">
        <div class="fz_16">受理登记</div>
        <div class="flex fz_12 mt_8 c_000000">
          <div class="flex flex_10">
            <div class="mr_5">2020.03.09  09:30</div>
            <div>收费记录单</div>
          </div>
          <div>办理完毕</div>
        </div>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
  export default {
    name: "HandlingStatus",
    data() {
      return {
        arrData: [{}, {}, {}]
      }
    }
  }
</script>
<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
    background: #f4f4f4;
    .flex {
      display: flex;
      display: -webkit-flex;
      align-items: center;
    }
    .flex_10 {
      flex: 1;
    }
    .c_000000 {
      color: #000000;
    }
    .fz_12 {
      font-size: .24rem;
    }
    .fz_16 {
      font-size: .32rem;
    }
    .mt_10 {
      margin-top: .2rem;
    }
    .mt_8 {
      margin-top: .16rem;
    }
    .mr_5 {
      margin-right: .1rem;
    }
    .mr_10 {
      margin-right: .2rem;
    }
  }
</style>

<style lang="less">
  .handlingStatusVanSteps .van-icon-passed:before {
    font-size: .4rem;
  }
</style>
