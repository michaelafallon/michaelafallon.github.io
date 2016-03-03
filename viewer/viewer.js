'use strict';

angular.module('myApp.viewer', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewer', {
            templateUrl: 'viewer/viewer.html',
            controller: 'ViewerCtrl'
        });
    }])

    .controller('ViewerCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
        var id = $routeParams.id + ".json";

        $http({
            method: 'GET',
            url: 'components/json/' + id
        }).then(function successCallback(response) {
            $scope.jsonData = response.data;
            $scope.currentImage = response.data.images[0];
        }, function errorCallback(response) {
            console.error(response);
        });


        $scope.changeImage = function(image) {
            $scope.currentImage = image;
        }
    }]);