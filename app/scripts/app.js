'use strict';

/**
 * @ngdoc overview
 * @name ihmApp
 * @description
 * # ihmApp
 *
 * Main module of the application.
 */
angular
  .module('ihmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
	.when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
