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
    $scope.viewLoaded = function(){
      $('.carousel ').carousel({
        interval: 4000,
        pause: false,
        keyboard: false
      })
    }
  });
