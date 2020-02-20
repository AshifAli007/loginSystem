var express = require("express");
var app = express();

//required for Authentication But Not yet working
//*********************
// app.use(require("express-session")({
//     secret : "Welcome",
//     resave : false,
//     saveUninitialized : false
// }));
// app.use(passport.initialize())
// app.use(passport.session());
// passport.use(new LocalStrategy(user.authenticate()));
// passport.serializeUser(user,serializeUser());
// passport.deserializeUser(user.deserializeUser());
//**********************

var bodyParser  = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/register",function(req,res){
    res.render("register.ejs");
});
app.get("/login",function(req,res){
    res.render("login.ejs");
});
app.post("/login",function(req,res){
    res.render("WelcomePage.ejs",{name:req.body.username});
    console.log(req.body);
});
app.post("/register",function(req,res){
    res.render("WelcomePage.ejs",{name:req.body.username});
    console.log(req.body);
});

var port = process.env.port || 3000;

app.listen(port);
