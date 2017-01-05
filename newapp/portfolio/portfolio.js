'use strict';

angular.module('myApp.portfolio', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/portfolio', {
            templateUrl: 'portfolio/portfolio.html',
            controller: 'PortfolioCtrl'
        });
    }])

    .controller('PortfolioCtrl', ['$scope', 'Images', function ($scope, Images) {
        $scope.images = Images;
    }]);