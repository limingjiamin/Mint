<script src="../../router/index.js"></script>
<template>
  <div>
    <el-row>
      <i class="el-icon-arrow-left" @click="goHome"></i>
    </el-row>
    <el-row><h1>Mint外卖</h1></el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="20">
        <el-tabs>
          <el-tab-pane label="短信登录">
            <el-form :model="ruleForm" :rules="rules">
              <el-form-item>
                <el-input
                  type="text"
                  placeholder="手机号"
                  v-model="ruleForm.phone"
                />
              </el-form-item>
              <el-form-item>
                <el-col :span="14">
                  <el-input v-model="ruleForm.code" placeholder="验证码" />
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="9">
                  <el-button @click="handleCaptcha">获取验证码</el-button>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginCode">登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-link :underline="false" href="https://www.ele.me/"
                  >关于我们
                </el-link>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="密码登录">
            <el-form :model="ruleForm" :rules="rules">
              <el-form-item>
                <el-input
                  placeholder="手机/邮箱/用户名"
                  v-model="ruleForm.name"
                />
              </el-form-item>
              <el-form-item>
                <el-input
                  placeholder="密码"
                  v-model="ruleForm.pwd"
                  show-password
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginPwd">登录</el-button>
              </el-form-item>
              <el-form-item>
                <el-link :underline="false" href="https://www.ele.me/"
                  >关于我们
                </el-link>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $http from "@/api/axios";

export default {
  name: "LoginView",
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: "",
        phone: "",
        code: "",
      },
      rules: {
        name: [
          { require: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 6, message: "用户名长度2至6个字符", trigger: "blur" },
        ],
        pwd: [
          { require: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码长度6至12位", trigger: "blur" },
        ],
        phone: [
          { require: true, message: "请输入手机号码", trigger: "blur" },
          { min: 11, max: 11, trigger: "blur" },
        ],
        code: [
          { require: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleCaptcha() {
      $http("/sendcode", { phone: this.ruleForm.phone }, "GET").then((data) => {
        if (data.code === 200) {
          alert("验证码0000");
        } else {
          alert("请重新获取验证码");
        }
      });
    },
    loginCode() {
      $http(
        "/login_sms",
        { phone: this.ruleForm.phone, code: this.ruleForm.code },
        "POST"
      ).then((res) => {
        console.log(res);
        console.log("login_id", res.data[0].id);
        if (res.code === 200) {
          this.$store.commit("HANDLE_ID", res.data[0].id);
          this.$router.push("/home");
        } else {
          alert("验证码不正确");
        }
      });
    },
    loginPwd() {
      $http(
        "/login_pwd",
        { name: this.ruleForm.name, pwd: this.ruleForm.pwd },
        "POST"
      ).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.$store.commit("HANDLE_ID", res.data[0].id);
          this.$router.push("/home");
        } else {
          alert("账户密码不正确");
        }
      });
    },
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.el-icon-arrow-left {
  margin: 10px;
}

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
