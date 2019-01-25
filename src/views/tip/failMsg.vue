<template>
    <div class="fail-msg-nav">
        <div class="fail-msg">
            <div class="tip">
                <svg-icon icon-class="result_fail_icon" class="tip-icon"></svg-icon>
                <div class="tip-msg">提交失败</div>
            </div>
            <div class="msg">
                很抱歉，提交失败了！请核对并修改一下信息后，再重新提交。
            </div>
            <div class="operate">
                <el-button class="el-button-reset" @click="goback">返回编辑</el-button>
                <el-button type="primary" class="el-button-reset">再次提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fail-msg',
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
.fail-msg-nav {
    height: 500px;
    position: relative;
    overflow: hidden;
}
.fail-msg {
    height: 240px;
    width: 760px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    min-height: 240px;
    text-align: center;
    .tip {
        &-icon {
            width: 70px;
            height: 70px;
            margin-bottom: 20px;
        }
        &-msg {
            color: #fb4853;
            font-weight: bold;
            font-size: 20px;
        }
    }
    .msg {
        width: 100%;
        color: #8492a6;
        line-height: 20px;
        font-size: 14px;
        margin-top: 20px;
        margin-bottom: 30px;
    }
}
</style>
