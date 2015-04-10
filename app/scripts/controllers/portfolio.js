'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ihmApp
 */
angular.module('ihmApp')
  .controller('PortfolioCtrl', ['$scope',function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.video1 = 
      'Video of project I\'ve done'
    ;
    $scope.video2 = 
      'haven\'t yet                            ' 
    ;
    $scope.video3 = 
      'haven\'t yet'
    ;

  }]);
