<template>
  <div class="pageWrapper">
    <header class="header">
      <div class="content">
        <img class="portrait" :src="moreImg"/>
        <div class="baseInfo">
          <div class="nickName">{{data.nickName}}</div>
          <div class="phone">{{data.phone}}</div>
        </div>
      </div>
    </header>
    <div class="section">
      <ul class="commonEssue">
        <li v-for="(item, key) in list1" :key="key" @click="handleClick(item, key)">
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
        data: {
          nickName: 'zhangsan',
          phone: '131****463'
        },
        moreImg: require('@/assets/images/portrait.jpg'),
        list1: [{
            icon: require('@/assets/images/idCerti.png'),
            label: '我的证书'
          },
          {
            icon: require('@/assets/images/service.png'),
            label: '我的服务'
          },
          {
            icon: require('@/assets/images/message.png'),
            label: '消息通知'
          },
          {
            icon: require('@/assets/images/help.png'),
            label: '帮助中心'
          },
          {
            icon: require('@/assets/images/settings.png'),
            label: '设置'
          },
          {
            icon: require('@/assets/images/help.png'),
            label: '中心简介'
          },
          {
            icon: require('@/assets/images/settings.png'),
            label: '中心资讯'
          }
        ],
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
    },
    methods: {
      handleClick(item, key) {
        if(key == 5) {
          this.$router.push('/centerIntroduction')
          return
        }
        if(key == 6) {
          this.$router.push('/centerNews')
          return
        }
        this.$router.push('/indexList')
      },
      onChange(index) {

      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    .header{
      background: #314FD6;
      font-family:PingFangSC-Medium;
      font-size:.32rem;
      color:#ffffff;
      letter-spacing:0;
      text-align:left;
      .content{
        display: flex;
        align-items: center;
        padding: .8rem .2rem;
        .portrait{
          width:1.8rem;
          height:1.8rem;
          border-radius:100%;
          margin-right: .2rem;
        }
        .nickName{
          margin-top: .2rem;
        }
      }
    }
    .commonEssue {
      background: #ffffff;

      li {
        box-shadow: inset 0 -1px 0 0 #f4f4f4;
        padding: .3rem .3rem;
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
          width: auto;
          height: 22px;
          margin-right: .2rem;
        }

        .van-icon-arrow {
          font-size: 0.3rem;
          color: #ababab;
        }
      }
    }
  }
</style>
