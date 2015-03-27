'use strict';

var app = angular
  .module('TaskMasterApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://task-master.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'TaskCtrl'
      })
      .when('/edit/:taskId', {
        templateUrl: 'views/edit.html',
        controller: 'TaskCtrl'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
