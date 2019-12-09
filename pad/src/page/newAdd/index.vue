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
            <van-radio name="2" class="radioItem">ERI</van-radio>
          </van-radio-group>
          <div class="duration">
            <span>预计</span>
            <!-- <input class="inputbox" type="number" v-model="duration" /> -->
            <!-- :changeHandle="()=>{console.log(123)}" -->
            <!-- :changeHandle="changeDuration" -->
            <!-- :changeHandle="changeValue.bind(this,['duration'])" -->
            <!-- <NumberBox :value="1" @on-change="changeDuration"></NumberBox> -->
            <NumberBox
              :validValue="1"
              :value="duration"
              @on-change="value => (this.duration = value)"
            ></NumberBox>
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
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="threshold.a"
                  @on-change="value => (this.threshold.a = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="threshold.rv"
                  @on-change="value => (this.threshold.rv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="threshold.lv"
                  @on-change="value => (this.threshold.lv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">脉宽（ms）</div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="pulseWidth.a"
                  @on-change="value => (this.pulseWidth.a = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="pulseWidth.rv"
                  @on-change="value => (this.pulseWidth.rv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="pulseWidth.lv"
                  @on-change="value => (this.pulseWidth.lv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">感知（mv）</div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="perception.a"
                  @on-change="value => (this.perception.a = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="perception.rv"
                  @on-change="value => (this.perception.rv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="perception.lv"
                  @on-change="value => (this.perception.lv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
        </div>

        <div class="mainer">
          <div class="mainerItemTitle">阻抗（欧）</div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="impedance.a"
                  @on-change="value => (this.impedance.a = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="impedance.rv"
                  @on-change="value => (this.impedance.rv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="impedance.lv"
                  @on-change="value => (this.impedance.lv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
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
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="down"
                  @on-change="value => (this.down = value)"
                ></NumberBox>
              </div>
              <div class="suffix">次/分钟</div>
            </div>
          </div>
          <div class="mainerItemTitle">上限频率：</div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="up"
                  @on-change="value => (this.up = value)"
                ></NumberBox>
              </div>
              <div class="suffix">次/分钟</div>
            </div>
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle"></div>
          <div class="mainerItem" style="text-align:center;width:3.3rem">A</div>
          <div class="mainerItem" style="text-align:center;width:4.8rem">
            RV
          </div>
          <div class="mainerItem" style="text-align:center;width:3rem">LV</div>
        </div>

        <div class="mainer">
          <div class="mainerItemTitle">输出（V）</div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputVoltage.a"
                  @on-change="value => (this.outputVoltage.a = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputVoltage.rv"
                  @on-change="value => (this.outputVoltage.rv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputVoltage.lv"
                  @on-change="value => (this.outputVoltage.lv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">脉宽（ms）</div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputPulseWidth.a"
                  @on-change="value => (this.outputPulseWidth.a = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputPulseWidth.rv"
                  @on-change="value => (this.outputPulseWidth.rv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputPulseWidth.lv"
                  @on-change="value => (this.outputPulseWidth.lv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">感知灵敏度（mv）</div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputPulseWidth.a"
                  @on-change="value => (this.outputPerception.a = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputPulseWidth.rv"
                  @on-change="value => (this.outputPerception.rv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
          <div class="mainerItem">
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :rule="/^\s*$|^\d+(\.\d+)?$/"
                  :validValue="''"
                  :value="outputPulseWidth.lv"
                  @on-change="value => (this.outputPerception.lv = value)"
                ></NumberBox>
              </div>
              <div class="suffix"></div>
            </div>
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">感知极性</div>
          <div
            class="mainerItem"
            v-for="(item, index) in ['a', 'rv', 'lv']"
            :key="index"
          >
            <DropDown
              :actions="perceivedPolaritys[item]"
              @on-change="value => changePerceivedPolaritys(item, value)"
            />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">起搏极性</div>
          <div
            class="mainerItem"
            v-for="(item, index) in ['a', 'rv', 'lv']"
            :key="index"
          >
            <DropDown
              :actions="perceivedPolaritys[item]"
              @on-change="value => changePacingPolaritys(item, value)"
            />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">诊断信息</div>
        <div class="mainer">
          <div class="mainerItemTitle">AP%</div>
          <div class="mainerItem">
            <!-- <input class="inputbox" type="number" v-model="apRatio" />
            %-->
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :validValue="0"
                  :value="apRatio"
                  @on-change="val => (this.apRatio = val)"
                ></NumberBox>
              </div>
              <div class="suffix">%</div>
            </div>
          </div>
          <div class="mainerItemTitle">VP%</div>
          <div class="mainerItem">
            <!-- <input class="inputbox" type="number" v-model="vpRatio" />
            %-->
            <div class="comb">
              <div class="inputplace">
                <NumberBox
                  :validValue="0"
                  :value="vpRatio"
                  @on-change="val => (this.vpRatio = val)"
                ></NumberBox>
              </div>
              <div class="suffix">%</div>
            </div>
          </div>
          <!-- <div class="msgTitle"></div>
          <div class="msgInput"></div>
          <div class="msgTitle" style="margin-left:3rem">VP%</div>
          <div class="msgInput">
            <input type="number" v-model="vpRatio" />%
          </div>-->
        </div>
        <div class="mainer" style="margin-top:1rem;">
          <div style="margin-right:0.5rem">AT/AF:</div>
          <van-checkbox v-model="ataf"></van-checkbox>
          <van-uploader
            style="margin-left:2rem;"
            preview-size="3rem"
            :max-count="1"
            :after-read="afterReadAtaf"
            @delete="afterDeleteAtaf"
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
                <input class="inputbox" type="number" v-model="efRatio" />
                <span>%</span>
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadEf"
                @delete="afterDeleteEf"
                v-model="efImg"
              />
            </div>
          </div>
          <div class="footItem" style="margin-left:1rem">
            <div class="footItemLeft">
              <div>
                QRS
                <span class="smallFont">ms</span>
                <span>%</span>
              </div>
              <div class="footDown">
                <input class="inputbox" type="number" v-model="qrsRatio" />
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadQrs"
                @delete="afterDeleteQrs"
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
import NumberBox from "@/component/numberBox";
import * as config from "../../utils/config";
import * as bll from "../../utils/business";
import { Toast } from "vant";

