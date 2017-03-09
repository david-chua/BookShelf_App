angular.module('bookApp')
  .controller('booksController', booksController)

function booksController($http, $state, $scope){
  var self = this;

  $scope.category = ['I love this book', 'I need to read this', 'Not for me', "I'll Donate it or sell it"]

  function newBook(book){
    $http.post(`/users/${$scope.currentUser._id}/books`, book)
    .then (function(response) {
    console.log(response)
      $state.go('usershow');
    })
  }

  // function MyBooks(){
  //   $http.get(`/users/${$scope.currentUser._id}/books`)
  //   .then(function(response){
  //     self.mybooks = response.data;
  //     console.log(self.mybooks;)
  //   })
  // }

  self.AddBook = false;
  self.newBook = newBook;
}
