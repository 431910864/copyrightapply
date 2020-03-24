<template>
  <div class="pageWrapper">
    <copyrightItemHead :itemImage="dataModule.itemImage"></copyrightItemHead>
    <div class="loginForm">
      <van-form @submit="onSubmit">
        <van-action-sheet v-model="show" :actions="dataModule.actions" @select="onSelect" />
        <van-field v-model="data.type" placeholder="选择服务类型" right-icon="play" readonly="" @click="handelEvent" />
        <van-field v-model="data.userPhone" placeholder="请输入您的企业名称或姓名" />
        <div v-if="dataModule.type === 'finance'">
          <van-field v-model="data.count" placeholder="请选择知识产权拥有数量" right-icon="play" readonly="" @click="handelEvent('num')" />
          <van-field v-model="data.limit" placeholder="请选择金融需求额度" right-icon="play" readonly="" @click="handelEvent('limit')" />
        </div>
        <van-field v-model="data.password" placeholder="请输入手机号" />
      </van-form>
    </div>
    <div class="submitBtn" :style="{background: dataModule.color}">提交申请</div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 材料准备 ···
        </van-divider>
        <div class="decorate" :style="{color: dataModule.color}">==</div>
      </div>
      <div class="materials">
        <div class="" v-for="(item, key) in dataModule.list" :key="key">{{item}}</div>
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 登记流程 ···
        </van-divider>
        <div class="decorate" :style="{color: dataModule.color}">==</div>
      </div>
      <div class="flowItem">
        <img :src="dataModule.flowIcon" class="flowImg" />
      </div>
    </div>

    <div class="advantageSection">
      <div style="width: 4rem; margin: 0 auto .3rem auto;">
        <van-divider slot :style="styleObj">
          ··· 办理时限 ···
        </van-divider>
        <div class="decorate" :style="{color: dataModule.color}">==</div>
      </div>
      <div class="handleItem">
        <img :src="dataModule.handleDateIcon" class="handleImg" />
      </div>
    </div>

  </div>
</template>

<script>
  import copyrightItemHead from '@/components/copyrightItemHead.vue'
  export default {
    props: {
      dataModule: {
        type: Object,
        default: {}
      }
    },
    components: {
      copyrightItemHead
    },
    computed: {},
    data() {
      return {
        styleObj: {
          margin: 0,
          color: '',
          borderColor: '',
          fontSize: '.32rem',
          fontFamily: 'PingFangSC-Thin'
        },
        data: {},
        show: false
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.styleObj.color = this.dataModule.color
        this.styleObj.borderColor = this.dataModule.color
      })
    },
    methods: {
      handelEvent() {
        this.show = true;
      },
      onSelect(item) {
        this.show = false;
        this.data.type = item.name;
      },
      onSubmit() {

      }
    }
  }
</script>

<style scoped lang="less">
  .pageWrapper {
    min-height: 100vh;
    padding-bottom: .6rem;
    line-height: .4rem;
    .advantageSection {
      background: #fff;
      width: 6.9rem;
      padding: .3rem .3rem;
      box-sizing: border-box;
      border-radius: 4px;
      margin: 0.2rem auto 0rem auto;

      .worksItem {
        text-align: center;
      }

      .flowItem {
        text-align: center;

        .flowImg {
          width: 100%;
          height: auto;
        }
      }

      .handleItem {
        text-align: center;

        .handleImg {
          width: 100%;
          height: auto;
        }
      }

      .decorate {
        text-align: center;
        color: #fc7c21;
        font-size: .32rem;
      }
    }

    .loginForm {
      .van-field {
        background: #ffffff;
        border-radius: 4px;
        width: 6.9rem;
        height: .86rem;
        margin: 0 auto .3rem auto;
      }
    }

    .submitBtn {
      margin: .6rem auto 0.8rem auto;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 0.36rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      background: #fc7c21;
      border-radius: 4px;
      width: 6.9rem;
      height: 0.96rem;
      line-height: 0.96rem;
    }
  }
</style>
