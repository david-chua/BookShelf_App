var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();

app.use(express.static('public'));

var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/bookshelf_app"
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(logger('dev'));


var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("My Book Collection Works!!");
});
