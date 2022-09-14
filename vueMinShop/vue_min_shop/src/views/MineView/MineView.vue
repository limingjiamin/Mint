<template>
  <div>
    <el-container>
      <el-header>我的</el-header>
      <el-container v-if="!off">
        <el-aside width="50px">
          <div>
            <el-avatar size="large" icon="el-icon-user-solid"></el-avatar>
          </div>
        </el-aside>
        <el-main>
          <el-row>
            <el-col :span="22">
              <el-row>登录/注册</el-row>
              <el-row>
                <i class="el-icon-mobile-phone"></i>
                <span>暂无绑定手机号</span>
              </el-row>
            </el-col>
            <el-col :span="2" @click="goLogin" style="background-color: red">
              <i class="el-icon-arrow-right"></i>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-container v-else>
        <el-aside width="50px">
          <div>
            <el-avatar size="large" :src="user.avatar"></el-avatar>
          </div>
        </el-aside>
        <el-main>
          <el-row>
            <el-col :span="24">
              <el-row>手机号</el-row>
              <el-row>
                <i class="el-icon-mobile-phone"></i>
                <span>{{ user.phone }}</span>
              </el-row>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
    <ul class="user-info">
      <li>
        <p>
          <span>{{ user.balance }}</span
          >元
        </p>
        <p>我的余额</p>
      </li>
      <li>
        <p>
          <span>{{ user.discount }}</span
          >个
        </p>
        <p>我的优惠</p>
      </li>
      <li>
        <p>
          <span>{{ user.integral }}</span
          >分
        </p>
        <p>我的积分</p>
      </li>
    </ul>
    <ul class="user-menu">
      <li v-for="m in usermenu" :key="m.id">
        <span><i :class="m.iclass"></i></span>
        <span>{{ m.umenu }}</span>
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
    <navigation></navigation>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import navigation from "@/components/navigation_view";
import $http from "@/api/axios";

export default {
  name: "MineView",
  data() {
    return {
      off: false,
      user: {
        balance: 0.0,
        discount: 0,
        integral: 0,
        avatar: "",
        phone: 1827272222,
      },
      usermenu: [],
    };
  },
  components: {
    navigation,
  },
  methods: {
    goLogin() {
      console.log(11111);
      this.$router.push("/login");
    },
  },
  created() {
    $http("/my/user_info").then((res)=>{
      console.log(res);
      this.usermenu=res.data
    })
    let state = this.$store.state.mine.login_id;
    if (state !== "") {
      this.off = true;
      $http("/my/user", { id: this.$store.state.mine.login_id }, "POST").then(
        (res) => {
          console.log(res);
          this.user.balance = res.data[0].balance;
          this.user.discount = res.data[0].discount;
          this.user.integral = res.data[0].integral;
          this.user.avatar = res.data[0].avatar;
          this.user.phone = res.data[0].phone;
        }
      );
    }
  },
};
</script>

<style lang="less" scoped>
@green: #67c23a;
@red: #f56c6c;
@blue: #409eff;
@orange: #e6a23c;
.el-header {
  text-align: center;
  line-height: 60px;
  border-bottom: white 1px solid;
  font-size: 18px;
}

.el-container {
  background-color: @blue;
  color: white;
}

.el-aside {
  padding: 15px 10px;
}

.el-main {
  padding: 15px;
  text-align: left;
}

ul {
  margin: 0;
  list-style: none;
  padding: 10px;
}

.user-info {
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 5px 0;

    span {
      font-size: 28px;
      font-weight: bold;
    }
  }

  :nth-child(1) span {
    color: @orange;
  }

  :nth-child(2) span {
    color: @red;
  }

  :nth-child(3) span {
    color: @green;
  }

  :nth-child(2) li {
    border: 1px solid gainsboro;
  }
}

.user-menu {
  border-top: 1px solid gainsboro;
  padding: 0 10px;
  text-align: left;
  font-size: 18px;

  li {
    padding: 10px 0;

    > i {
      float: right;
    }
  }
}

.el-icon-s-order {
  color: @orange;
}

.el-icon-shopping-bag-1 {
  color: @red;
}

.el-icon-bank-card {
  color: @green;
}

.el-icon-service {
  color: @blue;
}
</style>
