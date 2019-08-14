<template>
  <div class="navLeftBox">
    <div class="slideNav">
      <div class="logo">
        <img class="icon-logo" src="../assets/image/icon-logo.png" />
      </div>
      <div class="homePage" @click="toHomePage">
        <img class="icon-home" src="../assets/image/icon-home.png" />
        <div>首页</div>
      </div>
      <div class="my" @click="toVisitorsPage">
        <img class="icon-my" src="../assets/image/icon-my.png" />
        <div>我的</div>
      </div>
      <div class="logOut" @click="logout">
        <img class="icon-logOut" src="../assets/image/icon-logOut.png" />
        <div>退出</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bll from "../utils/business";

export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    toHomePage() {
      this.$router.push("/home");
    },
    toVisitorsPage() {
      this.$router.push("/visitors");
    },
    async logout() {
      await bll.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.navLeftBox {
  font-size: @base / 3;
  width: 100%;
  height: 100vh;
  .slideNav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    .logo {
      margin-top: 20px;
    }
    .homePage {
      margin-top: -@base*5;
    }
    .my {
      margin-top: -@base*6;
    }
    .logOut {
      margin-bottom: 20px;
    }
  }
}
</style>