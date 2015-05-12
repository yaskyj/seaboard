'use strict';

/**
 * @ngdoc overview
 * @name seaboardApp
 * @description
 * # seaboardApp
 *
 * Main module of the application.
 */
angular.module('seaboardApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: 'about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  }]);
  //.config(function ($routeProvider) {
  //  $routeProvider
  //    .when('/', {
  //      templateUrl: 'views/main.html',
  //      controller: 'MainCtrl'
  //    })
  //    .when('/about', {
  //      templateUrl: 'views/about.html',
  //      controller: 'AboutCtrl'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //});
