'use strict';

angular.module('myApp.viewer', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/viewer', {
            templateUrl: 'viewer/viewer.html',
            controller: 'ViewerCtrl'
        });
    }])

    .controller('ViewerCtrl', ['$scope', '$routeParams', '$http', '$sce', 'Data', function ($scope, $routeParams, $http, $sce, Data) {

        angular.forEach(Data, function(image) {
            console.log($routeParams.id);
            console.log(image.id);

            if ($routeParams.id == image.id) {
                $scope.jsonData = image;
            }
        });

        $scope.renderHtml = function(html_code)
        {
            return $sce.trustAsHtml(html_code);
        };

    }]);