'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ihmApp
 */
angular.module('ihmApp')
  .controller('EducationCtrl', function($scope,$http){
	$scope.education='';
	$http.get('assets/education.json')
		.success(function(data){
			$scope.education=data;
		})
		.error(function(error){
			console.log(error);
		});
  });
