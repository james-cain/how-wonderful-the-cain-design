<template>
  <div class="dashboard-container">
    <div class="dashboard-container">
      <div class="dashboard-text">name:{{name}}</div>
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
  </div>
</template>

<script>
const echarts = require('echarts');

export default {
  name: 'dashboard',
  data() {
    return {
      name: 'admin',
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    });
  },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
