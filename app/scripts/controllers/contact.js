'use strict';
angular.module('seaboardApp')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.map = {
      center: {
        latitude: 47.82,
        longitude: -122.311143
      },
      zoom: 15,
      options: {
        disableDefaultUI: true
      }
    };
    $scope.markers = [
      {
        id: 0,
        latitude: 47.813876,
        longitude: -122.311143,
        title: 'Seaboard Cabinet',
        logo: '../images/templogo.png',
        address1: '5729 204th St SW Suite 400 Lynnwood WA 98036',
        phone: '(425)776-2000',
        fax: '(425)776-2200',
        email: 'jim@seaboardcabinet.com',
        show: true
      }
    ];
    console.log($scope.map);
  }]);
