<template>
  <div class="newPatientBox">
    <div class="head">
      <div @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>患者信息</p>
      <div></div>
    </div>
    <div class="content">
      <div class="item">
        <div class="title">个人信息</div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">姓名</div>
            <div class="contentMsg">{{name}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">性别</div>
            <div class="contentMsg">{{sex}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">出生日期</div>
            <div class="contentMsg">{{birth}}</div>
          </div>
        </div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">手机号</div>
            <div class="contentMsg">{{phone}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">紧急联系人号码</div>
            <div class="contentMsg">{{emergPhone}}</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">病况信息</div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">植入日期</div>
            <div class="contentMsg">{{plantTime}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">医师</div>
            <div class="contentMsg">{{doctor}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">植入原因</div>
            <div class="contentMsg">{{plantReason}}</div>
          </div>
        </div>
        <div class="itemContentBox">
          <div class="itemContent">
            <div class="contentTitle">厂家</div>
            <div class="contentMsg">{{factoryId}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">类别</div>
            <div class="contentMsg">{{deviceCate}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">型号</div>
            <div class="contentMsg">{{deviceModel}}</div>
          </div>
          <div class="itemContent">
            <div class="contentTitle">序列号</div>
            <div class="contentMsg">{{deviceNo}}</div>
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
                <div class="contentMsg">{{plantBaseEf}}</div>
                <span>%</span>
              </div>
            </div>
            <div class="footItemRight">
              <img :src="plantBaseEfImg" alt />
            </div>
          </div>
          <div class="footItem" style="margin-left:1rem">
            <div class="footItemLeft">
              <div>QRS(0~99)</div>
              <div class="footDown">
                <div class="contentMsg">{{plantBaseQrs}}</div>
              </div>
            </div>
            <div class="footItemRight">
              <img :src="plantBaseQrsImg" alt />
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

      radio: "1",
      fileList: []
    };
  },
  mounted() {},
  methods: {
    async queryPatient(patientId) {
      let { data } = await bll.patient(patientId);
    },
    getBack() {
      this.$router.back(-1);
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
          width: @base*5.5;
          .contentTitle {
            margin-bottom: 20px;
          }
          .contentMsg {
            background-color: rgb(247, 247, 247);
            border-radius: 5px;
            padding: 10px 20px;
            width: @base*3;
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
            .contentMsg {
              background-color: rgb(247, 247, 247);
              border-radius: 5px;
              padding: 10px 20px;
              width: @base*2;
            }
            span {
              margin-left: @base*0.5;
            }
          }
          .footItemRight {
            img {
              margin-left: @base;
              width: @base*3;
              height: @base*3;
            }
          }
        }
      }
    }
  }
}
</style>