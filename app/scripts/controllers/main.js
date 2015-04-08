'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ihmApp
 */
angular.module('ihmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    /**$scope.toto = [
      'HTML5 Boilerplate',
      'AngularJS',
      'KKK'
    ];
    $scope.getStatut = 
      function(n){
	$scope.toto=n}
    ;*/

  });
