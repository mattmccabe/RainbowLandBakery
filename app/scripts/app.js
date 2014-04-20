'use strict';

angular.module('rlbApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/food', {
        templateUrl: 'views/food.html',
        controller: 'FoodCtrl'
      })
      .when('/crafts', {
        templateUrl: 'views/crafts.html',
        controller: 'CraftsCtrl'
      })
      .when('/fun', {
        templateUrl: 'views/fun.html',
        controller: 'FunCtrl'
      })
      .when('/easter', {
        templateUrl: 'views/easter.html',
        controller: 'EasterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
