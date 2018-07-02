<template>
  <div class="login">
    <div class="title-nav"><img src="../../../static/title.svg" alt="title">后台管理系统</div>
    <div class="login-nav">
      <div class="tab-nav">
        <ul>
          <li :class="[tab === 0 ? 'selected' : '']" @click="changeTab(0)">账号密码登录</li>
          <li :class="[tab === 1 ? 'selected' : '']" @click="changeTab(1)">手机号登录</li>
        </ul>
      </div>
      <div class="line-left" v-if="tab === 0"></div>
      <div class="line-right"  v-if="tab === 1"></div>
      <div class="login-account-nav" v-if="tab === 0">
        <el-input class="account-input" v-model="userName" placeholder="请输入账号">
          <svg-icon slot="prefix" icon-class="account" class="account-icon"></svg-icon>
        </el-input>
        <el-input class="account-input" v-model="password" type="password" placeholder="请输入密码">
          <svg-icon slot="prefix" icon-class="password" class="account-icon"></svg-icon>
        </el-input>
        <div class="login-account">
          <el-checkbox v-model="auto">自动登录</el-checkbox>
          <span class="login-account__forget">忘记密码</span>
        </div>
        <el-button class="account-btn" type="primary" @click="login">登录</el-button>
        <div class="other-account">
          <span class="other-account__type">
            其他登录方式
          </span>
          <svg-icon icon-class="webo" class="other-account-icon weibo-icon"></svg-icon>
          <svg-icon icon-class="wechat" class="other-account-icon wechat-icon"></svg-icon>
          <svg-icon icon-class="qq" class="other-account-icon qq-icon"></svg-icon>
          <span class="other-account__register">注册用户</span>
        </div>
      </div>
      <div class="login-tel-nav" v-if="tab === 1">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../styles/reset.css";
  .main {
    overflow: hidden;
  }
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../../../static/login_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .footer-nav {
    font-size: 13px;
    width: 300px;
    text-align: center;
    color: #fff;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .title-nav {
    height: 36px;
    line-height: 36px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    width: 240px;
    margin: auto;
    padding-top: 80px;
    img {
      height: 36px;
      width: 36px;
      float: left;
      border-radius: 6px;
    }
  }
  .login-nav {
    height: 400px;
    width: 400px;
    background: #fff;
    position: absolute;
    top: 60%;
    left: 50%;
    z-index: 1001;
    border-radius: 8px;
    transform: translate(-50%,-60%);
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.23);
    .line-left, .line-right {
      border-top: 2px solid #0086E6;
      width: 189px;
      position: absolute;
      top: 49px;
    }
    .line-left {
      left: 0;
    }
    .line-right {
      left: 190px;
    }
    .tab-nav {
      height: 50px;
      width: inherit;
      color: #606266;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 1px 0 0 #dcdfe6;
    }
    ul {
      padding: 18px 0;
      margin: 0;
      li {
        list-style: none;
        float: left;
        text-align: center;
        width: 189px;
        &.selected {
          color: #20a0ff;
        }
      }
    }
    .account-icon {
      font-size: 18px;
      color: #99a9bf;
      height: 36px;
    }
    .login-account {
      margin-top: 30px;
      &__forget {
        float: right;
        color: #20a0ff;
        cursor: pointer;
      }
    }
    .other-account {
      margin-top: 30px;
      .other-account-icon {
        font-size: 22px;
        float: left;
        margin-left: 10px;
        cursor: pointer;
      }
      .weibo-icon {
        color: #ee6324;
      }
      .wechat-icon {
        color: #00cd44;
      }
      .qq-icon {
        color: #3eabeb;
      }
      &__type {
        color: #5e6d82;
        float: left;
      }
      &__register {
        float: right;
        color: #20a0ff;
        cursor: pointer;
      }
    }
    .login-account-nav {
      padding: 40px 30px;
      height: 350px;
      box-sizing: border-box;
      .account-input {
        .el-input__inner {
          height: 50px !important;
          border-radius: 0;
        }
        &:first-child {
          margin-bottom: 20px;
        }
      }
      .account-btn {
        height: 40px;
        width: 340px;
        margin-top: 30px;
        border-radius: 4px;
        background: #20a0ff;
        font-size: 14px;
      }
    }
    .login-tel-nav {
      padding: 42px 0;
      height: 330px;
      box-sizing: border-box;
      text-align: center;
    }
  }
</style>

<script>
export default {
  name: 'login',
  data() {
    return {
      tab: 0,
      userName: '',
      password: '',
      // 自动登录
      auto: false,
    };
  },
  methods: {
    changeTab(id) {
      if (this.tab !== id) {
        this.tab = id;
      }
    },
    login() {
      if (this.userName === '') {
        this.$message({
          type: 'error',
          message: '帐号不能为空!',
        });
      }
      if (['admin', 'demoUser', 'demoSubUser'].indexOf(this.userName) < 0) {
        this.$message({
          type: 'error',
          message: '帐号不存在!',
        });
      }
      this.$store.dispatch('Login', {
        params: {
          params: {
            id: this.userName,
          },
        },
      }).then(() => {
        this.$router.push({ path: '/dashboard/index' });
      }).catch(() => {
        this.loading = false;
      });
    },
  },
};
</script>
