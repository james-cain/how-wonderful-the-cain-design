<template>
    <div class="not-permission">
        <div class="exception-content">
            <img
                src="../../assets/images/404/404.png"
                class="imgException"
                alt="页面不存在"
            />
            <div>
                <h3 class="title">
                    抱歉，你访问的页面不存在
                </h3>
                <p class="description">
                    您要找的页面没有找到，请返回首页继续浏览
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
  name: 'no-found',
};
</script>