export default {
  name: "index",
  components: { DropDown, AddButton, NumberBox },
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
      // 感知极性
      perceivedPolarity: { a: "", rv: "", lv: "" },
      perceivedPolaritys: { a: [], rv: [], lv: [] },
      // 起搏极性
      pacingPolarity: { a: "", rv: "", lv: "" },
      pacingPolaritys: { a: [], rv: [], lv: [] },
      // AP%
      apRatio: "",
      // VP%
      vpRatio: "",
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
    changeValue(props) {
      let obj = this;
      props.forEach(n => {
        console.log(n);
        obj = obj[n];
      });
      console.log("change value");
      return value => {
        console.log("inner function:", obj, value);
        obj = value;
      };
    },
    changeDuration(value) {
      this.duration = value;
      console.log("duration...", this.duration, value);
    },
    getBack() {
      this.$router.back(-1);
    },
    gotoDetails() {
      this.$router.push({ path: "/followUpMain" });
    },
    changeMode(value) {
      this.mode = value;
    },
    changePerceivedPolaritys(type, value) {
      this.perceivedPolarity[type] = value;
    },
    changePacingPolaritys(type, value) {
      this.pacingPolarity[type] = value;
    },
    async afterDeleteAtaf(res) {
      this.atafImgFile = "";
    },
    async afterDeleteEf(res) {
      this.efImgFile = "";
    },
    async afterDeleteQrs(res) {
      this.qrsImgFile = "";
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
      let checkNumber = str => /^[1-9](\d+)?(\.\d+)?$/.test(str);
      let checkNumberAllowZero = str => /^\d+(\.\d+)?$/.test(str);
      let checkNumberAllowEmpty = str => /^\s*$|^\d+(\.\d+)?$/.test(str);
      let checkNumberComb = value =>
        ["a", "rv", "lv"].every(n => checkNumberAllowEmpty(value[n]));
      // 电池寿命,0.5或者1-20
      {
        let arr = [0.5];
        for (let i = 1; i <= 20; i++) {
          arr.push(i);
        }
        if (
          !(
            this.duration === 0.5 ||
            (this.duration >= 1 && this.duration <= 20)
          )
        ) {
          Toast("电池寿命应该在0.5或者1-20");
          return false;
        }
      }

      // ap必须是数字
      {
        if (!checkNumberAllowZero(this.apRatio)) {
          Toast("ap必须是数字,但是可以为0");
          return false;
        }
      }
      // vp必须是数字
      {
        if (!checkNumberAllowZero(this.vpRatio)) {
          Toast("vp必须是数字,但是可以为0");
          return false;
        }
      }

      // 阈值
      {
        if (!checkNumberComb(this.threshold)) {
          Toast("阈值参数必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 电极脉宽
        if (!checkNumberComb(this.pulseWidth)) {
          Toast("电极脉宽必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 电极感知
        if (!checkNumberComb(this.perception)) {
          Toast("电极感知必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 电极阻抗
        if (!checkNumberComb(this.impedance)) {
          Toast("电极阻抗必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 低限频率
        if (!checkNumberAllowEmpty(this.down)) {
          Toast("低限频率必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 上限频率
        if (!checkNumberAllowEmpty(this.up)) {
          Toast("上限频率必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 输出电压
        if (!checkNumberComb(this.outputVoltage)) {
          Toast("输出电压必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 输出脉宽
        if (!checkNumberComb(this.outputPulseWidth)) {
          Toast("输出脉宽必须是数字,或者是空值,但是不能是0");
          return false;
        }
      }
      {
        // 输出灵敏度
        if (!checkNumberComb(this.outputPerception)) {
          Toast("输出灵敏度必须是数字,或者是空值,但是不能是0");
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

      try {
        let getImgUrl = (obj, imgUrl) => (obj && obj.url) || imgUrl;
        let data = {
          patientId: this.patientId,
          category: this.visitType,
          batteryStatus: this.batteryStatus - 0,
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
      console.log("使用服务器中上次提交的随访记录");
      try {
        let { data } = await bll.lastVisitDetail(id);
        let paperVO = data.paperVO;
        console.log({ paperVO });
        // this.visitType = paperVO.;
        this.batteryStatus = paperVO.batteryStatus + "";
        this.duration = paperVO.duration - 0;
        console.log(paperVO.duration, this.duration);
        this.mode = paperVO.mode;
        this.up = paperVO.up - 0;
        this.down = paperVO.down - 0;
        this.threshold = paperVO.threshold;
        this.pulseWidth = paperVO.pulseWidth;
        this.perception = paperVO.perception;
        this.impedance = paperVO.impedance;
        this.outputVoltage = paperVO.outputVoltage;
        this.outputPulseWidth = paperVO.outputPulseWidth;
        this.outputPerception = paperVO.outputPerception;
        this.pacingPolarity = paperVO.pacingPolarity;
        this.perceivedPolarity = paperVO.perceivedPolarity;

        this.apRatio = paperVO.apRatio;
        this.vpRatio = paperVO.vpRatio;

        this.atafImg = this._getImgObjFromUrl(paperVO.atafImg);
        this.atafImgFile = paperVO.atafImg;
        this.efRatio = paperVO.efRatio;
        this.efImg = this._getImgObjFromUrl(paperVO.efImg);
        this.efImgFile = paperVO.efImg;
        this.qrsRatio = paperVO.qrsRatio;
        this.qrsImg = this._getImgObjFromUrl(paperVO.qrsImg);
        this.qrsImgFile = paperVO.qrsImg;
      } catch (err) {
        console.log(err.response.data.message, "1");
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    },
    // 从一个url中生成一个供vant的uploader控件使用的对象
    _getImgObjFromUrl(imageUrl) {
      return imageUrl
        ? [
            {
              url:
                imageUrl.substring(imageUrl.length - 4) == ".jpg"
                  ? imageUrl
                  : imageUrl + ".jpg",
              isImage: true
            }
          ]
        : [];
    },
    async _mock() {
      console.log("mock");
      this.patientId = 115;
      this.modes = config.MODES;
      this.mode = this.modes[0].value;
      this.perceivedPolaritys = {
        a: config.POLARS,
        lv: config.POLARS,
        rv: config.POLARS
      };
      this.perceivedPolarity = {
        a: config.POLARS[0],
        lv: config.POLARS[0],
        rv: config.POLARS[0]
      };
      this.pacingPolaritys = {
        a: config.POLARS,
        lv: config.POLARS,
        rv: config.POLARS
      };
      this.pacingPolarity = {
        a: config.POLARS[0],
        lv: config.POLARS[0],
        rv: config.POLARS[0]
      };
      // 电池状态
      this.batteryStatus = "1";
      // 预计寿命
      this.duration = "2";
      // 电极阈值
      this.threshold = { a: "1", rv: "2", lv: "3" };
      // 电极脉宽
      this.pulseWidth = { a: "4", rv: "5", lv: "6" };
      // 电极感知
      this.perception = { a: "7", rv: "8", lv: "9" };
      // 电极阻抗
      this.impedance = { a: "10", rv: "11", lv: "12" };
      // 低限频率
      this.down = "13";
      // 上限频率
      this.up = "14";
      // 输出电压
      this.outputVoltage = { a: "21", rv: "22", lv: "23" };
      // 输出脉宽
      this.outputPulseWidth = { a: "31", rv: "32", lv: "33" };
      // 输出灵敏度
      this.outputPerception = { a: "41", rv: "42", lv: "43" };

      // AP%
      this.apRatio = "51";
      // VP%
      this.vpRatio = "61";
    }
  },
  async beforeMount() {
    // this._mock();
    // return;
    // 病人编号
    this.patientId = this.$route.query.id;
    console.log(this.patientId, "1");
    // 起搏模式
    this.modes = config.MODES;
    this.mode = this.modes[0].value;
    this.perceivedPolaritys = {
      a: config.POLARS,
      lv: config.POLARS,
      rv: config.POLARS
    };
    this.perceivedPolarity = {
      a: config.POLARS[0],
      lv: config.POLARS[0],
      rv: config.POLARS[0]
    };
    this.pacingPolaritys = {
      a: config.POLARS,
      lv: config.POLARS,
      rv: config.POLARS
    };
    this.pacingPolarity = {
      a: config.POLARS[0],
      lv: config.POLARS[0],
      rv: config.POLARS[0]
    };
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
      this.atafImg = this._getImgObjFromUrl(data.atafImg);
      this.atafImgFile = data.atafImg;
      this.efImg = this._getImgObjFromUrl(data.efImg);
      this.efImgFile = data.efImg;
      this.qrsImg = this._getImgObjFromUrl(data.qrsImg);
      this.qrsImgFile = data.qrsImg;
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
          .comb {
            display: flex;
            align-items: center;
            .inputplace {
              flex: 1;
            }
            .suffix {
              padding-left: 5px;
              width: 30%;
            }
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
