angular.module('myApp.services', ['ngRoute'])
    .factory('Images', [function () {
        return [
            { id: "gnight", title: "G'Night Vision", subtitle: "Visual Dream Journal", thumbnail: "gnight-preview.jpg" },
            { id: "prcv", title: "PRCV", subtitle: "Museum Exhibition", thumbnail: "prcv-preview.png" },
            { id: "revolutions", title: "Revolutions", subtitle: "Publication Design", thumbnail: "revolutions-preview.jpg" },
            { id: "maxpoint", title: "MaxPoint", subtitle: "Exhibition Booth", thumbnail: "maxpoint-preview.jpg" },
            { id: "fluxify", title: "Fluxify", subtitle: "Digital Textbook", thumbnail: "fluxify-preview.jpg" },
            { id: "metropolis", title: "Metropolis", subtitle: "Publication Analysis and Design", thumbnail: "metropolis-preview.jpg" },
            { id: "wedding", title: "Wedding Package", subtitle: "", thumbnail: "wedding-preview.jpg" },
            { id: "tech", title: "Knowledge Map", subtitle: "", thumbnail: "kmap-preview.jpg" },
            { id: "retrace", title: "Retrace Raleigh", subtitle: "Enhancing Museum Interactions", thumbnail: "retrace-preview.jpg" }
        ];
    }])
    .factory('Data', [function () {
        return [
            {
                id: "prcv",
                title: "PRCV",
                description: "A museum exhibit designed to inform visitors about human perception and allow them to " +
                    "explore the effects of their own perception on their actions. The exhibit features interactive " +
                    "rooms and elements. Wearable technology is used to analyze visitors' actions. The data " +
                    "from these wearables is used in data visualizations at the end of the exhibit that visitors are " +
                    "able to reflect upon.",
                date: "Fall 2016",
                collaborators: "In collaboration with Ali Hartzoge, Tara Sullivan, and Matthew Wright"
            },
            {
                id: "revolutions",
                title: "Revolutions",
                description: "This publication is designed within a typographic system. The magazine content focuses on " +
                    "motorcycle clubs and contains feature and supporting articles. These are differentiated by " +
                    "the typographic rules and roles.",
                date: "Fall 2016",
                collaborators: ""
            },
            {
                id: "maxpoint",
                title: "Maxpoint P2PX Event",
                description: "As an intern at MaxPoint Interactive (now Valassis Digital), I had the opportunity to work on " +
                    "this exposition design project. Working with the design and the marketing team, we designed " +
                    "a booth and collateral for the P2PX event that MaxPoint attended. I created mood boards and " +
                    "explored ideas for the graphics, image treatment, and typesetting for the name of the booth. " +
                    "I also worked on laying out an informative booklet, event card, and table tent signs.",
                date: "",
                collaborators: ""
            },
            {
                id: "metropolis",
                title: "Metropolis Magazine",
                description: "The prompt for this publication design was to analyze the typography system, grid " +
                    "structure, and use of color and images within an existing magazine. My group worked " +
                    "with Metropolis Magazine. The analysis was then presented within a publication " +
                    "created within the same guidelines and mimicked the design of Metropolis.",
                date: "Fall 2016",
                collaborators: "In collaboration with Courtney Banning and Emma Wegmiller"
            },
            {
                id: "fluxify",
                title: "Fluxify",
                description: "The goal of this project was to take an existing textbook and create a digital version " +
                    "of it. The textbook I chose was a cosmetology textbook. The main goal of Fluxify is to enable students " +
                    "to be able to access the scientific information pertaining to cosmetology, but to also connect them with " +
                    "external resources. Cosmetology is a subject that is interactive, hands on and ever-changing. Fluxify " +
                    "takes the information of a traditional textbook and enhances it with real-world, interactive content.",
                date: "Spring 2016",
                collaborators: ""
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
                description: "This two week design challenge was to focus on a location and enhance the experience " +
                    "of that location for users or visitors. My group was assigned a lesser known, lowly " +
                    "frequented house museum in downtown Raleigh called The Pope House. Our group " +
                    "created a multi-faceted system that implemented a mobile app, foldable map, and an " +
                    "interactive memory archive. The goal of these three touchpoints was to connect a wide " +
                    "variety of people with the history of Raleigh and how the Pope House fit into that " +
                    "history. My main focus was towards the design and interactions of the foldable map. " +
                    "I also contributed to the design of the memory archive.",
                date: "Fall 2016",
                collaborators: "In collaboration with Shadrick Addy, Abby Gartner, Nate Winskunas, Eduardo Talavera, and Lucia Boehling"
            },
            {
                id: "tech",
                title: "Hunt Library Knowledge Map",
                description: "This knowledge map displays information about the use of technology at Hunt Library, located " +
                    "on NC State’s Centennial Campus. I collected the information through observations, interviews " +
                    "and outside research. The foldable knowledge map displays photography, graphics, " +
                    "and my research findings.",
                date: "Spring 2016",
                collaborators: ""
            },
            {
                id: 'gnight',
                title: 'G\'Night Vision',
                description: "G’Night Vision is an online system that enables users to easily record and track their dreams. " +
                    "Using voice recorded dream data, the website produces a visual dream journal in the form of a timeline and " +
                    "collages. G’Night Vision also creates a data visualization that reflects the patterns and trends of a user’s " +
                    "recorded dreams.",
                whiteBackground: true
            },
            {
                id: "illustration",
                noBackButton: true,
                whiteBackground: true
            }
        ];
    }]);