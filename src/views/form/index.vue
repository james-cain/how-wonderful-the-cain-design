<template>
  <div class="content-container">
    <title-bar titleName="表单填写">
      <template slot="tool">
        <span class="tool">
          <el-button class="el-button-reset">删除</el-button>
          <el-button class="el-button-reset">返回</el-button>
          <el-button class="el-button-reset">保存</el-button>
          <el-button type="primary" @click="submit" class="el-button-reset">提交</el-button>
        </span>
      </template>
    </title-bar>
    <div class="form-list">
      <el-form ref="form" label-position="right" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="活动名称:" prop="name">
          <el-input v-model="form.name" placeholder="请输入" style="width: 420px;"></el-input>
        </el-form-item>
        <el-form-item label="活动区域:" prop="region">
          <el-select v-model="form.region" placeholder="请选择" style="width: 420px;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间:" prop="date">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 420px;"></el-date-picker>
        </el-form-item>
        <el-form-item label="即使配送:">
          <el-switch v-model="form.sendSwitch"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质:" prop="tag">
          <el-checkbox-group v-model="form.tag">
            <el-checkbox label="1" name="type">美食/餐厅线上活动</el-checkbox>
            <el-checkbox label="2" name="type">地推活动</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源:" prop="state">
          <el-radio-group v-model="form.state">
            <el-radio label="1">线上品牌商赞助</el-radio>
            <el-radio label="2">线下场地免费</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式:" prop="desc">
          <el-input type="textarea" v-model="form.desc" style="width: 420px;"></el-input>
        </el-form-item>
        <el-form-item label="活动素材:">
          <div class="upload-operation">
            <span class="upload-btn">
              <label class="upload-span" for="file_upload">点击上传
                <input type="file" ref="selectFile" name="file" @change="uploadFile" id="file_upload" style="display: none;"/>
              </label>
            </span>
            <span class="form-send__desc">只能上传xls,xlsx文件，且不超过10M</span>
            <span class="form-send__desc" v-if="loading"><i class="el-icon-loading"></i>文件上传中...</span>
          </div>
          <div class="upload-success__list">
            <div class="upload-success__item" v-for="(file, index) in fileList" :key="`file${index}`">
              <img class="upload-success__item-img fl" :src="'../../../static/' + fileImg[file.type]" alt=""/>
              <span class="upload-success__item-name">{{file.name}}</span>
              <span class="upload-success__item-size">{{file.size}}</span>
              <i class="el-icon-close fr upload-success__item-close" @click="deleteSelectFile(index, $event)"></i>
            </div>
          </div>
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
      </div>
    </message-box>
  </div>
</template>

<script>
import titleBar from '@/components/title-bar';
import messageBox from '@/components/message-box';
import api from '@/api/api';

export default {
  name: 'demo2',
  data() {
    return {
      msgShow: false,
      msgShowCancelButton: true,
      form: {
        name: '',
        region: '',
        date: '',
        sendSwitch: false,
        tag: ['2'],
        state: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date: [
          { required: true, message: '请输入活动时间', trigger: 'blur' },
        ],
        tag: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        state: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入描述', trigger: 'blur' },
        ],
      },
      fileList: [],
      fileImg: {
        xls: 'file_excel.png',
        xlsx: 'file_excel.png',
        doc: 'file_word.png',
        docx: 'file_word.png',
        pdf: 'file_pdf.png',
      },
      loading: false,
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
    submit() {
      // this.msgShow = true;
      this.$router.push({ name: 'FormSuccessMsg' });
    },
    deleteSelectFile(index) {
      this.fileList.splice(index, 1);
    },
    uploadFile(e) {
      const file = e.target.files ? e.target.files[0] : '';
      console.log(file);
      if (!this.$refs.selectFile.value) {
        this.$message({
          type: 'warning',
          message: '导入文件没有选择',
        });
        return;
      }
      const filename = this.$refs.selectFile.value;
      const ext = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
      if (ext !== 'xls' && ext !== 'xlsx') {
        this.$message({
          type: 'warning',
          message: '选择的文件格式错误',
        });
        return;
      }
      if (typeof FileReader === 'function') {
        const formData = new FormData();
        formData.append('file', this.$refs.selectFile.files[0]);
        const params = {
          data: formData,
        };
        if (file) {
          if (file.size > (10 * 1024) * 1024) {
            this.$message({
              type: 'warning',
              message: '选择的文件大于10M',
            });
            return;
          }
        }
        this.loading = true;
        api.upload({ params }).then((result) => {
          console.log(result);
          this.$message({
            type: 'success',
            message: '文件上传成功!',
          });
          this.fileList.push({
            size: `${(file.size / 1024 / 1024).toFixed(2)}M`,
            name: file.name,
            type: ext,
          });
          this.loading = false;
        }).catch(() => {
          this.$message({
            type: 'error',
            message: '文件上传异常!',
          });
          this.loading = false;
        });
      } else {
        // 兼容ie9
        const iframe = document.createElement('iframe');
        iframe.width = 0;
        iframe.height = 0;
        iframe.name = 'upload-iframe';
        iframe.id = 'upload-iframe';
        iframe.setAttribute('style', 'width: 0; height: 0; border: none;');
        this.$refs.selectFile.parentNode.appendChild(iframe);
        const form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', '/cloudfs/api/fs/upload');
        form.setAttribute('enctype', 'multipart/form-data');
        form.setAttribute('target', 'upload-iframe');
        form.setAttribute('encoding', 'multipart/form-data');
        iframe.appendChild(form);
        form.appendChild(this.$refs.selectFile);
        iframe.onload = () => {
          let data = iframe.contentDocument.body.textContent || iframe.contentWindow.document.body.textContent;
          try {
            data = JSON.parse(data);
          } catch (err) {
            data = {};
          }
          console.log(data);
          if (data.state === 'SUCCESS') {
            this.$message({
              type: 'success',
              message: '文件上传成功!',
            });
          } else {
            this.$message({
              type: 'error',
              message: '文件上传异常!',
            });
          }
        };
        form.submit();
      }
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
  .upload-btn {
    padding: 10px 14px;
    background-color: #20a0ff;
    border-radius: 2px;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    label {
      cursor: pointer;
    }
  }
  .upload-success__list {
    .upload-success__item {
      width: 500px;
      margin-top: 20px;
      height: 26px;
      line-height: 26px;
      cursor: pointer;
      &:hover {
        background: #F5F7FA;
        .upload-success__item-close {
          display: inline;
        }
      }
      &-img {
        height: 26px;
        width: 26px;
      }
      &-name {
        font-size: 14px;
        color: #333;
        padding: 6px 10px;
      }
      &-size {
        color: #c0ccda;
        font-size: 14px;
        padding: 6px 0;
      }
      &-close {
        line-height: 26px;
        height: 26px;
        color: #c0ccda;
        display: none;
        margin-right: 10px;
      }
    }
  }
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
</style>
