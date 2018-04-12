<template>
  <div id="app">
    <nav-bar :address="address" :menuList="menuList" :showMenu="isShow" :userName.sync="userInfo.name" :title="title"></nav-bar>
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
      address: 'title.png',
      title: '微商城后台管理',
      menuList: [
        {
          isSelected: true,
          name: '菜单一',
          id: 'id1',
        },
        {
          isSelected: false,
          name: '菜单二',
          id: 'id2',
          url: 'second-page.html',
        },
      ],
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
  mounted() {
    this.$store.dispatch('GetInfo', {
      params: {
        params: {
          id: 'admin',
        },
      },
    });
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
