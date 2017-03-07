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
router.post('/',function(req,res){
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
        book_img: req.body.book_img,
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





module.exports = router;
