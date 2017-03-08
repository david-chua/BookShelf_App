angular.module('bookApp')
  .controller('booksController', booksController)

function booksController($http, $state, $scope){
  var self = this;

  function newBook(book){
    $http.post('/users/${$scope.currentUser._id}/books', book)
    .then (function(response) {
    console.log(response)
      $state.go('usershow');
    })
  }


  self.newBook = newBook;
}
