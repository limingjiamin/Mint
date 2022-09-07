var express = require("express");
var router = express.Router();
const mysql = require("../mysql/select.js");

/* GET home page. */
router.get("/navigation", async (req, res) => {
  let data = await mysql.navigation("navigation");
  res.json(data);
});

// 1.用户名密码登陆

router.post("/login_pwd", async (req, res) => {
  let data = await mysql.login_pwd("user", req.body);
  console.log(data);
  if (typeof data === "string") {
    res.json({
      code: 400,
      data: `对不起，请你输入${data}`,
    });
  } else {
    if (data[0].length == 0) {
      res.json({
        code: 400,
        data: "你还没有账号，请你先注册，再使用",
      });
    } else if (data[1].length == 0) {
      res.json({
        code: 400,
        data: "请你输入正确的密码哦",
      });
    } else if (data[2].length == 0) {
      res.json({
        code: 400,
        data: "请你输入正确的验证码哦",
      });
    } else {
      res.json({
        code: 200,
        data: data[0],
      });
    }
  }
});
//手机验证码
router.get("/sendcode", async (req, res) => {
  let data = await mysql.sendcode("user", req.query);
  if (data.length == 0) {
    res.json({
      code: 400,
      msg: "短信验证码发送失败",
    });
  } else {
    res.json({
      code: 200,
    });
  }
});

// 3.手机号验证码登陆
router.post("/login_sms", async (req, res) => {
  let data = await mysql.sendcode("user", req.body);
  if (data.length != 0) {
    data = await mysql.login_sms("user", req.body);
    if (data.length == 0) {
      res.json({
        code: 400,
        meg: "验证码不正确",
      });
    } else {
      res.json({
        code: 200,
        data: data,
      });
    }
  } else {
    res.json({
      code: 400,
      meg: "手机号码不正确",
    });
  }
});


module.exports = router;
