var express = require('express');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var usersController = require('./controllers/users.js');
var booksController = require('./controllers/books.js');
var sessionsController = require('./controllers/sessions.js');

var app = express();

app.use(express.static('public'));

var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/bookshelf_app"
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger('dev'));

app.use(session({
  secret: "readingfordays",
  resave: true,
  maxAge: 60 * 60 * 1000,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/users/:id/books', booksController);
app.use('/sessions', sessionsController);


var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("My Book Collection Works!!");
});
