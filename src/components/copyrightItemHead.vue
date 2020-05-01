<template>
  <div class="pageContainer">
    <header class="header">
      <!-- <div class="intro">
        <div>想你所想</div>
        <div>提供个性化服务</div>
      </div> -->
      <img :src="itemImage" class="itemImage" />
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      itemImage: {
        type: String,
        default: ''
      }
    },
    data() {
      return{

      }
    }
  }
</script>

<style lang="less" scoped>
  .pageContainer{
    margin-bottom: .6rem;
    .itemImage{
      width: 100%;
      height: auto;
    }
  }
</style>
