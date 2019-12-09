<template>
  <div class="numberBox">
    <input type="number" v-model="val" @change="change" @click="selectAll" />
    <div class="btns">
      <div @click="add">
        <img class="upBtn" src="../assets/image/up.png" alt />
      </div>
      <div @click="reduce">
        <img class="downBtn" src="../assets/image/down2.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "numberBox",
  props: {
    // 合法值,当用户输入非法的时候,val会退回成validValue,作为一种保护机制
    validValue: 0,
    // 来自父级的传值
    value: 0,
    rule: {
      type: RegExp,
      default() {
        return /^(\d+)?(\.\d+)?$/;
      }
    },
    changeHandle: () => {}
  },
  data() {
    return {
      val: 0
    };
  },

  mounted() {
    this.val = this.value;
    this.change();
  },
  watch: {
    value() {
      this.val = this.value;
      this.change();
    }
  },
  methods: {
    // 点击就选择文本
    selectAll(e) {
      e.target.select();
    },
    change() {
      if (!this.rule.test(this.val)) {
        // this.val = 0;
        console.log(this.rule, this.val);
        this.val = this.validValue;
      }
      {
        let val = this.val;
        if (val !== "") {
          val = Math.round(1e5 * val) / 1e5;
          this.val = val;
        }
      }
      console.log("add button : change : ", this.val);
      // this.changeHandle && this.changeHandle(this.val);
      this.$emit("on-change", this.val);
    },
    add() {
      this.val -= 0;
      this.val += 1;
      this.change();
      // this.$emit("on-change", this.val);
    },
    reduce() {
      this.val -= 0;
      this.val -= 1;
      this.change();
      // this.$emit("on-change", this.val);
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.numberBox {
  position: relative;
  font-size: @base / 3;
  // height: @base*1.05;
  width: 100%;
  input {
    box-sizing: border-box;
    padding: 10px 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 5px;
    // width: @base*3;
    width: 100%;
  }
  .btns {
    @radius: 5px;
    display: inline-block;
    background-color: rgb(221, 221, 221);
    width: @base*0.8;
    height: 100%;
    position: absolute;
    top: 0;
    right: 1px;
    // left: @base*3;
    font-size: @base*0.2;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-top-right-radius: @radius;
    border-bottom-right-radius: @radius;
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
</style>
