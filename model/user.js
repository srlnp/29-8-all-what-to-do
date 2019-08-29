var sequelize=require("sequelize")
var connection=require("../db/db")
connection.sync()
var Food=connection.define('food',{
  name:sequelize.STRING,
  city:sequelize.STRING  
})
module.exports=Food;