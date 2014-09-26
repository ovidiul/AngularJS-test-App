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
    .when('/', {templateUrl: 'views/home.html', controller: 'PageCtrl'})
    // Pages
    .when('/about', {templateUrl: 'views/about.html', controller: 'PageCtrl'})
    .when('/faq', {templateUrl: 'views/faq.html', controller: 'PageCtrl'})
    .when('/pricing', {templateUrl: 'views/pricing.html', controller: 'PageCtrl'})
    .when('/services', {templateUrl: 'views/services.html', controller: 'PageCtrl'})
    .when('/contact', {templateUrl: 'views/contact.html', controller: 'PageCtrl'})
    // Blog
    .when('/blog', {templateUrl: 'views/blog.html', controller: 'BlogCtrl'})
    .when('/blog/post', {templateUrl: 'views/blog_item.html', controller: 'BlogCtrl'})
    // else 404
    .otherwise('/404', {templateUrl: 'views/404.html', controller: 'PageCtrl'});
}]);

angular.module('tutorialWebApp').controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
