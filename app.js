'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.services',
    'myApp.portfolio',
    'myApp.aboutme',
    'myApp.resume',
    'myApp.viewer'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/portfolio'});
    }]).
    controller('HeaderCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'Images', function ($scope, $rootScope, $location, $routeParams, Images) {
        var lookupTitleById = function(imageId) {
            var title = "";

            angular.forEach(Images, function(image) {
                if (imageId == image.id) {
                    title = image.title;
                }
            });

            return title;
        };

        $scope.getClass = function (path) {
            console.log("Location is " + $location.path());
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        };

        $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
            if ($location.path() == "/portfolio") {
                $scope.currentPage = "portfolio";
            } else if ($location.path() == "/aboutme") {
                $scope.currentPage = "about me";
            } else if ($location.path() == ("/viewer")) {
                $scope.currentPage = "portfolio // " + lookupTitleById($routeParams.id);
            }
        });
    }]);
