<template>
  <div>
    <div v-if="list_checked" class="res">
      <el-row v-for="(item, index) in 2" :key="index">
        <el-col :span="6" v-for="(elem, indexs) in list[index]" :key="indexs" class="weizhi">
          <img :src="elem.img" class="image" @click="dishes(elem.tiite)" />
          <div class="wenzi">
            <span @click="dishes(elem.tiite)">{{elem.tiite}}</span>
          </div>
        </el-col>
      </el-row>
      <ul class="dian" @click="meg">
        <li style="background: rgb(54, 255, 14)"></li>
        <li></li>
      </ul>
    </div>
    <div v-else class="res">
      <el-row v-for="(item, index) in 2" :key="index">
        <el-col :span="6" v-for="(elem, indexs) in list[index+2]" :key="indexs" class="weizhi">
          <img :src="elem.img" class="image" @click="dishes(elem.tiite)" />
          <div class="wenzi">
            <span @click="dishes(elem.tiite)">{{elem.tiite}}</span>
          </div>
        </el-col>
      </el-row>
      <ul class="dian" @click="meg">
        <li></li>
        <li style="background: rgb(54, 255, 14)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $http from '@/api/axios.js';

  export default {
    created() {
      $http("/home/dishes_list").then(data => {
        let arr = data.filter((elem, index) => index < 4);
        let arr2 = data.filter((elem, index) => index > 3 && index < 8);
        let arr3 = data.filter((elem, index) => index > 7 && index < 12);
        let arr4 = data.filter((elem, index) => index > 11 && index < 16);
        this.list = [arr, arr2, arr3, arr4];
      })
    },
    data() {
      return {
        list_checked: true,
        list: '',
      };
    },
    methods: {
      meg(e) {
        let elem = e.target;
        if (
          elem.nodeName == "LI" &&
          elem.style.background == "" &&
          this.list_checked
        ) {
          this.list_checked = false;
        } else if (
          elem.nodeName == "LI" &&
          elem.style.background == "" &&
          !this.list_checked
        ) {
          this.list_checked = true;
        }
      },
      dishes(pay) {
        this.$store.state.home.serach=pay
        this.$router.push("/search");

      }
    },
  };
</script>
<style scoped>
  .res {
    position: relative;
  }

  .wenzi {
    text-align: center;
    color: #000;
    margin-top: 5px;
    font-size: 14px;
  }

  .dian {
    position: absolute;
    left: 46%;
    top: 98%;
    padding: 0;
  }

  .dian li {
    list-style: none;
    float: left;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(189, 189, 189);
  }

  .dian li+li {
    margin-left: 5px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .weizhi {
    padding: 15px;
  }
</style>