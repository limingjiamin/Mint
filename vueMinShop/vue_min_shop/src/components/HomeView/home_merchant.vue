<template>
  <div class="box">
    <el-card
      :body-style="{ padding: '0 5px 5px 5px' }"
      shadow="never"
      v-for="(item, index) in 10"
      :key="item"
    >
      <h4 v-if="first == index" style="margin-top: 5px">附近商家</h4>
      <div class="box2">
        <el-image class="imga" :src="url" fit="fit"> </el-image>
        <div class="box3">
          <el-row>
            <el-col :span="18"
              ><span class="span1">品牌</span
              ><span class="span2">几个亿品(文斗水城)</span></el-col
            >
            <el-col :span="6"
              ><span v-for="item in 3" :key="item" class="span3"
                >保</span
              ></el-col
            >
          </el-row>
          <el-row class="box4">
            <el-col :span="18"
              ><span
                class="el-icon-star-on span4"
                v-for="item in 5"
                :key="item"
              ></span
              ><span class="span5">4.8</span>
              <span class="span6">月售106单</span></el-col
            >
            <el-col :span="6"><span class="span7">美团专送</span></el-col>
          </el-row>
          <el-row class="box4">
            <el-col :span="24"
              ><span class="span6">￥20起送/配送费约为￥5 </span></el-col
            >
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first: 0,
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  box-sizing: border-box;
  padding-top: 10px;
  background: rgb(232, 232, 232);
  margin-top: 12px;
}

.box2 {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 10px;
}

.box3 {
  width: 73%;
  margin-left: 5px;
}

.box4 {
  margin-top: 8px;
}

.box3 .span1 {
  font-size: 14px;
  color: #000;
  display: inline-block;
  border-radius: 3px;
  font-weight: 700;
  background: rgba(254, 237, 1, 0.822);
}

.box3 .span2 {
  font-size: 18px;
  color: #000;
  display: inline-block;
  border-radius: 3px;
  font-weight: 700;
  margin-left: 5px;
}

.box3 .span3 {
  font-size: 12px;
  width: 14px;
  text-align: center;
  color: rgb(142, 142, 142);
  display: inline-block;
  border-radius: 3px;
  margin: 5px 0 0 1px;
  border: 0.5px solid rgb(211, 211, 211);
}

.box3 .span4 {
  color: rgb(255, 197, 5);
}

.box3 .span5 {
  font-size: 14px;
  color: rgb(255, 197, 5);
}

.box3 .span6 {
  font-size: 12px;
  color: rgb(100, 100, 100);
}

.box3 .span7 {
  font-size: 10px;
  border: 1px solid rgb(0, 198, 79);
  border-radius: 3px;
  color: rgb(0, 198, 79);
  margin-left: 16px;
}

.box3 .span3:nth-child(1) {
  margin-left: 17px;
}

.imga {
  width: 23%;
  height: 80px;
}

.card {
  padding: 5px;
  border-radius: 0px;
}
</style>
