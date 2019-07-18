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
            <MonthProcess class="MonthProcess" />
          </div>
          <div class="right">
            <VisitorDataCard class="VisitorDataCard" />
            <VisitorDataCard class="VisitorDataCard" />
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

export default {
  name: "home",
  components: { MonthProcess, VisitorDataCard, NavLeft },
  data() {
    return {};
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

    var optionLeft = {
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
          data: [
            {
              value: 235,
              name: "BRADY",
              itemStyle: {
                normal: {
                  color: "#20e7ae"
                }
              }
            },
            {
              value: 274,
              name: "ICD",
              itemStyle: {
                normal: {
                  color: "#ff788c"
                }
              }
            },
            {
              value: 310,
              name: "CRTP",
              itemStyle: {
                normal: {
                  color: "#fdcc31"
                }
              }
            },
            {
              value: 335,
              name: "CRTD",
              itemStyle: {
                normal: {
                  color: "#9053f5"
                }
              }
            }
          ],
          roseType: "angle"
        }
      ]
    };
    var optionCenter = {
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
          data: [
            {
              value: 235,
              name: "BRADY",
              itemStyle: {
                normal: {
                  color: "#20e7ae"
                }
              }
            },
            {
              value: 274,
              name: "ICD",
              itemStyle: {
                normal: {
                  color: "#ff788c"
                }
              }
            },
            {
              value: 310,
              name: "CRTP",
              itemStyle: {
                normal: {
                  color: "#fdcc31"
                }
              }
            },
            {
              value: 335,
              name: "CRTD",
              itemStyle: {
                normal: {
                  color: "#9053f5"
                }
              }
            }
          ],
          roseType: "angle"
        }
      ]
    };
    var optionRight = {
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
          data: [
            {
              value: 235,
              name: "BRADY",
              itemStyle: {
                normal: {
                  color: "#20e7ae"
                }
              }
            },
            {
              value: 274,
              name: "ICD",
              itemStyle: {
                normal: {
                  color: "#ff788c"
                }
              }
            },
            {
              value: 310,
              name: "CRTP",
              itemStyle: {
                normal: {
                  color: "#fdcc31"
                }
              }
            },
            {
              value: 335,
              name: "CRTD",
              itemStyle: {
                normal: {
                  color: "#9053f5"
                }
              }
            }
          ],
          roseType: "angle"
        }
      ]
    };
    // 绘制图表
    myChartLeft.setOption(optionLeft);
    myChartCenter.setOption(optionCenter);
    myChartRight.setOption(optionRight);
  },
  created() {
    // this.fetchData();
  },
  methods: {
    // async fetchData() {
    //   const data = await getData();
    //   this.msg = data;
    // }
  }
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