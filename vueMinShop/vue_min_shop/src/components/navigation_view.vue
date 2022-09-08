<template>
  <div>
    <el-row class="box">

      <el-col :span="6" v-for="(item, index) in nav_list" :key="index">
        <section @click="meg">
          <el-image :src="item.icon2" lazy class="imgsize" v-if="item.titie == titie"></el-image>
          <el-image :src="item.icon1" lazy class="imgsize" v-else></el-image>
          <h4 :class="item.titie == titie ? 'yanse' : ''">
            {{item.titie}}
          </h4>
        </section>
      </el-col>
    </el-row>
    <div style="width: 100%; height: 55px"></div>
  </div>
</template>

<script>
  import $http from '@/api/axios.js';
  export default {
    created() {
      // 发起请求，获取单行栏中的数据和图片
      $http("/navigation").then(data => this.nav_list = data);
    },
    updated(){
       //获取当前的路由
       let route = this.$route.matched[0].name
      // 获取路由信息
      this.$router.options.routes.forEach((elem,index,arr)=> {
          if(elem.name==route) this.router=arr[index];
        });
    
    },

    data() {
      return {
        nav_list: 1,
        titie: "首页",
        router:"",
      };
    },
    methods: {
      meg(e) {
        let elem = e.target;
        let item; //定义一个变量用来保存元素H4
        if (elem.nodeName == "IMG") {
          item = elem.parentNode.nextElementSibling;
        } else if (elem.nodeName == "H4") {
          item = elem;
        }
        if (item != undefined) {
          this.titie = item.innerText;
          let arrder=location.hash.slice(1);
          //  路由跳转
          this.router.children.forEach(elem=>{
            if(elem.name==this.titie && arrder!=elem.path) this.$router.push(elem.path);
          })
        }
      },
    },
  };
</script>
<style scoped>
  .box {
    display: flex;
    position: fixed;
    left: 0%;
    bottom: 0%;
    z-index: 10;
    width: 767px;
    height: 55px;
    background: rgb(255, 255, 255);
    color: rgb(162, 162, 162);
    width: 100%;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    box-shadow: 0px 1px 4px #888888;
  }

  .box>div {
    height: 100%;
  }

  .imgsize {
    width: 30px;
    height: 30px;
  }

  .yanse {
    color: aqua;
  }
</style>