var express = require("express");
var router = express.Router();
const mysql = require("../mysql/my.js");


router.get("/user_info", async (req, res) => {
  let data = await mysql.user_info("usermenu");
  console.log(data);
  res.json({
    code: 200,
    meg: data,
  });
});
//5 用户详情
router.post("/user", async (req, res) => {
  let data;
  if (req.body.id == undefined) {
    req.body.id = 0;
    data = await mysql.user("user", req.body);
  } else {
    data = await mysql.user("user", req.body);
  }
  if (data.length == 0) {
    res.json({
      code: 400,
      meg: "请输入正确的id哦",
    });
  } else {
    res.json({
      code: 200,
      data: data,
    });
  }
});

module.exports = router;
