var Sequelize=require("sequelize")
require("dotenv").config();
var connection=new Sequelize(process.env.db,process.env.user,process.env.password,
    {"dialect":process.env.dialect,"port":process.env.port,"host":process.env.host});
module.exports=connection;
console.log(process.env)

