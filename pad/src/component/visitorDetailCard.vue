<template>
  <div class="visitorDetail">
    <div class="card" @click="gotoDetails">
      <div class="cardUp">
        <img src="../assets/image/time@2x.png" alt />
        {{date}}
      </div>
      <div class="cardDown">
        <div class="doctor item">
          <span class="title">医生</span>
          <span>{{doctorName}}</span>
        </div>
        <div class="battery item">
          <span class="title">电池</span>
          <span>{{batteryStatusText}}</span>
        </div>
        <div class="device item">
          <span class="title">机器</span>
          <span>{{deviceNo}}</span>
        </div>
        <div class="item">事件概况</div>
        <button class="xinlv" :class="{'active':isXinlv}">心率</button>
        <button class="qibo" :class="{'active':isQibo}">起搏</button>
        <button class="shezhi" :class="{'active':isShezhi}">设置</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from "../utils/config";
export default {
  name: "visitorDetailCard",
  props: {
    // 医生名字
    doctorName: String,
    // 电池状态
    batteryStatus: Number,
    // 事件
    events: {
      type: Number,
      default: 0
    },
    // 随访日期
    date: String,
    // 设备编号
    deviceNo: String
  },
  data() {
    return {};
  },
  computed: {
    batteryStatusText() {
      let item = config.BATTERY_STATUS.find(
        n => n.value === this.batteryStatus
      );
      return item ? item.name : "OK";
    },
    // 心率事件
    // value:1
    isXinlv() {
      return (this.events & 1) === 1;
    },
    // 起搏事件
    // value:2 或则 4
    isQibo() {
      return (this.events & 2) === 2 || (this.events & 4) === 4;
    },
    // 设置事件
    isShezhi() {
      return (this.events & 8) === 8;
    }
  },
  methods: {
    gotoDetails() {
      this.$emit("on-goto");
      // this.$router.push({ path: "/followUpMain", query:{name}});
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.visitorDetail {
  width: 100%;
  margin-top: 40px;
  .card {
    box-shadow: 1px 1px 5px #888888;
    border-radius: 10px;
    padding: 20px 20px;
    font-size: @base / 3;
    .cardUp {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
    .cardDown {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .item {
        margin-right: @base / 2;
        display: flex;
        align-items: center;
        span {
          color: black;
          font-size: @base / 2.5;
          &.title {
            font-size: @base / 3;
            margin-right: 5px;
          }
        }
        &.doctor {
          width: @base * 2;
        }
        &.battery {
          width: @base * 2;
        }
        &.device {
          width: @base * 2.5;
        }
      }
    }
  }

  //
  .xinlv,
  .qibo,
  .shezhi {
    padding: 10px @base / 2;
    font-size: @base / 2.5;
    border-radius: 70px;
    border: 1px solid #888888;
    margin-right: 20px;
    color: #000;
    background-color: white;
    letter-spacing: 2px;
    &.active {
      border: none;
      color: #fff;
    }
  }
  .xinlv {
    &.active {
      background-color: rgb(253, 204, 49);
    }
  }
  .qibo {
    &.active {
      background-color: rgb(32, 231, 174);
    }
  }
  .shezhi {
    &.active {
      background-color: rgb(90, 201, 60);
    }
  }
}
</style>