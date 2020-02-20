var express = require("express");
var app = express();
var bodyParser  = require("body-parser");

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

app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.port || 3000;

app.listen(port);
