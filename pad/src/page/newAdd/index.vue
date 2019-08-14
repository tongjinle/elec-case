<template>
  <div class="addBox">
    <div class="head">
      <div @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>新增随访</p>
      <div @click="gotoDetails">提交</div>
    </div>
    <div class="content">
      <div class="item">
        <div class="title">随访类型</div>
        <van-radio-group v-model="fllowType" class="radioFlex">
          <van-radio name="1" class="radioItem">常规</van-radio>
          <van-radio name="2" class="radioItem">不适随访</van-radio>
          <van-radio name="3" class="radioItem">HIS随访</van-radio>
        </van-radio-group>
      </div>
      <div class="item">
        <div class="title">电池状态</div>
        <div class="mainer" style="align-items:flex-start">
          <van-radio-group v-model="batteryState" class="radio">
            <van-radio name="1" class="radioItem">OK</van-radio>
            <van-radio name="2" class="radioItem">BRI</van-radio>
          </van-radio-group>
          <DropDown />
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
        <div class="mainer" v-for="(item,index) in list" :key="index">
          <div class="mainerItemTitle">{{item.title}}</div>
          <div class="mainerItem" v-for="(itemInput,indexInput) in item.input" :key="indexInput">
            <DropDown />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">阻抗（欧）</div>
          <div class="mainerItem">
            <AddButton />
          </div>
          <div class="mainerItem">
            <AddButton />
          </div>
          <div class="mainerItem">
            <AddButton />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">基本参数</div>
        <div class="mainer">
          <div class="mainerItemTitle">起搏模式：</div>
          <div class="mainerItem">
            <AddButton />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle">低限模式：</div>
          <div class="mainerItem">
            <AddButton />
          </div>
          <div class="mainerItemTitle">上限频率：</div>
          <div class="mainerItem">
            <AddButton />
          </div>
        </div>
        <div class="mainer">
          <div class="mainerItemTitle"></div>
          <div class="mainerItem" style="text-align:center;">A</div>
          <div class="mainerItem" style="text-align:center;">RV</div>
          <div class="mainerItem" style="text-align:center;">LV</div>
        </div>
        <div class="mainer" v-for="(item,index) in argumentList" :key="index">
          <div class="mainerItemTitle" style="line-height:0.5rem;">{{item.title}}</div>
          <div class="mainerItem" v-for="(itemInput,indexInput) in item.input" :key="indexInput">
            <DropDown />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">诊断信息</div>
        <div class="mainer">
          <div class="msgTitle">AP%</div>
          <div class="msgInput">
            <input type="text" placeholder="7" />
            <input type="text" placeholder="7" /> .
            <input type="text" placeholder="7" /> %
          </div>
          <div class="msgTitle" style="margin-left:3rem">VP%</div>
          <div class="msgInput">
            <input type="text" placeholder="7" />
            <input type="text" placeholder="7" /> .
            <input type="text" placeholder="7" /> %
          </div>
        </div>
        <div class="mainer" style="margin-top:1rem;">
          <div style="margin-right:0.5rem">AT/AF:</div>
          <van-checkbox v-model="msg"></van-checkbox>
          <van-uploader style="margin-left:2rem;" preview-size="3rem" v-model="fileList" multiple />
        </div>
      </div>
      <div class="item">
        <div class="title">以下仅为“HIS随访”</div>
        <div class="mainer">
          <div class="footItem">
            <div class="footItemLeft">
              <div>EF</div>
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
              <div>
                QRS
                <span class="smallFont">ms</span>
              </div>
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
import AddButton from "@/component/addButton";
export default {
  name: "index",
  components: { DropDown, AddButton },
  data() {
    return {
      fileList: [],
      fllowType: "1",
      batteryState: "1",
      option1: [
        { text: ">10", value: 0 },
        { text: ">20", value: 1 },
        { text: ">30", value: 2 }
      ],
      value1: 0,
      list: [
        { title: "阈值（V）", input: ["", "", ""] },
        { title: "脉宽（ms）", input: ["", "", ""] },
        { title: "感知（mv）", input: [""] }
      ],
      argumentList: [
        { title: "输出（V）", input: ["", "", ""] },
        { title: "脉宽（ms）", input: ["", "", ""] },
        { title: "感知灵敏度（mv）", input: ["", "", ""] }
      ],
      msg: true
    };
  },
  methods: {
    getBack() {
      this.$router.back(-1);
    },
    gotoDetails() {
      this.$router.push({ path: "/followUpMain" });
    }
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
        }
        .mainerItem {
          width: @base*5;
        }
        .radio {
          margin-top: @base / 4;
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