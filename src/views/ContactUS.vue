<template>
  <div class="pageWrapper">
    <div class="pageWrapper" style="overflow:hidden;" v-model="isRefresh" @refresh="onRefresh">

      <van-list class="contentList" v-model="loading" :finished="finished" finished-text="没有更多了" @load="init">
        <div style="padding: 15px;padding-bottom: 0;">
          <div style="background-color: #FFFFFF;">
            <div>
              <img :src="require('@/assets/images/map.png')" style="width: 100%" />
            </div>
            <div style="padding: 15px;padding-top: 5px;">
              <div style="font-size: 18px;">南山版权产业服务中心</div>
              <div style="padding-top: 5px;"><span style="font-weight: 500">地址：</span>深圳市南山区粤海街道深圳湾科技生态园</div>
              <div style="padding-top: 5px;"><span style="font-weight: 500;opacity: 0">地址：</span>7栋B座三层南山知识产权保护中心A1窗口</div>
              <div style="padding-top: 5px;"><span style="font-weight: 500">电话：</span>0755-86952852</div>
              <div style="padding-top: 5px;"><span style="font-weight: 500">邮箱：</span>2689183185@qq.com</div>
            </div>
          </div>
        </div>
        <van-cell style="width: auto;border-radius: .08rem;margin: .3rem;padding: 0!important" v-for="(vo, index) in list" :key="index">
          <div v-if="vo.profilePhotoUrl" style="height: 140px;overflow: hidden;width: 100%;" :style="{background: `url(${vo.profilePhotoUrl})`, backgroundPosition: 'left center', backgroundSize: '100%'}">
<!--            <img class="" style="width: 100%;" :src="'https://kukumber.utools.club/' + vo.profilePhotoUrl" >-->
          </div>
          <div class="unit" style="padding: 0.3rem 0.3rem !important;">
            <div class="contentDes">
              <div class="title name">{{vo.realName}}</div>
              <div class="describe">{{vo.jobTitle}}</div>
              <div class="date">{{vo.mobile}}</div>
              <div class="qqAccount">QQ: {{vo.qq}}</div>
            </div>
            <div class="wxrcode">
              <span></span>
              <div class="portraitWrapper">
                <img :src="vo.wxQrcodeImage">
<!--                <img class="portrait" :src="vo.profilePhotoUrl" v-if="vo.profilePhotoUrl">-->
              </div>
            </div>
          </div>
          <div style="height: .1rem;"></div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
  import {pages, WeChatSalesman} from "../api/wechat";

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
        if (this.IsMaxPage || this.isRequire) {
          return;
        }
        if (!this.pageData.maxPage || this.page < this.pageData.maxPage) {
          this.page++;
        } else {
          return;
        }
        this.isRequire = true;
        const data = await WeChatSalesman(this.page);
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
        justify-content: space-between;

        .contentDes {
          max-width: 6.5rem;
          .title {
            font-family: PingFangSC-Medium;
            font-size: .32rem;
            color: #151515;
            letter-spacing: 0;
            text-align: justify;
            font-weight: bold;
          }
          .qqAccount{
            font-family:PingFangSC-Medium;
            font-size:.32rem;
            color:#000000;
            letter-spacing:0;
            text-align:left;
            margin-top: .2rem;
            font-weight: bold;
          }
          .describe {
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #666666;
            letter-spacing: 0;
            text-align: left;
            margin-bottom: .25rem;
          }

          .date {
            font-family: PingFangSC-Regular;
            font-size: .32rem;
            color: #000000;
            font-weight: bold;
            letter-spacing: 1px;
            text-align: left;
          }
        }
      }
    }
    .name {
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      word-break: break-all;
    }
    .wxrcode:after {
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: #314FD6;
      border-top-color: #314FD6;
      top: 0;
      left: 0;
    }
    .wxrcode:before {
      border-right-color: #314FD6;
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-top-color: #314FD6;
      top: 0;
      right: 0;
    }
    .wxrcode span:after {
      border-right-color: transparent;
      border-bottom-color: #314FD6;
      border-left-color: #314FD6;
      border-top-color: transparent;
      bottom: 0;
      left: 0;
    }
    .wxrcode span:before {
      border-right-color: #314FD6;
      border-bottom-color: #314FD6;
      border-left-color: transparent;
      border-top-color: transparent;
      bottom: 0;
      right: 0;
    }
    .wxrcode:after, .wxrcode:before, .wxrcode span:after, .wxrcode span:before {
      content: "";
      position: absolute;
      border-width: .04rem;
      border-style: solid;
      border-radius: .08rem;
      width: .3rem;
      height: .3rem;
      z-index: 11;
    }
    .wxrcode {
      width: 2.5rem;
      height: 2.6rem;
      position: relative;
      .portraitWrapper{
        position: relative;
        .portrait{
          width: .8rem;
          height: .8rem;
          position: absolute;
          left: 50%;
          margin-left: -.4rem;
          top: 50%;
          margin-top: -.4rem;
          border-radius: .1rem;
        }
      }
      div:after {
        content: '长按二维码咨询';
        position: absolute;
        bottom: -.1rem;
        left: 0;
        right: 0;
        margin: auto;
        font-size: .25rem;
        text-align: center;
        color: #9d9d9d;
        height: .4rem;
        line-height: .4rem;
      }
      div {
        padding: .2rem .2rem .3rem .2rem;
        width: 2.1rem;
        height: 2.1rem;
        img {
          height: 100%;
          width: 100%;
          border: none;
          background-color: #e7e8e9;
          position: relative;
          z-index: 1111;
        }
      }
    }
  }
</style>
