<template>
  <div class="pageWrapper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item @click="handleClick(item)" v-for="(item, key) in images" :key="key">
        <img :src="item.src" class="carouselImgs" />
      </van-swipe-item>
    </van-swipe>
    <div class="noticeBar">
      <van-notice-bar color="#151515" background="#fff" text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容" left-icon="volume-o" />
    </div>
    <van-grid :column-num="3" class="copyrightRam" :border="showBorder">
      <van-grid-item v-for="(item, key) in types" :key="key" :icon="item.icon" :text="item.text" @click="handelEvent(item.type)" />
    </van-grid>
    <div class="section copyRightWrapper">
      <div class="hotServe"><span class="splitLine"></span>版权动态</div>
      <div class="imageBox"><img :src="copyRightImg" class="copyRightImg"></div>
    </div>
    <div class="section" style="margin: .1rem 0; padding-bottom: .3rem;">
      <div class="hotServe"><span class="splitLine"></span>热门服务</div>
      <div class="hotWrapper">
        <div @click="handleClick(item)" class="hotServeItem" v-for="(item, key) in data" :key="key">
          <img :src="item.icon" class="hotServeIcon">
        </div>
      </div>
    </div>
    <div class="section">
      <div class="hotServe"><span class="splitLine"></span>版权登记流程</div>
      <div class="flowWrapper"><img :src="flowImg" class="flowImg"></div>
    </div>
    <div class="learnMore"><img :src="moreImg"></div>
    <div class="section">
      <div class="hotServe"><span class="splitLine"></span>常见问题</div>
      <ul class="commonEssue">
        <li v-for="(item, key) in list" :key="key" @click="ToDetail(item)">
          <span>{{item.title}}</span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    Button
  } from 'vant';
  import { WeChatCommonProblem } from "../api/wechat";

  export default {
    name: 'HelloWorld',
    components: {
      Button
    },
    data() {
      return {
        busiType1: {
          "RJZZQ":"软件著作权",
          "ZPZZQ":"作品著作权",
        },
        busiType2: {
          "ZYDK": "质押贷款",
          "ZQDJ":"质权登记",
          "CXZY":"撤销质押",
        },
        busiType3: {
          "RJCS":"软件测试",
          "BQJY":"版权交易",
          "DCI_FW":"DCI服务",
          "ZFXMSB":"政府项目申报",
          "ZHUAN_LI":"专利",
          "SHANG_BIAO":"商标",
          "WQJC":"维权监测",
          "SSCZ":"诉讼存证",
        },
        showBorder: false,
        moreImg: require('@/assets/images/more.png'),
        copyRightImg: require('@/assets/images/copyRight.png'),
        flowImg: require('@/assets/images/flow.png'),
        list: [
          '1、版权缴费后，多久可以收取到发票？',
          '2、个人想要登记版权，打印材料需要逐份打印吗？',
          '3、最迟什么时候递交相关材料？',
          '4、审核会不会不合格，应该怎么做？',
          '5、终审通过后发现提交的材料有误，该如何申请...'
        ],
        types: [{
          text: '版权登记',
          icon: require('@/assets/images/module_1.png'),
          type: 'register'
        }, {
          text: '版权金融',
          icon: require('@/assets/images/module_2.png'),
          type: 'finance'
        }, {
          text: '相关服务',
          icon: require('@/assets/images/module_3.png'),
          type: 'service'
        }],
        data: [{
          text: '软件著作',
          name: '软件著作权',
          icon: require('@/assets/images/hotImg_1.png')
        }, {
          text: '作品著作',
          name: '作品著作权',
          icon: require('@/assets/images/hotImg_2.png')
        }, {
          text: '版权质押',
          name: '质押贷款',
          icon: require('@/assets/images/hotImg_3.png')
        }, {
          text: '软件测试',
          name: '软件测试',
          icon: require('@/assets/images/hotImg_4.png')
        }, {
          text: '专利',
          name: '专利',
          icon: require('@/assets/images/hotImg_5.png')
        }, {
          text: '商标',
          name: '商标',
          icon: require('@/assets/images/hotImg_6.png')
        }],
        images: [
          {
            name: '质押贷款',
            src: require('@/assets/images/banner.png')
          },
          {
            name: '质押贷款',
            src: require('@/assets/images/banner.png')
          },
          {
            name: '质押贷款',
            src: require('@/assets/images/banner.png')
          }
        ]
      }
    },
    mounted() {
      this.GetProblem();
    },
    computed: {
      busiType() {
        return {
          ...this.busiType1,
          ...this.busiType2,
          ...this.busiType3,
        }
      }
    },
    methods: {
      handleClick(item) {
        const data = this.getbusiType(item.name) || {};
        const type = this.getType(data.busiType);
        this.$router.push({path: '/copyrightTypes', query: { type, ...data }});
      },
      getType(type) {
        if (this.busiType1[type]) return 1;
        if (this.busiType2[type]) return 2;
        if (this.busiType3[type]) return 3;
      },
      getbusiType(name) {
        for (var i in this.busiType) {
          console.info(this.busiType[i], name)
          if (this.busiType[i] === name) {
            return {
              busiType: i,
              busiName: this.busiType[i],
            };
          }
        }
      },
      async GetProblem() {
        let HomeProblem = locache.get('HomeProblem');
        if (HomeProblem) {
          this.list = HomeProblem;
        }
        HomeProblem = await WeChatCommonProblem();
        HomeProblem = HomeProblem.data;
        locache.set('HomeProblem', HomeProblem);
        console.info(HomeProblem)
        this.list = HomeProblem;
      },
      ToDetail(item) {
        const locacheGetName = ('Problem' + item.id);
        this.$locache.set(locacheGetName, item);
        this.$router.push({
          path: 'detail',
          query: {
            id: item.id,
            locacheGetName,
          }
        });
      },
      handelEvent(type) {
        switch (type) {
          case 'register':
            this.$router.push('/copyrightRegister')
            break;
          case 'finance':
            this.$router.push('/copyrightFinance')
            break;
          case 'service':
            this.$router.push('/copyrightService')
            break;
          default:
            break;
        }
      },
      onChange(index) {

      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    .noticeBar {
      margin: 0 0 .2rem 0;
    }

    .hotWrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 .3rem;

      .hotServeItem {
        margin-bottom: 0.05rem;

        .hotServeIcon {
          width: 2.22rem;
          height: 1.2rem;
          border-radius: 0.1rem;
        }
      }
    }

    ;

    .flowWrapper {
      padding: .2rem 0 .4rem 0;
      text-align: center;

      .flowImg {
        width: auto;
        height: 3.6rem;
      }
    }

    .copyRightWrapper {
      margin: .1rem 0;
      padding: 0 0 .4rem 0;

      .copyRightImg {
        width: auto;
        height: 1.44rem;
      }

      ;
    }

    ;

    .section {
      background: #fff;
      text-align: center;
    }

    ;

    .hotServe {
      font-family: PingFangSC-Medium;
      font-size: 0.32rem;
      color: #000000;
      letter-spacing: 0;
      padding: .3rem .3rem;
      display: flex;
      align-items: center;
      text-align: left;
      background: #fff;

      .images {
        width: 100%;
        height: 100%;
      }

      ;

      .splitLine {
        background: #2e4bd4;
        display: inline-block;
        width: 3px;
        height: 14px;
        margin-right: .1rem;
      }
    }

    .commonEssue {
      background: #ffffff;

      li:first-child {
        border-top: solid 1px #f4f4f4;
      }

      ;

      li {
        box-shadow: inset 0 -1px 0 0 #f4f4f4;
        padding: .2rem .2rem;
        display: flex;
        justify-content: space-between;
        color: #666666;

        .van-icon-arrow {
          font-size: 0.3rem;
          color: #ababab;
        }
      }
    }

    .concatInfo {
      font-family: PingFangSC-Regular;
      font-size: .2rem;
      color: #576b95;
      letter-spacing: 0;
      text-align: center;
      line-height: .4rem;
      padding: .3rem 0 70px 0;
    }

    .my-swipe {
      height: 3rem;

      .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        background-color: #39a9ed;

        .carouselImgs {
          width: 100%;
          height: 3rem;
        }
      }
    }

    .learnMore {
      margin: .1rem 0;

      img {
        width: 100%;
      }
    }
  }
</style>
