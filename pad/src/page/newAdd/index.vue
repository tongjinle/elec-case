<template>
  <div class="addBox">
    <div class="head">
      <div @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>新增随访</p>
      <div @click="submit">提交</div>
    </div>
    <div class="content">
      <div class="item">
        <div class="title">随访类型</div>
        <van-radio-group v-model="visitType" class="radioFlex">
          <van-radio :name="1" class="radioItem">常规</van-radio>
          <van-radio :name="2" class="radioItem">不适随访</van-radio>
          <van-radio :name="3" class="radioItem">HIS随访</van-radio>
        </van-radio-group>
      </div>
      <div class="item">
        <div class="title">电池状态</div>
        <div class="mainer" style="align-items:flex-start">
          <van-radio-group v-model="batteryStatus" class="radio">
            <van-radio name="1" class="radioItem">OK</van-radio>
            <van-radio name="2" class="radioItem">BRI</van-radio>
          </van-radio-group>
          <div class="duration">
            <span>预计</span>
            <DropDown :actions="durations" @on-change="chooseDuration" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">电极情况</div>
        <div class="mainer">
          <div class="mainerItemTitle"></div>
          <div class="mainerItem" style="text-align:center;">A</div>
          <div class="mainerItem" style="text-align:center;">RV</div>
          <div class="mainerItem" style="text-align:center;">LV</div>
        </div>

        <div class="mainer">
          <div class="mainerItemTitle">阈值（V）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <DropDown
              v-if="thresholds[item]"
              :actions="thresholds[item].list"
              @on-change="thresholds[item].handle"
            />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">脉宽（ms）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <DropDown
              v-if="pulseWidths[item]"
              :actions="pulseWidths[item].list"
              @on-change="pulseWidths[item].handle"
            />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">感知（mv）</div>
          <div class="mainerItem" v-for="(item, index) in ['a']" :key="index">
            <DropDown
              v-if="perceptions[item]"
              :actions="perceptions[item].list"
              @on-change="perceptions[item].handle"
            />
          </div>
        </div>

        <div class="mainer">
          <div class="mainerItemTitle">阻抗（欧）</div>
          <div class="mainerItem">
            <AddButton :value="impedance.a" @on-change="changeImpedanceA" />
          </div>
          <div class="mainerItem">
            <AddButton :value="impedance.rv" @on-change="changeImpedanceRv" />
          </div>
          <div class="mainerItem">
            <AddButton :value="impedance.lv" @on-change="changeImpedanceLv" />
          </div>
          <div class="mainerItem">
            <span>100-3000 (per 100 as unit)</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">基本参数</div>
        <div class="mainer">
          <div class="mainerItemTitle">起搏模式：</div>
          <div class="mainerItem">
            <DropDown :actions="modes" @on-change="changeMode" />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">低限频率：</div>
          <div class="mainerItem">
            <DropDown :actions="downs" @on-change="changeDown" />
          </div>
          <div class="mainerItemTitle">上限频率：</div>
          <div class="mainerItem">
            <DropDown :actions="ups" @on-change="changeUp" />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle"></div>
          <div class="mainerItem" style="text-align:center;">A</div>
          <div class="mainerItem" style="text-align:center;">RV</div>
          <div class="mainerItem" style="text-align:center;">LV</div>
        </div>

        <div class="mainer">
          <div class="mainerItemTitle">输出（V）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <DropDown
              v-if="outputVoltages[item]"
              :actions="outputVoltages[item].list"
              @on-change="outputVoltages[item].handle"
            />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">脉宽（ms）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <DropDown
              v-if="outputPulseWidths[item]"
              :actions="outputPulseWidths[item].list"
              @on-change="outputPulseWidths[item].handle"
            />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">感知灵敏度（mv）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <DropDown
              v-if="outputPerceptions[item]"
              :actions="outputPerceptions[item].list"
              @on-change="outputPerceptions[item].handle"
            />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">诊断信息</div>
        <div class="mainer">
          <div class="msgTitle">AP%</div>
          <div class="msgInput">
            <input type="text" v-model="apRatio[0]" />
            <input type="text" v-model="apRatio[1]" /> .
            <input type="text" v-model="apRatio[2]" /> %
          </div>
          <div class="msgTitle" style="margin-left:3rem">VP%</div>
          <div class="msgInput">
            <input type="text" v-model="vpRatio[0]" />
            <input type="text" v-model="vpRatio[1]" /> .
            <input type="text" v-model="vpRatio[2]" /> %
          </div>
        </div>
        <div class="mainer" style="margin-top:1rem;">
          <div style="margin-right:0.5rem">AT/AF:</div>
          <van-checkbox v-model="ataf"></van-checkbox>
          <van-uploader
            style="margin-left:2rem;"
            preview-size="3rem"
            :max-count="1"
            :after-read="afterReadAtaf"
            v-model="atafImg"
          />
        </div>
      </div>
      <div class="item">
        <div class="title">以下仅为“HIS随访”</div>
        <div class="mainer">
          <div class="footItem">
            <div class="footItemLeft">
              <div>EF</div>
              <div class="footDown">
                <AddButton :value="efRatio" @on-change="changeEf" />
                <span>%</span>
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadEf"
                v-model="efImg"
              />
            </div>
          </div>
          <div class="footItem" style="margin-left:1rem">
            <div class="footItemLeft">
              <div>
                QRS
                <span class="smallFont">ms</span>
              </div>
              <div class="footDown">
                <AddButton :value="qrsRatio" @on-change="changeQrs" />
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadQrs"
                v-model="qrsImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from "@/component/dropDown";
