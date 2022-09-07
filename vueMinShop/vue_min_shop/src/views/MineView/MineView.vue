<template>
  <div>
    <el-container>
      <el-header>我的</el-header>
      <el-container>
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
            <el-col :span="2">
              <i class="el-icon-arrow-right"></i>
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
  </div>
</template>

<script>
export default {
  name: "MineView",
  data() {
    return {
      user: {
        balance: 0.0,
        discount: 0,
        integral: 0,
        avatar: "头像地址",
        phone: 1827272222,
      },
      usermenu: [
        {
          id: 1,
          iclass: "el-icon-s-order",
          umenu: "我的订单",
        },
        {
          id: 2,
          iclass: "el-icon-shopping-bag-1",
          umenu: "积分商城",
        },
        {
          id: 3,
          iclass: "el-icon-bank-card",
          umenu: "Mint外卖会员卡",
        },
        {
          id: 4,
          iclass: "el-icon-service",
          umenu: "服务中心",
        },
      ],
    };
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
