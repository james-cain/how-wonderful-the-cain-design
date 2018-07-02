<template>
  <div class="content-container">
    <title-bar titleName="表单填写">
      <template slot="tool">
        <span class="tool">
          <el-button class="el-button-reset">删除</el-button>
          <el-button class="el-button-reset">返回</el-button>
          <el-button class="el-button-reset">保存</el-button>
          <el-button type="primary" class="el-button-reset" @click="submit">提交</el-button>
        </span>
      </template>
    </title-bar>
    <div class="content-container form-container">
        <div class="form-name">退款申请</div>
        <div class="form-list">
            <el-form ref="form" :inline="true" label-position="right" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="取货单号:" prop="id">
                    <el-input v-model="form.id" placeholder="请输入" style="width: 220px;"></el-input>
                </el-form-item>
                <el-form-item label="状态:">
                    <el-select v-model="form.state" placeholder="请选择" style="width: 220px;">
                        <el-option label="已取货" value="yes"></el-option>
                        <el-option label="未取货" value="no"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="销售时间:" prop="date">
                    <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 220px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="活动名称:" prop="name">
                    <el-input v-model="form.name" placeholder="请输入" style="width: 220px;"></el-input>
                </el-form-item>
                <el-form-item label="活动时间:">
                    <el-date-picker v-model="form.time" type="date" placeholder="选择日期" style="width: 220px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="活动区域:">
                    <el-input v-model="form.region" placeholder="请输入" style="width: 220px;"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <div class="content-container form-container">
        <div class="form-name">用户信息</div>
        <div class="form-list">
            <el-form ref="form" :inline="true" label-position="right" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="联系电话:">
                    <el-input v-model="form.tel" placeholder="请输入" style="width: 220px;"></el-input>
                </el-form-item>
                <el-form-item label="销售状态:">
                    <el-select v-model="form.sellState" placeholder="请选择" style="width: 220px;">
                        <el-option label="已取货" value="yes"></el-option>
                        <el-option label="未取货" value="no"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="取货时间:" prop="deliveryDate">
                    <el-date-picker v-model="form.deliveryDate" type="date" placeholder="选择日期" style="width: 220px;"></el-date-picker>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <div class="content-container form-container">
        <div class="form-name">退货商品</div>
            <div class="table">
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    border
                    tooltip-effect="dark"
                    :default-sort = "{prop: 'count', order: 'descending'}"
                    style="width: 100%; font-size: 13px;">
                    <el-table-column
                    prop="rule"
                    label="规则编码"
                    width="200">
                        <template slot-scope="scope">
                        <div v-if="!scope.row.edit">{{ scope.row.rule }}</div>
                        <el-input v-model="scope.row.rule" placeholder="请输入" style="width: 179px;" v-if="scope.row.edit"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="desc"
                    label="描述"
                    width="300">
                    <template slot-scope="scope">
                        <div v-if="!scope.row.edit">{{ scope.row.desc }}</div>
                        <el-input v-model="scope.row.desc" placeholder="请输入" style="width: 279px;" v-if="scope.row.edit"></el-input>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="count"
                    label="调用服务次数"
                    width="160">
                    <template slot-scope="scope">
                        <div v-if="!scope.row.edit">{{ scope.row.count }}</div>
                        <el-input v-model="scope.row.count" placeholder="请输入" style="width: 139px;" v-if="scope.row.edit"></el-input>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="updateTime"
                    label="更新时间"
                    width="190"
                    sortable>
                    <template slot-scope="scope">
                        <div v-if="!scope.row.edit">{{ scope.row.updateTime }}</div>
                        <el-date-picker v-model="scope.row.updateTime" type="date" placeholder="选择日期" style="width: 169px;" v-if="scope.row.edit"></el-date-picker>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="todo"
                    label="操作">
                    <template slot-scope="scope">
                        <span @click="scope.row.edit = true;" class="edit-operation" v-if="!scope.row.edit">配置</span>
                        <span @click="scope.row.edit = false;" class="edit-operation" v-if="scope.row.edit">保存</span>
                        <span class="edit-operation">删除</span>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import titleBar from '@/components/title-bar';

export default {
  name: 'demo3',
  data() {
    return {
      form: {
        id: '',
        name: '',
        region: '',
        date: '',
        time: '',
        state: '',
        tel: '',
        sellState: '',
        deliveryDate: '',
      },
      rules: {
        id: [
          { required: true, message: '请输入取货单号', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        date: [
          { required: true, message: '请选择销售时间', trigger: 'blur' },
        ],
        deliveryDate: [
          { required: true, message: '请选择取货时间', trigger: 'blur' },
        ],
      },
      tableData3: [{
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        edit: false,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        edit: false,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        edit: false,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        edit: false,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        edit: false,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        edit: false,
      }],
    };
  },
  components: {
    titleBar,
  },
  methods: {
    edit(row) {
      row.edit = true;
    },
    submit() {
        this.$router.push({name: 'FormFailMsg'});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../styles/layout.less";
@import '../../styles/mixin.less';
.form-list {
  margin-top: 30px;
  .form-send__desc {
    color: #909399;
    font-size: 12px;
    padding-left: 25px;
  }
}
.edit-operation {
  color: #20A0FF;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}
.tag {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  letter-spacing: 0;
  &-desc {
    color: #5E6D82;
  }
  &-unit {
    color: #1F2D3D;
  }
}
.pic {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FB4853;
  letter-spacing: 0;
  span {
    display: block;
  }
  img {
    height: 80px;
    width: 80px;
    border-radius: 2px;
  }
}
.classify {
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(31,45,61,0.20);
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #475669;
  letter-spacing: 0;
  width: 80px;
  height: 32px;
  &.selected {
    background: rgba(32,160,255,0.10);
    border: 1px solid rgba(32,160,255,0.20);
    border-radius: 4px;
    color: #29A4FF;
  }
}
.layout {
  .layout(row, flex-start, center, wrap);
  div {
    height: 52px;
    margin: 0 5px;
  }
}
.form {
    &-container {
        padding-top: 26px;
        padding-bottom: 20px;
        font-size: 14px;
        box-shadow: 0 1px 0 0 #E0E6ED;
    }
    &-name {
        color: #303133;
        padding-bottom: 10px;
        font-weight: bold;
    }
    &-list {
        width: 100%;
        overflow: hidden;
    }
}
</style>

<style>
  .el-form-item__label {
    width: 90px !important;
  }
</style>
