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
            <MonthProcess
              class="MonthProcess"
              :total="fullStat.curMonthVisitNum"
              :current="fullStat.curMonthVisitedNum"
            />
          </div>
          <div class="right">
            <VisitorDataCard
              :total="fullStat.weekVisitNum"
              title="随访窗口人数 (本周)"
              class="VisitorDataCard"
            />
            <VisitorDataCard
              :total="fullStat.weekVisitMissNum"
              title="随访窗外 (超期两周)"
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
import * as bll from "../../utils/business";

export default {
  name: "home",
  components: { MonthProcess, VisitorDataCard, NavLeft },
  data() {
    return { stat: undefined };
  },
  computed: {
    fullStat() {
      if (this.stat === undefined) {
        return {};
      }
      return {
        curMonthVisitNum: this.stat.curMonthVisitNum,
        curMonthVisitedNum: this.stat.curMonthVisitedNum,
        weekVisitNum: this.stat.weekVisitNum,
        weekVisitMissNum: this.stat.weekVisitMissNum
      };
    }
  },
  async mounted() {
    try {
      let { data } = await bll.stat();
      console.log(data);
      this.stat = data;

      let { deviceCategories, plantReasons, visitEvents } = this.stat;

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
            data: [
              {
                value: deviceCategories.BRADY,
                name: "BRADY",
                itemStyle: {
                  normal: {
                    color: "#20e7ae"
                  }
                }
              },
              {
                value: deviceCategories.ICD,
                name: "ICD",
                itemStyle: {
                  normal: {
                    color: "#ff788c"
                  }
                }
              },
              {
                value: deviceCategories.CRTP,
                name: "CRTP",
                itemStyle: {
                  normal: {
                    color: "#fdcc31"
                  }
                }
              },
              {
                value: deviceCategories.CRTD,
                name: "CRTD",
                itemStyle: {
                  normal: {
                    color: "#9053f5"
                  }
                }
              }
            ],
            roseType: "radius",
            radius: [20, 110]
          }
        ]
      };
      var optionCenter = {
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
            data: [
              {
                value: plantReasons["心衰"],
                name: "心衰",
                itemStyle: {
                  normal: {
                    color: "#f9467e"
                  }
                }
              },
              {
                value: plantReasons["房颤伴长RR间期"],
                name: "房颤伴长RR间期",
                itemStyle: {
                  normal: {
                    color: "#fdcc31"
                  }
                }
              },
              {
                value: plantReasons["房室传导阻滞"],
                name: "房室传导阻滞",
                itemStyle: {
                  normal: {
                    color: "#20e7ae"
                  }
                }
              },
              {
                value: plantReasons["病窦"],
                name: "病窦",
                itemStyle: {
                  normal: {
                    color: "#9053f5"
                  }
                }
              },
              {
                value: plantReasons["晕厥"],
                name: "晕厥",
                itemStyle: {
                  normal: {
                    color: "#129ff9"
                  }
                }
              },
              {
                value: plantReasons["心肌病"],
                name: "心肌病",
                itemStyle: {
                  normal: {
                    color: "#5ac93c"
                  }
                }
              }
            ],
            roseType: "radius",
            radius: [20, 110]
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
            data: [
              {
                value: visitEvents["起搏参数异常"],
                name: "起搏参数异常",
                itemStyle: {
                  normal: {
                    color: "#20e7ae"
                  }
                }
              },
              {
                value: visitEvents["是否修改设置"],
                name: "是否修改设置",
                itemStyle: {
                  normal: {
                    color: "#5ac93c"
                  }
                }
              },
              {
                value: visitEvents["电池状态异常"],
                name: "电池状态异常",
                itemStyle: {
                  normal: {
                    color: "#fdcc31"
                  }
                }
              },
              {
                value: visitEvents["发现心律异常 AT/AF"],
                name: "发现心律异常 AT/AF",
                itemStyle: {
                  normal: {
                    color: "#9053f5"
                  }
                }
              }
            ],
            roseType: "radius",
            radius: [20, 110]
          }
        ]
      };
      // 绘制图表
      myChartLeft.setOption(optionLeft);
      myChartCenter.setOption(optionCenter);
      myChartRight.setOption(optionRight);
    } catch (e) {}
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