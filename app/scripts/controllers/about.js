'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ihmApp
 */
angular.module('ihmApp')
  .controller('AboutCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.about='';
	$http.get('assets/about.json')
		.success(function(data){
			$scope.about=data;
		})
		.error(function(error){
			console.log(error);
		});
    /*$scope.toto = [
      'HTML5 Boilerplate',
      'AngularJS',
      'KKK'
    ];
    $scope.getStatut = 
      function($) {
        $(".scroll").click(function(event){   
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
        });
      }
    ;*/
  }]);
