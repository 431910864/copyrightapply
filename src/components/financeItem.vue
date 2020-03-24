<template>
  <div class="pageComponent">
    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .2rem auto;">
        <van-divider slot :style="{margin: 0, color: color, borderColor: color, fontSize: '.32rem', fontFamily:'PingFangSC-Thin'}">
          ··· {{title}} ···
        </van-divider>
        <div class="decorate" :style="{color: color}">==</div>
      </div>
      <div class="advantageItem" v-for="(item, key) in data" :key="key">
        <div class="">
          <div class="content"><span class="title" :style="{color: color}">{{item.title}}</span> --  {{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '质押贷款'
      },
      data: {
        type: Array,
        default: []
      },
      color: {
        type: String,
        default: 'fc7c21'
      }
    }
  }
</script>

<style scoped lang="less">
  .advantageSection {
    background: #fff;
    width: 6.9rem;
    padding: .3rem .3rem;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0.2rem auto 0rem auto;
    line-height: .4rem;
    .advantageItem {
      display: flex;

      .title {
        font-family: PingFangSC-Thin;
        font-size: 0.28rem;
        color: #fc7c21;
      };

      .content {
        margin: .1rem 0 0rem 0;
      }
    }
    .decorate {
      text-align: center;
      color: #fc7c21;
      font-size: .32rem;
    }

  }
</style>
