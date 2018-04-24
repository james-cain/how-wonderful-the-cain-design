<template>
  <div class="dashboard-container">
    <div class="dashboard-container">
      <img src="../../../static/title-best.svg" class="logo" alt="">
      <div class="dashboard-text">{{name}},welcome to a fantastic world!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      name: 'admin',
    };
  },
  mounted() {
  },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .dashboard {
    &-container {
      margin: 80px;
      text-align: center;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
      font-family: 'Gamja Flower', cursive;
      font-weight: bold;
    }

  }
  .logo {
      height: 250px;
      width: 250px;
    }
</style>
