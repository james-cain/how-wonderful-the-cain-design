<template>
<div class="content-container">
    <title-bar titleName="基础详情">
    </title-bar>
    <div class="content-container table-container">
        <div class="table-name">退款申请</div>
        <div class="table-list">
            <ul class="table-ul">
                <li class="table-li">
                    <div class="table-li__name">取货单号：</div>
                    <div class="table-li__value">100000000000</div>
                </li>
                <li class="table-li">
                    <div class="table-li__name">状态：</div>
                    <div class="table-li__value">已取货</div>
                </li>
                <li class="table-li">
                    <div class="table-li__name">销售单号：</div>
                    <div class="table-li__value">1233412332434</div>
                </li>
            </ul>
            <ul class="table-ul">
                <li class="table-li">
                    <div class="table-li__name">子单号：</div>
                    <div class="table-li__value">23435436456</div>
                </li>
            </ul>
        </div>
    </div>
    <div class="content-container table-container">
        <div class="table-name">用户信息</div>
        <div class="table-list">
            <ul class="table-ul">
                <li class="table-li">
                    <div class="table-li__name">用户姓名：</div>
                    <div class="table-li__value">福小熊</div>
                </li>
                <li class="table-li">
                    <div class="table-li__name">联系电话：</div>
                    <div class="table-li__value">18100000000</div>
                </li>
                <li class="table-li">
                    <div class="table-li__name">销售单号：</div>
                    <div class="table-li__value">1233412332434</div>
                </li>
            </ul>
            <ul class="table-ul">
                <li class="table-li">
                    <div class="table-li__name">取货地址：</div>
                    <div class="table-li__value">浙江省杭州市西湖区万塘路2008号西塘大厦1楼</div>
                </li>
                <li class="table-li">
                    <div class="table-li__name">备注：</div>
                    <div class="table-li__value">无</div>
                </li>
            </ul>
        </div>
    </div>
    <div class="content-container table-container">
        <div class="table-name">退货商品</div>
            <div class="table">
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    border
                    show-summary
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
                    prop="sum"
                    label="金额">
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
  name: 'demo4',
  data() {
    return {
      tableData3: [{
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        sum: 20,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        sum: 20,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        sum: 20,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        sum: 20,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        sum: 20,
      }, {
        rule: 'TradeCode 0',
        desc: '这是一段描述',
        count: '638万',
        updateTime: '2017-07-01 00:00',
        sum: 20,
      }],
    };
  },
  components: {
    titleBar,
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../styles/layout.less";
@import '../../styles/mixin.less';
.edit-operation {
  color: #20A0FF;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}
.layout {
  .layout(row, flex-start, center, wrap);
  div {
    height: 52px;
    margin: 0 5px;
  }
}
.table {
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
    &-ul {
        list-style: none;
        margin: 0;
        padding: 0;
        float: left;
        overflow: hidden;
        width: 100%;
    }
    &-li {
        float: left;
        width: 33.333%;
        padding: 8px 0;
        overflow: hidden;
        color: #303133;
        &__name {
            float: left;
            width: 70px;
            line-height: 20px;
        }
        &__value {
            float: left;
            width: calc(100% - 120px);
            line-height: 20px;
        }
    }
}
</style>
