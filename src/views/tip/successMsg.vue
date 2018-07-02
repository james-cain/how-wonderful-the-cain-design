<template>
    <div class="success-msg-nav">
        <div class="success-msg">
            <div class="tip">
                <svg-icon icon-class="result_success_icon" class="tip-icon"></svg-icon>
                <div class="tip-msg">提交成功</div>
            </div>
            <div class="msg">
                提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。本文字区域可以展示简单的补充说明，如果有类似展示“单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
            </div>
            <div class="operate">
                <el-button class="el-button-reset">再次创建</el-button>
                <el-button type="primary" class="el-button-reset" @click="goback">返回列表</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'success-msg',
    methods: {
        goback() {
            this.$router.go(-1);
        },
    },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
.success-msg-nav {
    height: 500px;
    position: relative;
    overflow: hidden;
}
.success-msg {
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
            color: #5bb531;
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
