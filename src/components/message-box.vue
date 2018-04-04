<template>
  <div class="message-box-module">
    <div class="message-box-modal" v-show="isShow"></div>
    <transition name="msgbox-bounce">
      <div class="message-box" v-show="isShow">
        <div class="message-box-title" v-if="title !== ''">
          {{title}}
          <i class="el-message-box__close el-icon-close close" @click="handleAction('cancel')"></i>
        </div>
        <div class="message-box-content">
          <slot name="message-box-content"></slot>
        </div>
        <div class="message-box-btn">
          <div class="fr">
            <el-button v-show="showCancelButton" @click="handleAction('cancel')">{{cancelButtonText}}</el-button>
            <el-button type="primary" v-show="showConfirmButton" @click="handleAction('confirm')">{{confirmButtonText}}</el-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="less">
.message-box-modal {
  z-index: 10;
  background: rgba(0,0,0,0.15);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.message-box {
  height: 360px;
  width: 500px;
  border-radius: 2px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 11;
  background: #FFFFFF;
  border: 1px solid #D3DCE6;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12), 0 0 6px 0 rgba(0,0,0,0.04);
}
.message-box-title {
  height: 56px;
  line-height: 56px;
  font-family: PingFangSC-Regular;
  margin: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  color: #1F2D3D;
  letter-spacing: 0;
  position: relative;
}
.close {
  position: absolute;
  top: 21px;
  right: 0;
  height: 15px;
  width: 15px;
  color: #C0CCDA;
  cursor: pointer;
}
.message-box-content {
  height: 232px;
  padding: 20px 20px;
  box-sizing: border-box;
}
.message-box-btn {
  height: 70px;
  line-height: 70px;
  text-align: center;
  border-top: 1px solid #E0E6ED;
  padding: 0 20px;
  box-sizing: border-box;
}
.fr {
  float: right;
}
.msgbox-bounce-enter {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.7);
}
.msgbox-bounce-leave-active {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.9);
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示',
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    showCancelButton: {
      type: Boolean,
      default: false,
    },
    showConfirmButton: {
      type: Boolean,
      default: true,
    },
    confirmButtonText: {
      type: String,
      default: '确认',
    },
    cancelButtonText: {
      type: String,
      default: '取消',
    },
  },
  methods: {
    handleAction (action) {
      this.$emit('callback', action);
    },
  },
};
</script>
