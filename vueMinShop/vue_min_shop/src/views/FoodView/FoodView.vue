<template>
  <el-container>
    <div class="demo-image">
      <el-image style="width: 375px; height: 120px" :src="url"></el-image>
    </div>
    <el-header height="120px">
      <div class="logo"></div>
      <div class="title">
        <el-tag type="warning" size="mini">品牌</el-tag>
        <h2>{{ shopName }}</h2>
      </div>

      <p class="shop_info">
        <span>4.2</span>
        <span>月售{{ num }}单</span>
        <span>硅谷转送</span>
        <span>约{{ time }}分钟</span>
        <span>距离{{ long }}米</span>
      </p>
    </el-header>
    <el-container>
      <el-aside width="25%">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgb(244,245,247)"
        >
          <el-menu-item
            v-for="(nav, index) in nav_li"
            :key="nav"
            :index="index"
            @click="toJump(index)"
          >
            <!--            <i class="el-icon-setting"></i>-->
            <span slot="title">{{ nav }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="food_warp">
        <ul
          class="infinite-list"
          v-infinite-scroll="load"
          style="overflow: auto"
        >
          <li v-for="item in list_info" :key="item">
            <div>
              <el-image style="width: 60px; height: 60px" :src="url"></el-image>
            </div>
            <div class="product">
              <h5>{{ item.name }}</h5>
              <p>{{ item.desc }}</p>
              <p>月售{{ item.sell_num }}份 好评率{{ item.good_reputation }}%</p>
              <p style="color: red">￥{{ item.price }}</p>
              <el-button type="success" circle @click="add_product(item)">
                <i class="el-icon-plus"></i>
              </el-button>
            </div>
          </li>
        </ul>
      </el-main>
    </el-container>
    <div class="shopping-car">
      <div class="icon_car" @click="drawer = true">
        <svg
          t="1663156078932"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2440"
          width="40"
          height="40"
        >
          <path
            d="M865.027335 712.878077 359.168196 712.878077c-47.943942 0-59.886949-26.330692-62.749136-42.024116l-4.944616-27.732621c-51.850925-291.038516-81.45722-452.825272-88.008426-480.878189-5.739724-22.252817-8.009418-26.990724-21.971407-30.340005L81.504292 131.903146c-10.936073 0-19.73753-10.276041-19.73753-21.203928s8.441253-21.239743 19.377326-21.239743l100.539834 0c10.514471 0 49.118698 5.703909 63.572898 61.825091 10.223852 43.7402 69.319785 376.301412 88.686878 485.047138l4.433986 18.760273c0.481977 2.617617 4.093225 14.667048 20.849864 15.377222l506.024915 0c10.936073 0 19.563568 10.275018 19.563568 21.203928C884.817054 702.602036 875.963409 712.878077 865.027335 712.878077"
            p-id="2441"
          ></path>
          <path
            d="M807.322076 552.709167 296.128441 552.709167c-10.936073 0-19.789719-8.860808-19.789719-19.788695 0-10.927887 8.331759-22.620184 19.267832-22.620184l510.970554 0c29.127388 1.017166 40.114626-28.516474 40.383756-29.68202 2.14792-7.964392 49.793056-182.898587 62.933331-227.173976 1.546216-5.201465 2.1295-11.122315-0.170892-15.690354-1.586125-3.15076-3.41068-7.334036-14.326287-7.098675L233.285161 230.655264c-10.940167 0-19.788695-8.861832-19.788695-19.789719 0-10.93198 9.948583-22.395056 20.887726-22.395056l666.683988 0c0.694825 0-0.127913 0 0.567935 0 21.434172 0 36.399001 12.529361 44.109614 27.225061 5.253654 10.014074 12.256138 25.695219 5.086855 49.929156-13.008268 43.780109-62.057381 226.859821-62.556755 228.703819C883.402845 514.251274 860.057137 552.709167 807.322076 552.709167"
            p-id="2442"
          ></path>
          <path
            d="M400.022673 925.535431c-45.300742 0-82.154092-36.84107-82.154092-82.132602 0-45.287439 36.853349-82.132602 82.154092-82.132602 45.279253 0 82.115206 36.84414 82.115206 82.132602C482.136855 888.694361 445.300902 925.535431 400.022673 925.535431M400.277476 804.093545c-21.832238 0-39.585577 17.754363-39.585577 39.566134 0 21.815865 17.753339 39.573297 39.585577 39.573297 21.815865 0 39.549761-17.757432 39.549761-39.573297C439.826214 821.847907 422.093341 804.093545 400.277476 804.093545"
            p-id="2443"
          ></path>
          <path
            d="M768.747525 925.535431c-45.279253 0-82.132602-36.84107-82.132602-82.132602 0-45.287439 36.853349-82.132602 82.132602-82.132602s82.132602 36.84414 82.132602 82.132602C850.880127 888.694361 814.026778 925.535431 768.747525 925.535431M768.851902 803.960515c-21.805632 0-39.550785 17.745153-39.550785 39.546691 0 21.805632 17.745153 39.553854 39.550785 39.553854 21.805632 0 39.550785-17.748223 39.550785-39.553854C808.402687 821.706691 790.657534 803.960515 768.851902 803.960515"
            p-id="2444"
          ></path>
        </svg>
        <div class="money">
          <p class="p1">￥{{ now_price }}</p>
          <p class="p2">另需配送费￥{{ per }}元</p>
        </div>
      </div>
      <el-button @click="To_order">￥{{ low_price }}元起送</el-button>
    </div>
    <!--    抽屉-->
    <el-drawer
      title="购物车"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="drawerClose"
    >
      <ul class="drawer">
        <li v-for="item in car_list" :key="item">
          <div>
            <el-image style="width: 60px; height: 60px" :src="url"></el-image>
          </div>
          <div class="product">
            <h5 style="margin-left: 5px">{{ item.name }}</h5>
            <p>{{ item.desc }}</p>
            <p class="car_price" style="color: red">￥{{ item.price }}</p>
          </div>
          <div class="btn">
            <el-button type="success" circle @click="reduce_num(item)">
              <i class="el-icon-minus"></i>
            </el-button>
            <span>{{ item.num }}</span>
            <el-button type="success" circle @click="addnum(item)">
              <i class="el-icon-plus"></i>
            </el-button>
          </div>
        </li>
      </ul>
    </el-drawer>
  </el-container>
</template>

<script>
// import BScroll from "better-scroll";
export default {
  name: "FoodView",
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      shopName: "嘉和一品(温都水城)",
      num: 90, //月售数量
      time: 28, //配送时间
      long: 1000, //距离
      //左侧导航
      nav_li: [
        "优惠",
        "折扣",
        "香浓甜粥",
        "营养咸粥",
        "爽口凉菜",
        "精选套餐",
        "果品果汁",
        "小吃主食",
        "特色粥品",
      ],
      //最低起送价格
      low_price: 20,
      //配送费
      per: 4,
      //当前价格
      now_price: 0,
      drawer: false, //抽屉
      direction: "btt",
      // 商品列表
      list_info: [
        {
          name: "南瓜粥",
          desc: "甜粥",
          sell_num: "20",
          good_reputation: "20",
          price: "9",
        },
        {
          name: "红豆薏米美肤粥",
          desc: "甜粥",
          sell_num: "86",
          good_reputation: "20",
          price: "12",
        },
        {
          name: "南瓜粥",
          desc: "甜粥",
          sell_num: "20",
          good_reputation: "20",
          price: "9",
        },
        {
          name: "南瓜粥",
          desc: "甜粥",
          sell_num: "20",
          good_reputation: "20",
          price: "9",
        },
        {
          name: "八宝酱菜",
          desc: "",
          sell_num: "84",
          good_reputation: "50",
          price: "4",
        },
        {
          name: "南瓜粥",
          desc: "甜粥",
          sell_num: "20",
          good_reputation: "20",
          price: "9",
        },
        {
          name: "红豆薏米美肤粥",
          desc: "甜粥",
          sell_num: "86",
          good_reputation: "20",
          price: "12",
        },
        {
          name: "南瓜粥",
          desc: "甜粥",
          sell_num: "20",
          good_reputation: "20",
          price: "9",
        },
        {
          name: "南瓜粥",
          desc: "甜粥",
          sell_num: "20",
          good_reputation: "20",
          price: "9",
        },
      ],
      // 抽屉中的列表
      car_list: [],
      //
      car_pro_num: 1,
    };
  },
  //首次访问页面访问数据
  mounted() {
    this._initScroll();
  },
  methods: {
    // 初始化滚动
    // _initScroll() {
    //   // 列表显示之后创建
    //   this.foodsScroll = new BScroll(".food_warp", {
    //     probeType: 2, // 因为惯性滑动不会触发
    //     click: true,
    //   });
    //   // 给右侧列表绑定scroll监听
    //   this.foodsScroll.on("scroll", ({ x, y }) => {
    //     console.log(x, y);
    //     this.scrollY = Math.abs(y);
    //   });
    //   // 给右侧列表绑定scroll结束的监听
    //   this.foodsScroll.on("scrollEnd", ({ x, y }) => {
    //     console.log("scrollEnd", x, y);
    //     this.scrollY = Math.abs(y);
    //   });
    // },
    //访问商家
    // axios.get("/url").then(res=>{
    //
    // })
    //访问导航列表
    // axios.get("/url",{}).then(res=>{
    //   this.nav_li=res;
    // }),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    add_product(item) {
      // console.log(item.name)
      for (let i = 0; i < this.car_list.length; i++) {
        console.log(i);
      }
      this.car_list.push({
        name: item.name,
        desc: item.desc,
        price: item.price,
        num: 1,
      });
      console.log(this.car_list);
      //添加成功提示
      // this.$message({
      //   message: '添加成功',
      //   type: 'success'
      // });
      //  价格变动
      this.now_price += Number(item.price);
      //  是否满足起送条件
      if (this.now_price >= this.low_price) {
        this.btn = false;
        console.log(this.btn);
      }
    },
    //关闭抽屉
    drawerClose(done) {
      done();
    },
    //数量加减
    addnum(item) {
      item.num = item.num + 1;
      //计算价格
      this.now_price += Number(item.price);
      this.isLowPrice();
    },
    reduce_num(item) {
      if (item.num <= 1) {
        return;
      }
      item.num = item.num - 1;
      // 计算价格
      this.now_price -= Number(item.price);
      this.isLowPrice();
    },
    //起送按钮是否警用
    isLowPrice() {
      if (this.now_price >= this.low_price) {
        this.btn = false;
      } else {
        this.btn = true;
      }
    },
    //定位
    toJump(index) {
      this.refs[index].scrollIntoView(true);
    },
  },
};
</script>

