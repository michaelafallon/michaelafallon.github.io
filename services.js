angular.module('myApp.services', ['ngRoute'])
    .factory('Images', [function () {
        return [
            {id: "of-the-world-poster", title: "of the world, by the world"},
            {id: "warrior-girl", title: "warrior girl"},
            {id: "consume", title: "consume"},
            {id: "goudy", title: "goudy"},
            {id: "of-the-world-exhibit", title: "of the world, by the world"},
            {id: "selfie", title: "selfie"},
            {id: "city", title: "city"},
            {id: "traditional-book", title: "traditional book"},
            {id: "of-the-world-interventions", title: "of the world, by the world"},
            {id: "cut-paper", title: "cut paper triptych"},
            {id: "watercolor-study", title: "watercolor study"},
            {id: "journey", title: "journey"}
        ];
    }]);