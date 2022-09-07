<template>
  <div>
    <div v-if="list_checked" class="res">
      <el-row v-for="(item, index) in 2" :key="index">
        <el-col
          :span="6"
          v-for="(elem, indexs) in 4"
          :key="indexs"
          class="weizhi"
        >
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div class="wenzi">
            <span>好吃的堡</span>
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
        <el-col
          :span="6"
          v-for="(elem, indexs) in 4"
          :key="indexs"
          class="weizhi"
        >
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div class="wenzi">
            <span>好吃的1</span>
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
export default {
  data() {
    return {
      list_checked: true,
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
.dian li + li {
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
