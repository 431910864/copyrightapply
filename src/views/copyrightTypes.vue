<template>
  <div class="pageWrapper">
    <copyrightItem :dataModule="dataModule"></copyrightItem>
  </div>
</template>

<script>
  import copyrightItem from '@/components/copyrightItem.vue'
  export default {
    components: {
      copyrightItem
    },
    data() {
      return {
        itemImage: require('@/assets/images/adver_1.png'),
        dataModule: {},
        data: [{
          type: 'register',
          color: '#fc7c21',
          itemImage: require('@/assets/images/adver_1.png'),
          flowIcon: require('@/assets/images/flow_1.png'),
          handleDateIcon: require('@/assets/images/handleDate_1.png'),
          actions: [{
            name: '软件著作权'
          }, {
            name: '作品著作权'
          }],
          list: [
            '1、软件的源程序及文档；',
            '2、软件的名称及版本号、开发完成时间、发表时间；',
            '3、软件运行环境（指软件运行的硬件和软件环境）；',
            '4、软件开发使用的编程语言的名称及版本号、源程序总行数；',
            '5、软件的主要功能、用途和技术特点作简要说明。'
          ]
        }, {
          type: 'finance',
          color: '#2e4bd4',
          itemImage: require('@/assets/images/adver_2.png'),
          flowIcon: require('@/assets/images/flow.png'),
          handleDateIcon: require('@/assets/images/handleDate_2.png'),
          actions: [{
            name: '质押贷款'
          }, {
            name: '质权登记'
          }, {
            name: '撤销质权'
          }],
          list: [
            '1、软件的源程序及文档；',
            '2、软件的名称及版本号、开发完成时间、发表时间；',
            '3、软件运行环境（指软件运行的硬件和软件环境）；',
            '4、软件开发使用的编程语言的名称及版本号、源程序总行数；',
            '5、软件的主要功能、用途和技术特点作简要说明。'
          ]
        }, {
          type: 'service',
          color: '#9350e5',
          itemImage: require('@/assets/images/adver_3.png'),
          flowIcon: require('@/assets/images/flow_2.png'),
          handleDateIcon: require('@/assets/images/handleDate_3.png'),
          actions: [{
            name: '软件测试'
          }, {
            name: '版权交易'
          }, {
            name: 'DCI服务'
          }, {
            name: '政府项目申报'
          }, {
            name: '专利'
          }, {
            name: '商标'
          }, {
            name: '维权监测'
          }, {
            name: '诉讼存证'
          }],
          list: [
            '1、软件的源程序及文档；',
            '2、软件的名称及版本号、开发完成时间、发表时间；',
            '3、软件运行环境（指软件运行的硬件和软件环境）；',
            '4、软件开发使用的编程语言的名称及版本号、源程序总行数；',
            '5、软件的主要功能、用途和技术特点作简要说明。'
          ]
        }],
      }
    },
    mounted() {
      let type = this.$route.query.type;
      if (type == 1) {
        this.dataModule = this.data[0]
      } else if (type == 2) {
        this.dataModule = this.data[1]
      } else {
        this.dataModule = this.data[2]
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">

</style>