import AddButton from "@/component/addButton";
import * as config from "../../utils/config";
import * as bll from "../../utils/business";

export default {
  name: "index",
  components: { DropDown, AddButton },
  data() {
    return {
      fileList: [],
      // 随访类型
      visitType: 1,
      // 电池状态
      batteryStatus: "1",
      // 预计寿命
      duration: "",
      // 预计寿命列表
      durations: [],
      // 电极阈值
      threshold: { a: "", rv: "", lv: "" },
      thresholds: {
        a: {
          list: [],
          handle: function() {}
        },
        rv: {
          list: [],
          handle: function() {}
        },
        lv: {
          list: [],
          handle: function() {}
        }
      },
      // 电极脉宽
      pulseWidth: { a: "", rv: "", lv: "" },
      pulseWidths: {
        a: {
          list: [],
          handle: function() {}
        },
        rv: {
          list: [],
          handle: function() {}
        },
        lv: {
          list: [],
          handle: function() {}
        }
      },
      // 电极感知
      perception: { a: "", rv: "", lv: "" },
      perceptions: {
        a: {
          list: [],
          handle: function() {}
        },
        rv: {
          list: [],
          handle: function() {}
        },
        lv: {
          list: [],
          handle: function() {}
        }
      },
      // 电极阻抗
      impedance: { a: 0, rv: 0, lv: 0 },
      // 起搏模式
      mode: "",
      modes: [],
      // 低限频率
      down: "",
      downs: [],
      // 上限频率
      up: "",
      ups: [],
      // 输出电压
      outputVoltage: { a: "", rv: "", lv: "" },
      outputVoltages: {
        a: {
          list: [],
          handle: function() {}
        },
        rv: {
          list: [],
          handle: function() {}
        },
        lv: {
          list: [],
          handle: function() {}
        }
      }, // 输出脉宽
      outputPulseWidth: { a: "", rv: "", lv: "" },
      outputPulseWidths: {
        a: {
          list: [],
          handle: function() {}
        },
        rv: {
          list: [],
          handle: function() {}
        },
        lv: {
          list: [],
          handle: function() {}
        }
      }, // 输出灵敏度
      outputPerception: { a: "", rv: "", lv: "" },
      outputPerceptions: {
        a: {
          list: [],
          handle: function() {}
        },
        rv: {
          list: [],
          handle: function() {}
        },
        lv: {
          list: [],
          handle: function() {}
        }
      },
      // AP%
      apRatio: ["0", "0", "0"],
      // VP%
      vpRatio: ["0", "0", "0"],

      // AT/AF
      ataf: false,
      // AT/AF 留图
      atafImg: [],
      atafImgFile: "",
      // EF
      efRatio: 0,
      // EF 留图
      efImg: [],
      efImgFile: "",
      // QRS
      qrsRatio: 0,
      // QRS 留图
      qrsImg: [],
      qrsImgFile: "",
      // 随访事件, MASK
      events: 1,

      msg: true
    };
  },
  methods: {
    getBack() {
      this.$router.back(-1);
    },
    gotoDetails() {
      this.$router.push({ path: "/followUpMain" });
    },
    chooseDuration(value) {
      this.duration = value;
    },
    changeImpedanceA(value) {
      this.impedance.a = value;
    },
    changeImpedanceRv(value) {
      this.impedance.rv = value;
    },
    changeImpedanceLv(value) {
      this.impedance.lv = value;
    },
    changeMode(value) {
      this.mode = value;
    },
    changeUp(value) {
      this.up = value;
    },
    changeDown(value) {
      this.down = value;
    },
    changeEf(value) {
      this.efRatio = value;
    },
    changeQrs(value) {
      this.qrsRatio = value;
    },
    async afterReadAtaf(res) {
      this.atafImgFile = await this.afterRead(res);
    },
    async afterReadEf(res) {
      this.efImgFile = await this.afterRead(res);
    },
    async afterReadQrs(res) {
      this.qrsImgFile = await this.afterRead(res);
    },
    async afterRead(res) {
      let file = res.file;
      let { data } = await bll.uploadImage(file);
      console.log("image id:", data);
      return data;
    },
    async submit() {
      let nextDate = "3000-01-01",
        doctorId = 1,
        category = this.category,
        batteryStatus = this.batteryStatus,
        duration = this.duration,
        advise = "",
        mode = this.mode,
        up = this.up,
        down = this.down,
        threshold = this.threshold,
        pulseWidth = this.pulseWidth,
        perception = this.perception,
        impendance = this.impendance,
        outputVoltage = this.outputVoltage,
        outputPulseWidth = this.outputPulseWidth,
        outputPerception = this.outputPerception,
        apRatio = this.apRatio,
        vpRatio = this.vpRatio,
        ataf = this.ataf,
        atafImg = this.atafImg,
        efRatio = this.efRatio,
        efImg = this.efImg,
        qrsRatio = this.qrsRatio,
        qrsImg = this.qrsImg,
        events = "1";
      let data = {
        nextDate,
        doctorId,
        category,
        batteryStatus,
        duration,
        advise,
        mode,
        up,
        down,
        threshold,
        pulseWidth,
        perception,
        impendance,
        outputVoltage,
        outputPulseWidth,
        outputPerception,
        apRatio,
        vpRatio,
        ataf,
        atafImg,
        efRatio,
        efImg,
        qrsRatio,
        qrsImg,
        events
      };
      let res = await bll.addVisit(data);
      console.log(res);
    }
  },
  mounted() {
    // 预计寿命
    this.durations = config.DURATIONS;
    this.duration = this.durations[0];

    // 电极阈值
    ["a", "rv", "lv"].forEach(key => {
      let list = config.THRESHOLDS;
      let handle = value => (this.threshold[key] = value);
      this.thresholds[key] = { list, handle };
    });
    this.threshold = {
      a: config.THRESHOLDS[0].value,
      rv: config.THRESHOLDS[0].value,
      lv: config.THRESHOLDS[0].value
    };

    // 电极脉宽
    ["a", "rv", "lv"].forEach(key => {
      let list = config.PULSEWIDTHS;
      let handle = value => (this.pulseWidth[key] = value);
      this.pulseWidths[key] = { list, handle };
    });
    this.pulseWidth = {
      a: config.PULSEWIDTHS[0].value,
      rv: config.PULSEWIDTHS[0].value,
      lv: config.PULSEWIDTHS[0].value
    };
    // 电极感知
    ["a", "rv", "lv"].forEach(key => {
      let list = config.PERCEPTIONS;
      let handle = value => (this.perception[key] = value);
      this.perceptions[key] = { list, handle };
    });
    this.perception = {
      a: config.PULSEWIDTHS[0].value,
      rv: config.PULSEWIDTHS[0].value,
      lv: config.PULSEWIDTHS[0].value
    };

    // 起搏模式
    this.modes = config.MODES;
    this.mode = this.modes[0].value;

    // 低限频率
    this.ups = config.UPS;
    this.up = this.ups[0].value;
    // 上限频率
    this.downs = config.DOWNS;
    this.down = this.downs[0].value;

    // 输出电压
    ["a", "rv", "lv"].forEach(key => {
      let list = config.OUTPUT_VOLTAGES;
      let handle = value => (this.outputVoltage[key] = value);
      this.outputVoltages[key] = { list, handle };
    });
    this.outputVoltage = {
      a: config.OUTPUT_VOLTAGES[0].value,
      rv: config.OUTPUT_VOLTAGES[0].value,
      lv: config.OUTPUT_VOLTAGES[0].value
    };

    // 输出脉宽
    ["a", "rv", "lv"].forEach(key => {
      let list = config.OUTPUT_PULSESWIDTHS;
      let handle = value => (this.outputPulseWidth[key] = value);
      this.outputPulseWidths[key] = { list, handle };
    });
    this.outputPulseWidth = {
      a: config.OUTPUT_PULSESWIDTHS[0].value,
      rv: config.OUTPUT_PULSESWIDTHS[0].value,
      lv: config.OUTPUT_PULSESWIDTHS[0].value
    };

    // 输出灵敏度
    ["a", "rv", "lv"].forEach(key => {
      let list = config.OUTPUT_PERCEPTIONS;
      let handle = value => (this.outputPerception[key] = value);
      this.outputPerceptions[key] = { list, handle };
    });
    this.outputPerception = {
      a: config.OUTPUT_PERCEPTIONS[0].value,
      rv: config.OUTPUT_PERCEPTIONS[0].value,
      lv: config.OUTPUT_PERCEPTIONS[0].value
    };
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.addBox {
  font-size: @base / 3;
  .head {
    display: flex;
    justify-content: flex-start;
    div {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(18, 159, 259);
      img {
        width: 25px;
        height: 25px;
      }
    }
    p {
      width: 80%;
      font-size: @base / 2;
      text-align: center;
      margin: 0;
      line-height: 50px;
    }
  }
  .content {
    padding: 0 @base;
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
        .duration {
          display: flex;
          align-items: center;
          span {
            margin-right: 10px;
          }
        }
        .footItem {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .smallFont {
            color: #888888;
          }
          .footDown {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            span {
              margin-left: @base*0.5;
            }
          }
        }
        .msgTitle {
          margin-right: @base;
        }
        .msgInput {
          input {
            padding: 10px 20px;
            border: 1px solid rgb(221, 221, 221);
            border-radius: 5px;
            width: @base*0.5;
          }
        }
        .mainerItemTitle {
          width: @base*2.2;
          display: flex;
          align-items: center;
          span {
            color: #333;
          }
        }
        .mainerItem {
          width: @base*5;
        }
        .radio {
          // margin-top: @base / 4;
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