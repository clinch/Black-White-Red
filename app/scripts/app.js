'use strict';

/**
 * @ngdoc overview
 * @name blackWhiteRedApp
 * @description
 * # blackWhiteRedApp
 *
 * Main module of the application.
 */
angular
  .module('blackWhiteRedApp', [
    'ngAnimate',
    'ngRoute',
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
      .otherwise({
        redirectTo: '/'
      });
  });
