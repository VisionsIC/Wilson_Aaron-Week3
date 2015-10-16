/*
 Aaron Robert Wilson
 October 14, 2015 - Week 3
 FWF Course | 201510-01
 Student ID: 0004619821
 Professor: Sean Bernath
 Full Sail University

 Assignment - C.R.U.D. Application - app.js
 */


var animal_app = angular.module('animal_app', [
  'ngRoute',
  'animal_controllers'
]);

animal_app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/directory', {
    templateUrl: 'components/directory.html',
    controller: 'dir_cntrl'
  }).
  when('/desc/:itemId', {
    templateUrl: 'components/desc.html',
    controller: 'desc_cntrl'
  }).
  otherwise({
    redirectTo: '/directory'
  });
}]);