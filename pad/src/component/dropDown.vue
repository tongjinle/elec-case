<template>
  <div class="dropDown">
    <div class="box" @click="showitem">
      <input type="text" v-model="value" />
      <img src="../assets/image/s@2x.png" alt />
    </div>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
export default {
  name: "dropDown",
  props: {
    actions: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      value: "",
      show: false
    };
  },
  mounted() {
    if (!this.value && this.actions.length) {
      this.onSelect(this.actions[0]);
    }
  },
  updated() {
    // console.log("updated", this.actions);
    if (!this.value && this.actions.length) {
      this.onSelect(this.actions[0]);
    }
  },
  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.value = item.name;
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
  font-size: @base / 3;
  .box {
    input {
      padding: 10px 20px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
      width: @base*3;
    }
    img {
      position: relative;
      right: @base*0.9;
    }
  }
}
</style>