<template>
  <div id="login">
    <div class="login-box">
      <div class="login-logo">开发模版</div>
      <div class="login-box-body">
        <p>管理员登录</p>
        <el-input
          placeholder="输入帐号"
          v-model="userName"
          value="admin"
          class="input">
          <i slot="icon" class="iconfont el-input__icon icon-account"></i>
        </el-input>
        <el-input
          placeholder="输入密码"
          v-model="password"
          type="password"
          value="123"
          class="input">
          <i slot="icon" class="iconfont el-input__icon icon-password"></i>
        </el-input>
      </div>
      <el-button type="primary" class="login-btn" @click="login">登录</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-box {
  width: 360px;
  height: 240px;
  margin: 7% auto;
  border: 1px solid rgb(191, 203, 217);
  border-radius: 3px;
  padding: 20px;
  position: relative;
  .login-logo {
    font-size: 35px;
    text-align: center;
    font-weight: 300;
  }
  .login-box-body {
    background: #ffffff;
    padding: 20px;
    border-top: 0;
    color: #666666;
    position: relative;
  }
  p {
    margin: 0;
    text-align: center;
    padding: 0 20px 20px 20px;
  }
  .input {
    margin-bottom: 15px;
  }
  .login-btn {
    position: absolute;
    right: 40px;
    bottom: 10px;
  }
}
</style>

<script>
export default {
  name: 'login',
  data() {
    return {
      userName: '',
      password: '',
    };
  },
  methods: {
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
