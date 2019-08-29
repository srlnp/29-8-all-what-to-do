var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.send("welcome to nodejs programming langulage")
})
app.use("/new",require("./router/route"))




app.listen("3333",function(){

    console.log("server listning port no 3333")
})