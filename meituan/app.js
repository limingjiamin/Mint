var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
//添加路由地址
var indexRouter = require("./routes/index");
var homeRouter = require("./routes/home");
var myRouter= require("./routes/my");

var app = express();
app.listen(3000);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//使用路由器
app.use("/", indexRouter); //公共的请求
app.use("/home", homeRouter); //首页请求
app.use("/my", myRouter); //我的页面

module.exports = app;
