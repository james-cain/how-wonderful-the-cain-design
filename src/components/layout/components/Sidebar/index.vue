<template>
  <scroll-bar>
      <el-menu mode="vertical" unique-opened :default-active="$route.path"
        background-color="#304156" text-color="#fff" active-text-color="#409EFF">
        <sidebar-item :routes="routes"></sidebar-item>
      </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from '@/components/ScrollBar';
import SidebarItem from './SidebarItem';

export default {
  components: {
    SidebarItem,
    ScrollBar,
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
  },
};
</script>
