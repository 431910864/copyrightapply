<template>
  <div class="pageComponent">
    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .4rem auto;">
        <van-divider slot :style="{margin: 0, color: color, borderColor: color, fontSize: '.32rem', fontFamily:'PingFangSC-Thin'}">
          ··· 核心优势 ···
        </van-divider>
        <div class="decorate" :style="{color: color}">==</div>
      </div>
      <div class="advantageItem" v-for="(item, key) in data" :key="key">
        <div class="fcircle" :style="{borderColor: color}">
          <div class="scircle" :style="{borderColor: color, color: color}">{{key + 1}}</div>
        </div>
        <div class="">
          <div class="title" :style="{color: color}"> // {{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
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

    .decorate {
      text-align: center;
      color: #fc7c21;
      font-size: .32rem;
    }

  }
</style>
