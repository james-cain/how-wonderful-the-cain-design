<template>
    <div class="not-permission">
        <div class="exception-content">
            <img
                src="../../assets/images/404/404.png"
                class="imgException"
                alt="页面不存在"
            />
            <div class="exception-desc">
                <div class="title">
                    404
                </div>
                <p class="description">
                    抱歉，您访问的页面不存在
                </p>
                <el-button type="primary" class="el-button-reset" @click="goback">返回首页</el-button>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
.not-permission {
    height: 500px;
    position: relative;
    overflow: hidden;
}
.exception-content {
    height: 300px;
    width: 800px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    min-height: 300px;
    .imgException {
        width: 540px;
        height: 300px;
        max-width: 540px;
        float: left;
    }
    .exception-desc {
        float: left;
        width: 260px;
        height: 300px;
        padding-left: 30px;
        padding-top: 80px;
        box-sizing: border-box;
    }
    .title {
        font-size: 48px;
        color: #5e6d82;
        font-family: Arial-Black;
        font-weight: bold;
    }
    .description {
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #5e6d82;
        margin-top: 10px;
    }
}
</style>

<script>
export default {
  name: 'no-found',
  methods: {
    goback() {
      this.$router.push({ name: 'Dashboard' });
    },
  },
};
</script>
