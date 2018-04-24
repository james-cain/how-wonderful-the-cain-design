<template>
  <div class="demo2">
    <title-bar titleName="添加商品">
      <template slot="tool">
        <span class="tool">
          <el-button type="primary" @click="openEdit">保存</el-button>
          <el-button>返回</el-button>
        </span>
      </template>
    </title-bar>
    <div class="form-list">
      <el-form ref="form" label-position="right" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="商品名称:" prop="name">
          <el-input v-model="form.name" style="width: 600px;">
            <template slot="append">7/15</template>
          </el-input>
        </el-form-item>
        <el-form-item label="商品类别:" prop="region">
          <el-select v-model="form.region" placeholder="请选择商品类别" style="width: 600px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格:" prop="price">
          <el-input v-model="form.price" style="width: 600px;">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="主图:" class="pic">
          <span>只能上传4张，超过4张不显示</span>
          <img src="/ui/static/zms.jpg" alt="">
          <img src="/ui/static/list_icon_add_nor.png" alt="">
        </el-form-item>
        <el-form-item label="商品状态：">
          <el-radio-group v-model="form.state">
            <el-radio label="1">上架</el-radio>
            <el-radio label="2">下架</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="总库存:" prop="repertory">
          <el-input v-model="form.repertory" style="width: 250px;">
          </el-input>
        </el-form-item>
        <el-form-item label="初始库存:" prop="initRepertory">
          <el-input v-model="form.initRepertory" style="width: 250px;">
          </el-input>
        </el-form-item>
        <el-form-item label="标签：">
          <el-checkbox-group v-model="form.tag">
            <el-checkbox label="1" name="type">设为热销</el-checkbox>
            <el-checkbox label="2" name="type">设为折扣</el-checkbox>
            <el-input v-model="form.tagPrice" style="width: 90px;"></el-input> <span class="tag tag-unit">元</span> <span class="tag tag-desc">（商品上架后才可以设为热销和折扣）</span>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="商品介绍：">
          <el-input type="textarea" v-model="form.desc" style="width: 600px; height: 120px;"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <message-box
      title="商品类别"
      :isShow="msgShow"
      :showCancelButton="msgShowCancelButton"
      @callback="handleAction">
      <div slot="message-box-content" class="layout">
        <div><button class="classify selected">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
        <div><button class="classify">饮料/水</button></div>
      </div>
    </message-box>
    <!-- <blog-post>
      <h1 slot="header">
        About Me
      </h1>
      <p>Here`s some page content, which...</p>
      <p slot="footer">
        Copyright 2017
      </p>
      <p>If I have some content down here</p>
    </blog-post> -->
  </div>
</template>

<script>
import titleBar from '@/components/title-bar';
import messageBox from '@/components/message-box';

export default {
  name: 'demo2',
  data() {
    return {
      msgShow: false,
      msgShowCancelButton: true,
      form: {
        name: '哈尔滨啤酒250ml',
        region: '',
        price: '16',
        delivery: false,
        tag: ['2'],
        tagPrice: '12',
        state: '1',
        repertory: '250',
        initRepertory: '100',
        desc: '海尔滨啤酒，配料：大麦，酒花，酵母，酿造用水',
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' },
        ],
        repertory: [
          { required: true, message: '请输入商品总库存', trigger: 'blur' },
        ],
        initRepertory: [
          { required: true, message: '请输入商品初始库存', trigger: 'blur' },
        ],
      },
    };
  },
  components: {
    titleBar,
    messageBox,
  },
  methods: {
    onSubmit() {
      // console.log('submit!')
    },
    handleAction() {
      this.msgShow = false;
    },
    openEdit() {
      this.msgShow = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../styles/mixin.less';
.demo2 {
  padding: 20px;
}
.form-list {
  margin-top: 30px;
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
</style>

<style>
  .el-form-item__label {
    width: 90px !important;
  }
  .el-form-item__content {
    margin-left: 90px !important;
  }
</style>
