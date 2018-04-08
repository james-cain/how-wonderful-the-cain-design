<template>
  <div class="app-wrapper">
  <!-- <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}"> -->
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from '@/components/layout/components';

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  // computed: {
  //   sidebar() {
  //     return this.$store.state.app.sidebar
  //   }
  // }
};
</script>

<style rel="stylesheet/less" lang="less">
@import "../../styles/mixin.less";
.app-wrapper {
  .clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
#app {
  // 主体区域
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 180px;
    margin-top: 48px;
  } // 侧边栏
  .sidebar-container {
    transition: width 0.28s;
    width: 180px!important;
    height: 100%;
    position: fixed;
    top: 48px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    a {
      display: inline-block;
      width: 100%;
    }
    .svg-icon {
      margin-right: 16px;
    }
    .el-menu {
      border: none;
      width: 100%;
    }
  }
  .hideSidebar {
    .sidebar-container,.sidebar-container .el-menu {
      width: 36px!important;
      // overflow: inherit;
    }
    .main-container {
      margin-left: 36px;
    }
  }
  .hideSidebar {
    .submenu-title-noDropdown {
      padding-left: 10px!important;
      position: relative;
      span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        transition: opacity .3s cubic-bezier(.55, 0, .1, 1);
        opacity: 0;
        display: inline-block;
      }
      &:hover {
        span {
          display: block;
          border-radius: 3px;
          z-index: 1002;
          width: 140px;
          height: 56px;
          visibility: visible;
          position: absolute;
          right: -145px;
          text-align: left;
          text-indent: 20px;
          top: 0px;
          background-color: #1f2d3d!important;
          opacity: 1;
        }
      }
    }
    .el-submenu {
      &>.el-submenu__title {
        padding-left: 10px!important;
        &>span {
          display: none;
        }
        .el-submenu__icon-arrow {
          display: none;
        }
      }
      .nest-menu {
        .el-submenu__icon-arrow {
          display: block!important;
        }
        span {
          display: inline-block!important;
        }
      }
    }
  }
  .nest-menu .el-submenu>.el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: 180px!important;
    background-color: #1f2d3d!important;
    &:hover {
      background-color: #001528!important;
    }
  }
  .el-menu--collapse .el-menu .el-submenu{
    min-width: 180px!important;
  }
}

</style>
