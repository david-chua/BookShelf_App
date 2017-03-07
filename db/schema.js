var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  name: String,
  email: String,
  password_digest: String,
  collected_books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

var BookSchema = new Schema({
  title: String,
  author: String,
  publisher: String,
  book_img_url: String,
  published_year: String,
  genre: String,
  category: String,
  _owner: {
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
