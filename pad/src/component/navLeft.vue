<template>
  <div class="navLeftBox">
    <div class="slideNav">
      <div class="logo">
        <img class="icon-logo" src="../assets/image/icon-logo.png" />
      </div>
      <div class="homePage" @click="gotoHome()">
        <img class="icon-home" src="../assets/image/icon-home.png" />
        <div>首页</div>
      </div>
      <div class="my" @click="gotoSearch()">
        <img class="icon-my" src="../assets/image/icon-my.png" />
        <div>我的</div>
      </div>
      <div class="logOut" @click="signout()">
        <img class="icon-logOut" src="../assets/image/icon-logOut.png" />
        <div>退出</div>
      </div>
    </div>
  </div>
</template>

<script>
import { signoutRequest } from "../utils/business";
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    gotoHome() {
      this.$router.push({ path: "/home" });
    },
    gotoSearch() {
      this.$router.push({ path: "/search" });
    },
    signout() {
      signoutRequest().then(data => {
        console.log(data);
      });
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