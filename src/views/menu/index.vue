<template>
  <div class="content-container">
    <div class="content-tool">
      <div class="content-row content-row--tool content-row--tool-first">
        <div class="content-tool--nav">
          <div class="content-tool--title fl">角色</div>
          <el-input
            placeholder="请输入"
            icon="search"
            v-model="input"
            :on-icon-click="handleIconClick"
            class="content-tool--input fl">
          </el-input>
          <div class="content-tool--operate fl">
            <el-button type="primary" class="content-tool--qry el-button-reset fl">查询</el-button>
            <el-button class="content-tool--reset el-button-reset fl">重置</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="content-operate">
      <el-button type="primary" class="content-operate--add el-button-reset" @click="addRole">新增</el-button>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%; font-size: 13px;">
        <el-table-column
          prop="roleName"
          label="角色">
        </el-table-column>
        <el-table-column
          prop="roleDesc"
          label="角色描述"
          width="400">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="todo"
          width="120"
          label="操作">
          <template slot-scope="scope">
            <span @click="handleClick(scope.row)" class="edit-operation">编辑</span>
            <span class="edit-operation">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: 'menu-page',
  data() {
    return {
      currentPage1: 1,
      tableData: [{
        createTime: '2016-05-03',
        roleName: '超级管理员',
        roleDesc: '这是管理员的角色描述',
      }, {
        createTime: '2016-05-02',
        roleName: '一级领导',
        roleDesc: '这是一级领导的角色描述',
      }, {
        createTime: '2016-05-04',
        roleName: '二级领导',
        roleDesc: '这是二级领导的角色描述',
      }, {
        createTime: '2016-05-01',
        roleName: '一级机构管理员',
        roleDesc: '这是一级机构管理员的角色描述',
      }, {
        createTime: '2016-05-08',
        roleName: '机构管理员',
        roleDesc: '这是机构管理员的角色描述',
      }],
      input: '',
    };
  },
  methods: {
    addRole() {
      this.$router.push({ name: 'Edit' });
    },
    handleClick() {

    },
    handleIconClick() {

    },
    handleSizeChange() {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange() {
      // console.log(`当前页: ${val}`)
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/layout.less";
.content-tool {
  padding: 20px;
  border: 1px solid #ebeef5;
  background: #fff;
  font-size: 14px;
  color: #606266;
  overflow: hidden;
  .content-row--classify {
    padding: 4px 0 22px 0;
    border-bottom: 1px dashed #ebeef5;
  }
  .content-row--tool-first {
    margin-top: 26px;
  }
  .content-row--operate {
    margin-bottom: 6px;
  }
  .content-row--tool {
    margin-bottom: 20px;
  }
  &--title {
    margin-right: 12px;
    height: 36px;
    line-height: 36px;
    width: 44px;
  }
  &--left-empty {
    margin-left: 50px;
  }
  &--select {
    width: 202px;
    height: 36px;
    input {
      height: 36px;
      line-height: 36px;
    }
  }
  &--classify-nav {
    width: calc(100% - 142px);
    margin: 0 -11px;
    overflow: hidden;
    height: 42px;
    span:first-child {
      margin-left: 0px;
    }
  }
  &--classify {
    height: 28px;
    line-height: 28px;
    padding: 7px 10px;
    font-size: 14px;
    color: #333;
    margin: 0 11px;
    cursor: pointer;
    &-selected {
      border-radius: 4px;
      color: #fff;
      background-color: #20a0ff;
    }
  }
  &--input {
    width: calc(100% - 250px);
    height: 36px;
    input {
      height: 36px;
      line-height: 36px;
    }
  }
  &--operate {
    float: left;
    margin-left: 20px;
  }
  &--qry {
    width: 80px;
  }
  &--reset {
    width: 80px;
    margin-left: 10px;
  }
}

.set-ellipesd {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content-tool--nav {
  width: 100%;
  float: left;
}

.content-operate {
  padding: 20px 0 17px;
  overflow: hidden;
  &--add {
    width: 80px;
    float: left;
  }
}
.edit-operation {
  color: #20A0FF;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  border-left: 1px solid #EBEEF5;
  cursor: pointer;
  &:first-child {
    padding-left: 0px;
    padding-right: 10px;
    border-left: 0px solid #EBEEF5;
  }
  &:last-child {
    padding-left: 10px;
    padding-right: 0px;
  }
}
.block {
  float: right;
  margin-left: -5px;
  margin-top: 20px;
}
</style>
