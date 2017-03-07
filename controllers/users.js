var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var auth = require('../helpers/auth.js');
var User = require('../models/user.js');


router.post('/', auth.createSecure, function(req,res){
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password_digest: res.hashedPassword
  });
  user.save(function(err, user){
    if(err) {
      res.json({status: 500, error: err});
    }
    res.json(user)
  });

})


module.exports = router;
