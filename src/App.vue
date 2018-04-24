<template>
  <div id="app">
    <nav-bar :address="address" :showMenu="isShow" :userName.sync="userInfo.name" :title="title" v-if="userInfo.name"></nav-bar>
    <router-view class="child-container"></router-view>
  </div>
</template>

<script>
import navBar from '@/components/nav-bar';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      isShow: false,
      address: 'title.svg',
      title: '企业后台管理',
    };
  },
  computed: {
    ...mapGetters([
      'userInfo',
    ]),
  },
  components: {
    navBar,
  },
};
</script>

<style lang="less">
  #app {
    font-family: "Helvetica Neue",Arial,sans-serif,Helvetica,"Microsoft YaHei";
    font-size: 14px;
    color: #1F2D3D;
    background-color: #ffffff;
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
</style>
