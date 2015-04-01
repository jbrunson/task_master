'use strict';

var app = angular
  .module('TaskMasterApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster',
    'angularMoment'
  ])
  .constant('FURL', 'https://task-master.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl'        
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/browse/:taskId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
