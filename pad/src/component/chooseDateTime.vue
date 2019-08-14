<template>
  <div class="dateTime">
    <div class="dateTimeBox" @click="showitem">
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
  name: "dateTime",
  props: {
    chooseTimeHandle: Function
  },
  data() {
    return {
      showtime: false,
      minDate: new Date(),
      currentDate: new Date()
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
      let time = this.timeFormat(this.currentDate.getTime());
      this.chooseTimeHandle && this.chooseTimeHandle(timeStr);
    },
    timeFormat(ms) {
      let date = new Date(parseInt(ms));
      return [
        date.getFullYear(),
        (100 + (date.getMonth() + 1) + "").slice(1),
        date.getDate()
      ].join("-");
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.dateTime {
  width: @base*4;
  background-color: rgb(247, 247, 247);
  font-size: @base / 3;
  padding: 10px 20px;
  border-radius: 5px;
  .dateTimeBox {
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