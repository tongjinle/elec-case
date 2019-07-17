<template>
  <div class="fanChart">
    <div id="echartContainer"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'fanChart',
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echartContainer'));

    var option = {
      backgroundColor: '#ffffff',
      title: {
        text: '机器类别',
        left: 10,
        top: 10,
        textStyle: {
          color: '#000000'
        }
      },
      series : [
        {
          name: '机器类型',
          type: 'pie',
          radius: '55%',
          data:[
            {
              value:235, 
              name:'BRADY',
              itemStyle: {
                normal: {
                  color:'#20e7ae'
                }
              }
            },
            {
              value:274, 
              name:'ICD',
              itemStyle: {
                normal: {
                  color:'#ff788c'
                }
              }
            },
            {
              value:310, 
              name:'CRTP',
              itemStyle: {
                normal: {
                  color:'#fdcc31'
                }
              }
            },
            {
              value:335, 
              name:'CRTD',
              itemStyle: {
                normal: {
                  color:'#9053f5'
                }
              } 
            }
          ],
          roseType: 'angle'
        }
      ]
    };
    // 绘制图表
    myChart.setOption(option);
  },

}
</script>

<style lang="less">
  @base: 75rem;
  .fanChart {
    float: left;
    // width: 400/@base;
    // height: 400/@base;
    #echartContainer {
      width: 400/@base;
      height: 300/@base;
    }
  }
</style>