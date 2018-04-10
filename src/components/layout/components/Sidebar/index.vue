<template>
  <scroll-bar>
      <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse"
        background-color="#263544" text-color="#646f7a" active-text-color="#fff">
        <sidebar-item :routes.sync="permissionList"></sidebar-item>
      </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import ScrollBar from '@/components/ScrollBar';
import { constantRouterMap } from '@/router';
import SidebarItem from './SidebarItem';

export default {
  data() {
    return {
      permissionList: [],
      permission: [],
    };
  },
  components: {
    SidebarItem,
    ScrollBar,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'roles'
    ]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  methods: {
    /* eslint no-param-reassign: 0 */
    // 权限递归验证
    permissRecursive(list) {
      const listBack = list;
      listBack.forEach((item) => {
        if (!item.hidden) {
          if (item.children.length !== 1) {
            item.children.forEach((val) => {
              if (!val.hidden) {
                val.hidden = this.roles.indexOf(val.name) < 0;
              }
            });
          } else {
            item.hidden = this.roles.indexOf(item.name) < 0;
          }
        }
      });
      return listBack;
    },
  },
  mounted() {
    // 模拟权限控制
    // 实际调API获取拥有的权限
    // 此时在左边菜单树中不会显示，同时还需要在做路由跳转是判断当输入没有权限的页面路径时，要提示没有权限的信息
    console.log(this.roles);
    // this.permission = ['Dashboard', 'Table', 'Form'];
    this.permissionList = this.permissRecursive(constantRouterMap);
  },
};
</script>
