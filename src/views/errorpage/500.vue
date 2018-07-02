<template>
    <div class="server-error">
        <div class="exception-content">
            <img
                src="../../assets/images/500/500.png"
                class="imgException"
                alt="prmission"
            />
            <div class="exception-desc">
                <div class="title">
                    500
                </div>
                <p class="description">
                    抱歉，服务器出错啦
                </p>
                <el-button type="primary" class="el-button-reset" @click="goback">返回首页</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'server-error',
    methods: {
        goback() {
            this.$router.push({name: 'Dashboard'});
        },
    },
};
</script>

<style rel="stylesheet/less" lang="less" scoped>
.server-error {
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
