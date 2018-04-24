<template>
  <div class="login">
    <section :style="{height: sectionHeight + 'px'}">
      <img class="bg-left" src="../../assets/images/login/login_bg.png"/>
      <div class="login-nav">
        <div class="tab-nav">
          <ul>
            <li :class="[tab === 0 ? 'selected' : '']" @click="changeTab(0)">账号登录</li>
            <!-- <li :class="[tab === 1 ? 'selected' : '']" @click="changeTab(1)">扫码登录</li> -->
          </ul>
        </div>
        <div class="line-left" v-if="tab === 0"></div>
        <div class="line-right"  v-if="tab === 1"></div>
        <div class="login-account-nav" v-if="tab === 0">
          <el-input class="account-input" v-model="userName" placeholder="请输入账号"></el-input>
          <el-input class="account-input" v-model="password" type="password" placeholder="请输入密码"></el-input>
          <el-button class="account-btn" type="primary" @click="login">登录</el-button>
        </div>
        <!-- <div class="login-scan-nav" v-if="tab === 1">
          <img src="/static/qrcode.png"/>
          <div>点击扫一扫>扫码登录</div>
        </div> -->
      </div>
    </section>
    <img class="bg-bottom" src="../../assets/images/login/login_bg_bottom.png"/>
  </div>
</template>

<style lang="less" scoped>
  .main {
    overflow: hidden;
  }
  section {
    overflow: hidden;
    width: 100%;
    min-height: 523px;
    background: #D5EBFF;
    float: left;
    position: relative;
    .bg-left {
      height: 400px;
      width: 390px;
      position: absolute;
      top: 66px;
      left: 180px;
    }
    .login-nav {
      height: 390px;
      width: 380px;
      background: #fff;
      position: absolute;
      top: 90px;
      right: 200px;
      .line-left, .line-right {
        border-top: 2px solid #0086E6;
        // width: 189px;
        width: 380px;
        position: absolute;
        top: 0;
      }
      .line-left {
        left: 0;
      }
      .line-right {
        left: 190px;
      }
      .tab-nav {
        height: 60px;
        width: inherit;
        color: #333;
        font-weight: bold;
        font-size: 14px;
        // cursor: pointer;
      }
      ul {
        padding: 14px 0;
        margin: 0;
        li {
          list-style: none;
          float: left;
          height: 30px;
          text-align: center;
          line-height: 30px;
          width: 390px;
          // &:first-child {
          //   border-right: 1px solid #E6E6E6;
          // }
          &.selected {
            color: #0086E6;
          }
        }
      }
      .login-account-nav {
        padding: 72px 50px 52px 50px;
        height: 330px;
        box-sizing: border-box;
        .account-input {
          .el-input__inner {
            height: 50px !important;
            border-radius: 0;
          }
          &:first-child {
            margin-bottom: 13px;
          }
        }
        .account-btn {
          height: 50px;
          width: 280px;
          margin-top: 43px;
          border-radius: 0;
        }
      }
      .login-scan-nav {
        padding: 42px 0;
        height: 330px;
        box-sizing: border-box;
        text-align: center;
        img {
          width: 200px;
          height: 200px;
          margin: 0 auto;
          margin-bottom: 34px;
        }
        div {
          font-size: 14px;
          height: 14px;
          color: #808080;
        }
      }
    }
  }

  .bg-bottom {
    width: 100%;
    height: 152px;
    float: left;
  }
</style>

<script>
export default {
  name: 'login',
  data() {
    return {
      windowHeight: 0,
      sectionHeight: 0,
      tab: 0,
      userName: '',
      password: '',
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
  mounted() {
    this.$nextTick(() => {
      this.windowHeight = document.documentElement.clientHeight;
      this.sectionHeight = this.windowHeight - 300;
    });
    window.addEventListener('resize', () => {
      this.$nextTick(() => {
        this.windowHeight = document.documentElement.clientHeight;
        this.sectionHeight = this.windowHeight - 300;
      });
    });
  },
};
</script>
