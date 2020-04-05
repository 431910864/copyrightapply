<template>
  <div class="pageWrapper">
    <header class="header searchBox">
      <van-search v-model="searchKey" placeholder="请输入搜索关键词" />
    </header>
    <van-tabs v-model="active" sticky title-active-color="#2e4bd4">
      <van-tab v-for="(item, key) in types" :title="item.label" :key="key">
        <van-list class="contentList" v-model="item.loading" :finished="item.finished" finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="(vo, index) in item.list" :key="index" @click="handleEvent(vo, index)">
            <div class="unit">
              <div class="images">
                <img :src="vo.img" />
              </div>
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
  import {pages, WeChatCentralInfo, WeChatHotKnowledge, WeChatIprPolicy} from "../../api/wechat";
  export default {
    data() {
      return {
        searchKey: '',
        types: [{
          type: '0',
          label: '热门知识',
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
        }, {
          type: '1',
          label: '知产政策',
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
        }],
        active: '0',
      }
    },
    computed: {
      list() {
        return this.types[this.active].list;
      },
      loading() {
        return this.types[this.active].loading;
      },
      finished() {
        return this.types[this.active].finished;
      },
      searchKey() {
        return this.types[this.active].searchKey;
      },
      data() {
        return this.types[this.active].data;
      },
      count() {
        return this.types[this.active].count;
      },
      page() {
        return this.types[this.active].page;
      },
      pageData() {
        return this.types[this.active].pageData;
      },
      timer() {
        return this.types[this.active].timer;
      },
      isRefresh() {
        return this.types[this.active].isRefresh;
      },  //是否在刷新
      IsMaxPage() {
        return this.pageData.maxPage && this.page >= this.pageData.maxPage; // typeof this.count === 'number' && this.list.length >= this.count;
      }
    },
    mounted() {
      this.loadInit();
    },
    methods: {
      handleEvent(item, key) {
        const locacheGetName = ('indexList' + this.active + '-' + item.id);
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
        // const list = locache.get('indexList' + jwt);
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
        if (!this.timer) {
          this.types[this.active].timer = setTimeout(() => {
            this.onLoad();       //请求商品数据的方法
            this.types[this.active].timer = null;
          }, 0)
        }
      },
      async onLoad() {
        const {jwt} = locache.get('jwt') || {};
        const $this = this.types[this.active];
        if (this.IsMaxPage || $this.isRequire) {
          return;
        }
        if (!$this.pageData.maxPage || $this.page < $this.pageData.maxPage) {
          $this.page++;
        } else {
          return;
        }
        $this.isRequire = true;
        let data;
        if (this.active === 0) {
          data = await WeChatHotKnowledge($this.page);
        } else {
          data = await WeChatIprPolicy($this.page);
        }
        if (data) {
          let list = data.data;
          $this.count = data.count;
          list = list.map((item) => {
            return {
              ...item,
              img: item.coverImage,
              title: item.title,
              describe: item.author,
              date: item.publishTime,
              id: item.id,
              content: item.content,
              type: 0,
            }
          });
          $this.list = $this.list.concat(list);
          $this.loading = false;
          $this.isRefresh = false;
          $this.pageData = pages($this.list, $this.count);
          if ($this.IsMaxPage) {
            $this.finished = true;
          }
          // locache.set('indexList' + jwt, this.list);
        } else {
          $this.loading = false;
          $this.finished = true;
          $this.isRefresh = false;
        }
        $this.isRequire = false;
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
        .contentDes {
          flex: 1;
        }
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
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
