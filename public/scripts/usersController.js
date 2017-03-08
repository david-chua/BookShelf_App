angular.module('bookApp')
  .controller('usersController', usersController)

function usersController($http, $state, $scope){
  var self = this;

  console.log('usersController is working')

  function signup(user){
    console.log("sign me up")
    console.log(user)
    $http.post('/users', user)
      .then(function(response){
        console.log(response)
        $state.go('home');
      })
  }
  function login(user){
    console.log(user);
    $http.post('/sessions/login', user)
    .then(function(response){
      $scope.currentUser = response.data;
      console.log(response.data)
      $state.go('usershow');

    })
  }

  self.signup = signup;
  self.login = login;


}
