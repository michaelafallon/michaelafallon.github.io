'use strict';

angular.module('myApp.aboutme', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutme', {
    templateUrl: 'aboutme/aboutme.html',
    controller: 'AboutMeCtrl'
  });
}])

.controller('AboutMeCtrl', [function() {

}]);