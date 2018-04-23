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
      default: '默认图表名',
    },
    option: {
      type: Object,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', () => {
      this.chart.resize();
    });
    // 监听侧边栏的变化
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0];
    sidebarElm.addEventListener('transitionend', () => {
      this.chart.resize();
    });
  },
  beforeDestory() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    option(val) {
      this.chart.setOption(val);
    },
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));

      this.chart.setOption(this.option);
    },
  },
};
</script>

