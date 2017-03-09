angular.module('bookApp')
  .controller('booksController', booksController)

function booksController($http, $state, $scope){
  var self = this;



  $scope.category = ['I love this book', 'I need to read this', 'Not for me', "I'll Donate it or sell it"]


  //get function for getting all books
  function GetMyBooks(){
    $http.get(`/users/${$scope.currentUser._id}/books`)
    .then(function(response){
      self.mybooks = response.data;
      console.log(self.mybooks);
      })
    }
        GetMyBooks();


//create function for creating books
  function newBook(book){
    $http.post(`/users/${$scope.currentUser._id}/books`, book)
    .then (function(response) {
    console.log(response)
      $state.go('bookshow');
    })
  }
//delete book route
  function deleteBook(book){
    $http.delete(`/users/${$scope.currentUser._id}/books/${book._id}`)
    .then(function(response){
      console.log(response);
      $state.reload();
    })
  }

  //show one book
  function showOne(book){
    $http.get(`/users/${$scope.currentUser._id}/books/${book._id}`)
    .then(function(response){
      self.oneBook = response.data;
      console.log(self.oneBook);
    })
  }

  function updateBook(book){
    $http.put(`/users/${$scope.currentUser._id}/books/${book._id}`, book)
    .then(function(response){
      console.log(response);
      $state.reload();
    })
  }


  self.AddBook = false;
  self.EditBookForm = false;
  self.newBook = newBook;
  self.deleteBook = deleteBook;
  self.showOne = showOne;
  self.updateBook= updateBook;
}
