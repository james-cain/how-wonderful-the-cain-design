<template>
  <div class="content-container">
    <title-bar titleName="新增角色">
      <template slot="tool">
        <span class="tool">
          <el-button class="el-button-reset">返回</el-button>
          <el-button type="primary" class="el-button-reset">保存</el-button>
        </span>
      </template>
    </title-bar>
    <div class="form-list">
      <el-form ref="form" label-position="right" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="角色名称:" prop="roleName">
          <el-input v-model="form.roleName" placeholder="请输入" style="width: 420px;"></el-input>
        </el-form-item>
        <el-form-item label="角色描述:">
          <el-input v-model="form.roleDesc" placeholder="请输入" style="width: 420px;"></el-input>
        </el-form-item>
        <el-form-item label="权限配置:" label-width="90px">
          <div class="menu-tree">
            <div class="menu-tree-title">
              <el-checkbox v-model="checked" class="menu-tree-checkbox">菜单列表</el-checkbox>
              <span class="menu-tree-title--selected-count">{{selectedCount}}/{{allCount}}</span>
            </div>
            <el-tree
              class="menu-tree-data"
              style="width: 420px;"
              :data="roleTree"
              ref="menuTree"
              show-checkbox
              default-expand-all
              @check-change="menuTreeDataChange"
              node-key="id"
              :default-checked-keys="form.selectedRole"
              :props="defaultProps">
            </el-tree>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import titleBar from '@/components/title-bar';
import api from '@/api/api';

export default {
  name: 'menu-edit',
  data() {
    return {
      form: {
        roleName: '',
        roleDesc: '',
        selectedRole: ['Table', 'Menu', 'Edit'],
      },
      roleTree: [{
        id: 'All',
        name: 'All',
        children: [
          {
            id: 'Dashboard',
            name: 'Dashboard',
          }, {
            id: 'Example',
            name: 'Example',
            children: [{
              id: 'Table',
              name: 'Table',
            }, {
              id: 'Menu',
              name: 'Menu',
            }, {
              id: 'Edit',
              name: 'Edit',
            }, {
              id: 'Form',
              name: 'Form',
            }, {
              id: 'FormSuccessMsg',
              name: 'FormSuccessMsg',
            }, {
              id: 'MultiForm',
              name: 'MultiForm',
            }, {
              id: 'FormFailMsg',
              name: 'FormFailMsg',
            }, {
              id: 'Desc',
              name: 'Desc',
            }, {
              id: 'Error',
              name: 'Error',
              children: [{
                id: '403',
                name: 'error403',
              }, {
                id: '404',
                name: 'error404',
              }, {
                id: '500',
                name: 'error500',
              }],
            }, {
              id: 'Msg',
              name: 'Msg',
              children: [{
                id: 'SuccessMsg',
                name: 'SuccessMsg',
              }, {
                id: 'FailMsg',
                name: 'FailMsg',
              }],
            }, {
              id: 'Chart',
              name: 'Chart',
            }],
          }],
      }],
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
        ],
      },
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      checked: false,
      selectedCount: 0,
      allCount: 0,
      selectedMenu: [],
    };
  },
  watch: {
    checked(val) {
      if (val) {
        this.setMenuTreeCheckedKeys(['All']);
      } else {
        this.setMenuTreeCheckedKeys([]);
      }
    },
  },
  components: {
    titleBar,
  },
  methods: {
    setMenuTreeCheckedKeys(key) {
      const selectedKey = [].concat(key);
      this.$refs.menuTree.setCheckedKeys(selectedKey);
    },
    menuTreeDataChange() {
      this.selectedMenu = this.$refs.menuTree.getCheckedKeys(true);
      this.selectedCount = this.selectedMenu.length;
    },
    getMenuTreeAllNodesCount(tree) {
      this.allCount += tree.filter(treeNode => !treeNode.children).length;
      const childTree = tree.filter(treeNode => treeNode.children);
      childTree.forEach((treeChild) => this.getMenuTreeAllNodesCount(treeChild.children));
    }
  },
  mounted() {
    this.selectedCount = this.form.selectedRole.length;
    this.getMenuTreeAllNodesCount(this.roleTree);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../styles/layout.less";
@import '../../styles/mixin.less';
.form-list {
  margin-top: 30px;
}
.menu-tree {
  height: 100%;
  overflow: hidden;
  width: 420px;
  border: 1px solid #e4e4e4;
  &-title {
    background: #f5f8fa;
    height: 40px;
    line-height: 40px;
    color: 16px;
    border-bottom: 1px solid #e4e4e4;
    span {
      color: #9ba2ad;
      font-size: 12px;
      float: right;
      padding-right: 10px;
    }
  }
  &-checkbox {
    padding-left: 10px;
  }
  &-data {
    padding: 15px 5px;
    box-sizing: border-box;
  }
}
</style>

<style>
  .el-form-item__label {
    width: 90px !important;
  }
</style>
