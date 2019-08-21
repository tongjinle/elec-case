<template>
  <div class="newPatientBox">
    <div class="head">
      <div class="left" @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>新增患者</p>
      <div class="right" @click="addPatient">
        <img src="../../assets/image/download@2x.png" alt />
      </div>
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
            <ChooseDateTime :time="birth" :chooseTimeHandle="chooseBirth" />
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
            <ChooseDateTime :chooseTimeHandle="choosePlantTime" />
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
                <AddButton />
                <span>%</span>
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadOfEfImage"
              />
            </div>
          </div>
          <div class="footItem" style="margin-left:1rem">
            <div class="footItemLeft">
              <div>QRS(0~99)</div>
              <div class="footDown">
                <AddButton />
              </div>
            </div>
            <div class="footItemRight">
              <van-uploader
                style="margin-left:1rem;"
                preview-size="3rem"
                :max-count="1"
                :after-read="afterReadOfQrsImage"
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

export default {
  name: "newPatient",
  components: { ChooseDateTime, DropDown, AddButton },
  data() {
    return {
      // 患者名字
      name: "",
      // 患者性别
      sex: "0",
      // 患者生日 (格式:1990-01-01)
      birth: "",
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
      plantTime: "",
      // ef
      plantBaseEf: -1,
      // ef img
      plantBaseEfImg: "",
      // qrs
      plantBaseQrs: -1,
      // qrs img
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
    let date = new Date();
    this.birth = tool.timeText(date);

    this.plantTime = tool.timeText(date);

    {
      let { data: doctors } = await bll.doctors();
      console.log(doctors);
      this.doctors = doctors.map(n => ({ name: n.name, value: n.id }));
    }

    this.plantReasons = [
      { name: "病窦", value: 1 },
      { name: "房室传导阻滞", value: 2 },
      { name: "房颤伴长RR间期", value: 3 },
      { name: "心衰", value: 4 },
      { name: "晕厥", value: 5 },
      { name: "心肌病", value: 6 }
    ];

    {
      let { data: factories } = await bll.factories();
      this.factories = factories.map(n => ({ name: n.name, value: n.id }));
    }

    this.categories = [
      { name: "BRADY", value: 1 },
      { name: "ICD", value: 2 },
      { name: "CRTP", value: 3 },
      { name: "CRTD", value: 4 }
    ];
  },
  mounted() {},
  methods: {
    checkParams() {},
    async addPatient() {
      console.log("add patient");
      await bll.addPatient(
        this.name,
        this.sex,
        this.birth,
        this.phone,
        this.emergContact,
        this.emergPhone,
        this.addr,
        this.doctorId,
        this.plantReason,
        this.plantBaseEf,
        this.plantBaseEfImg,
        this.plantBaseQrs,
        this.plantBaseQrsImg,
        this.factoryId,
        this.deviceCate,
        this.deviceNo,
        this.deviceModel
      );
      this.gotoDetails();
    },
    async afterRead(res) {
      let file = res.file;
      let { data } = await bll.uploadImage(file);
      console.log("image id:", data);
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
      this.birth = time;
    },
    choosePlantTime(time) {
      this.plantTime = time;
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
  font-size: @base / 3;
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
      margin-left: @base / 2;
    }
    .right {
      justify-content: flex-end;
      margin-right: @base / 2;
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
        span {
          color: rgb(153, 153, 153);
          font-size: @base / 2.5;
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