<template>
  <div class="dashboard-container">
    <div class="dashboard-container">
      <div class="dashboard-text">page:second page</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      name: 'admin',
      role: 'admin',
    };
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
