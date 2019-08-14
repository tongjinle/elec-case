<template>
  <div class="newPatientBox">
    <div class="head">
      <div class="left" @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>新增患者</p>
      <div class="right" @click="gotoDetails">
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
            <ChooseDateTime :time="birth" @chooseTimeHandle="chooseBirth" />
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
            <ChooseDateTime @chooseTimeHandle="choosePlantTime" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">医师</div>
            <DropDown />
          </div>
          <div class="itemContent">
            <div class="contentTitle">植入原因</div>
            <DropDown />
          </div>
        </div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">厂家</div>
            <DropDown />
          </div>
          <div class="itemContent">
            <div class="contentTitle">类别</div>
            <DropDown />
          </div>
          <div class="itemContent">
            <div class="contentTitle">型号</div>
            <input type="text" placeholder="XXXXXX" />
          </div>
          <div class="itemContent">
            <div class="contentTitle">序列号</div>
            <input type="text" placeholder="ABFSJKHKJ" />
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
                v-model="fileList"
                multiple
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
                v-model="fileList"
                multiple
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
      plantReason: 33,
      // ef
      plantBaseEf: 12,
      // ef img
      plantBaseEfImg: "fiurhf99.jpg",
      // qrs
      plantBaseQrs: 13,
      // qrs img
      plantBaseQrsImg: "fiurhf99.jpg",
      // 设备厂家
      factoryId: 1,
      // 设备类别
      deviceCate: 1,
      // 设备型号
      deviceModel: "GT343",
      // 设备序列号
      deviceNo: "T4343"
    };
  },
  beforeMount() {
    let date = new Date();
    this.birth = [
      date.getFullYear(),
      (100 + (date.getMonth() + 1) + "").slice(1),
      date.getDate()
    ].join("-");
  },
  mounted() {},
  methods: {
    chooseBirth(time) {
      this.birth = time;
    },
    choosePlantTime(time) {},
    getBack() {
      this.$router.back(-1);
    },
    gotoDetails() {
      this.$router.push({ path: "/patientMsg" });
    }
  }
};
</script>

<style lang="less">
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