/*
 Aaron Robert Wilson
 October 14, 2015 - Week 3
 FWF Course | 201510-01
 Student ID: 0004619821
 Professor: Sean Bernath
 Full Sail University

 Assignment - C.R.U.D. Application - controllers.js
 */


var animal_controllers = angular.module('animal_controllers', ['ngAnimate']);

animal_controllers.controller('dir_cntrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.animals = data;
    $scope.animal_order = 'animal_name';
  });
}]);

animal_controllers.controller('desc_cntrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.animals = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.animals.length-1;
    }

    if ($routeParams.itemId < $scope.animals.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

