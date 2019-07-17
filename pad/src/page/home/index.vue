<template>
  <div class="home">
    <div class="slideNav">
      <div class="sideNav-item logo">
        <img class="icon-logo" src="../../assets/image/icon-logo.png" />
      </div>
      <div class="sideNav-item homePage">
        <img class="icon-home"  src="../../assets/image/icon-home.png"/>
        <div>首页</div>
      </div>
      <div class="sideNav-item my">
        <img class="icon-my"  src="../../assets/image/icon-my.png"/>
        <div>我的</div>
      </div>
      <div class="sideNav-item logOut">
        <img class="icon-logOut"  src="../../assets/image/icon-logOut.png"/>
        <div>退出</div>
      </div>
    </div>
    <div class="main">
      <div class="title">首页</div>
      <div class="content">
        <MonthProcess />
        <VisitorDataCard />
        <VisitorDataCard />
        <FanChart />
      </div>
    </div>
  </div>
</template>

<script>
  import MonthProcess from '@/component/monthProcess';
  import VisitorDataCard from '@/component/visitorDataCard';
  import FanChart from '@/component/fanChart';

  export default {
    name: 'home',
    components: { MonthProcess, VisitorDataCard, FanChart },  
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
  @base: 75rem;
  .home {
    background-color: grey;
    font-size: 28/@base;
    color: #333333;

    &:after {
      content: '';
      display: block;
      clear: both;
    }

    // 侧面导航
    .slideNav {
      float: left;
      position: relative;
      background-color: #fff;
      box-sizing: border-box;
      width: 150/@base;

      .sideNav-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          margin: 0 0 16/@base 0;
        }
      }
      // logo
      .logo {
        padding: 40/@base 0 0 0;
        .icon-logo {
          width: 65/@base;
          height: 80/@base;
        }
      }
      // 首页
      .homePage {
        margin: 80/@base 0 0 0;
        .icon-home {
          width: 50/@base;
          height: 50/@base;
        }
      }
      // 我的
      .my {
        margin: 60/@base 0 0 0;
        .icon-my {
          width: 50/@base;
          height: 51/@base;
        }
      }
      // 退出
      .logOut {
         margin: 330/@base 0 0 0;
        .icon-logoOut {
          width: 50/@base;
          height: 51/@base;
        }
      }
    }
  
    .main {
      margin-left: 150/@base;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background-color: #fff;
        width: 100%;
        height: 100/@base;
        font-size: 36/@base;
      }
      // 内容
      .content {
        width: 100%;
        padding: 30/@base 0 0 30/@base;
        box-sizing: border-box;
      }
    }

 
  }
</style>