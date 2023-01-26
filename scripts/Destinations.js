import { getDestinations, getGuests } from "./database.js"

const desinations = getDestinations()
const guests = getDestinations()

export const DestinationsHTML = () => {
    let html = `<div class = "destinationGrid"` // destination grid class will be used to add the grid in css
    for (const destinations of destinations) {
        for (let i = 0; i < destinations.length; i++) {
            topRow += `<div id = "destination--${destination.id}> <h4> ${destination.name} </h4> <ul>`
        }
        //need to loop through destination services in a nested for loop. if destination.id ===  destId(from detinationServices) 
        //then for loop through services. if service.id(from destinationServices) === service.id 
        //then add a <li> with service.name to the <ul

    
    }
}

