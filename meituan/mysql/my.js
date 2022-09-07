const pool = require("./pool.js");

let sql = "";
//创建查询语句
class select {
  constructor() {}
  // 4.用户信息列表
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
