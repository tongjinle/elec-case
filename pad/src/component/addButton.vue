<template>
  <div class="addButton">
    <div class="addButtonbox">
      <input type="text" v-model="value" />
      <div class="addbtn">
        <div @click="add">
          <img class="upBtn" src="../assets/image/up.png" alt />
        </div>
        <div @click="reduce">
          <img class="downBtn" src="../assets/image/down2.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addButton",
  data() {
    return {
      value: 5
    };
  },
  mounted() {},
  methods: {
    add() {
      this.value += 1;
    },
    reduce() {
      this.value -= 1;
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.addButton {
  position: relative;
  font-size: @base / 3;
  height: @base*1.05;
  .addButtonbox {
    input {
      padding: 10px 20px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
      width: @base*3;
    }
    .addbtn {
      display: inline-block;
      background-color: rgb(221, 221, 221);
      width: @base*0.8;
      height: @base*0.85;
      position: absolute;
      top: 0;
      left: @base*3;
      font-size: @base*0.2;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      div {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      width: @base / 2.5;
      height: @base / 2.5;
    }
  }
}
</style>