<template>
  <div>
    <el-row class="box2 box touheader">
      <el-col :span="5"><i class="el-icon-search weizhi"></i></el-col>
      <el-col :span="14" class="box3">
        <p class="wenzi">卡成本纳斯达克了吧舍不得你就啥的感觉比上年·</p>
      </el-col>
      <el-col :span="5">
        <div class="weizhi2">
                <span>登录</span>
                <span>|</span>
                <span>注册</span>
            </div>

        <!-- <div class="touheader">
          <div class="box5">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              size="small"
            ></el-avatar>
          </div>
          <div class="weizhi2"><span>你好</span></div>
        </div> -->


      </el-col>
    </el-row>
    <div class="box"></div>
  </div>
</template>
<script>
export default {};
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
  margin-left: 10px;
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
