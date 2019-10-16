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

        <div class="mainers">
          <div class="mainerItemTitle">阻抗（欧）</div>
          <div class="mainerItems" v-for="(item, index) in ['a','rv','lv']" :key="index">
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
          <div class="mainerItem" style="width:5rem">
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
          <div class="mainerItem" style="text-align:center;width:3.3rem">A</div>
          <div class="mainerItem" style="text-align:center;width:4.8rem">RV</div>
          <div class="mainerItem" style="text-align:center;width:3rem">LV</div>
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
import { Toast } from "vant";

export default {
  name: "index",
  components: { DropDown, AddButton },
  data() {
    return {
      // 病人编号
      patientId: "",
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
      apRatio: ["", "", ""],
      // VP%
      vpRatio: ["", "", ""],
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
      console.log(this.efImg);
      // this.efImgFile = { url: await this.afterRead(res), isImage: true };
    },
    async afterReadQrs(res) {
      this.qrsImgFile = await this.afterRead(res);
    },
    async afterRead(res) {
      let file = res.file;
      try {
        let { data } = await bll.uploadImage(file);
        console.log("image id:", data);
        return bll.getImage(data);
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    },
    checkParams() {
      // 电池寿命,0.5或者1-20
      {
        let arr = ["0.5"];
        for (let i = 1; i <= 20; i++) {
          arr.push(i + "");
        }
        if (!arr.find(n => n === this.duration)) {
          Toast("电池寿命应该在0.5或者1-20");
          return false;
        }
      }
      return true;
    },
    async submit() {
      if (!this.checkParams()) {
        return;
      }
      console.log("ap", this.apRatio);
      if (this.apRatio[0] != "") {
        if (this.apRatio[1] == "") {
          Toast("诊断信息百分比数值有误，请重新输入1");
          return;
        }
        if (this.apRatio[0].length > 1) {
          Toast("诊断信息百分比数值有误，请重新输入2");
          return;
        }
        if (this.apRatio[1] != "") {
          if (this.apRatio[2] == "") {
            Toast("诊断信息百分比数值有误，请重新输入3");
            return;
          }
        }
      }
      if (this.apRatio[2] != "") {
        if (this.apRatio[1] == "") {
          Toast("诊断信息百分比数值有误，请重新输入4");
          return;
        }
      }
      if (this.apRatio[1] != "") {
        if (this.apRatio[2] == "") {
          Toast("诊断信息百分比数值有误，请重新输入99");
          return;
        }
      }
      if (this.vpRatio[1] != "") {
        if (this.vpRatio[2] == "") {
          Toast("诊断信息百分比数值有误，请重新输入98");
          return;
        }
      }
      if (this.vpRatio[2] != "") {
        if (this.vpRatio[1] == "") {
          Toast("诊断信息百分比数值有误，请重新输入5");
          return;
        }
      }
      if (this.vpRatio[0] != "") {
        if (this.vpRatio[0].length > 1) {
          Toast("诊断信息百分比数值有误，请重新输入6");
          return;
        }
        if (this.vpRatio[1] == "") {
          Toast("诊断信息百分比数值有误，请重新输入7");
          return;
        }
        if (this.vpRatio[1] != "") {
          if (this.vpRatio[2] == "") {
            Toast("诊断信息百分比数值有误，请重新输入8");
            return;
          }
        }
      }
      if (this.apRatio[1] != "") {
        if (this.apRatio[1].length > 1) {
          Toast("诊断信息百分比数值有误，请重新输入9");
          return;
        }
      }
      if (this.apRatio[2] != "") {
        if (this.apRatio[2].length > 1) {
          Toast("诊断信息百分比数值有误，请重新输入10");
          return;
        }
      }
      if (this.vpRatio[1] != "") {
        if (this.vpRatio[1].length > 1) {
          Toast("诊断信息百分比数值有误，请重新输入11");
          return;
        }
      }
      if (this.vpRatio[2] != "") {
        if (this.vpRatio[2].length > 1) {
          Toast("诊断信息百分比数值有误，请重新输入12");
          return;
        }
      }
      try {
        let getImgUrl = (obj, imgUrl) => (obj && obj.url) || imgUrl;
        let data = {
          patientId: this.patientId,
          category: this.visitType,
          batteryStatus: this.batteryStatus,
          duration: this.duration,
          mode: this.mode,
          up: this.up,
          down: this.down,
          threshold: this.threshold,
          pulseWidth: this.pulseWidth,
          perception: this.perception,
          impedance: this.impedance,
          outputVoltage: this.outputVoltage,
          outputPulseWidth: this.outputPulseWidth,
          outputPerception: this.outputPerception,
          apRatio: this.apRatio,
          vpRatio: this.vpRatio,
          ataf: this.ataf,
          atafImg: getImgUrl(this.atafImg[0], this.atafImgFile),
          efRatio: this.efRatio,
          efImg: getImgUrl(this.efImg[0], this.efImgFile),
          qrsRatio: this.qrsRatio,
          qrsImg: getImgUrl(this.qrsImg[0], this.qrsImgFile)
        };
        console.log("data", data);
        let res = await bll.setVisitData(data);
        res = await bll.getVisitData();
        console.log("res", res);
        this.$router.push({
          path: "followUpMain",
          query: {
            id: res.patientId,
            name: this.$route.query.name
          }
        });
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    },
    async queryLast(id) {
      try {
        let { data } = await bll.lastVisitDetail(id);
        let paperVO = data.paperVO;
        console.log(paperVO);
        // this.visitType = paperVO.;
        this.batteryStatus = paperVO.batteryStatus;
        this.duration = paperVO.duration;
        this.mode = paperVO.mode;
        this.up = paperVO.up;
        this.down = paperVO.down;
        this.threshold = paperVO.threshold;
        this.pulseWidth = paperVO.pulseWidth;
        this.perception = paperVO.perception;
        this.impedance = paperVO.impedance;
        this.outputVoltage = paperVO.outputVoltage;
        this.outputPulseWidth = paperVO.outputPulseWidth;
        this.outputPerception = paperVO.outputPerception;
        console.log(
          paperVO.apRatio.length,
          "k",
          paperVO.apRatio[1],
          "j",
          paperVO.vpRatio.length
        );
        let ap = [];
        if (paperVO.apRatio.length == 4) {
          ap.push("");
          ap.push(paperVO.apRatio[1]);
          ap.push(paperVO.apRatio[3]);
        } else if (paperVO.apRatio.length < 3) {
          ap = ["", "", ""];
        } else {
          ap.push(paperVO.apRatio[0]);
          ap.push(paperVO.apRatio[2]);
          ap.push(paperVO.apRatio[4]);
        }
        this.apRatio = ap;
        console.log(this.apRatio);
        let vp = [];
        if (paperVO.vpRatio.length == 4) {
          vp.push("");
          vp.push(paperVO.vpRatio[1]);
          vp.push(paperVO.vpRatio[3]);
        } else if (paperVO.vpRatio.length < 3) {
          vp = ["", "", ""];
        } else {
          vp.push(paperVO.vpRatio[0]);
          vp.push(paperVO.vpRatio[2]);
          vp.push(paperVO.vpRatio[4]);
        }
        this.vpRatio = vp;
        console.log(this.vpRatio);
        // this.ataf = paperVO.ataf;
        this.atafImg = [
          {
            url:
              paperVO.atafImg.substring(paperVO.atafImg.length - 4) == ".jpg"
                ? paperVO.atafImg
                : paperVO.atafImg + ".jpg",
            isImage: true
          }
        ];
        this.efRatio = paperVO.efRatio;
        this.efImg = [
          {
            url:
              paperVO.efImg.substring(paperVO.efImg.length - 4) == ".jpg"
                ? paperVO.efImg
                : paperVO.efImg + ".jpg",
            isImage: true
          }
        ];
        this.qrsRatio = paperVO.qrsRatio;
        this.qrsImg = [
          {
            url:
              paperVO.qrsImg.substring(paperVO.qrsImg.length - 4) == ".jpg"
                ? paperVO.qrsImg
                : paperVO.qrsImg + ".jpg",
            isImage: true
          }
        ];
      } catch (err) {
        console.log(err.response.data.message, "1");
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    }
  },
  async beforeMount() {
    // 病人编号
    this.patientId = this.$route.query.id;
    console.log(this.patientId, "1");
    // 起搏模式
    this.modes = config.MODES;
    this.mode = this.modes[0].value;
    let data = localStorage.getItem("visitData");
    data = JSON.parse(data);
    if (data && data.patientId == this.patientId) {
      this.batteryStatus = data.batteryStatus;
      this.duration = data.duration;
      this.mode = data.mode;
      this.up = data.up;
      this.down = data.down;
      this.threshold = data.threshold;
      this.pulseWidth = data.pulseWidth;
      this.perception = data.perception;
      this.impedance = data.impedance;
      this.outputVoltage = data.outputVoltage;
      this.outputPulseWidth = data.outputPulseWidth;
      this.outputPerception = data.outputPerception;
      this.apRatio = data.apRatio;
      this.vpRatio = data.vpRatio;
      this.efRatio = data.efRatio;
      this.qrsRatio = data.qrsRatio;
      this.atafImg = [
        {
          url:
            data.atafImg.substring(data.atafImg.length - 4) == ".jpg"
              ? data.atafImg
              : data.atafImg + ".jpg",
          isImage: true
        }
      ];
      this.efImg = [
        {
          url:
            data.efImg.substring(data.efImg.length - 4) == ".jpg"
              ? data.efImg
              : data.efImg + ".jpg",
          isImage: true
        }
      ];
      this.qrsImg = [
        {
          url:
            data.qrsImg.substring(data.qrsImg.length - 4) == ".jpg"
              ? data.qrsImg
              : data.qrsImg + ".jpg",
          isImage: true
        }
      ];
    } else {
      console.log(1, this.patientId);
      await this.queryLast(this.patientId);
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.addBox {
  font-size: @base / 4;
  .head {
    display: flex;
    justify-content: flex-start;
    div {
      width: 5%;
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
      width: 90%;
      font-size: @base / 3;
      text-align: center;
      margin: 0;
      line-height: 50px;
    }
  }
  .content {
    padding: 0 @base / 2;
    .item {
      margin-bottom: 20px;
      .inputbox {
        padding: 10px 20px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        width: 2.5rem;
      }
      .title {
        padding-left: 20px;
        border-left: 5px solid rgb(18, 159, 259);
        margin-bottom: 20px;
      }
      .mainers {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        .mainerItems {
          width: @base*4;
        }
        .mainerItemTitle {
          width: @base*2.2;
          display: flex;
          align-items: center;
          span {
            color: #333;
          }
        }
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
          width: @base*4;
          .subtitle {
            text-align: center;
            padding: 0 20px;
            box-sizing: content-box;
            width: 2.5rem;
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