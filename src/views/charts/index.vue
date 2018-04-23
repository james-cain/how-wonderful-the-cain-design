<template>
  <div class="chart-content">
      <div class="chart-row">
          <div class="chart-container-small">
                <div class="chart-card">
                    <line-chart id="chart-small1" height="100%" width="100%" titleText="用户增长数"></line-chart>
                </div>
                <div class="chart-card">
                    <line-chart id="chart-small2" height="100%" width="100%" titleText="访问量"></line-chart>
                </div>
                <div class="chart-card">
                    <line-chart id="chart-small3" height="100%" width="100%" titleText="支付笔数"></line-chart>
                </div>
                <div class="chart-card">
                    <line-chart id="chart-small4" height="100%" width="100%" titleText="运营活动效果"></line-chart>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import lineChart from '@/components/charts/lineMaker';

export default {
  components: {
    lineChart,
  },
};
</script>

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
    }
    &-container-small {
        padding-left: 12px;
        padding-right: 12px;
        margin-bottom: 24px;
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
    }
}
@media (min-width: 1200px) {
    .chart-card {
        display: block;
        box-sizing: border-box;
        width: 25%;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .chart-card {
        display: block;
        box-sizing: border-box;
        width: 25%;
    }
}
</style>
