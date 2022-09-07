<template>
  <div>
    <i class="el-icon-arrow-left" @click="goHome"></i>
    <el-row><h1>Mint外卖</h1></el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="20">
        <el-tabs>
          <el-tab-pane label="短信登录">
            <el-form>
              <el-form-item>
                <el-input type="text" placeholder="手机号" v-model="phone" />
              </el-form-item>
              <el-form-item>
                <el-col :span="14">
                  <el-input v-model="code" placeholder="验证码" />
                </el-col>
                <el-col :span="1">&nbsp; </el-col>
                <el-col :span="9">
                  <el-button @click="handleCaptcha">获取验证码</el-button>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginCode">登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-link :underline="false" href="https://www.ele.me/"
                  >关于我们</el-link
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="密码登录">
            <el-form>
              <el-form-item>
                <el-input placeholder="手机/邮箱/用户名" v-model="name" />
              </el-form-item>
              <el-form-item>
                <el-input placeholder="密码" v-model="pwd" show-password />
              </el-form-item>
              <el-form-item>
                <el-input placeholder="验证码" v-model="captcha" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginPwd">登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-link :underline="false" href="https://www.ele.me/"
                  >关于我们</el-link
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      name: "",
      pwd: "",
      captcha: "",
      phone: "",
      code: "",
    };
  },
  methods: {
    handleCaptcha() {
      console.log("获取验证码");
    },
    loginCode() {
      console.log("手机验证码方式登录");
    },
    loginPwd() {
      console.log("用户密码方式登录");
    },
    goHome() {
      console.log("跳转到首页");
    },
  },
};
</script>

<style scoped>
i {
  float: left;
}
.el-form-item {
  margin-bottom: 10px;
}
.el-button {
  width: 100%;
}
</style>
