angular.module('bookApp')
  .controller('usersController', usersController)

function usersController($http, $state, $scope){
  console.log('usersController is working')
}
