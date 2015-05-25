'use strict';

/**
 * @ngdoc overview
 * @name seaboardApp
 * @description
 * # seaboardApp
 *
 * Main module of the application.
 */
angular.module('seaboardApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.router', 'uiGmapgoogle-maps'])
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
      })
    .state('contact', {
      url: 'contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    });
  }])
  .config(['uiGmapGoogleMapApiProvider', function (GoogleMapApiProvider) {
    GoogleMapApiProvider.configure({
      key: 'AIzaSyAfltuCM5AGdScNbvXCFPOgos-wpIeL6QA',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  }]);
