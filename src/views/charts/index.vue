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
          <div class="chart-card-head">
            <div class="chart-card-head-title">
              线上热门搜索
            </div>
          </div>

          <div class="chart-card" style="padding-top: 10px;">
            <el-col :span="12">
              <chart-maker id="chart-middle1" height="120px" width="100%" :option.sync="chart9Option"></chart-maker>
            </el-col>
            <el-col :span="12">
              <chart-maker id="chart-middle2" height="120px" width="100%" :option.sync="chart9Option"></chart-maker>
            </el-col>
          </div>

          <div class="chart-card" style="padding: 10px 24px 0;">
            <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="搜索关键字"
                width="130">
              </el-table-column>
              <el-table-column
                prop="count"
                label="用户数"
                sortable
                width="90">
              </el-table-column>
              <el-table-column
                prop="rate"
                sortable
                label="周涨幅">
              </el-table-column>
            </el-table>
          </div>

          <div class="chart-card" style="padding: 20px 15px; text-align: right;">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </div>
        <div class="chart-container-middle">
          <div class="chart-card-head">
            <div class="chart-card-head-title">
              销售额类别占比
            </div>
          </div>

          <div class="chart-card" style="padding: 24px;">
            <el-radio-group v-model="selectedRadio">
              <el-radio-button v-for="item in radioList" :label="item" :key="item"></el-radio-button>
            </el-radio-group>
          </div>
          <div class="chart-card" style="padding-top: 10px;">
            <chart-maker id="chart-middle5" height="365px" width="100%" :option.sync="chart10Option"></chart-maker>
          </div>
        </div>
      </div>

      <div class="chart-row">
          <div class="chart-container-large" style="margin-bottom: 0px;">
              <div class="chart-card">
                <chart-maker id="chart-large3" height="350px" width="100%" :option.sync="chart11Option"></chart-maker>
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
      chart4Option: {},
      chart5Option: {},
      chart6Option: {},
      chart7Option: {},
      chart8Option: {},
      chart9Option: {},
      chart10Option: {},
      chart11Option: {},
      activeName: 'first',
      forceRefreshChart: false,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        count: '10',
        rate: '10%',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        count: '10',
        rate: '10%',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        count: '10',
        rate: '10%',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        count: '10',
        rate: '10%',
      }, {
        date: '2016-05-08',
        name: '王小虎',
        count: '10',
        rate: '10%',
      }, {
        date: '2016-05-06',
        name: '王小虎',
        count: '10',
        rate: '10%',
      }, {
        date: '2016-05-07',
        name: '王小虎',
        count: '10',
        rate: '10%',
      }],
      selectedRadio: '全部渠道',
      radioList: ['全部渠道', '线上', '门店'],
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
    getChart9Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '搜索用户数',
        left: '15',
        top: '10',
        textStyle: {
          fontSize: 14,
          color: 'rgba(0,0,0,.45)',
          fontFamily: 'MicrosoftYaHei',
        },
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
        left: '-5',
        right: '25',
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
        symbolSize: 1,
        showSymbol: true,
        itemStyle: {
          color: '#0086E6',
        },
        lineStyle: {
          normal: {
            color: '#0086E6',
            borderColor: '#0086E6',
            borderWidth: 1,
          },
        },
        areaStyle: { color: '#0086E6' },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
      }];
      this.chart9Option = Object.assign({}, this.option, tmpOption);
    },
    getChart10Option() {
      const tmpOption = {};
      tmpOption.title = {
        text: '销售额',
        left: '15',
        top: '10',
        textStyle: {
          fontSize: 14,
          color: 'rgba(0,0,0,.45)',
          fontFamily: 'MicrosoftYaHei',
        },
      };
      tmpOption.grid = {
        top: 55,
        left: '-5',
        right: '25',
        bottom: '0%',
        containLabel: true,
      };
      tmpOption.radar = {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        indicator: [
          { name: '家用电器', max: 10500 },
          { name: '食用酒水', max: 16000 },
          { name: '个护健康', max: 30000 },
          { name: '服饰背包', max: 38000 },
          { name: '母婴产品', max: 52000 },
          { name: '其他', max: 25000 },
        ],
      };
      tmpOption.series = [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
          value: [8600, 15000, 28000, 35000, 50000, 19000],
          name: '全部渠道',
        }, {
          value: [4300, 10000, 15000, 20000, 28000, 9000],
          name: '线上',
        }, {
          value: [5000, 5000, 13000, 15000, 22000, 10000],
          name: '门店',
        }],
      }];
      this.chart10Option = Object.assign({}, this.option, tmpOption);
    },
    getChart11Option() {
      const xData = (function () {
        const data = [];
        for (let i = 1; i < 13; i += 1) {
          data.push(`${i}月`);
        }
        return data;
      }());
      const tmpOption = {};
      tmpOption.title = {
        text: '流量',
        x: '20',
        top: '20',
        textStyle: {
          fontSize: 14,
          color: 'rgba(0,0,0,.45)',
          fontFamily: 'MicrosoftYaHei',
        },
        subtextStyle: {
          color: '#90979c',
          fontSize: '16',
        },
      };
      tmpOption.tooltip = {
        trigger: 'axis',
        axisPointer: {
          textStyle: {
            color: '#fff',
          },
        },
      };
      tmpOption.grid = {
        borderWidth: 0,
        top: 80,
        left: 80,
        right: 50,
        bottom: 95,
        textStyle: {
          color: '#fff',
        },
      };
      tmpOption.calculable = true;
      tmpOption.xAxis = [{
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#90979c',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        data: xData,
      }];
      tmpOption.yAxis = [{
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#90979c',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
        splitArea: {
          show: false,
        },
      }];
      tmpOption.dataZoom = [{
        show: true,
        height: 30,
        xAxisIndex: [
          0,
        ],
        bottom: 30,
        start: 10,
        end: 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
          color: '#d3dee5',
        },
        textStyle: {
          color: '#fff',
        },
        borderColor: '#90979c',
      }, {
        type: 'inside',
        show: true,
        height: 15,
        start: 1,
        end: 35,
      }];
      tmpOption.series = [{
        name: '客流量',
        type: 'bar',
        stack: 'total',
        barMaxWidth: 35,
        barGap: '10%',
        itemStyle: {
          normal: {
            color: 'rgba(255,144,128,1)',
            label: {
              show: true,
              textStyle: {
                color: '#fff',
              },
              position: 'insideTop',
              formatter(p) {
                return p.value > 0 ? p.value : '';
              },
            },
          },
        },
        data: [
          709,
          1917,
          2455,
          2610,
          1719,
          1433,
          1544,
          3285,
          5208,
          3372,
          2484,
          4078,
        ],
      }, {
        name: '支付笔数',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          normal: {
            color: 'rgba(0,191,183,1)',
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'top',
              formatter(p) {
                return p.value > 0 ? p.value : '';
              },
            },
          },
        },
        data: [
          327,
          1776,
          507,
          1200,
          800,
          482,
          204,
          1390,
          1001,
          951,
          381,
          220,
        ],
      }, {
        name: '支付成功数',
        type: 'line',
        stack: 'total',
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: 'rgba(252,230,48,1)',
            barBorderRadius: 0,
            label: {
              show: true,
              position: 'top',
              formatter(p) {
                return p.value > 0 ? p.value : '';
              },
            },
          },
        },
        data: [
          1036,
          3693,
          2962,
          3810,
          2519,
          1915,
          1748,
          4675,
          6209,
          4323,
          2865,
          4298,
        ] }];
      this.chart11Option = Object.assign({}, this.option, tmpOption);
    },
  },
  mounted() {
    this.getChart1Option();
    this.getChart2Option();
    this.getChart3Option();
    this.getChart4Option();
    this.getChart5Option();
    this.getChart7Option();
    this.getChart9Option();
    this.getChart10Option();
    this.getChart11Option();
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
    &-container-middle {
      padding-left: 12px;
      padding-right: 12px;
      margin-bottom: 24px;
      overflow: hidden;
      float: left;
      width: 50%;
      box-sizing: border-box;
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
    &-card-head {
      background: #fff;
      border-bottom: 1px solid #e8e8e8;
      padding: 0 24px;
      border-radius: 2px 2px 0 0;
      zoom: 1;
      min-height: 48px;
    }
    &-card-head-title {
      font-size: 16px;
      padding: 16px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: rgba(0, 0, 0, 0.85);
      display: inline-block;
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
    .chart-container-middle {
      display: block;
      box-sizing: border-box;
      width: 50%;
    }
}
@media (max-width: 1199px) {
    .chart-container-small {
        display: block;
        box-sizing: border-box;
        width: 50%;
    }
    .chart-container-middle {
      display: block;
      box-sizing: border-box;
      width: 100%;
    }
}
</style>
