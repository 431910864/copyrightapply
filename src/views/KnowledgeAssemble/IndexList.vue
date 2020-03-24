<template>
  <div class="pageWrapper">
    <header class="header searchBox">
      <van-search v-model="searchKey" placeholder="请输入搜索关键词" />
    </header>
    <van-tabs sticky title-active-color="#2e4bd4">
      <van-tab v-for="(item, key) in types" :title="item.label" :key="key">
        <van-list class="contentList" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="(vo, index) in list" :key="index" @click="handleEvent(vo, index)">
            <div class="unit">
              <img :src="vo.img" class="images" />
              <div class="contentDes">
                <div class="title">{{vo.title}}</div>
                <div class="contentType">{{vo.type}}</div>
                <div class="describe">{{vo.describe}}</div>
                <div class="date">{{vo.date}}</div>
              </div>
            </div>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什...',
          type: '商标',
          describe: '商标注册和专利申请有哪些程序要走?各个...',
          date: '2020-03-09',
          id: '14647974669779'
        }, {
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什...',
          type: '软件测试',
          describe: '商标注册和专利申请有哪些程序要走?各个...',
          date: '2020-03-09',
          id: '14647974669779'
        }, {
          img: require('@/assets/images/demo.png'),
          title: '申请注册的商标对颜色有什...',
          type: '政府项目申请',
          describe: '商标注册和专利申请有哪些程序要走?各个...',
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
          describe: '商标注册和专利申请有哪些程序要走?各个...',
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
        this.$router.push({path: 'detail', query: {id: item.id}})
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
      .van-search {
        background: transparent;
        height: 0.72rem;
        width: 4.8rem;
      }
    }
    .contentList {
      .van-cell{
        padding: .3rem 0.3rem!important;
      }
      .unit{
        display: flex;
        display: -webkit-flex;
        align-items: center;
        .title{
          font-family:PingFangSC-Medium;
          font-size:.32rem;
          color:#151515;
          letter-spacing:0;
          text-align:justify;
        };
        .contentType{
          font-family:PingFangSC-Regular;
          font-size:.22rem;
          color:#2e4bd4;
          letter-spacing:0;
          text-align:left;
        };
        .describe{
          font-family:PingFangSC-Regular;
          font-size:.22rem;
          color:#ababab;
          letter-spacing:0;
          text-align:justify;
        };
        .date{
          font-family:PingFangSC-Regular;
          font-size:.2rem;
          color:#ababab;
          letter-spacing:0;
          text-align:left;
        };
        .images{
          width: 2.2rem;
          height: 1.7rem;
          margin-right: .2rem;
        }
      }
    }
  }
</style>
