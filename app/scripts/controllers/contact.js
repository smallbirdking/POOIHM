'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
angular.module('ihmApp')
  .controller('ContactCtrl',['$scope','$http', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.contact='';
	$http.get('assets/contact.json')
		.success(function(data){
			$scope.contact=data;
		})
		.error(function(error){
			console.log(error);
		});
  }]);
