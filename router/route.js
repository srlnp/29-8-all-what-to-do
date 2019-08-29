"use strict"
var Food=require("../model/user")
var express=require("express");
var bodyParser=require("body-parser")
var router=express.Router();
router.use(bodyParser.json());
//create new foood data
router.post("/",function(req,res){
    Food.create({
        name:req.body.name,
        city:req.body.city
    }).then(function(resolved){
        res.send(resolved)
        res.end();
    }).catch(function(rejected){
        res.send(rejected)
    })
})
//get all food ddata
router.get("/",function(req,res){
    Food.findAll().then(function(resolved){
        res.send(resolved)
        res.end();})})
//get particular foood data
        router.get("/:id",function(req,res){
console.log(req.params.id)
Food.findAll({
    where: {id:req.params.id}}).then(function(resolved) {
    res.send(resolved)
    })});

module.exports=router;