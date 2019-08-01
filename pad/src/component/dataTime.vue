<template>
  <div class="dataTime">
    <div class="dataTimeBox" @click="showitem">
      <span>{{time}}</span>
      <img src="../assets/image/calendar.png" alt />
    </div>
    <div class="time" v-if="showtime" @click="closeitem">
      <van-datetime-picker
        class="choseeTime"
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @confirm="choose()"
        @change="showValue()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "addButton",
  data() {
    return {
      showtime: false,
      minDate: new Date(),
      currentDate: new Date(),
      time: "2019/1/1"
    };
  },
  mounted() {},
  methods: {
    showitem() {
      this.showtime = true;
    },
    closeitem() {
      this.showtime = false;
    },
    showValue() {
      console.log(this.currentDate);
    },
    choose() {
      console.log(this.currentDate.getTime(), "1");
      this.time = this.currentDate.getTime();
      this.time = this.timeFormat(this.time);
      console.log(this.time);
    },
    timeFormat(nS) {
      let date = new Date(parseInt(nS)); // 时间戳为10位需乘1000，为13位则不用

      let Y = date.getFullYear(); // 年
      let M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1; // 月
      let D =
        date.getDate() < 10 ? "0" + date.getDate() + "" : date.getDate() + ""; // 日

      let h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); // 时
      let m =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); // 分
      let s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); // 秒
      return Y + "-" + M + "-" + D; // yyyy-mm-dd
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.dataTime {
  width: @base*4;
  background-color: rgb(247, 247, 247);
  font-size: @base / 3;
  padding: 10px 20px;
  border-radius: 5px;
  .dataTimeBox {
    display: flex;
    justify-content: flex-start;
    span {
      margin-right: @base;
    }
    img {
      width: @base / 2;
      height: @base / 2;
    }
  }
  .time {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    .choseeTime {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
}
</style>