<template>
  <div class="pageWrapper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, key) in images" :key="key">
        <img :src="item" class="carouselImgs" />
      </van-swipe-item>
    </van-swipe>
    <div class="section">
      <div class="hotServe">版权登记</div>
      <ul class="commonEssue">
        <li v-for="(item, key) in list1" :key="key" @click="handleClick(list1[0].type, item)">
          <span>
            <img :src="item.icon" class="itemIcon" />
            <span>{{item.label}}</span>
          </span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
    <div class="section">
      <div class="hotServe">版权金融</div>
      <ul class="commonEssue">
        <li v-for="(item, key) in list2" :key="key" @click="handleClick(list2[0].type, item)">
          <span>
            <img :src="item.icon" class="itemIcon" />
            <span>{{item.label}}</span>
          </span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
    <div class="section">
      <div class="hotServe">相关服务</div>
      <ul class="commonEssue">
        <li v-for="(item, key) in list3" :key="key" @click="handleClick(list3[0].type, item)">
          <span>
            <img :src="item.icon" class="itemIcon" />
            <span>{{item.label}}</span>
          </span>
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
  export default {
    name: 'HelloWorld',
    components: {
      Button
    },
    data() {
      return {
        moreImg: require('@/assets/images/icon.png'),
        list1: [{
            icon: require('@/assets/images/service_1.png'),
            label: '软件著作权',
            type: 1
          },
          {
            icon: require('@/assets/images/service_2.png'),
            label: '作品著作权'
          }
        ],
        list2: [{
            icon: require('@/assets/images/service_3.png'),
            label: '质押贷款',
            type: 2
          },
          {
            icon: require('@/assets/images/service_4.png'),
            label: '质权登记'
          },
          {
            icon: require('@/assets/images/service_5.png'),
            label: '撤销质权'
          }
        ],
        list3: [{
            icon: require('@/assets/images/service_6.png'),
            label: '软件测试',
            type: 3
          },
          {
            icon: require('@/assets/images/service_7.png'),
            label: '版权交易'
          },
          {
            icon: require('@/assets/images/service_8.png'),
            label: 'DCI服务'
          },
          {
            icon: require('@/assets/images/service_9.png'),
            label: '政府项目申报'
          },
          {
            icon: require('@/assets/images/service_10.png'),
            label: '专利'
          },
          {
            icon: require('@/assets/images/service_11.png'),
            label: '商标'
          },
          {
            icon: require('@/assets/images/service_12.png'),
            label: '维权监测'
          },
          {
            icon: require('@/assets/images/service_13.png'),
            label: '诉讼存证'
          }
        ],
        types: [{
          text: '版权登记',
          icon: 'photo-o'
        }, {
          text: '版权金融',
          icon: 'photo-o'
        }, {
          text: '相关服务',
          icon: 'photo-o'
        }],
        data: [{
          text: '软件著作',
          icon: 'photo-o'
        }, {
          text: '作品著作',
          icon: 'photo-o'
        }, {
          text: '版权质押',
          icon: 'photo-o'
        }, {
          text: '软件测试',
          icon: 'photo-o'
        }, {
          text: '专利',
          icon: 'photo-o'
        }, {
          text: '商标',
          icon: 'photo-o'
        }],
        images: [
          require('@/assets/images/serviceBanner.png'),
          require('@/assets/images/serviceBanner.png')
        ]
      }
    },
    methods: {
      handleClick(type, item) {
        this.$router.push({path: '/copyrightTypes', query: {type}});
      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    .hotServe {
      font-family: PingFangSC-Regular;
      font-size: .3rem;
      color: #666666;
      letter-spacing: 0;
      text-align: left;
      padding: .3rem 0.2rem .1rem 0.2rem;
    }

    .commonEssue {
      background: #ffffff;

      li {
        box-shadow: inset 0 -1px 0 0 #f4f4f4;
        padding: .3rem .2rem;
        display: flex;
        justify-content: space-between;
        font-family: PingFangSC-Medium;
        font-size: .32rem;
        color: #000000;
        letter-spacing: 0;
        text-align: left;

        :nth-child(1) {
          display: flex;
          align-items: center;
        }

        .itemIcon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: .2rem;
        }

        .van-icon-arrow {
          font-size: 0.3rem;
          color: #ababab;
        }
      }
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
  }
</style>
