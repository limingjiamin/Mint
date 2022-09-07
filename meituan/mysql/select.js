const pool = require("./pool.js");

let sql = "";
//创建查询语句
class select {
  constructor() {}
  //导航栏
  navigation(table) {
    let arr = [];
    sql = `select * from ${table}`;
    return new Promise((resolve) => {
      pool.query(sql, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  // 登录
  login_pwd(table, para) {
    let { name, pwd, captcha } = para;
    if (name == undefined ||name=="") return "name";
    if (pwd == undefined||pwd=="") return "pwd";
    if (captcha == undefined|| captcha=="") return "captcha";
    let sql1 = `select * from ${table} where name='${name}'`;
    let sql2 = `select * from ${table} where name='${name}' and pwd='${pwd}'`;
    sql = `select * from ${table} where name='${name}' and pwd='${pwd}' and captcha='${captcha}';`;
    return new Promise((resolve) => {
      let arr = [];
      arr.length
      pool.query(sql1, (err, result) => {
        if (err) throw err;
        arr.push(result);
        pool.query(sql2, (err, result) => {
          if (err) throw err;
          arr.push(result);
          pool.query(sql, (err, result) => {
            if (err) throw err;
            arr.push(result);
            resolve(arr);
          });
        });
      });
      
      
    });
  }
  //手机验证码
  sendcode(table,para){
    let {phone}=para;
    sql= `select id from ${table} where phone='${phone}'`;
    return new Promise((resolve) => {
      pool.query(sql, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  // 3.手机号验证码登陆
  login_sms(table,para){
    let {phone,code}= para;
    sql=`select id,phone from ${table} where phone='${phone}' and code='${code}'`;
    return new Promise((resolve,reject) => {
      pool.query(sql, (err, result) => {
        if (err) throw err;
        resolve(result);
      });
    });
  }
  
  // 4.用户信息
  user_info(table){
   sql=`select * from ${table} `;
   return new Promise((resolve,reject) => {
    pool.query(sql, (err, result) => {
      if(err) throw err;
      resolve(result);
    });
   })
  }
  //用户信息
  user(table,para){
    let {id}=para;
    sql=`select * from ${table} where id='${id}'`;
   
    return new Promise((resolve)=>{
      pool.query(sql,(err,result)=>{
        if(err) throw err;
        resolve(result);
      })
    });
  }

}
module.exports = new select();
