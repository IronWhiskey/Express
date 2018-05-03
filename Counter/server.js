
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var session = require('express-session');

// invoke express and store the result in the variable app
var app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
// app.use(express.static(__dirname + "/static"));

// use app's get method and pass it the base route '/' and a callback
app.get('/', function(req, res) {
    req.session.count += 1;
    res.render('index', {count: req});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})

