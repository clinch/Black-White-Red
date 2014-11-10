'use strict';

/**
 * @ngdoc function
 * @name blackWhiteRedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blackWhiteRedApp
 */
angular.module('blackWhiteRedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
