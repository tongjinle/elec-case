<template>
  <div class="visitor">
    <div class="card">
      <div class="cardLeft">
        <div class="up">
          姓名
          <span>{{patientName}}</span>
        </div>
        <div class="down">
          <div class="item name">
            医生
            <span>{{doctorName}}</span>
          </div>
          <div class="item">
            上次随访
            <span>{{visitTime}}</span>
          </div>
          <div class="item">
            机器型号
            <span>{{deviceCate}}</span>
          </div>
        </div>
      </div>
      <div class="cardRight">
        <button class="btnBlue" @click="onAddVisit">添加随访</button>
        <button class="btnWhite" @click="onViewVisit">随访详情</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as config from "../utils/config";

export default {
  name: "visitorCard",

  props: {
    doctorName: String,
    patientName: String,
    visitTime: String,
    deviceCate: String,
    addVisitHandle: Function,
    viewVisitHandle: Function
  },
  data() {
    return {};
  },
  computed: {
    deviceCateText() {
      let value = this.deviceCate;
      let item = config.DEVICE_CATEGORIES.find(n => n.value === value);
      return item ? item.name : "";
    }
  },
  methods: {
    onAddVisit() {
      console.log("onAddVisit:", this.addVisitHandle);
      this.addVisitHandle && this.addVisitHandle();
    },
    onViewVisit() {
      this.viewVisitHandle && this.viewVisitHandle();
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.visitor {
  margin-top: 40px;
  width: 100%;
  font-size: @base / 3;
  .card {
    display: flex;
    justify-content: space-between;
    // border: 1px solid rgb(244, 244, 244);
    box-shadow: 1px 1px 5px #888888;
    border-radius: 10px;
    padding: 20px 20px;
    color: rgb(102, 102, 102);
    .cardLeft {
      .up {
        span {
          color: black;
          font-size: @base / 2.5;
        }
        margin-bottom: 20px;
      }
      .down {
        display: flex;
        justify-content: flex-start;
        .item {
          margin-right: @base / 2;
          span {
            color: black;
            font-size: @base / 2.5;
          }
          &.name {
            width: 2 * @base;
          }
        }
      }
    }
    .cardRight {
      display: flex;
      align-items: center;
      button {
        font-size: @base / 3;
        padding: 10px 30px;
        border: 1px solid rgb(18, 159, 259);
        border-radius: @base / 2.5;
      }
      .btnBlue {
        background-color: rgb(18, 159, 259);
        color: white;
        margin-right: @base / 2;
      }
      .btnWhite {
        background: white;
        color: rgb(18, 159, 259);
      }
    }
  }
}
</style>