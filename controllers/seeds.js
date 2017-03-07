var express = require('express');
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();

//models to create a new user and books
var Book = require('../models/book');
var User = require('../models/user');

// function to clear the database
router.get('/', function(req,res){


  User.remove({}, function(err){
    console.log(err);
  });
  Book.remove({}, function(err){
    console.log(err);
  });

// example User
var user_one = new User({
  name: "David",
  email: "David@Chua.com",
  password_digest: "$2a$10$f4MxYvrkQyslh9HdJ7jyQ.BcWNIwOytraDPyXcn09jsu7wd4tgtTy"
});

user_one.save(function(err){
  if(err) {console.log(err);}
  console.log("User Created");
})

var user_two = new User({
  name: "Kim",
  email: "Kim@Possible.com",
  password_digest: "$2a$10$PRjIW1maCwIKXk9G1hl6/eVmSv0qa7h41ON.f2FhjDCaEvKDLyuLG"
});

user_two.save(function(err){
  if(err) {console.log(err);}
  console.log("User Two Created");
})


var book_one = new Book({
  title: "Eragon",
  author: "Christopher Paolini",
  publisher: "Paolini LLC",
  book_img_url: "https://upload.wikimedia.org/wikipedia/en/c/ce/Eragon_book_cover.png",
  published_year: "2002",
  genre: "Young adult",
  category: "I need to read this",
  _owner: user_one.id
});

book_one.save(function(err){
  if(err) {console.log(err);}
  console.log("Book One Created");
})

var book_two = new Book({
  title: "Fantastic Beasts & Where to Find Them",
  author: "J.K. Rowling",
  publisher: "Bloomsbury",
  book_img_url: "http://cdn.collider.com/wp-content/uploads/fantastic-beasts-and-where-to-find-them-book.jpg",
  published_year: "2001",
  genre: "Fantasy",
  category: "I love this book",
  _owner: user_one.id
})

book_two.save(function(err){
  if(err) {console.log(err);}
  console.log("Book Two Created");
})

var book_three = new Book({
  title: "Do Not Say We Have Nothing",
  author: "Madeleine Thien",
  publisher: "W.W. Norton & Company",
  book_img_url: "http://images.gr-assets.com/books/1473220440l/31549906.jpg",
  published_year: "2016",
  genre: "Historical Fiction",
  category: "Not for me",
  _owner: user_two.id
})

book_three.save(function(err){
  if(err) {console.log(err);}
  console.log("Book Three Created");
})

res.send('seeded');

})


module.exports = router;
