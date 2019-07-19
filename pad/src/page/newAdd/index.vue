<template>
  <div class="addBox">
    <div class="head">
      <div>
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>新增随访</p>
      <div>提交</div>
    </div>
    <div class="content">
      <div class="item">
        <div class="title">随访类型</div>
        <van-radio-group v-model="fllowType" class="radioFlex">
          <van-radio name="1" class="radioItem">常规</van-radio>
          <van-radio name="2" class="radioItem">不适随访</van-radio>
          <van-radio name="3" class="radioItem">HIS随访</van-radio>
        </van-radio-group>
      </div>
      <div class="item">
        <div class="title">电池状态</div>
        <div class="mainer" style="align-items:flex-start">
          <van-radio-group v-model="batteryState" class="radio">
            <van-radio name="1" class="radioItem">OK</van-radio>
            <van-radio name="2" class="radioItem">BRI</van-radio>
          </van-radio-group>
          <DropDown />
        </div>
      </div>
      <div class="item">
        <div class="title">电极情况</div>
        <div class="mainer">
          <div class="mainerItemTitle"></div>
          <div class="mainerItem">A</div>
          <div class="mainerItem">RV</div>
          <div class="mainerItem">LV</div>
        </div>
        <div class="mainer" v-for="(item,index) in list" :key="index">
          <div class="mainerItemTitle">{{item.title}}</div>
          <div class="mainerItem" v-for="(itemInput,indexInput) in item.input" :key="indexInput">
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "@/component/dropDown";
export default {
  name: "index",
  components: { DropDown },
  data() {
    return {
      fllowType: "1",
      batteryState: "1",
      option1: [
        { text: ">10", value: 0 },
        { text: ">20", value: 1 },
        { text: ">30", value: 2 }
      ],
      value1: 0,
      list: [
        { title: "阈值（V）", input: ["", "", ""] },
        { title: "脉宽（ms）", input: ["", "", ""] },
        { title: "感知（mv）", input: [""] }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.addBox {
  font-size: @base / 2;
  .head {
    display: flex;
    justify-content: flex-start;
    div {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(18, 159, 259);
      font-size: 38px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    p {
      width: 80%;
      font-size: 40px;
      text-align: center;
      margin: 0;
      line-height: 100px;
    }
  }
  .content {
    padding: 0 100px;
    .item {
      margin-bottom: 20px;
      .title {
        padding-left: 20px;
        border-left: 5px solid rgb(18, 159, 259);
        margin-bottom: 20px;
      }
      .mainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        .mainerItemTitle {
          width: @base*3;
        }
        .mainerItem {
          width: @base*5;
          text-align: center;
        }
        .radio {
          margin-top: @base / 4;
          margin-right: @base / 1;
          .radioItem {
            height: @base / 1.5;
            margin-bottom: @base / 2;
          }
        }
      }
      .radioFlex {
        display: flex;
        justify-content: flex-start;
        .radioItem {
          margin-right: 30px;
          height: @base / 1.5;
        }
      }
    }
  }
}
</style>