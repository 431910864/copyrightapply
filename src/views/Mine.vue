<template>
  <div class="pageWrapper">
    <header class="header">
      <div @click="toLogin" class="content">
        <img class="portrait" :src="GetUserInfo.headimgurl || moreImg"/>
        <div class="baseInfo">
          <div class="nickName">{{GetUserInfo.openid ? GetUserInfo.nickname : status[loginStatus]}}</div>
        </div>
      </div>
    </header>
    <div class="section">
      <ul class="commonEssue">
        <li v-for="(item, key) in lists" :key="key" @click="handleClick(item, key)">
          <span>
            <img :src="item.icon" class="itemIcon" />
            <span>{{item.label}}</span>
          </span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
    <div style="height: 2rem;"></div>
  </div>
</template>
<script>
  import {
    Button
  } from 'vant';
  import {mapState} from 'vuex';
  export default {
    name: 'HelloWorld',
    components: {
      Button,
    },
    data() {
      return {
        jwt: '',
        loginStatus: '',
        status: ['未登陆', '已登陆'],
        data: {
        },
        moreImg: require('@/assets/images/portrait.jpg'),
        list1: [
          // {
          //   icon: require('@/assets/images/idCerti.png'),
          //   label: '我的证书'
          // },
          {
            icon: require('@/assets/images/service.png'),
            label: '我的服务',
            route: '/MyService'
          },
          // {
          //   icon: require('@/assets/images/message.png'),
          //   label: '消息通知'
          // },
          // {
          //   icon: require('@/assets/images/help.png'),
          //   label: '中心简介',
          //   route: '/centerIntroduction',
          // },
          // {
          //   icon: require('@/assets/images/message.png'),
          //   label: '中心资讯',
          //   route: '/centerNews',
          // },
          // {
          //   icon: require('@/assets/images/message.png'),
          //   label: '知识政策',
          //   route: '/indexList',
          // },
          // {
          //   icon: require('@/assets/images/help.png'),
          //   label: '联系我们',
          //   route: '/contactUS',
          // },
          // {
          //   icon: require('@/assets/images/help.png'),
          //   label: '帮助中心'
          // },
          {
            icon: require('@/assets/images/settings.png'),
            label: '设置',
            route: '/setting',
            isUserInfo: true,
          },
        ],
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
    },
    computed: {
      ...mapState({
        UserInfo: state => {
          return state.UserInfo;
        },
        Token: state => {
          return state.Token;
        }
      }),
      GetUserInfo() {
        return this.UserInfo || {};
      },
      lists() {
        return this.list1.filter((item) => {
          if (!this.Token && item.isUserInfo) {
            return false;
          }
          return true;
        })
      }
    },
    mounted() {
      setTimeout(() => {
        this.loginStatus = Number(!!this.Token);
      }, 200);
    },
    methods: {
      handleClick(item, key) {
        this.$router.push(item.route)
      },
      onChange(index) {

      },
      toLogin() {
        this.loginStatus = !!this.Token;
        if (!this.loginStatus) {
          this.$router.push('/login')
        } else {
          this.$router.push('/setting')
        }
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
