<template>
  <div class="followUpContentBox">
    <div class="head">
      <div class="left">
        <img @click="getBack()" src="../../assets/image/back.png" alt />
        <img style="margin-left:10px;" src="../../assets/image/printing.png" alt />
      </div>
      <p>随访详情</p>
      <div class="right">
        <ChooseDateTime v-if="showRight" />
        <div>{{list.paperVO.date}}</div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="mainer">
          <div class="title">随访日期：</div>
          <div class="msg">{{list.nextDate}}</div>
        </div>
        <div class="mainer">
          <div class="title">随访医师：</div>
          <div class="msg">{{list.paperVO.doctor.name}}</div>
        </div>
        <div class="mainer">
          <div class="title">随访种类：</div>
          <div class="msg">{{fullCategory}}</div>
        </div>
      </div>
      <div class="itemContent">
        <div class="title">随访记录：</div>
        <div class="contentBox">
          <div class="msgBox">
            <div class="mainer">
              <div class="contentBoxTitle">1.电池状态：</div>
              <div class="msg">{{fullBatteryStatus}}</div>
            </div>
            <div class="mainer">
              <div class="contentBoxTitle">预估平均使用寿命：</div>
              <div class="msg">{{fullDuration}}</div>
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
                <div>{{list.paperVO.threshold.a}}</div>
                <div>{{list.paperVO.threshold.rv}}</div>
                <div>{{list.paperVO.threshold.lv}}</div>
              </div>
              <div class="tr">
                <div class="td">脉宽（ms）</div>
                <div>{{list.paperVO.pulseWidth.a}}</div>
                <div>{{list.paperVO.pulseWidth.rv}}</div>
                <div>{{list.paperVO.pulseWidth.lv}}</div>
              </div>
              <div class="tr">
                <div class="td">P/P波（mv）</div>
                <div>{{list.paperVO.perception.a}}</div>
                <div>{{list.paperVO.perception.rv}}</div>
                <div>{{list.paperVO.perception.lv}}</div>
              </div>
              <div class="tr">
                <div class="td">起搏阻抗（Ω）</div>
                <div>{{list.paperVO.impedance.a}}</div>
                <div>{{list.paperVO.impedance.rv}}</div>
                <div>{{list.paperVO.impedance.lv}}</div>
              </div>
              <div class="tr">
                <div class="td">起搏百分比（%）</div>
                <div>{{AP}}</div>
                <div></div>
                <div>{{VP}}</div>
              </div>
            </div>
          </div>
          <div class="tableBox">
            <div class="title">3.参数设置：</div>
            <div class="table">
              <div class="tr firstTr">
                <div class="td">起搏模式</div>
                <div>低限频率</div>
                <div>上限跟踪频率</div>
              </div>
              <div class="tr">
                <div class="td">{{fullMode}}</div>
                <div>{{list.paperVO.down}}次/分钟</div>
                <div>{{list.paperVO.up}}次/分钟</div>
              </div>
              <div class="tr">
                <div class="td">右房电极</div>
                <div>输出电压/脉宽</div>
                <div>感知灵敏度</div>
              </div>
              <div class="tr">
                <div class="td"></div>
                <div>{{list.paperVO.outputVoltage.a}}/{{list.paperVO.outputPulseWidth.a}}</div>
                <div>{{list.paperVO.outputPerception.a}}mv</div>
              </div>
              <div class="tr">
                <div class="td">右室电极</div>
                <div>输出电压/脉宽</div>
                <div>感知灵敏度</div>
              </div>
              <div class="tr">
                <div class="td"></div>
                <div>{{list.paperVO.outputVoltage.rv}}/{{list.paperVO.outputPulseWidth.rv}}</div>
                <div>{{list.paperVO.outputPerception.rv}}mv</div>
              </div>
              <div class="tr">
                <div class="td">左室电极</div>
                <div>输出电压/脉宽</div>
                <div>感知灵敏度</div>
              </div>
              <div class="tr">
                <div class="td"></div>
                <div>{{list.paperVO.outputVoltage.lv}}/{{list.paperVO.outputPulseWidth.lv}}</div>
                <div>{{list.paperVO.outputPerception.lv}}mv</div>
              </div>
            </div>
          </div>
          <div class="massageBox">
            <div class="title">4.诊断信息</div>
            <div class="msgContent">AT/AF：{{list.paperVO.ataf==true?'有AT/AF异常':'无异常'}}</div>
          </div>
          <div class="massageBox">
            <div class="title">5.医生建议</div>
            <div class="msgContent">{{list.paperVO.advise==''?'无':list.paperVO.advise}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "@/component/dropDown";
import ChooseDateTime from "@/component/chooseDateTime";
import * as bll from "../../utils/business";
import * as config from "../../utils/config";

export default {
  name: "followUpContent",
  components: { ChooseDateTime, DropDown },
  data() {
    return {
      list: {
        deviceCate: "",
        doctorId: "",
        doctorName: "",
        nextDate: "",
        paperVO: {
          advise: "",
          apRatio: "",
          ataf: "",
          atafImg: "",
          batteryStatus: "",
          category: "",
          date: "",
          doctor: {
            id: "",
            name: ""
          },
          down: "",
          duration: "",
          efImg: "",
          efRatio: "",
          events: "",
          impedance: {
            a: "",
            lv: "",
            rv: ""
          },
          mode: "",
          nextDate: "",
          outputPerception: {
            a: "",
            lv: "",
            rv: ""
          },
          outputPulseWidth: {
            a: "",
            lv: "",
            rv: ""
          },
          outputVoltage: {
            a: "",
            lv: "",
            rv: ""
          },
          perception: {
            a: "",
            lv: "",
            rv: ""
          },
          pulseWidth: {
            a: "",
            lv: "",
            rv: ""
          },
          qrsImg: "",
          qrsRatio: "",
          threshold: {
            a: "",
            lv: "",
            rv: ""
          },
          up: "",
          vpRatio: ""
        },
        patientId: "",
        patientName: "",
        treatId: ""
      },
      nextDate: "",
      // 医生编号
      doctor: "",
      category: -1,
      //
      batteryStatus: "",
      duration: "",
      // // 电极阈值
      // threshold: { a: "", rv: "", lv: "" },
      // // 电极脉宽
      // pulseWidth: { a: "", rv: "", lv: "" },
      // // 电极感知
      // perception: { a: "", rv: "", lv: "" },
      // // 电极阻抗
      // impedance: { a: "", rv: "", lv: "" },
      // up: "",
      // down: "",
      // // 输出电压
      // outputVoltage: { a: "", rv: "", lv: "" },
      // // 输出脉宽
      // outputPulseWidth: { a: "", rv: "", lv: "" },
      // // 输出感知
      // outputPerception: { a: "", rv: "", lv: "" },
      // ataf
      // ataf: "",
      // apRatio: "",
      // vpRatio: "",
      // 等待选择的医生们
      doctors: [],
      // 事件选择
      // 电池事件
      isBattery: false,
      // 心率事件
      isXinlv: false,
      // 起搏事件
      isQibo: false,
      // 设置事件
      isShezhi: false,
      // 时间步长
      timeStep: 0,
      timeSteps: [],

      showRight: false,
      isShowCard: false,
      msg: ""
    };
  },
  computed: {
    AP() {
      let data = this.list.paperVO.apRatio;
      let x = [];
      for (var a = 0; a < data.length; a++) {
        if (Number(data[a]) == data[a]) {
          x.push(data[a]);
        }
      }
      if (x.length == 2) {
        data = x[0] + "." + x[1];
        return data;
      } else if (x.length == 3) {
        data = x[0] + x[1] + "." + x[2];
        return data;
      } else {
        return "";
      }
    },
    VP() {
      let data = this.list.paperVO.vpRatio;
      let x = [];
      for (var a = 0; a < data.length; a++) {
        if (Number(data[a]) == data[a]) {
          x.push(data[a]);
        }
      }
      if (x.length == 2) {
        data = x[0] + "." + x[1];
        return data;
      } else if (x.length == 3) {
        data = x[0] + x[1] + "." + x[2];
        return data;
      } else {
        return "";
      }
    },
    fullCategory() {
      let category = this.list.paperVO.category;
      let item = config.VISIT_TYPES.find(n => n.value === category);
      return item ? item.name : "";
    },
    fullBatteryStatus() {
      let item = config.BATTERY_STATUS.find(
        n => n.value === this.list.paperVO.batteryStatus
      );
      return item ? item.name : "";
    },
    fullDuration() {
      return this.list.paperVO.duration
        ? ">" + this.list.paperVO.duration
        : "未知寿命";
    },
    fullMode() {
      let item = config.MODES.find(n => n.value === this.list.paperVO.mode);
      return item ? item.name : "";
    },
    doctorName() {
      if (
        !this.list.paperVO.doctor.name ||
        !this.list.paperVO.doctors.name.length
      ) {
        return "";
      }
      let item = this.list.paperVO.doctors.name.find(
        n => n.value === this.list.paperVO.doctors.name
      );
      return item ? item.name : "";
    },
    // 医生建议
    advise() {
      let arr = [];
      let item = this.timeSteps.find(n => n.value === this.timeStep);
      arr.push(item ? "1." + item.name + "随访" : "");

      if (this.isXinlv) {
        arr.push("2.建议心内科门诊随访");
      }
      return arr.join("\r\n");
    },
    events() {
      let rst = 0;
      let a = [this.isBattery, this.isXinlv, this.isQibo, this.isShezhi];
      let b = [4, 1, 2, 8];
      a.forEach((n, i) => {
        if (n) {
          rst += b[i];
        }
      });
      return rst;
    }
  },
  methods: {
    async submit() {
      try {
        let prevData = bll.getVisitData();
        console.log(prevData);
        let data = {
          ...prevData,
          nextDate: this.nextDate,
          doctorId: this.doctor,
          advise: this.advise,
          events: this.events,
          ataf: prevData.ataf ? prevData.ataf : "",
          efImg: prevData.efImg ? prevData.efImg : "",
          qrsImg: prevData.qrsImg ? prevData.qrsImg : "",
          apRatio: prevData.apRatio,
          vpRatio: prevData.vpRatio
        };
        console.log("submit data:", data);
        try {
          let res = await bll.addVisit(this.patientId, data);
          console.log("after submit add visit:", res);
          this.$router.push({
            path: "visitorDetails",
            query: { id: prevData.patientId, name: this.$route.query.name }
          });
        } catch (err) {
          if (err.response.data.message == "token非法！") {
            this.$router.push({ path: "login" });
          }
        }
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    },
    async changeTime(value) {
      this.timeStep = value;
      try {
        let { data } = await bll.date(4, value);
        console.log(data);
        this.nextDate = data;
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    },
    changeDoctor(doctor) {
      this.doctor = doctor;
    },
    clickLeftCard() {},
    getBack() {
      this.$router.back(-1);
    },
    gotoDetails() {
      this.$router.push({ path: "/visitorDetails" });
    },
    async getVisitData() {
      try {
        let data = bll.getVisitData();
        console.log(data);
        this.patientId = data.patientId;
        this.nextDate = data.nextDate;
        this.category = data.category;
        this.batteryStatus = data.batteryStatus;
        this.duration = data.duration;
        this.threshold = data.threshold;
        this.pulseWidth = data.pulseWidth;
        this.perception = data.perception;
        this.impedance = data.impedance;
        this.mode = data.mode;
        this.up = data.up;
        this.down = data.down;
        this.outputVoltage = data.outputVoltage;
        this.outputPulseWidth = data.outputPulseWidth;
        this.outputPerception = data.outputPerception;
        this.ataf = data.ataf;
        this.apRatio = data.apRatio;
        this.vpRatio = data.vpRatio;
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    }
  },
  async beforeMount() {
    try {
      let list = await bll.visitDetail(this.$route.query.id);
      console.log(list);
      this.list = list.data;
    } catch (err) {
      console.log(err);
      if (this.list == "") {
        this.list = {
          deviceCate: "",
          doctorId: "",
          doctorName: "",
          nextDate: "",
          paperVO: {
            advise: "",
            apRatio: "",
            ataf: "",
            atafImg: "",
            batteryStatus: "",
            category: "",
            date: "",
            doctor: {
              id: "",
              name: ""
            },
            down: "",
            duration: "",
            efImg: "",
            efRatio: "",
            events: "",
            impedance: {
              a: "",
              lv: "",
              rv: ""
            },
            mode: "",
            nextDate: "",
            outputPerception: {
              a: "",
              lv: "",
              rv: ""
            },
            outputPulseWidth: {
              a: "",
              lv: "",
              rv: ""
            },
            outputVoltage: {
              a: "",
              lv: "",
              rv: ""
            },
            perception: {
              a: "",
              lv: "",
              rv: ""
            },
            pulseWidth: {
              a: "",
              lv: "",
              rv: ""
            },
            qrsImg: "",
            qrsRatio: "",
            threshold: {
              a: "",
              lv: "",
              rv: ""
            },
            up: "",
            vpRatio: ""
          },
          patientId: "",
          patientName: "",
          treatId: ""
        };
      }
    }
    // this.getVisitData();
    // {
    //   try {
    //     let { data } = await bll.doctors();
    //     console.log(data);
    //     let doctors = data.map(n => {
    //       return {
    //         value: n.id,
    //         name: n.name
    //       };
    //     });
    //     this.doctors = doctors;
    //   } catch (err) {
    //     if (err.response.data.message == "token非法！") {
    //       this.$router.push({ path: "login" });
    //     }
    //   }
    // }
    // {
    //   let timeSteps = [
    //     { value: 1, name: "一个月后" },
    //     { value: 2, name: "两个月后" },
    //     { value: 3, name: "三个月后" },
    //     { value: 6, name: "半年后" },
    //     { value: 12, name: "一年后" }
    //   ];
    //   this.timeSteps = timeSteps;
    // }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.followUpContentBox {
  font-size: @base / 4;
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
      img {
        margin-left: @base / 2;
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
      font-size: @base / 3;
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
      width: 30%;
      background: white;
      padding: @base*2 20px;
      .title {
        font-size: @base / 3;
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
        margin-top: @base*3;
        display: flex;
        justify-content: center;
        button {
          width: 80%;
          background-color: rgb(18, 159, 259);
          padding: 5px 0;
          border: none;
          border-radius: 10px;
          color: white;
          line-height: 30px;
        }
      }
    }
  }
  .content {
    padding: 0 @base / 2;
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
          min-height: 22px;
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
              min-height: 22px;
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
                width: @base*1.8;
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