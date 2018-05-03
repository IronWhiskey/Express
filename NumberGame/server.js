
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var session = require('express-session');
var bodyparser = require('body-parser');
// invoke express and store the result in the variable app
var app = express();


// setting up the session data
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(bodyparser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + "/static"));


// use app's get method and pass it the base route '/' and a callback
app.get('/', function(req, res) {
    
    if ('guess' in req.session)
    {   
        info = {
            random: req.session.num,
            guess: req.session.guess
        }
        res.render('index', {data: info})
    }

    // this is done only once 
    else{
        req.session.num = Math.floor(Math.random() * 100);
        info = {
            random: req.session.num,
            guess: "undefined"
        }
        res.render('index', {data: info});
    }
})

// route to get the information from the form
app.post('/guess', function(req, res) {
    req.session.guess = req.body.num;
    res.redirect('/');
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})