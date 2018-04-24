<template>
  <scroll-bar>
      <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse"
        background-color="#001529" text-color="#646f7a" active-text-color="#fff">
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
      // permissionList: [],
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
      'roles',
    ]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    permissionList() {
      constantRouterMap.forEach((item) => {
        if (!item.hidden) {
          if (item.children.length !== 1) {
            item.children.forEach((val) => {
              if (!val.children) {
                if (!val.hidden) {
                  val.hidden = this.roles.indexOf(val.name) < 0;
                }
              } else {
                let count = 0;
                val.children.forEach((subVal, idx) => {
                  if (!subVal.hidden) {
                    if (this.roles.indexOf(subVal.name) < 0) {
                      subVal.hidden = true;
                      count += 1;
                    }
                  } else {
                    count += 1;
                  }
                  if (count === idx + 1) {
                    val.hidden = true;
                  }
                });
              }
            });
          } else {
            item.hidden = this.roles.indexOf(item.name) < 0;
          }
        }
      });
      return constantRouterMap;
    },
  },
  methods: {
    /* eslint no-param-reassign: 0 */
    // 权限递归验证
    // 规定最高层级为三级，只要往下钻两级即可
    permissRecursive(list) {
      const listBack = list;
      listBack.forEach((item) => {
        if (!item.hidden) {
          if (item.children.length !== 1) {
            item.children.forEach((val) => {
              if (!val.children) {
                if (!val.hidden) {
                  val.hidden = this.roles.indexOf(val.name) < 0;
                }
              } else {
                let count = 0;
                val.children.forEach((subVal, idx) => {
                  if (!subVal.hidden) {
                    if (this.roles.indexOf(subVal.name) < 0) {
                      subVal.hidden = true;
                      count += 1;
                    }
                  } else {
                    count += 1;
                  }
                  if (count === idx + 1) {
                    val.hidden = true;
                  }
                });
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
    // this.permissionList = this.permissRecursive(constantRouterMap);
    // console.log(this.permissionList);
  },
};
</script>
