'use strict';

/**
 * @ngdoc overview
 * @name tutorialWebApp
 * @description
 * # tutorialWebApp
 *
 * Main module of the application.
 */
/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute','ui.bootstrap'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "views/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "views/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "views/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "views/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "views/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "views/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "views/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "views/404.html", controller: "PageCtrl"});
}]);

angular.module('tutorialWebApp').controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
});
