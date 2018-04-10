<template>
  <scroll-bar>
      <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse"
        background-color="#263544" text-color="#646f7a" active-text-color="#fff">
        <sidebar-item :routes="routes"></sidebar-item>
      </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import ScrollBar from '@/components/ScrollBar';
import SidebarItem from './SidebarItem';

export default {
  components: {
    SidebarItem,
    ScrollBar,
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
