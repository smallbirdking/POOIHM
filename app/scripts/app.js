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
  .config(['$routeProvider',function ($routeProvider) {
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
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
	.when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
