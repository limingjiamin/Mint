<template>
  <div>
    <el-row class="box2 box touheader">
      <el-col :span="5"><i class="el-icon-search weizhi" @click="search"></i></el-col>
      <el-col :span="14" class="box3">
        <p class="wenzi">卡成本纳斯达克了吧舍不得你就啥的感觉比上年·</p>
      </el-col>
      <el-col :span="5">
        <div class="weizhi2" v-if="!off">
          <span @click="login">登录</span>
          <span>|</span>
          <span @click="login">注册</span>
        </div>

        <div class="touheader" v-else>
          <div class="box5">
            <el-avatar :src="iocn.avatar" size="small"></el-avatar>
          </div>
          <div class="weizhi2"><span>你好</span></div>
        </div>
      </el-col>
    </el-row>
    <div class="box"></div>
  </div>
</template>
<script>
  import $http from "@/api/axios.js";

  export default {
    created() {
      let state = this.$store.state.mine.login_id;
      if (state != "") {
        this.off = true;
        $http("/my/user", { id: state }, "POST").then(
          ({ data }) => {this.iocn = data[0] }
        );
      }
    },
    data() {
      return {
        off: false,
        iocn: "",
      };
    },
    methods: {
      search() {
        this.$router.push("/search");
      },
      login() {
        this.$router.push("/login");
      },
    },
  };
</script>
<style scoped>
  .box {
    height: 35px;
    width: 375px;
    background: rgb(78, 205, 0);
  }

  .box2 {
    position: fixed;
    z-index: 10;
    color: #fff;
    font-size: 22px;
  }

  .wenzi {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .weizhi {
    margin-left: -40px;
  }

  .weizhi2 {
    margin-left: 5px;
    font-size: 14px;
  }

  .box3 {
    box-sizing: border-box;
    padding-right: 15px;
  }

  .touheader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box5 {
    box-sizing: border-box;
    padding-top: 6px;
  }

  .box4 {
    width: 30px;
    height: 30px;
  }
</style>