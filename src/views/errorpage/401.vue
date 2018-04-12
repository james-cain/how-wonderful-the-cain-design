<template>
    <div class="not-permission">
        <div class="exception-content">
            <img
                src="../../assets/images/401/no-permission.png"
                class="imgException"
                alt="prmission"
            />
            <div>
                <h3 class="title">
                    抱歉，您无权限～
                </h3>
                <p class="description">
                    抱歉，您暂无权限，请看看其他页面
                </p>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
.exception-content {
    text-align: center;
    height: 300px;
    margin: 150px auto;

    min-height: 300px;
    .imgException {
        max-width: 180px;
    }
    .title {
        font-size: 20px;
        margin: 10px 0;
        color: '#333';
    }
    .description {
        font-size: 14px;
        color: '#666';
    }
}
</style>

<script>
export default {
  name: 'no-permission',
};
</script>
