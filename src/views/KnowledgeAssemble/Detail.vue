<template>
  <div class="pageWrapper">
    <header class="header">
      <div class="title">{{detail.title}}</div>
      <div class="tip">
        <span class="merchant">{{detail.describe}}</span>
        <span class="date">{{detail.date}}</span>
      </div>
    </header>
    <div class="contentList" v-html="detail.content"></div>
<!--    <div class="contentList" v-for="(item, key) in list" :key="key">-->
<!--      <div class="subTitle">{{item.subtitle}}</div>-->
<!--      <div class="content">{{item.content}}</div>-->
<!--      <div class="newsImg"><img :src="item.img" class="" /></div>-->
<!--      <div class="hotTip">-->
<!--        <div class="reads">阅读 {{item.read}}</div>-->
<!--        <div class="reading">在看{{item.reading}}</div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
  import { WeChatCentralInfoGetID } from "../../api/wechat";

  export default {
    data() {
      return {
        detail: {},
        title: '如何有效防范商标被撤三的风险',
        date: '昨天',
        list: [{
          title: '如何有效防范商标被撤三的风险',
          subtitle: '商标被提撤三！怎么办？',
          img: require('@/assets/images/news.png'),
          date: '2020-03-11',
          read: 462,
          reading: 100,
          content: '通常注册完拿到商标注册证对于商标申请人来说都可以松口气了，但是事实并非如此，注册过的商标如果使用不当的，也会存在一定的风险，尤其随着商标注册越来越便利化，国民品牌意识的觉醒，商标注册量与日俱增，商标一标难求，注册商标被他人以连续三年不使用为由申请撤销的案件越来越多。'
        }]
      }
    },
    mounted() {
      this.GetDetail();
    },
    methods: {
      async GetDetail() {
        const id = this.$route.query.id;
        const locacheGetName = this.$route.query.locacheGetName;
        const detail = this.$locache.get(locacheGetName);
        console.info(detail);
        this.detail = detail;
        // const data = await WeChatCentralInfoGetID(id);
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
  .pageWrapper {
    padding: .6rem .3rem .4rem .3rem;
    line-height: .6rem;
    font-size: .32rem;
    min-height: 100vh;
    background: #fff;
    box-sizing: border-box;
    .header {
      .title {
        font-family: PingFangSC-Medium;
        font-size: 0.44rem;
        color: #000000;
        letter-spacing: 0;
        text-align: left;
      }

      .tip{
        margin: .4rem 0 0.6rem 0;
        .merchant {
          font-family: PingFangSC-Regular;
          font-size: 0.28rem;
          color: #576b95;
          letter-spacing: 0;
          text-align: left;
        }

        .date {
          font-family: PingFangSC-Regular;
          font-size: 0.28rem;
          color: #888888;
          letter-spacing: 0;
          text-align: left;
          margin-left: .2rem;
        }
      }
    }
    .contentList {
      margin-bottom: .2rem;
      .newsImg {
        text-align: center;
        margin: .3rem 0 .3rem 0;

        img {
          width: 100%;
          height: auto;
        }
      }

      .content {
        text-indent: 2em;
      }

      .hotTip {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
        //padding: 0 .2rem;
        //border: solid 1px #f4f4f4;
        .reads {
          font-family: PingFangSC-Regular;
          font-size: 0.28rem;
          color: #888888;
          letter-spacing: 0;
          text-align: left;
        }

        .reading {
          font-family: PingFangSC-Regular;
          font-size: 0.28rem;
          color: #576b95;
          letter-spacing: 0;
          text-align: left;
        }
      }
    }
  }
</style>
<style>
  .contentList img {
    max-width: 100%;
  }
  .contentList p {
    word-break: break-all;
  }
</style>
