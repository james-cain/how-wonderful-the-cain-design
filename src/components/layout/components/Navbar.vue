<template>
  <el-menu class="navbar" mode="horizontal">
    <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger> -->
    <breadcrumb></breadcrumb>
    <!-- <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
  </el-menu>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
export default {
  components: {
      Breadcrumb,
  },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
}
</style>
