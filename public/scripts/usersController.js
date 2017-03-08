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
        $state.go('login');
      })
  }
  function login(user){
    console.log(user);
    $http.post('/sessions/login', user)
    .then(function(response){
      $scope.currentUser = response.data;
      console.log(response.data)

    })
  }

  self.singup = signup;


}
