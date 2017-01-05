angular.module('myApp.services', ['ngRoute'])
    .factory('Images', [function () {
        return [
            {id: "prcv", title: "", thumbnail: "prcv-preview.png"},
            {id: "revolutions", title: "", thumbnail: "revolutions-preview.png"},
            {id: "selfie", title: "", thumbnail: "selfie-preview.png"},
            {id: "metropolis", title: "", thumbnail: "metropolis-preview.png"},
            {id: "moving-type", title: "", thumbnail: "moving-type-preview.png"},
            {id: "wedding", title: "", thumbnail: "wedding-preview.png"},
            {id: "retrace", title: "", thumbnail: "retrace-preview.png"},
            {id: "tech", title: "", thumbnail: "tech-preview.png"},
            {id: "warrior", title: "", thumbnail: "warrior-preview.png"}
        ];
    }]);