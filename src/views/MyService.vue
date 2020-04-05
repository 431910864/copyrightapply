<template>
  <div class="pageWrapper">
    <van-pull-refresh class="pageWrapper" v-model="isRefresh" @refresh="onRefresh">
      <van-list :offset="200" class="contentList" v-model="loading" :finished="finished" finished-text="没有更多了" @load="init">
        <van-cell class="cellMarginBottom"
                  v-for="(item, index) in list"
                  :key="index"
                  :title-class="cellTitleStyle"
                  :label-class="cellLabelStyle"
                  :value-class="cellValueStyle"
                  :title="item.copyrightName"
                  :value="urgentType[item.urgentType]"
                  :label="item.urgentDays"
                  center>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import { WeChatGetCopyrightFinance, pages } from "../api/wechat";

  export default {
    name: "MyService",
    data() {
      return {
        cellTitleStyle: 'cellTitleStyle',
        cellValueStyle: 'cellValueStyle',
        cellLabelStyle: 'cellLabelStyle',
        urgentType: { 'YES': '已登记', 'NO': '未登记' },
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
      loadInit() {
        // const { jwt } = locache.get('jwt') || {};
        // const list = locache.get('MyService' + jwt);
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
        const data = await WeChatGetCopyrightFinance(this.page);
        if (data) {
          let list = data.data;
          this.count = data.count;
          list = list.map((item) => {
            return {
              ...item,
            }
          });
          this.list = this.list.concat(list);
          this.loading = false;
          this.isRefresh = false;
          this.pageData = pages(this.list, this.count);
          if (this.IsMaxPage) {
            this.finished = true;
          }
          // locache.set('MyService' + jwt, this.list);
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
    background: #f4f4f4;

    .cellMarginBottom {
      /*margin-bottom: .1rem;*/
    }

    .cellTitleStyle {
      color: #151515;
      font-size: .32rem;
    }

    .cellValueStyle {
      color: #2e4bd4;
      font-size: .24rem;
    }

    .cellLabelStyle {
      color: #ababab;
      font-size: .24rem;
    }
  }
</style>
