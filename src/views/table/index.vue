<template>
  <div class="nav-demo1">
    <!-- <title-bar titleName="地址管理"></title-bar> -->
    <div class="content-tool">
      <el-input
        placeholder="请输入关键字搜索"
        icon="search"
        v-model="input"
        :on-icon-click="handleIconClick"
        class="tool-input">
      </el-input>
      <el-select v-model="value" placeholder="标签" class="tool-select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" class="tool-qry">查询</el-button>
      <el-button type="warning" class="tool-clear">清空条件</el-button>
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
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" style="color: #FB4853;">删除</el-button>
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
    };
  },
  computed: {
  },
  methods: {
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
  },
};
</script>

<style lang="less" scoped>
.nav-demo1 {
  padding: 20px;
}
.content-title {
  height: 50px;
  line-height: 50px;
  font-family: PingFangHK-Semibold;
  font-size: 16px;
  color: #1F2D3D;
  letter-spacing: 0;
  box-shadow: 0 1px 0 0 #E0E6ED;
}
.content-tool {
  height: 60px;
  line-height: 60px;
  background: #F8F8F8;
  margin-bottom: 20px;
}
.tool-input {
  margin-left: 20px;
  width: 400px !important;
}
.tool-select {
  width: 150px;
  margin-left: 20px !important;
}
.tool-qry, .tool-clear {
  margin-left: 20px !important;
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
