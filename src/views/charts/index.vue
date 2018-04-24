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
                        <chart-maker id="chart-small4" height="120px" width="100%" :option.sync="chart4Option"></chart-maker>
                        <div class="chart-desc">日访问量：1,234</div>
                    </div>
            </div>
        </div>
        <div class="chart-row">
            <div class="chart-container-large">
                <div class="chart-card">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="销售额" name="first">
                            <el-col :span="16">
                                <chart-maker id="chart-large1" height="350px" width="100%" :option.sync="chart5Option" :forceRefresh.sync="forceRefreshChart"></chart-maker>
                            </el-col>
                            <el-col :span="8">
                                <chart-maker id="chart-round" height="350px" width="100%" :option.sync="chart7Option" :forceRefresh.sync="forceRefreshChart"></chart-maker>
                            </el-col>
                        </el-tab-pane>
                        <el-tab-pane label="访问量" name="second">
                            <el-col :span="16">
                                <chart-maker id="chart-large2" height="350px" width="100%" :option.sync="chart6Option" :forceRefresh.sync="forceRefreshChart"></chart-maker>
                            </el-col>
                            <el-col :span="8">
                                <chart-maker id="chart-round2" height="350px" width="100%" :option.sync="chart8Option" :forceRefresh.sync="forceRefreshChart"></chart-maker>
                            </el-col>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
      </div>
      <div class="chart-row">
        <div class="chart-container-middle">

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
      chart4Option: {},
      chart5Option: {},
      chart6Option: {},
      chart7Option: {},
      chart8Option: {},
      activeName: 'first',
      forceRefreshChart: false,
    };
  },
  methods: {
    handleClick() {
      if (this.activeName === 'second') {
        this.getChart6Option();
        this.getChart8Option();
        this.forceRefreshChart = true;
      } else {
        this.forceRefreshChart = true;
      }
      setTimeout(() => { this.forceRefreshChart = false; }, 1000);
    },
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
        left: '-15',
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
        left: '-15',
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
    getChart4Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '调用频数',
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
        left: '-15',
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
        name: '日调用频数',
        type: 'bar',
        stack: 'one',
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }, {
        name: '夜调用频数',
        type: 'bar',
        stack: 'two',
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }];
      this.chart4Option = Object.assign({}, this.option, tmpOption);
    },
    getChart5Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '销售额趋势',
        left: '15',
        top: '10',
        textStyle: {
          fontSize: 14,
          color: '#808080',
          fontFamily: 'MicrosoftYaHei',
        },
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
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true,
      };
      tmpOption.xAxis = [{
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
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }];
      tmpOption.yAxis = [{
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
        name: '日调用频数',
        type: 'bar',
        stack: 'one',
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }, {
        name: '夜调用频数',
        type: 'bar',
        stack: 'two',
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }];
      this.chart5Option = Object.assign({}, this.option, tmpOption);
    },
    getChart6Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '访问量趋势',
        left: '15',
        top: '10',
        textStyle: {
          fontSize: 14,
          color: '#808080',
          fontFamily: 'MicrosoftYaHei',
        },
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
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true,
      };
      tmpOption.xAxis = [{
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
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }];
      tmpOption.yAxis = [{
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
      this.chart6Option = Object.assign({}, this.option, tmpOption);
    },
    getChart7Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '销售额趋势占比',
        left: '15',
        top: '10',
        textStyle: {
          fontSize: 14,
          color: '#808080',
          fontFamily: 'MicrosoftYaHei',
        },
      };
      tmpOption.tooltip = {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      };
      tmpOption.legend = {
        orient: 'vertical',
        right: 20,
        top: 115,
        bottom: 20,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      };
      tmpOption.series = [{
        name: '访问来源',
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      }];
      this.chart7Option = Object.assign({}, this.option, tmpOption);
    },
    getChart8Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '访问量趋势占比',
        left: '15',
        top: '10',
        textStyle: {
          fontSize: 14,
          color: '#808080',
          fontFamily: 'MicrosoftYaHei',
        },
      };
      tmpOption.tooltip = {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      };
      tmpOption.visualMap = {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      };
      tmpOption.series = [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 274, name: '联盟广告' },
          { value: 235, name: '视频广告' },
          { value: 400, name: '搜索引擎' },
        ].sort((a, b) => a.value - b.value),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(0, 0, 0, 0.3)',
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)',
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
        },
        itemStyle: {
          normal: {
            color: '#c23531',
          },
        },
      }];
      this.chart8Option = Object.assign({}, this.option, tmpOption);
    },
  },
  mounted() {
    this.getChart1Option();
    this.getChart2Option();
    this.getChart3Option();
    this.getChart4Option();
    this.getChart5Option();
    this.getChart7Option();
  },
};
</script>

<style>
.chart-card .el-tabs__header {
    padding: 20px 20px 0px;
}
</style>

<style rel="stylesheet/less" lang="less" scoped>
.chart {
    &-content {
        background-color: #f0f2f5;
        padding: 20px;
        overflow: auto;
    }
    &-nav {
        overflow: auto;
    }
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
    &-container-large {
        padding-left: 12px;
        padding-right: 12px;
        margin-bottom: 24px;
        overflow: hidden;
        float: left;
        width: 100%;
        box-sizing: border-box;
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
@media (max-width: 1199px) {
    .chart-container-small {
        display: block;
        box-sizing: border-box;
        width: 50%;
    }
}
</style>
