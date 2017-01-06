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
    }])
    .factory('Data', [function () {
        return [
            {
                id: "prcv",
                title: "PRCV",
                description: "A museum exhibit designed to inform visitors about human perception, and " +
                "through interactive elements, allow them to explore the effects of their own " +
                "perception on their actions. Wearable technology is used to analyze visitors " +
                "actions, which produces data that visitors are able to reflect upon.",
                date: "Fall 2016"
            },
            {
                id: "revolutions",
                title: "Revolutions",
                description: "This publication is designed within a typographic system. The topic is on " +
                "motorcycle clubs and contains feature and supporting articles, which are " +
                "differentiated by the typographic rules and roles.",
                date: "Fall 2016"
            },
            {
                id: "selfie",
                title: "Selfie",
                description: "Blindline pen and ink drawing, painted with watercolors.",
                date: "Spring 2014"
            },
            {
                id: "metropolis",
                title: "Metropolis Magazine Analysis",
                description: "A publication analyzing the design structure and aesthetic of <em>Metropolis</em> magazine. " +
                "The analysis publication is designed in light of <em>Metropolis</em>.",
                date: "Fall 2016"
            },
            {
                id: "moving-type",
                title: "Moving Typography",
                description: "A publication analyzing the design structure and aesthetic of <em>Metropolis</em> magazine. " +
                "The analysis publication is designed in light of <em>Metropolis</em>.",
                date: "Fall 2016"
            },
            {
                id: "wedding",
                title: "Wedding Package",
                description: "This invitation and the additional materials were designed for a winter wedding. " +
                "The bride and groom wanted a modern twist on the traditional wedding aesthetic " +
                "and structure.",
                date: "Fall 2016"
            },
            {
                id: "retrace",
                title: "Retrace Raleigh",
                description: "Description",
                date: "Fall 2016"
            },
            {
                id: "tech",
                title: "Knowledge Map",
                description: "Information about the use of technology in Hunt Library was collected through " +
                "research, interviews, and observations. The conclusions were organized and " +
                "displayed on this knowledge map.",
                date: "Spring 2016"
            },
            {
                id: "warrior",
                title: "Warrior Girl",
                description: "Three-color linoleum block print.",
                date: "Spring 2013"
            }
        ];
    }]);