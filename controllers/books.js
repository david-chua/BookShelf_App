var express = require('express');
var router = express.Router({
  mergeParams: true
});
var auth = require('../helpers/auth.js');
var User = require('../models/user.js');
var Book = require('../models/book.js');




module.exports = router;
