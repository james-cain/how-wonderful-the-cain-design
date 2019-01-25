<template>
  <div class="content-container">
    <div class="content-tool">
      <div class="content-row content-row__classify">
        <div class="content-row">
          <span class="content-tool__title content-tool__operate-h">所有类目</span>
          <span class="content-tool__classify-nav">
            <span class="content-tool__classify">全部</span>
            <span class="content-tool__classify">类目一</span>
            <span class="content-tool__classify content-tool__classify-selected">类目二</span>
            <span class="content-tool__classify">类目三</span>
            <span class="content-tool__classify">类目四</span>
            <span class="content-tool__classify">类目五</span>
            <span class="content-tool__classify">类目六</span>
            <span class="content-tool__classify">类目七</span>
            <span class="content-tool__classify">类目八</span>
            <span class="content-tool__classify">类目九</span>
          </span>
          <span class="content-tool__switch">展开<i class="el-icon-arrow-down"></i></span>
        </div>
      </div>
      <div class="content-row content-row__tool content-row__tool-first">
        <span class="content-tool__title fl">规则编码</span>
        <el-select v-model="value" placeholder="请选择" class="content-tool__select fl">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="content-tool__title content-tool__left-empty fl">使用状态</span>
        <el-input
          placeholder="请输入"
          icon="search"
          v-model="input"
          :on-icon-click="handleIconClick"
          class="content-tool__input fl">
        </el-input>
        <span class="content-tool__title content-tool__left-empty fl" v-if="selectShow">调用次数</span>
        <el-input
          placeholder="请输入"
          icon="search"
          v-model="input"
          :on-icon-click="handleIconClick"
          class="content-tool__input fl"
          v-if="selectShow">
        </el-input>
        <div class="content-tool__operate content-tool__left-empty fl" v-if="!selectShow">
          <el-button type="primary" class="content-tool__qry el-button-reset">查询</el-button>
          <el-button class="content-tool__reset el-button-reset">重置</el-button>
          <span class="content-tool__switch content-tool__operate-h" @click="toggleOpen">展开<i class="el-icon-arrow-down"></i></span>
        </div>
      </div>
      <div class="content-row content-row__tool" v-if="selectShow">
        <span class="content-tool__title fl">规则编码</span>
        <el-select v-model="value" placeholder="请选择" class="content-tool__select fl">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="content-tool__title content-tool__left-empty fl">标题不同展示</span>
        <el-input
          placeholder="请输入"
          icon="search"
          v-model="input"
          :on-icon-click="handleIconClick"
          class="content-tool__input fl">
        </el-input>
        <span class="content-tool__title content-tool__left-empty fl">调用次数</span>
        <el-select v-model="value" placeholder="请选择" class="content-tool__select fl">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="content-row content-row__operate fr" v-if="selectShow">
        <div class="content-tool__operate content-tool__left-empty fr">
          <el-button type="primary" class="content-tool__qry el-button-reset">查询</el-button>
          <el-button class="content-tool__reset el-button-reset">重置</el-button>
          <span class="content-tool__switch content-tool__operate-h" @click="toggleClose">收起<i class="el-icon-arrow-up"></i></span>
        </div>
      </div>
    </div>
    <div class="content-operate">
      <el-button type="primary" class="content-operate__add el-button-reset">新增</el-button>
      <el-button class="content-operate__batch el-button-reset">批量操作</el-button>
      <el-dropdown @command="handleCommand" class="more-dropdowm">
        <button class="more">
          <span class="more-span">更多操作</span>
          <i class="el-icon-arrow-down"></i>
        </button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="modify">修改</el-dropdown-item>
          <el-dropdown-item command="delete">删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="table-record">
        <span>已选择<span class="table-record__selected">0</span>项,</span>
        <span>总共<span>102</span>项</span>
      </div>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        border
        tooltip-effect="dark"
        style="width: 100%; font-size: 13px;"
        :default-sort = "{prop: 'tag', order: 'descending'}"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="114">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="63">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="电话"
          width="120">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="90"
          sortable>
          <template slot-scope="scope">
            <div :class="[scope.row.tag === '家' ? 'tag-home' : 'tag-comp']">{{scope.row.tag}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="270"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="todo"
          label="操作">
          <template slot-scope="scope">
            <span @click="handleClick(scope.row)" class="edit-operation">配置</span>
            <span class="edit-operation">订阅警报</span>
            <span class="edit-operation">更多<i class="el-icon-arrow-down"></i></span>
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
// import titleBar from '@/components/title-bar'
export default {
  name: 'table-demo',
  // components: {
  //   titleBar
  // },
  data() {
    return {
      currentPage1: 1,
      options: [{
        value: '选项1',
        label: '标签一',
      }, {
        value: '选项2',
        label: '标签二',
      }, {
        value: '选项3',
        label: '标签三',
      }, {
        value: '选项4',
        label: '标签四',
      }, {
        value: '选项5',
        label: '标签五',
      }],
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '公司',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '12343534321',
        tag: '家',
      }],
      multipleSelection: [],
      input: '',
      value: '',
      selectShow: false,
    };
  },
  computed: {
    tableHeight() {
      return this.tableData3.length > 10 ? 441 : ((this.tableData3.length + 1) * 40) + 1;
    },
  },
  methods: {
    toggleClose() {
      this.selectShow = false;
    },
    toggleOpen() {
      this.selectShow = true;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
    handleCommand(command) {
      switch (command) {
        case 'modify':
          break;
        case 'delete':
          break;
        default:
          break;
      }
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
  .content-row__classify {
    padding: 4px 0 22px 0;
    border-bottom: 1px dashed #ebeef5;
  }
  .content-row__tool-first {
    margin-top: 26px;
  }
  .content-row__operate {
    margin-bottom: 6px;
  }
  .content-row__tool {
    margin-bottom: 20px;
  }
  &__title {
    margin-right: 12px;
    height: 36px;
    line-height: 36px;
    width: 84px;
  }
  &__left-empty {
    margin-left: 50px;
  }
  &__select {
    width: 202px;
    height: 36px;
    input {
      height: 36px;
      line-height: 36px;
    }
  }
  &__classify-nav {
    span:first-child {
      margin-left: 0px;
    }
  }
  &__classify {
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
  &__input {
    width: 201px;
    height: 36px;
    input {
      height: 36px;
      line-height: 36px;
    }
  }
  &__operate {
    float: left;
  }
  &__qry {
    width: 80px;
  }
  &__reset {
    width: 80px;
    margin-left: 10px;
  }
  &__switch {
    margin-left: 15px;
    color: #20a0ff;
    cursor: pointer;
    i {
      margin-left: 7px;
    }
  }
  &__operate-h {
    height: 36px;
  }
}

.content-operate {
  padding: 20px 0 17px;
  overflow: hidden;
  &__add {
    width: 80px;
    float: left;
  }
  &__batch {
    float: left;
  }
  .more {
    float: left;
    width: 100px;
    height: 36px;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0;
    cursor: pointer;
    color: #606266;
    font-size: 14px;
    margin-left: 10px;
    .more-span {
      margin: 7px 0;
    }
    i {
      margin-left: 3px;
      color: #c9c9c9;
    }
  }
  .table-record {
    float: right;
    font-size: 14px;
    color: #606266;
    height: 36px;
    line-height: 36px;
    &__selected {
      color: #20A0FF;
    }
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
.tag-home, .tag-comp {
  width: 48px;
  height: 24px;
  border-radius: 4px;
  text-align: center;
}
.tag-home {
  background: #E8F5FF;
  border: 1px solid #BFE4FF;
  color: #20A0FF;
}
.tag-comp {
  background: #EEF7EA;
  border: 1px solid #C1E2B2;
  color: #5BB531;
}
.block {
  float: right;
  margin-left: -5px;
  margin-top: 20px;
}
</style>
