const database = {
    destinations: [{
        id: 1,
        name: "Lodge"

    }, {
        id: 2,
        name: "Lost Wolf Hiking Post"

    }, {
        id: 3,
        name: "Chamfort River"

    }, {
        id: 4,
        name: "Gander River"

    }, {
        id: 5,
        name: "Campgrounds"

    }, {
        id: 6,
        name: "Pine Bluff Trails"

    }],
    services: [{
        id: 1,
        name: "Lodging"

    }, {
        id: 2,
        name: "Parking"

    }, {
        id: 3,
        name: "Information"
        
    }, {
        id: 4,
        name: "Picnicking"
        
    }, {
        id: 5,
        name: "Hiking"
        
    }, {
        id: 6,
        name: "Rock Climbing"
        
    }, {
        id: 7,
        name: "Rafting"
        
    }, {
        id: 8,
        name: "Canoeing"
        
    }, {
        id: 9,
        name: "Fishing"
        
    }, {
        id: 10,
        name: "Zip-lining"
        
    }],
    guests: [{
        id: 1,
        name: "Alexander Blackwood",
        destId: 1,

    }, {
        id: 2,
        name: "Samantha Clearwater",
        destId: 1,

    }, {
        id: 3,
        name: "Michael Drake",
        destId: 1,

    }, {
        id: 4,
        name: "Rebecca Elmsworth",
        destId: 2,

    }, {
        id: 5,
        name: "Thomas Finch",
        destId: 2,

    }, {
        id: 6,
        name: "Madison Green",
        destId: 2,

    }, {
        id: 7,
        name: "David Hartman",
        destId: 3,

    }, {
        id: 8,
        name: "Natalie Ingles",
        destId: 3,

    }, {
        id: 9,
        name: "Daniel Jackson",
        destId: 3,

    }, {
        id: 10,
        name: "Emily Hughes",
        destId: 4,

    }, {
        id: 11,
        name: "William Lancaster",
        destId: 4,

    }, {
        id: 12,
        name: "Rachel Mendez",
        destId: 4,

    }, {
        id: 13,
        name: "Joseph Noble",
        destId: 5,

    }, {
        id: 14,
        name: "Olivia Parker",
        destId: 5,

    }, {
        id: 15,
        name: "Robert Quinn",
        destId: 5,

    }, {
        id: 16,
        name: "Sarah Ryan",
        destId: 5,

    }, {
        id: 17,
        name: "Andrew Thompson",
        destId: 6,

    }, {
        id: 18,
        name: "Victoria Underhill",
        destId: 6,

    }, {
        id: 19,
        name: "Bob Vance",
        destId: 6,

    }, {
        id: 20,
        name: "Elizabeth Whitehall",
        destId: 6,

    }],
    destinationServices: [{
        id: 1,
        destId: 1,
        servId: 1

    }, {
        id: 2,
        destId: 1,
        servId: 2

    }, {
        id: 3,
        destId: 1,
        servId: 3

    }, {
        id: 4,
        destId: 1,
        servId: 4

    }, {
        id: 5,
        destId: 2,
        servId: 5

    }, {
        id: 6,
        destId: 2,
        servId: 4

    }, {
        id: 7,
        destId: 2,
        servId: 6

    }, {
        id: 8,
        destId: 3,
        servId: 7

    }, {
        id: 9,
        destId: 3,
        servId: 8

    }, {
        id: 10,
        destId: 3,
        servId: 9

    }, {
        id: 11,
        destId: 4,
        servId: 9

    }, {
        id: 12,
        destId: 4,
        servId: 5

    }, {
        id: 13,
        destId: 5,
        servId: 3

    }, {
        id: 14,
        destId: 5,
        servId: 2

    }, {
        id: 15,
        destId: 5,
        servId: 1

    }, {
        id: 16,
        destId: 6,
        servId: 5

    }, {
        id: 17,
        destId: 6,
        servId: 4

    }, {
        id: 18,
        destId: 6,
        servId: 10

    }]
}

export const getDestinations = () => {
    return database.destinations.map(destination => ({...destination}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getDestinationServices = () => {
    return database.destinationServices.map(destinationService => ({...destinationService}))
}