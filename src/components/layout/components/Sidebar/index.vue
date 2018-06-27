<template>
  <scroll-bar>
      <el-menu mode="vertical" unique-opened :default-active="currentPath" :collapse="isCollapse"
        background-color="#001529" text-color="#646f7a" active-text-color="#fff">
        <sidebar-item :routes.sync="permissionList"></sidebar-item>
      </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import ScrollBar from '@/components/ScrollBar';
import { menuConfig, constantRouterMap } from '@/router';
import SidebarItem from './SidebarItem';
/* eslint no-param-reassign: 0 */
export default {
  data() {
    return {
      // permissionList: [],
      permission: [],
    };
  },
  watch: {
    $route(val) {
      if (this.recursive(menuConfig, val.name)) {
        this.$store.dispatch('SETCURRENTPATH', val.path);
      }
    },
  },
  methods: {
    recursive(arr, val) {
      let flag = false;
      if (arr.length <= 0) return flag;
      /* eslint no-restricted-syntax: 0 */
      for (const item of arr.values()) {
        if (item.children) {
          flag = this.recursive(item.children, val);
        } else if (item.name === val) {
          flag = true;
          break;
        }
        if (flag) break;
      }
      return flag;
    },
  },
  components: {
    SidebarItem,
    ScrollBar,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'roles',
      'currentPath',
    ]),
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
      // return menuConfig;
    },
  },
  mounted() {
    if (this.recursive(menuConfig, this.$route.name)) {
      this.$store.dispatch('SETCURRENTPATH', this.$route.path);
    }
  },
};
</script>
