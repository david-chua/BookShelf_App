angular.module('bookApp')
  .controller('booksController', booksController)

function booksController($http, $state, $scope){
  console.log('booksController is working')
}
