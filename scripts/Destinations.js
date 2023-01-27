import { getDestinations, getServices, getDestinationServices, getGuests } from "./database.js"

const destinations = getDestinations()
const services = getServices()
const destinationServices = getDestinationServices()
const guests = getGuests()

export const DestinationsHTML = () => {
    let html = `<div class = "destinationGrid">` // destination grid class will be used to add the grid in css
    for (const destination of destinations) {
        html += `<div id = "destination--${destination.id}"> <h4 id = "destination--${destination.id}"> ${destination.name} </h4>`
            for (const destinationService of destinationServices){
                if (destinationService.destId === destination.id){
                    for (const service of services){
                        if (service.id === destinationService.servId){
                            html += `\n <li id = "destination--${destination.id}"> ${service.name} </li>`
                        }
                    }
                }
            }
        html += `</div>`
        //need to loop through destination services in a nested for loop. if destination.id ===  destId(from detinationServices) 
        //then for loop through services. if service.id(from destinationServices) === service.id 
        //then add a <li> with service.name to the <ul

    
    }
    html += `</div>`
    return html
}

document.addEventListener (
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("destination")){
            const [, destinationPrimaryKey] = itemClicked.id.split("--")
            let numGuests = 0;
            for (const destination of destinations) {
                if (parseInt(destinationPrimaryKey) === destination.id){
                    for (const guest of guests){
                        if (guest.destId === destination.id){
                            numGuests += 1
                        }
                    }
                }
                // if (numGuests = 1){
                //     window.alert(`There is ${numGuests} in ${destination.name}`) 
                // } else {
                //     window.alert(`There are ${numGuests} in ${destination.name}`)
                // }
                
            }
            window.alert(`There are ${numGuests} guests in this area of the park`)
        }
    }
)