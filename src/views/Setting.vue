<template>
  <div class="pageWrapper">
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
  </div>
</template>
<script>
  import {
    Button
  } from 'vant';
  import {mapState} from "vuex";
  export default {
    name: 'HelloWorld',
    components: {
      Button,
    },
    data() {
      return {
        data: {
          nickName: '',
          phone: '',
        },
        moreImg: require('@/assets/images/portrait.jpg'),
        list1: [
          {
            icon: require('@/assets/images/help.png'),
            label: '修改密码',
            route: '/editPassword',
          },
          {
            isUserInfo: true,
            icon: require('@/assets/images/settings.png'),
            label: '退出登陆',
            route: ($this) => {
              locache.remove('token');
              $this.$store.commit('SetToken', undefined);
              $this.$router.replace('mine');
            },
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
      lists() {
        return this.list1.filter((item) => {
          // if (item.isUserInfo && locache.get('userInfo')) {
          //   return false;
          // }
          return true;
        })
      }
    },
    methods: {
      handleClick(item, key) {
        if (typeof item.route === 'function') {
          item.route(this);
          return;
        }
        this.$router.push(item.route)
      },
      onChange(index) {

      },
      toLogin() {
        !this.Token && this.$router.push('/login')
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
