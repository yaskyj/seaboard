'use strict';

/**
 * @ngdoc function
 * @name seaboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the seaboardApp
 */
angular.module('seaboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
