//引入mysql
const  mysql=require("mysql");
//创建连接池
var pool=mysql.createPool({
    host:'w.rdc.sae.sina.com.cn',
    port:3306,
    user:'yynj2z43k1',
    password:'x2h14m0im53y05341mjj4xzihjj5llw225wh3yh4',
    database:"app_pethome",
    connectionLimit:20
});
//导出连接池
module.exports=pool