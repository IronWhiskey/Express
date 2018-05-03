
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + "/static"));


// use app's get method and pass it the base route '/' and a callback
app.get('/cats', function(request, response) {
    var lion = [{
        name: 'undefined',
        favoriteFood: 'undefined',
        age: 'undefined',
        hobby: 'undefined'
        }];
    response.render('details', {cat: lion});
})

// use app's get method and pass it the base route '/' and a callback
app.get('/funnyLion', function(request, response) {
    var lion = [{
        name: 'Kilgore',
        favoriteFood: 'buffalo tenders',
        age: '5',
        hobby: 'chasing heyenas',
        temperment: 'funny'
        }];
    response.render('details', {cat: lion});
})

// use app's get method and pass it the base route '/' and a callback
app.get('/meanLion', function(request, response) {
    var lion = [{
       name: 'Mustafa',
        favoriteFood: 'baby giraffes',
        age: '12',
        hobby: 'hunting',
        temperment: 'mean'
    }];
    response.render('details', {cat: lion});
})

// use app's get method and pass it the base route '/' and a callback
app.get('/confidentLion', function(request, response) {
    var lion = [{
        name: 'Simba',
        favoriteFood: 'Antelope',
        age: '6',
        hobby: 'R&R',
        temperment: 'confident'
    }];
    response.render('details', {cat: lion});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})

