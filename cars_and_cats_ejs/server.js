
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + "/static"));


// use app's get method and pass it the base route '/' and a callback
app.get('/cars', function(request, response) {
    response.render('cars');
})

    // use app's get method and pass it the base route '/' and a callback
app.get('/cats', function(request, response) {
    response.render('cats');
})

    // use app's get method and pass it the base route '/' and a callback
app.get('/form/new', function(request, response) {
    response.render('new_cars');
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
