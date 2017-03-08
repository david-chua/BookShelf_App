angular.module('bookApp', ['ui.router'])
  .config(BookAppRouter);

BookAppRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function BookAppRouter($stateProvider, $urlRouterProvider){
  console.log("app router is working");
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html'
    })
    .state('signup',{
      url:'/signup',
      templateUrl: '/partials/signup.html'
    })
    .state('login',{
      url: '/login',
      templateUrl: '/partials/login.html'
    })
    .state('usershow',{
      url: '/users',
      templateUrl: '/partials/usershow.html'
    })
    .state('bookshow',{
      url:'/users/:userId/books',
      templateUrl: '/partials/bookshow.html'
    })
    .state('contact',{
      url:'/contact',
      templateUrl: '/partials/contact.html'
    })
}
