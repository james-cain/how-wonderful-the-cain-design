<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // created() {
  //   this.getBreadcrumb();
  // },
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  computed: {
    ...mapGetters([
      'currentPath',
    ]),
  },
  methods: {
    getBreadcrumb() {
      if (this.currentPath === this.$route.path) {
        const matched = this.$route.matched.filter(item => item.name);
        this.levelList = matched;
      }
    },
  },
  mounted() {
    this.getBreadcrumb();
  },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
