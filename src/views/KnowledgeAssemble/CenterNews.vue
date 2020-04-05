<template>
  <div class="pageWrapper">
    <van-pull-refresh class="pageWrapper" v-model="isRefresh" @refresh="onRefresh">
      <header class="header">
        <div class="text">
          <div class="">南山版权产业服务中心</div>
          <div class="">为科技企业提供“一站式”服务</div>
        </div>
      </header>
      <van-list class="contentList" v-model="loading" :finished="finished" finished-text="没有更多了" @load="init">
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
    </van-pull-refresh>
  </div>
</template>

<script>
  import {pages, WeChatCentralInfo} from "../../api/wechat";

  export default {
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        searchKey: '',
        data: [],
        count: null,
        page: 0,
        pageData: {},
        timer: null,
        isRefresh: false,  //是否在刷新
      }
    },
    computed: {
      IsMaxPage() {
        return this.pageData.maxPage && this.page >= this.pageData.maxPage; // typeof this.count === 'number' && this.list.length >= this.count;
      }
    },
    mounted() {
      this.loadInit();
    },
    methods: {
      handleEvent(item, key) {
        const locacheGetName = ('centerNews' + item.id);
        this.$locache.set(locacheGetName, item);
        this.$router.push({
          path: 'detail',
          query: {
            id: item.id,
            locacheGetName,
          }
        })
      },
      loadInit() {
        // const { jwt } = locache.get('jwt') || {};
        // const list = locache.get('CenterNews' + jwt);
        // if (list) {
        //   this.list = list;
        // }
      },
      onRefresh() {
        this.list = [];
        this.page = 0;
        this.finished = false;
        this.init();
      },
      init() {
        if(!this.timer){
          this.timer = setTimeout(() => {
            this.onLoad();       //请求商品数据的方法
            this.timer = null;
          }, 0)
        }
      },
      async onLoad() {
        const { jwt } = locache.get('jwt') || {};
        if (this.IsMaxPage || this.isRequire) {
          return;
        }
        if (!this.pageData.maxPage || this.page < this.pageData.maxPage) {
          this.page++;
        } else {
          return;
        }
        this.isRequire = true;
        const data = await WeChatCentralInfo(this.page);
        if (data) {
          let list = data.data;
          this.count = data.count;
          list = list.map((item) => {
            return {
              ...item,
              img: item.sourceUrl,
              title: item.title,
              describe: item.author,
              date: item.publishTime,
              id: item.id,
              content: item.content,
            }
          });
          this.list = this.list.concat(list);
          this.loading = false;
          this.isRefresh = false;
          this.pageData = pages(this.list, this.count);
          if (this.IsMaxPage) {
            this.finished = true;
          }
          // locache.set('CenterNews' + jwt, this.list);
        } else {
          this.loading = false;
          this.finished = true;
          this.isRefresh = false;
        }
        this.isRequire = false;
      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
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
