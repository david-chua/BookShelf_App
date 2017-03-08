angular.module('TopShelfApp', ['ui.router'])
  .config(BookAppRouter);

BookAppRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function BookAppRouter($stateProvider, $urlRouterProvider){
  console.log("app router is working");
};
