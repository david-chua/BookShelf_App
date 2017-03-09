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
      $state.go('usershow');
    })
  }


  self.AddBook = false;
  self.newBook = newBook;
}