<style scoped lang="less">
.logo {
  width: 70px;
  height: 70px;
  background: #f0f;
  position: absolute;
  left: 42%;
  top: -48px;
}
.title {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  .el-tag {
    margin-top: 20px;
    margin-right: 7px;
  }
}
.shop_info {
  line-height: 20px;
  margin-top: -12px;
  color: rgb(122, 122, 122);
}
.el-dropdown-link {
  cursor: pointer;
  //color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-container {
  height: 100%;
}
.el-header {
  font-size: 12px;
  background: #fff;
  overflow: visible;
  position: relative;
  p {
    span {
      margin: 0 5px;
    }
  }
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  //line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.shopping-car {
  width: 100%;
  height: 50px;
  background: rgb(19, 28, 39);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .icon_car {
    display: flex;
    justify-content: left;
    color: white;
    svg {
      color: white;
    }
    .p1 {
      margin-left: -45px;
    }
    .p2 {
      color: rgb(100, 100, 100);
      font-size: 12px;
    }
  }
  .money {
    p {
      color: white;
    }
  }
  .el-button {
    background: rgb(42, 51, 60);
    border: none;
    color: white;
  }
}
.infinite-list {
  li {
    margin: 10px 0;
  }
  .product {
    margin-left: 5px;
    h5 {
      font-size: 14px;
    }
    font-size: 12px;
    color: rgb(151, 151, 151);
    position: relative;
    .el-button {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 36px;
      right: -64px;
      i {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
  }
  li {
    display: flex;
    justify-content: left;
    border-bottom: solid 1px #ddd;
  }
}
.drawer {
  li {
    display: flex;
    justify-content: left;
    margin-top: 10px;
    border-bottom: solid 1px #eee;
    padding: 5px;
    position: relative;
    .btn {
      position: absolute;
      right: 15px;
      top: 10px;
      .el-button {
        width: 15px;
        height: 15px;
        position: relative;
        i {
          position: absolute;
          top: 6px;
          left: 5px;
        }
      }
      span {
        margin: 5px;
      }
    }
  }
}
</style>
