<template>
  <div class="box">
    <el-card
      :body-style="{ padding: '0 5px 5px 5px' }"
      shadow="never"
      v-for="(item, index) in arr"
      :key="item.id"
    >
      <h4 v-if="first == index" style="margin-top: 5px">附近商家</h4>
      <div class="box2"  @click="meg(item.id)">
        <el-image class="imga" :src="item.s_img" fit="fit"> </el-image>
        <div class="box3">
          <el-row>
            <el-col :span="18"
              ><span class="span1">品牌</span
              ><span class="span2">{{item.shopName}}</span></el-col
            >
            <el-col :span="6"
              ><span v-for="item in 3" :key="item" class="span3"
                >保</span
              ></el-col
            >
          </el-row>
          <el-row class="box4">
            <el-col :span="18"
              >
              <span
                class="el-icon-star-on span4"
                v-for="(items,indexs) in Math.floor(item.score)"
                :key="items+'ha'" 
              ></span>
              <span
                class="el-icon-star-off span4"
                v-for="(items,indexs) in 5-Math.floor(item.score)"
                :key="indexs" 
              ></span>
              <span class="span5">{{item.score}}</span>
              <span class="span6">月售{{item.sales}}单</span></el-col
            >
            <el-col :span="6"><span class="span7">{{item.distribution}}</span></el-col>
          </el-row>
          <el-row class="box4">
            <el-col :span="24"
              ><span class="span6">￥{{item.qisong}}起送/配送费约为￥5 </span></el-col
            >
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import $http from '@/api/axios.js';
export default {
  created(){
     $http("/home/shop_list").then(({data})=>this.food_list=data); 
  },
  data() {
    return {
      food_list:"",
      first: 0,
      end:5,
     
    };
  },
  computed:{
     arr(){
     return  Array.from(this.food_list).filter((item,index)=>index<this.end) 
     },
  },
  methods:{
      meg(payload){
          this.$router.push(`/food/${payload}`);
      }
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
  text-align: left;
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
