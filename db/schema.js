var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  name: String,
  email: String,
  pasword_digest: String,
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

var BookSchema = new Schema({
  name: String,
  author: String,
  publisher: String,
  book_url: String,
  date_published: String,
  genre: String,
  category: String,
  owner: {
    type: String,
    ref: 'User'
  }
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if (!this.created_at){
    this.created_at = now
  }
  next()
});

BookSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) {
    this.created_at = now
  }
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var BookModel = mongoose.model('Book', BookSchema);

module.exports = {
  Book: BookModel,
  User: UserModel
}
