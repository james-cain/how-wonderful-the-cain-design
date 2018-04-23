<template>
  <div :class="className" :id="id" :style="{height: height, width: width}"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    id: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '200px',
    },
    height: {
      type: String,
      default: '200px',
    },
    titleText: {
      type: String,
      default: 'xx增长数',
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestory() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));

      this.chart.setOption({
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: this.titleText,
          textStyle: {
            fontWeight: 'bold',
            fontSize: 14,
            color: '#808080',
            fontFamily: 'MicrosoftYaHei-Bold',
          },
          left: '12',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B',
            },
          },
        },
        grid: {
          top: 65,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true,
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
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
        }],
        yAxis: [{
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
        }],
        series: [{
          name: 'xxx',
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
        }],
      });
    },
  },
};
</script>

