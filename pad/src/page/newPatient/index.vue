<template>
  <div class="newPatientBox">
    <div class="head">
      <div class="left" @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>新增患者</p>
      <div class="right" @click="addPatient">下一步</div>
    </div>
    <div class="content">
      <div class="item">
        <div class="title">个人信息</div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">姓名</div>
            <input v-model="name" type="text" placeholder="患者姓名" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">性别</div>
            <van-radio-group class="radio" v-model="sex">
              <van-radio class="radioItem" name="0">男</van-radio>
              <van-radio class="radioItem" name="1">女</van-radio>
            </van-radio-group>
          </div>
          <div class="itemContent">
            <div class="contentTitle">出生日期</div>
            <ChooseDateTime :value="birth" :chooseTimeHandle="chooseBirth" />
          </div>
        </div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">手机号</div>
            <input v-model="phone" type="text" placeholder="手机号" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">紧急联系人号码</div>
            <input v-model="emergPhone" type="text" placeholder="紧急联系人号码" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">病况信息</div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">植入日期</div>
            <ChooseDateTime :value="plantTime" :chooseTimeHandle="choosePlantTime" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">医师</div>
            <DropDown :actions="doctors" @on-change="chooseDoctor" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">植入原因</div>
            <DropDown :actions="plantReasons" @on-change="choosePlantReason" />
          </div>
        </div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">厂家</div>
            <DropDown :actions="factories" @on-change="chooseFactory" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">类别</div>
            <DropDown :actions="categories" @on-change="chooseCategory" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">型号</div>
            <input type="text" placeholder="请输入型号" v-model="deviceModel" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">序列号</div>
            <input type="text" placeholder="请输入序列号" v-model="deviceNo" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          植入基线
          <span>(选填)</span>
        </div>
        <div class="itemContentBox">
          <div class="footItem">
            <div class="footItemLeft">
              <div>EF(0~99)</div>
              <div class="footDown">
                <input class="inputbox" type="text" v-model="plantBaseEf" />
                <span>%</span>
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadOfEfImage"
                v-model="efImg"
              />
            </div>
          </div>
          <div class="footItem" style="margin-left:1rem">
            <div class="footItemLeft">
              <div>QRS(0~99)</div>
              <div class="footDown">
                <input class="inputbox" type="text" v-model="plantBaseQrs" />
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadOfQrsImage"
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
import ChooseDateTime from "@/component/chooseDateTime";
import AddButton from "@/component/addButton";
import * as bll from "../../utils/business";
import * as tool from "../../utils/tool";
import * as config from "../../utils/config";
import { Toast } from "vant";
export default {
  name: "newPatient",
  components: { ChooseDateTime, DropDown, AddButton },
  data() {
    return {
      // 患者名字
      name: "",
      // 患者性别
      sex: "0",
      // 患者生日 (格式:Date)
      birth: new Date(),
      // 手机号码
      phone: "",
      // 紧急联系人
      emergContact: "",
      // 紧急联系人手机号码
      emergPhone: "",
      doctorId: "",
      fileList: [],
      // 植入原因
      plantReason: -1,
      // 植入时间
      plantTime: new Date(),
      // ef
      plantBaseEf: "",
      // ef img
      efImg: [],
      plantBaseEfImg: "",
      // qrs
      plantBaseQrs: "",
      // qrs img
      qrsImg: [],
      plantBaseQrsImg: "",
      // 设备厂家
      factoryId: 1,
      // 设备类别
      deviceCate: 1,
      // 设备型号
      deviceModel: "",
      // 设备序列号
      deviceNo: "",

      /**
       * 下拉列表的枚举值
       */
      // 医生
      doctors: [],
      // 植入原因
      plantReasons: [],
      // 厂家
      factories: [],
      // 类别
      categories: []
    };
  },
  async beforeMount() {
    this.birth = new Date();

    this.plantTime = new Date();

    {
      try {
        let { data: doctors } = await bll.doctors();
        console.log(doctors);
        this.doctors = doctors.map(n => ({ name: n.name, value: n.id }));
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    }

    this.plantReasons = config.PLANT_REASONS;

    {
      try {
        let { data: factories } = await bll.factories();
        this.factories = factories.map(n => ({ name: n.name, value: n.id }));
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    }

    this.categories = config.DEVICE_CATEGORIES;
  },
  mounted() {
    // mock
    // this._mock();
  },
  methods: {
    _mock() {
      this.name = "童扑满";
      this.sex = "1";
      this.birth = new Date(1984, 0, 18);
      this.phone =
        "1870181" + (1e4 + Math.floor(1e2 * Math.random())).toString().slice(1);
      this.emergPhone = "22201816747";
      this.plantTime = new Date(2010, 0, 18);
      this.deviceModel = "奥特曼";
      this.deviceNo = "taro";
      this.plantBaseEf = "99";
      this.plantBaseQrs = "88";
    },
    checkParams() {},
    async addPatient() {
      console.log("add patient");
      var mobilePtn = /^1[34578][0-9]{9}$/;
      var landlinePtn = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
      if (this.emergPhone == this.phone) {
        Toast("手机号码与紧急联系人手机号码重复，请重填");
        return false;
      }
      if (
        !mobilePtn.test(this.emergPhone) ||
        !landlinePtn.test(this.emergPhone)
      ) {
        Toast("紧急联系人手机号码有误，请重填");
        return false;
      }
      if (!mobilePtn.test(this.phone) || !landlinePtn.test(this.phone)) {
        Toast("手机号码有误，请重填");
        return false;
      }
      let data = {
        name: this.name,
        sex: this.sex,
        birth: bll.timeToString(this.birth),
        phone: this.phone,
        emergContact: this.emergContact,
        emergPhone: this.emergPhone,
        addr: this.addr,
        treat: {
          doctorId: this.doctorId
        },
        psmk: {
          plantTime: bll.timeToString(this.plantTime),
          plantReason: this.plantReason,
          plantBaseEf: this.plantBaseEf,
          plantBaseEfImg: this.plantBaseEfImg,
          plantBaseQrs: this.plantBaseQrs,
          plantBaseQrsImg: this.plantBaseQrsImg,
          factoryId: this.factoryId,
          deviceCate: this.deviceCate,
          deviceNo: this.deviceNo,
          deviceModel: this.deviceModel,
          doctorId: this.doctorId
        }
      };
      try {
        let res = await bll.addPatient(data);
        console.log(res);
        this.$router.push({
          path: "search",
          query: { id: res.data.id, name: res.data.name }
        });
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
      // this.gotoDetails();
    },
    async afterRead(res) {
      let file = res.file;
      try {
        let { data } = await bll.uploadImage(file);
        console.log("image id:", data);
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
      return data;
    },
    // ef image的图像编号
    async afterReadOfEfImage(res) {
      this.plantBaseEfImg = await this.afterRead(res);
    },
    // qrs image的图像编号
    async afterReadOfQrsImage(res) {
      this.plantBaseQrsImg = await this.afterRead(res);
    },
    chooseDoctor(value) {
      this.doctorId = value;
      console.log(value);
    },
    choosePlantReason(value) {
      this.plantReason = value;
      console.log(value);
    },
    chooseFactory(value) {
      this.factoryId = value;
      console.log(value);
    },
    chooseCategory(value) {
      this.deviceCate = value;
      console.log(value);
    },
    chooseBirth(time) {
      console.log({ time });
      let [year, month, date] = time.split("-");
      this.birth = new Date(year, month - 1, date);
    },
    choosePlantTime(time) {
      let [year, month, date] = time.split("-");
      this.plantTime = new Date(year, month - 1, date);
      console.log("plantTime:", this.plantTime);
    },
    getBack() {
      this.$router.back(-1);
    },
    gotoDetails() {
      this.$router.push({ path: "/patientMsg" });
    }
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.newPatientBox {
  font-size: @base / 4;
  .head {
    display: flex;
    justify-content: flex-start;
    div {
      width: 10%;
      display: flex;
      align-items: center;
      color: rgb(18, 159, 259);
      font-size: @base / 3;
      img {
        width: 25px;
        height: 25px;
      }
    }
    .left {
      justify-content: flex-start;
      margin-left: @base / 3;
    }
    .right {
      justify-content: flex-end;
      margin-right: @base / 3;
    }
    p {
      width: 80%;
      font-size: @base / 3;
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
        span {
          color: rgb(153, 153, 153);
          font-size: @base / 3.5;
        }
      }
      .itemContentBox {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
        .itemContent {
          width: @base*5;
          .contentTitle {
            margin-bottom: 20px;
          }
          input {
            border: 1px solid rgb(221, 221, 221);
            border-radius: 5px;
            padding: 10px 20px;
            width: @base*2.5;
          }
          .radio {
            display: flex;
            justify-content: flex-start;
            .radioItem {
              margin-top: 5px;
              height: @base / 1.5;
              margin-right: 20px;
            }
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
      }
    }
  }
}
</style>