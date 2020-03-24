<template>
  <div id="app">
    <router-view />
    <Footer :show="show" :display="display"></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer.vue'
  export default {
    name: 'App',
    components: {
      Footer
    },
    watch: {
      '$route'(to, from) {
        if (to.meta.showBar) {
          this.show = true;
          this.display = to.path === '/mine' ? false : true;
        } else {
          this.show = false;
        }
      }
    },
    data() {
      return {
        show: false,
        display: true
      }
    }
  }
</script>

<style lang="less">
  @import 'index.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: .28rem;
    color: #000;
    background: #EEEEEE;
    min-height: 100vh;
  }
</style>
