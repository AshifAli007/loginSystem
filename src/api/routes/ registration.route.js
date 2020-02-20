var express = require("express");
var app = express();
var bodyParser  = require("body-parser");



app.get("/register",function(req,res){
  res.render("register.ejs");
});

app.post("/register",function(req,res){
  res.render("WelcomePage.ejs",{name:req.body.username});
  console.log(req.body);
});