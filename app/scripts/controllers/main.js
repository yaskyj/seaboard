'use strict';

angular.module('seaboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.viewLoaded = function(){
      $('.carousel ').carousel({
        pause: false,
        keyboard: false
      });
    };
  });
