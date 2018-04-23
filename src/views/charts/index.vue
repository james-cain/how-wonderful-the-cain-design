<template>
  <div class="chart-content">
      <div class="chart-row">
          <div class="chart-container-small">
                <div class="chart-card">
                    <chart-maker id="chart-small1" height="120px" width="100%" :option.sync="chartOption"></chart-maker>
                    <div class="chart-desc">日访问量：1,234</div>
                </div>
          </div>
          <div class="chart-container-small">
                <div class="chart-card">
                    <chart-maker id="chart-small2" height="120px" width="100%" :option.sync="chart2Option"></chart-maker>
                    <div class="chart-desc">转换率：15%</div>
                </div>
          </div>
          <div class="chart-container-small">
                <div class="chart-card">
                    <chart-maker id="chart-small3" height="120px" width="100%" :option.sync="chart3Option"></chart-maker>
                    <div class="chart-desc">日访问量：1,234 转换率：15%</div>
                </div>
          </div>
          <div class="chart-container-small">
                <div class="chart-card">
                    <chart-maker id="chart-small4" height="120px" width="100%" :option.sync="chartOption"></chart-maker>
                    <div class="chart-desc">日访问量：1,234</div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import chartMaker from '@/components/charts/chartMaker';

export default {
  components: {
    chartMaker,
  },
  data() {
    return {
      option: {
        backgroundColor: '#fff',
        title: {
          textStyle: {
            fontSize: 14,
            color: '#808080',
            fontFamily: 'MicrosoftYaHei-Bold',
          },
        },
        tooltip: {
          trigger: 'item',
        },
        grid: {
        },
        xAxis: [],
        yAxis: [],
        series: [],
      },
      chartOption: {},
      chart2Option: {},
      chart3Option: {},
    };
  },
  methods: {
    getChart1Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '访问量',
        left: '5',
        top: '10',
      };
      tmpOption.tooltip = {
        axisPointer: {
          lineStyle: {
            color: '#57617B',
          },
        },
        position(point, params, dom, rect, size) {
          if (point[0] < 30) {
            return [0, '50%'];
          } else if (point[0] > (size.viewSize[0] - 80)) {
            return [size.viewSize[0] - 80, '50%'];
          }
          return [point[0] - 30, '50%'];
        },
        formatter: '{b}月: {c}',
      };
      tmpOption.grid = {
        top: 55,
        left: '-8%',
        right: '5%',
        bottom: '2%',
        containLabel: true,
      };
      tmpOption.xAxis = [{
        show: false,
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#475669',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#E3E9EF'],
          },
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      }];
      tmpOption.yAxis = [{
        show: false,
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#475669',
          },
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
          },
        },
        splitLine: {
          lineStyle: {
            color: ['#E3E9EF'],
          },
        },
      }];
      tmpOption.series = [{
        name: '日访问量',
        type: 'line',
        smooth: true,
        // symbol: 'circle',
        symbolSize: 6,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        itemStyle: {
          normal: {
            color: '#0086E6',
            borderColor: '#0086E6',
            borderWidth: 2,
          },
        },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }];
      this.chartOption = Object.assign({}, this.option, tmpOption);
    },
    getChart2Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '流量',
        left: '5',
        top: '10',
      };
      tmpOption.tooltip = {
        trigger: 'axis',
        position(point, params, dom, rect, size) {
          if (point[0] < 30) {
            return [0, '10%'];
          } else if (point[0] > (size.viewSize[0] - 120)) {
            return [size.viewSize[0] - 120, '10%'];
          }
          return [point[0] - 30, '10%'];
        },
      };
      tmpOption.axiosPointer = {
        link: { xAxisIndex: 'all' },
        label: {
          backgroundColor: '#777',
        },
      };
      tmpOption.grid = {
        top: 55,
        left: '-8%',
        right: '5%',
        bottom: '0%',
        containLabel: true,
      };
      tmpOption.xAxis = [{
        show: false,
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      }];
      tmpOption.yAxis = [{
        show: false,
        type: 'value',
      }];
      tmpOption.series = [{
        name: '日流量',
        type: 'line',
        stack: '总量',
        smooth: true,
        symbolSize: 4,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1,
          },
        },
        areaStyle: { normal: {} },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }, {
        name: '午间流量',
        type: 'line',
        stack: '总量',
        smooth: true,
        symbolSize: 4,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1,
          },
        },
        areaStyle: { normal: {} },
        data: [20, 172, 171, 184, 140, 170, 310, 125, 15, 22, 185, 102],
      }, {
        name: '夜流量',
        type: 'line',
        stack: '总量',
        smooth: true,
        symbolSize: 4,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 1,
          },
        },
        areaStyle: { normal: {} },
        data: [200, 17, 131, 164, 170, 178, 120, 175, 155, 212, 182, 10],
      }];
      this.chart2Option = Object.assign({}, this.option, tmpOption);
    },
    getChart3Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '调用次数',
        left: '5',
        top: '10',
      };
      tmpOption.tooltip = {
        trigger: 'axis',
        position(point, params, dom, rect, size) {
          if (point[0] < 30) {
            return [0, '20%'];
          } else if (point[0] > (size.viewSize[0] - 130)) {
            return [size.viewSize[0] - 130, '20%'];
          }
          return [point[0] - 30, '20%'];
        },
      };
      tmpOption.grid = {
        top: 55,
        left: '-8%',
        right: '5%',
        bottom: '2%',
        containLabel: true,
      };
      tmpOption.xAxis = [{
        show: false,
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#475669',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#E3E9EF'],
          },
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      }];
      tmpOption.yAxis = [{
        show: false,
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#475669',
          },
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14,
          },
        },
        splitLine: {
          lineStyle: {
            color: ['#E3E9EF'],
          },
        },
      }];
      tmpOption.series = [{
        name: '日访问量',
        type: 'line',
        smooth: true,
        // symbol: 'circle',
        symbolSize: 6,
        showSymbol: true,
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        itemStyle: {
          normal: {
            color: '#0086E6',
            borderColor: '#0086E6',
            borderWidth: 2,
          },
        },
        data: [120, 12, 391, 154, 50, 130, 190, 155, 125, 172, 65, 102],
      }, {
        name: '日调用次数',
        type: 'bar',
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }];
      this.chart3Option = Object.assign({}, this.option, tmpOption);
    },
  },
  mounted() {
    this.getChart1Option();
    this.getChart2Option();
    this.getChart3Option();
  },
};
</script>

<style>
.app-main {
    background-color: #f0f2f5;
}
</style>

<style rel="stylesheet/less" lang="less" scoped>
.chart {
    &-row {
        margin-left: -12px;
        margin-right: -12px;
        position: relative;
        height: auto;
        zoom: 1;
        display: block;
        box-sizing: border-box;
        overflow: hidden;
    }
    &-container-small {
        padding-left: 12px;
        padding-right: 12px;
        margin-bottom: 24px;
        overflow: hidden;
        float: left;
    }
    &-card {
        font-size: 14px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.65);
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        background: #fff;
        border-radius: 2px;
        position: relative;
        transition: all .3s;
        float: left;
        overflow: hidden;
        width: 100%;
    }
    &-desc {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        margin: 0 20px;
        border-top: 1px solid #e8e8e8;
    }
}
@media (min-width: 1200px) {
    .chart-container-small {
        display: block;
        box-sizing: border-box;
        width: 25%;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .chart-container-small {
        display: block;
        box-sizing: border-box;
        width: 50%;
    }
}
</style>
