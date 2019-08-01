<template>
  <div class="home">
    <div class="slideNav">
      <NavLeft />
    </div>
    <div class="main">
      <div class="title">首页</div>
      <div class="content">
        <div class="top">
          <div class="left">
            <MonthProcess :everybody="everybody" :actual="actual" class="MonthProcess" />
          </div>
          <div class="right">
            <VisitorDataCard
              :title="titleUp"
              :peopleNumber="peopleNumberUp"
              class="VisitorDataCard"
            />
            <VisitorDataCard
              :title="titleDown"
              :peopleNumber="peopleNumberDown"
              class="VisitorDataCard"
            />
          </div>
        </div>
        <div class="down">
          <div id="echartContainerLeft"></div>
          <div id="echartContainerCenter"></div>
          <div id="echartContainerRight"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonthProcess from "@/component/monthProcess";
import VisitorDataCard from "@/component/visitorDataCard";
import NavLeft from "@/component/navLeft";
import echarts from "echarts";
import { homeRequest } from "../../utils/business";
export default {
  name: "home",
  components: { MonthProcess, VisitorDataCard, NavLeft },
  data() {
    return {
      everybody: 1,
      actual: 1,
      titleUp: "随访窗口人数（本周）",
      titleDown: "随访窗外（超期两周）",
      peopleNumberUp: 0,
      peopleNumberDown: 0,
      deviceCategories: [],
      plantReasons: [],
      visitEvents: [],
      color: [
        "#20e7ae",
        "#ff788c",
        "#8acff8",
        "#fdcc31",
        "#9053f5",
        "#000000",
        "#fd7f57",
        "#6697ea",
        "#3ccb3e",
        "#9c1663"
      ],
      optionLeft: {
        backgroundColor: "#ffffff",
        title: {
          text: "机器类别",
          left: 10,
          top: 10,
          textStyle: {
            color: "#000000"
          }
        },
        series: [
          {
            name: "机器类型",
            type: "pie",
            radius: "55%",
            data: [],
            roseType: "angle"
          }
        ]
      },
      optionCenter: {
        backgroundColor: "#ffffff",
        title: {
          text: "植入原因",
          left: 10,
          top: 10,
          textStyle: {
            color: "#000000"
          }
        },
        series: [
          {
            name: "植入原因",
            type: "pie",
            radius: "55%",
            data: [],
            roseType: "angle"
          }
        ]
      },
      optionRight: {
        backgroundColor: "#ffffff",
        title: {
          text: "机器类别",
          left: 10,
          top: 10,
          textStyle: {
            color: "#000000"
          }
        },
        series: [
          {
            name: "机器类型",
            type: "pie",
            radius: "55%",
            data: [],
            roseType: "angle"
          }
        ]
      }
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChartLeft = echarts.init(
      document.getElementById("echartContainerLeft")
    );
    var myChartCenter = echarts.init(
      document.getElementById("echartContainerCenter")
    );
    var myChartRight = echarts.init(
      document.getElementById("echartContainerRight")
    );

    // 绘制图表
    myChartLeft.setOption(this.optionLeft);
    myChartCenter.setOption(this.optionCenter);
    myChartRight.setOption(this.optionRight);
  },
  created() {
    // this.fetchData();
  },
  beforeMount() {
    homeRequest().then(data => {
      console.log(data);
      this.everybody = data.data.curMonthVisitNum;
      if (this.everybody == null) {
        this.everybody = 200;
      }
      this.actual = data.data.curMonthVisitedNum;
      this.peopleNumberUp = data.data.weekVisitNum;
      this.peopleNumberDown = data.data.weekVisitMissNum;
      for (var i = 0; i < Object.keys(data.data.deviceCategories).length; i++) {
        let a = Object.keys(data.data.deviceCategories)[i];
        let list = {};
        list.itemStyle = { normal: { color: "" } };
        list.name = a;
        list.value = data.data.deviceCategories[a];
        list.itemStyle.normal.color = this.color[i];
        this.optionLeft.series[0].data.push(list);
      }
      var myChartLeft = echarts.init(
        document.getElementById("echartContainerLeft")
      );
      myChartLeft.setOption(this.optionLeft);
      for (var i = 0; i < Object.keys(data.data.plantReasons).length; i++) {
        let a = Object.keys(data.data.plantReasons)[i];
        let list = {};
        list.itemStyle = { normal: { color: "" } };
        list.name = a;
        list.value = data.data.plantReasons[a];
        list.itemStyle.normal.color = this.color[i];
        this.optionCenter.series[0].data.push(list);
      }
      var myChartCenter = echarts.init(
        document.getElementById("echartContainerCenter")
      );
      myChartCenter.setOption(this.optionCenter);
      for (var i = 0; i < Object.keys(data.data.visitEvents).length; i++) {
        let a = Object.keys(data.data.visitEvents)[i];
        let list = {};
        list.itemStyle = { normal: { color: "" } };
        list.name = a;
        list.value = data.data.visitEvents[a];
        list.itemStyle.normal.color = this.color[i];
        this.optionRight.series[0].data.push(list);
      }
      var myChartRight = echarts.init(
        document.getElementById("echartContainerRight")
      );
      myChartRight.setOption(this.optionRight);
    });
  },
  methods: {}
};
</script>

<style lang="less">
@base: 75rem;
.home {
  background-color: rgb(244, 248, 249);
  font-size: 28 / @base;
  color: #333333;
  height: 100%;
  display: flex;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  // 侧面导航
  .slideNav {
    float: left;
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    width: 100px;
  }

  .main {
    width: 100%;
    margin-left: -0.5px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      background-color: #fff;
      width: 100%;
      height: 100 / @base;
      font-size: 36 / @base;
    }
    // 内容
    .content {
      width: 100%;
      height: 90%;
      padding: 30 / @base 30 / @base 0 30 / @base;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        width: 100%;
        height: 49%;
        display: flex;
        justify-content: space-between;
        .left {
          width: 65%;
          height: 100%;
          .MonthProcess {
            width: 100%;
            height: 100%;
          }
        }
        .right {
          width: 33%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .VisitorDataCard {
            width: 100%;
            height: 48%;
          }
        }
      }
      .down {
        width: 100%;
        height: 49%;
        display: flex;
        justify-content: space-between;
        div {
          width: 30%;
          height: 100%;
        }
      }
    }
  }
}
</style>