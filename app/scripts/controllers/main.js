'use strict';

/**
 * @ngdoc function
 * @name blackWhiteRedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackWhiteRedApp
 */
angular.module('blackWhiteRedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
