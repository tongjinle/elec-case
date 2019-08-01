<template>
  <div class="followUpMainBox">
    <div class="head">
      <div class="left" @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>随访详情</p>
      <div class="right">
        <DataTime v-if="showRight" />
        <div @click="showCardLeft()">提交</div>
      </div>
    </div>
    <div class="leftCard" v-if="showCard" @click="closeCard()">
      <div class="cardMain">
        <div class="title">随访结论：</div>
        <div class="cardItem">
          <div>电池状态异常：</div>
          <van-checkbox v-model="msg"></van-checkbox>
        </div>
        <div class="cardItem">
          <div>发现心率异常AT/AF：</div>
          <van-checkbox v-model="msg"></van-checkbox>
        </div>
        <div class="cardItem">
          <div>起搏参数异常：</div>
          <van-checkbox v-model="msg"></van-checkbox>
        </div>
        <div class="cardItem">
          <div>是否修改设置：</div>
          <van-checkbox v-model="msg"></van-checkbox>
        </div>
        <div class="choseItem">
          <div>随访医师：</div>
          <DropDown />
        </div>
        <div class="choseItem">
          <div>下次时间：</div>
          <DataTime />
        </div>
        <div class="foot">
          <button @click="gotoDetails">提交</button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="mainer">
          <div class="title">随访日期：</div>
          <div class="msg">2019-06-24</div>
        </div>
        <div class="mainer">
          <div class="title">随访医师：</div>
          <div class="msg">李颖</div>
        </div>
        <div class="mainer">
          <div class="title">随访种类：</div>
          <div class="msg">常规</div>
        </div>
      </div>
      <div class="itemContent">
        <div class="title">随访日期：</div>
        <div class="contentBox">
          <div class="msgBox">
            <div class="mainer">
              <div class="contentBoxTitle">1.电池状态：</div>
              <div class="msg">ERI</div>
            </div>
            <div class="mainer">
              <div class="contentBoxTitle">预估平均使用寿命：</div>
              <div class="msg">2</div>
            </div>
          </div>
          <div class="tableBox">
            <div class="title">2.测试结果：</div>
            <div class="table">
              <div class="tr firstTr">
                <div class="td">植入部位</div>
                <div>右心房</div>
                <div>右心室</div>
                <div>左心室</div>
              </div>
              <div class="tr">
                <div class="td">阈值（V）</div>
                <div>1.25</div>
                <div>1.25</div>
                <div></div>
              </div>
              <div class="tr">
                <div class="td">脉宽（ms）</div>
                <div>0.4</div>
                <div>0.6</div>
                <div></div>
              </div>
              <div class="tr">
                <div class="td">P/P波（mv）</div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="tr">
                <div class="td">起搏阻抗（Ω）</div>
                <div>82.6%</div>
                <div>0%</div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="tableBox">
            <div class="title">3.参数设置：</div>
            <div class="table">
              <div class="tr firstTr">
                <div class="td">起搏模式</div>
                <div>底限频率</div>
                <div>上限跟踪频率</div>
              </div>
              <div class="tr">
                <div class="td">AAI+</div>
                <div>60次/分钟</div>
                <div>60次/分钟</div>
              </div>
              <div class="tr">
                <div class="td">右房电极</div>
                <div>输出电压/脉宽</div>
                <div>感知灵敏度</div>
              </div>
              <div class="tr">
                <div class="td"></div>
                <div>60</div>
                <div>60mv</div>
              </div>
              <div class="tr">
                <div class="td">右室电极</div>
                <div>输出电压/脉宽</div>
                <div>感知灵敏度</div>
              </div>
              <div class="tr">
                <div class="td"></div>
                <div>60</div>
                <div>60mv</div>
              </div>
              <div class="tr">
                <div class="td">左室电极</div>
                <div>输出电压/脉宽</div>
                <div>感知灵敏度</div>
              </div>
              <div class="tr">
                <div class="td"></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="massageBox">
            <div class="title">4.诊断信息</div>
            <div class="msgContent">AT/AF：</div>
          </div>
          <div class="massageBox">
            <div class="title">5.医生建议</div>
            <div class="msgContent">多喝热水！多喝热水！</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "@/component/dropDown";
import DataTime from "@/component/dataTime";
export default {
  name: "followUpMain",
  components: { DataTime, DropDown },
  data() {
    return {
      currentDate: new Date(),
      minDate: new Date(),
      showRight: false,
      showCard: false,
      msg: ""
    };
  },
  methods: {
    showCardLeft() {
      this.showCard = true;
    },
    closeCard() {
      this.showCard = false;
    },
    getBack() {
      this.$router.back(-1);
    },
    gotoDetails() {
      this.$router.push({ path: "/visitorDetails" });
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.followUpMainBox {
  font-size: @base / 3;
  .head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    width: 100%;
    .left,
    .right {
      width: 10%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: rgb(18, 159, 259);
      img {
        margin-left: @base;
        width: 25px;
        height: 25px;
      }
    }
    // .right {
    //   display: flex;
    //   justify-content: flex-end;
    //   div {
    //     margin-right: @base;
    //     color: rgb(18, 159, 259);
    //   }
    // }
    p {
      width: 80%;
      font-size: @base / 2;
      text-align: center;
      margin: 0;
      line-height: 50px;
    }
  }
  .leftCard {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    .cardMain {
      width: 25%;
      background: white;
      padding: @base*2 20px;
      .title {
        font-size: @base / 2;
        color: rgb(102, 102, 102);
      }
      .cardItem {
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin-top: 20px;
        padding: 0 20px;
      }
      .choseItem {
        padding: 0 20px;
        margin-top: 20px;
        div {
          margin-bottom: 20px;
        }
      }
      .foot {
        margin-top: @base*5;
        display: flex;
        justify-content: center;
        button {
          width: 80%;
          background-color: rgb(18, 159, 259);
          padding: 5px 0;
          border: none;
          border-radius: 10px;
          color: white;
        }
      }
    }
  }
  .content {
    padding: 0 @base;
    .item {
      display: flex;
      justify-content: flex-start;
      .mainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: @base / 2;
        .title {
          width: @base*1.8;
          margin-right: @base / 3;
        }
        .msg {
          width: @base*2.2;
          padding: 10px 20px;
          background-color: rgb(247, 247, 247);
          color: rgb(102, 102, 102);
        }
      }
    }
    .itemContent {
      margin-top: 20px;
      .contentBox {
        padding: 0 20px;
        .msgBox {
          display: flex;
          justify-content: flex-start;
          margin-top: 10px;
          .mainer {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: @base;
            .contentBoxTitle {
              margin-right: @base / 2;
            }
            .msg {
              width: @base*3;
              padding: 10px 20px;
              background-color: rgb(247, 247, 247);
              color: rgb(102, 102, 102);
            }
          }
        }
        .tableBox {
          margin-bottom: 20px;
          .table {
            margin-top: 20px;
            display: flex;
            justify-content: flex-start;
            .tr {
              div {
                width: @base*2.3;
                height: @base / 2;
                padding: 10px 10px;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
                text-align: center;
              }
              .td {
                border-top: 1px solid black;
              }
            }
            .firstTr {
              div {
                border-left: 1px solid black;
              }
            }
          }
        }
        .massageBox {
          margin-bottom: 20px;
          .msgContent {
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>