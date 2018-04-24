<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style rel="stylesheet/less" lang="less">
  .app-main {
    min-width: 785px;
  }
</style>
