var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home.ejs");
});
app.post("/login",function(){
    console.log(req.body);
});

var port = process.env.port || 3000;

app.listen(port);
