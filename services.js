angular.module('myApp.services', ['ngRoute'])
    .factory('Images', [function () {
        return [
            {id: "of-the-world-poster", title: "of the world, by the world"},
            {id: "warrior-girl", title: "warrior girl"},
            {id: "technology", title: "technology map"},
            {id: "share", title: "share catalog"},
            {id: "of-the-world-exhibit", title: "of the world, by the world"},
            {id: "selfie", title: "selfie"},
            {id: "city", title: "city"},
            {id: "traditional-book", title: "traditional book"},
            {id: "cut-paper", title: "cut paper triptych"},
            {id: "watercolor-study", title: "watercolor study"},
            {id: "consume", title: "consume"},
            {id: "goudy", title: "goudy"}
        ];
    }]);