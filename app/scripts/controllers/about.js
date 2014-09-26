'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp
 */
angular.module('tutorialWebApp').controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log('Page Controller reporting for duty.');

  // Activates the Carousel
  jQuery('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  jQuery('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });
});
