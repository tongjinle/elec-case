<template>
  <div>
    <div class="btn" @click="takeQRCode">takeQRCode</div>
    <div class="content">{{qrcode}}</div>
  </div>
</template>

<script>
export default {
  name: "native",
  data() {
    return { qrcode: "" };
  },
  mounted() {
    window.QRcodeCallback = data => {
      console.log("window.QRcodeCallback:", data);
      this.qrcode = data;
    };
  },
  methods: {
    takeQRCode() {
      console.log("takeQRCode");
      window.sendToNative.takeQRCode();
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  color: #fff;
  background-color: steelblue;
  width: 10vw;
  height: 6vw;
  line-height: 6vw;
  text-align: center;
}
</style>