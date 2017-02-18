angular.module('myApp.services', ['ngRoute'])
    .factory('Images', [function () {
        return [
            {id: "prcv", title: "PRCV Exhibit", thumbnail: "prcv-preview.png"},
            {id: "revolutions", title: "Revolutions Magazine", thumbnail: "revolutions-preview.jpg"},
            {id: "bobolinks", title: "Bobolinks Website", thumbnail: "bobolinks-preview.png"},
            {id: "metropolis", title: "Metropolis Magazine", thumbnail: "metropolis-preview.jpg"},
            {id: "retrace", title: "Retrace Raleigh", thumbnail: "retrace-preview.jpg"},
            {id: "wedding", title: "Wedding Package", thumbnail: "wedding-preview.png"},
            {id: "selfie", title: "Watercolor Selfie", thumbnail: "selfie-preview.png"},
            {id: "tech", title: "Knowledge Map", thumbnail: "tech-preview.png"},
            {id: "warrior", title: "Warrior Girl", thumbnail: "warrior-preview.png"}
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
                date: "Fall 2016",
                collaborators: "In collaboration with Ali Hartzoge, Tara Sullivan, and Matthew Wright"
            },
            {
                id: "revolutions",
                title: "Revolutions",
                description: "This publication is designed within a typographic system. The topic is on " +
                "motorcycle clubs and contains feature and supporting articles, which are " +
                "differentiated by the typographic rules and roles.",
                date: "Fall 2016",
                collaborators: ""
            },
            {
                id: "selfie",
                title: "Selfie",
                description: "Blindline pen and ink drawing, painted with watercolors.",
                date: "Spring 2014",
                collaborators: ""
            },
            {
                id: "metropolis",
                title: "Metropolis Magazine Analysis",
                description: "A publication analyzing the design structure and aesthetic of <em>Metropolis</em> magazine. " +
                "The analysis publication is designed in light of <em>Metropolis</em>.",
                date: "Fall 2016",
                collaborators: "In collaboration with Courtney Banning and Emma Wegmiller"
            },
            {
                id: "bobolinks",
                title: "Bobolinks",
                description: "Bobolinks is an online database designed to allow students from different majors within a college connect with each other to collaborate on projects. Students can create or browse for a project, based on their interests and needs within a project. The website has an accompanying mobile application. ",
                date: "Spring 2016",
                collaborators: "In collaboration with Tara Sullivan"
            },
            {
                id: "wedding",
                title: "Wedding Package",
                description: "This invitation and the additional materials were designed for a winter wedding. " +
                "The bride and groom wanted a modern twist on the traditional wedding aesthetic " +
                "and structure.",
                date: "Fall 2016",
                collaborators: ""
            },
            {
                id: "retrace",
                title: "Retrace Raleigh",
                description: "The challenge  was to create something that enhanced the experience of a house museum in " +
                "downtown Raleigh, so that it would be a more attractive sight. An app, foldable map, " +
                "and interactive memory archive were created to tie this sight into more historic places in downtown Raleigh.",
                date: "Fall 2016",
                collaborators: "In collaboration with Shadrick Addy, Abby Gartner, Nate Winskunas, Eduardo Talavera, and Lucia Boehling"
            },
            {
                id: "tech",
                title: "Knowledge Map",
                description: "Information about the use of technology in Hunt Library was collected through " +
                "research, interviews, and observations. The conclusions were organized and " +
                "displayed on this knowledge map.",
                date: "Spring 2016",
                collaborators: ""
            },
            {
                id: "warrior",
                title: "Warrior Girl & City Print",
                description: "Three-color linoleum block print.",
                date: "Spring 2013",
                collaborators: ""
            }
        ];
    }]);