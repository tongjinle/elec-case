<template>
  <div class="login">
    <div class="login__banner">
      <img class="login__banner-img" src="../../assets/image/banner-login.png" />
    </div>
    <div class="login__form">
      <input class="form__item form__user" type="text" placeholder="用户名" v-model="userName" />
      <img src="../../assets/image/icon-user.png" alt />
      <input class="form__item form__password" type="password" placeholder="密码" v-model="password" />
      <img src="../../assets/image/icon-password.png" alt />
      <button class="form__item form__login" @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
import { loginRequest } from "../../utils/business";
export default {
  name: "login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  created() {},
  methods: {
    login() {
      loginRequest(this.userName, this.password).then(data => {
        if (data.status == 200) {
          localStorage.setItem("token", data.data);
          this.$router.push({ path: "/home" });
        }
      });
    }
  }
};
</script>

<style lang="less">
@base: 75rem;
.login {
  &__banner {
    width: 100%;
    &-img {
      display: block;
      width: 100%;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20 / @base 0 0 0;
    img {
      position: relative;
      top: -45px;
      left: -180px;
    }
    .form__item {
      box-sizing: border-box;
      // margin: 50 / @base 0 0 0;
      padding: 0 0 0 100 / @base;
      border: 1px solid grey;
      border-radius: 50 / @base;
      outline: none;
      width: 600 / @base;
      height: 80 / @base;
      font-size: 40 / @base;
    }
    .form__user {
      margin-top: 50px;
    }
    .form__user:before {
      // position: absolute;
      // top: 50px;
      // left: 50px;
      content: "sdfsdfs";
      display: block;
      width: 100 / @base;
      height: 107 / @base;
      background-color: red;
      // background: url('../assets/image/icon-user.png') no-repeat;
    }
    .form__login {
      padding: 0;
      border: 1px solid transparent;
      background-color: rgb(18, 159, 249);
      color: #fff;
    }
  }
}
</style>