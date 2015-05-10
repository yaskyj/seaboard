'use strict';

/**
 * @ngdoc function
 * @name seaboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seaboardApp
 */
angular.module('seaboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
