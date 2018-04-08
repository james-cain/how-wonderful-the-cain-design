<template>
  <scroll-bar>
      <el-menu mode="vertical" unique-opened :default-active="$route.path"
        background-color="#fff" text-color="rgb(72, 87, 106)" active-text-color="#20A0FF">
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
