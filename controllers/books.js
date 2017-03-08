var express = require('express');
var router = express.Router({
  // allows router nesting so that users/:userid/book can work.
  mergeParams: true
});
var auth = require('../helpers/auth.js');
var User = require('../models/user.js');
var Book = require('../models/book.js');


// Book Index router
router.get('/', auth.authorize, function(req,res){
  Book.find({owner: req.params._id})
  .exec(function(err, books){
    if(err) {console.log(err);}
    res.json(books);
  })
})
//Create a Book Route
router.post('/', auth.authorize, function(req,res){
  User.findById(req.params.id)
  .exec()
  .then(function(user){
    console.log(user)
    user.save(function(err){
      if(err) {console.log(err)}
      console.log(req.body);
      var book = new Book({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        book_img_url: req.body.book_img,
        published_year: req.body.published_year,
        genre: req.body.genre,
        category: req.body.category,
        owner: req.params.id
      });
      book.save();
      res.json(book);
    });
  });
});


//Update book router
router.put('/:bookId', auth.authorize, function(req,res){
  Book.findById(req.params.bookId)
  .exec()
  .then(function(book){
    book.title = req.body.title;
    book.author = req.body.author;
    book.publisher = req.body.publisher;
    book.book_img_url = req.body.book_img_url;
    book.published_year = req.body.published_year;
    book.genre = req.body.genre;
    book.category =  req.body.category;

    book.save();
    res.json(book);
    console.log(book)
  })
  .catch(function(err){
    res.json(err);
  });
});


router.delete('/:bookId',auth.authorize, function(req,res){
  Book.findByIdAndRemove(req.params.bookId, function(err){
    if(err) {res.send(err);}
    res.json({status: 200, data: "delete is a success"});
  });
});


//ADD THE auth.authorize function later

module.exports = router;
