'use strict';

/**
 * @ngdoc function
 * @name tutorialWebApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the tutorialWebApp
 */
angular.module('tutorialWebApp').controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log('Page Controller reporting for duty.');

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: 'a[data-toggle=tooltip]'
  });
});
