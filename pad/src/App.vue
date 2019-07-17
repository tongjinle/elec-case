<template>
  <div class="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js'
      }
    },
    created() {
      // this.fetchData();
    },
    methods: {
      // async fetchData() {
      //   const data = await getData();
      //   this.msg = data;
      // }
    }
  }
</script>

<style lang="less">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    h1 {
      color: #CC3333;
    }
  }
</style>