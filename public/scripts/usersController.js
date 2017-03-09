angular.module('bookApp')
  .controller('usersController', usersController)

function usersController($http, $state, $scope){
  var self = this;

  console.log('usersController is working')

  function signup(user){
    console.log(user);
    $http.post('/users', user)
      .then(function(response) {
        $state.go('login');
      })
  }

  function login(user){
  console.log(user);
  $http.post('/sessions/login', user)
    .then(function(response){
    $scope.currentUser = response.data.data;
    console.log(response.data.data);
    $state.go('usershow');
    })
  }

  function signout(){
    $http.delete('/sessions')
    .then(function(response){
      console.log(response);
      $state.go('home');
    })
  }

  self.signup = signup;
  self.login = login;
  self.signout = signout;


}
