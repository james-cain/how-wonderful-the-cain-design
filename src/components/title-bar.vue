<template>
  <div class="nav">
    <span class="title"><b>{{titleName}}</b></span>
    <slot name="tool"></slot>
  </div>
</template>

<script>
export default {
  props: ['titleName'],
};
</script>

<style scoped lang="less">
.nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #FFFFFF;
  box-shadow: 0 1px 0 0 #E0E6ED;
}
span {
  &.title {
    font-family: PingFangHK-Semibold;
    font-size: 16px;
    color: #1F2D3D;
    letter-spacing: 0;
  }
  &.tool {
    float: right;
  }
}
</style>
