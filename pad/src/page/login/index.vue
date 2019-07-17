<template>
  <div class="login">
    <div class="login__banner">
      <img class="login__banner-img" src="../../assets/image/banner-login.png" />
    </div>
    <div class="login__form">
      <input class="form__item form__user" type="text" placeholder="用户名"/>
      <input class="form__item form__password" type="text" placeholder="密码"/>
      <button class="form__item form__login">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
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
      padding: 20/@base 0 0 0;
      .form__item {
        box-sizing: border-box;
        margin: 50/@base 0 0 0;
        padding: 0 0 0 100/@base;
        border: 1px solid grey;
        border-radius: 50/@base;
        outline: none;
        width: 600/@base;
        height: 80/@base;
        font-size: 40/@base;
      }
      .form__user:before {
        // position: absolute;
        // top: 50px;
        // left: 50px;
        content: 'sdfsdfs';
        display: block;
        width: 100/@base;
        height: 107/@base;
        background-color: red;
        // background: url('../assets/image/icon-user.png') no-repeat;
      }
      .form__login {
        padding: 0;
        border: 1px solid transparent;
        background-color: lightblue;
        color: #fff;
      }
    }
  }
</style>