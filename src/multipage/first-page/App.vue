<template>
  <div id="app">
    <nav-bar :address="address" :menuList="menuList" :showMenu="isShow" :userName="userName" :title="title"></nav-bar>
    <router-view class="child-container"></router-view>
  </div>
</template>

<script>
import navBar from '@/components/nav-bar'
export default {
  name: 'app',
  data () {
    return {
      isShow: true,
      address: 'title.png',
      title: '微商城后台管理',
      userName: '陈东军',
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
          // path: 'demo2'
        },
        {
          isSelected: false,
          name: '菜单三',
          id: 'id3',
        },
        {
          isSelected: false,
          name: '菜单四',
          id: 'id4',
        },
      ],
    };
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
  .child-container {
    min-height: 680px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1200px) {
    .container, .child-container {
      width: 1170px;
    }
  }
  @media (min-width: 992px and (max-width: 1199px)) {
    .container, .child-container {
      width: 970px;
    }
  }
  @media (min-width: 768px and (max-width: 991px)) {
    .container, .child-container {
      width: 750px;
    }
  }
</style>
