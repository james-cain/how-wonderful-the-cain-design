<template>
  <scroll-bar>
      <el-menu mode="vertical" unique-opened :default-active="$route.path"
        background-color="#263544" text-color="#646f7a" active-text-color="#fff">
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
      return this.$router.options.routes;
    },
  },
};
</script>
