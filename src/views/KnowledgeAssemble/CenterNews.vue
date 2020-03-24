<template>
  <div class="pageWrapper">
    <header class="header">
      <div class="text">
        <div class="">南山版权产业服务中心</div>
        <div class="">为科技企业提供“一站式”服务</div>
      </div>
    </header>
    <van-list class="contentList" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(vo, index) in list" :key="index" @click="handleEvent(vo, index)">
        <div class="unit">
          <div class="contentDes">
            <div class="title">{{vo.title}}</div>
            <div class="describe">{{vo.describe}}</div>
            <div class="date">{{vo.date}}</div>
          </div>
          <van-icon name="arrow" />
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什申请注册的商标对颜色有什...',
          type: '商标',
          describe: '南方版权产业服务中心',
          date: '2020-03-09',
          id: '14647974669779'
        }, {
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什...',
          type: '软件测试',
          describe: '南方版权产业服务中心?各个...',
          date: '2020-03-09',
          id: '14647974669779'
        }, {
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什...',
          type: '政府项目申请',
          describe: '南方版权产业服务中心?各个...',
          date: '2020-03-09',
          id: '325674553555'
        }, {
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什...',
          type: 'DCI服务',
          describe: '商标注册和专利申请有哪些程序要走?各个...',
          date: '2020-03-09',
          id: '4675868433463'
        }, {
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什...',
          type: '专利',
          describe: '南方版权产业服务中心?各个...',
          date: '2020-03-09',
          id: '54655766868787'
        }],
        loading: false,
        finished: false,
        searchKey: '',
        types: [{
          type: '0',
          label: '热门知识'
        }, {
          type: '1',
          label: '知产政策'
        }],
        data: []
      };
    },
    mounted() {
      //this.data = JSON.parse(JSON.stringify(this.list))
    },
    methods: {
      handleEvent(item, key) {
        this.$router.push({
          path: 'detail',
          query: {
            id: item.id
          }
        })
      },
      onLoad() {
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list[0]);
          }
          this.loading = false;
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    .header {
      background: #3c50b2;
      height: 3.2rem;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      background-image: url('~@/assets/images/knowledgeBanner.png');
      background-size: cover;
      -webkit-background-size: cover;

      .text {
        font-family: FZLTTHJW--GB1-0;
        font-size: .4rem;
        color: #ffffff;
        letter-spacing: 0;
        text-align: left;
        color: #fff;
      }

      .van-search {
        background: transparent;
        height: 0.72rem;
        width: 4.8rem;
      }
    }

    .contentList {
      .van-cell {
        padding: .3rem 0.3rem !important;
      }
      .van-icon-arrow{
        font-size: .3rem;
        color: #ababab;
      }
      .unit {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;

        .contentDes {
          max-width: 6.5rem;
          .title {
            font-family: PingFangSC-Medium;
            font-size: .32rem;
            color: #151515;
            letter-spacing: 0;
            text-align: justify;
            margin-bottom: .2rem;
          }

          .describe {
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #666666;
            letter-spacing: 0;
            text-align: left;
          }

          .date {
            font-family: PingFangSC-Regular;
            font-size: .24rem;
            color: #ababab;
            letter-spacing: 0;
            text-align: left;
          }
        }
      }
    }
  }
</style>
