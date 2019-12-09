<template>
  <div class="dropDown">
    <div class="box" @click="showitem">
      <input type="text" disabled v-model="val" />
      <img src="../assets/image/s@2x.png" alt />
    </div>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
export default {
  name: "dropDown",
  props: {
    value: "",
    actions: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      val: "",
      show: false
    };
  },
  watch: {
    value() {
      this.setValue();
      if (this.actions) {
        let item = this.actions.find(n => n.value === this.value);
        this.val = item.name;
        this.$emit("on-change", item.value);
      }
    }
  },
  mounted() {
    this.setValue();
  },
  updated() {
    // console.log("updated", this.actions);
    // if (!this.val && this.actions.length) {
    //   this.onSelect(this.actions[0]);
    // }
  },
  methods: {
    setValue() {
      console.log("dropdown setvalue");
      if (this.value) {
        this.val = this.value;
      } else {
        if (!this.val && this.actions.length) {
          this.onSelect(this.actions[0]);
        }
      }
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.val = item.name;
      this.$emit("on-change", item.value);
    },
    showitem() {
      this.show = true;
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.dropDown {
  font-size: @base / 4;
  .box {
    display: flex;
    align-items: center;
    input {
      padding: 10px 20px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
      width: @base*2.5;
      background-color: #fff;
      // width: 100%;
    }
    img {
      position: relative;
      right: @base*0.9;
      width: 20px;
    }
  }
}
</style>
