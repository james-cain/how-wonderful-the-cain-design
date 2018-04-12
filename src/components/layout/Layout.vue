<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
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
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
  },
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
a {
  text-decoration: none;
}
#app {
  // 主体区域
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 200px;
    margin-top: 48px;
  } // 侧边栏
  .sidebar-container {
    transition: width 0.28s;
    width: 200px!important;
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
  .el-submenu>.el-submenu__title,
  .el-submenu .el-menu-item,
  .el-menu-item {
    // min-width: 200px!important;
    background-color: #1b2936!important;
    &:hover {
      background-color: #0080ff!important;
      color: #fff!important;
    }
    &.is-active {
      background-color: #0080ff!important;
    }
  }
  .el-menu--collapse .el-menu .el-submenu{
    min-width: 200px!important;
  }
  .el-menu-item, .el-submenu__title {
    height: 44px!important;
    line-height: 44px!important;
  }
}
.el-menu--vertical .el-menu-item, .el-submenu__title {
  height: 44px!important;
  line-height: 44px!important;
}
.el-menu--vertical {
  .el-menu-item {
    &:hover {
      background-color: #0080ff!important;
      color: #fff!important;
    }
    &.is-active {
      background-color: #0080ff!important;
    }
  }
  .el-submenu__title {
    &:hover {
      background-color: #0080ff!important;
      color: #fff!important;
    }
  }
}

</style>
