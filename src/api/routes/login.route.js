var express = require("express");
var route = express.Router();
var bodyParser  = require("body-parser");

route.get("/login",function(req,res){
  res.render("login.ejs");
});

route.post("/login",function(req,res){
  res.render("WelcomePage.ejs",{name:req.body.username});
  console.log(req.body);
});

module.exports = route;