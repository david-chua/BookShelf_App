var User = require('../models/user.js');
var bcrypt = require('bcrypt');

function createSecure(req,res,next){
  res.hashedPassword = bcrypt.hasSync(req.body.password, bcrypt.gensaltSync(10));
  next();
}

function loginUser(req,res,next){
  var email = req.body.email;
  var password = req.body.password;

  User.findone({email: email})
    .then(function(user){
      if(user == null) {
        res.json({status: 401, data: "User not found"})
      }
      else if (bcrypt.compareSync(password, user.password_digest)){
        console.log(user);
        req.session.currentUser = user;
      }
      next();
    })
    .catch(function(err){
      res.json({status: 500, data:err})
    });
}


function authorize(req,res,next){
  var user = req.session.currentUser;

  if(!user || user.id !== req.params.id){
    res.send({status: 401, data: "unauthorized access"})
  } else {
    next();
  }
}

module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorize: authorize
}
