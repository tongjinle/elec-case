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
            <input class="inputbox" type="text" v-model="duration" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">电极情况</div>
        <div class="mainer">
          <div class="mainerItemTitle"></div>
          <div class="mainerItem">
            <div class="subtitle">A</div>
          </div>
          <div class="mainerItem">
            <div class="subtitle">RV</div>
          </div>
          <div class="mainerItem">
            <div class="subtitle">LV</div>
          </div>
        </div>

        <div class="mainer">
          <div class="mainerItemTitle">阈值（V）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <input class="inputbox" type="text" v-model="threshold[item]" />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">脉宽（ms）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <input class="inputbox" type="text" v-model="pulseWidth[item]" />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">感知（mv）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <input class="inputbox" type="text" v-model="perception[item]" />
          </div>
        </div>

        <div class="mainer">
          <div class="mainerItemTitle">阻抗（欧）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <input class="inputbox" type="text" v-model="impedance[item]" />
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
            <input class="inputbox" type="text" v-model="down" />
          </div>
          <div class="mainerItemTitle">上限频率：</div>
          <div class="mainerItem">
            <input class="inputbox" type="text" v-model="up" />
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
            <input class="inputbox" type="text" v-model="outputVoltage[item]" />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">脉宽（ms）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <input class="inputbox" type="text" v-model="outputPulseWidth[item]" />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">感知灵敏度（mv）</div>
          <div class="mainerItem" v-for="(item, index) in ['a','rv','lv']" :key="index">
            <input class="inputbox" type="text" v-model="outputPerception[item]" />
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
                <input class="inputbox" type="text" v-model="efRatio" />

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
                <input class="inputbox" type="text" v-model="qrsRatio" />
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
      // 电极阈值
      threshold: { a: "", rv: "", lv: "" },
      // 电极脉宽
      pulseWidth: { a: "", rv: "", lv: "" },
      // 电极感知
      perception: { a: "", rv: "", lv: "" },
      // 电极阻抗
      impedance: { a: "", rv: "", lv: "" },
      // 起搏模式
      mode: "",
      modes: [],
      // 低限频率
      down: "",
      // 上限频率
      up: "",
      // 输出电压
      outputVoltage: { a: "", rv: "", lv: "" },
      // 输出脉宽
      outputPulseWidth: { a: "", rv: "", lv: "" },
      // 输出灵敏度
      outputPerception: { a: "", rv: "", lv: "" },
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
      efRatio: "",
      // EF 留图
      efImg: [],
      efImgFile: "",
      // QRS
      qrsRatio: "",
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
    changeMode(value) {
      this.mode = value;
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
    // 起搏模式
    this.modes = config.MODES;
    this.mode = this.modes[0].value;
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
      .inputbox {
        padding: 10px 20px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        width: 3rem;
      }
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
          .subtitle {
            text-align: center;
            padding: 0 20px;
            box-sizing: content-box;
            width: 3rem;
          }
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