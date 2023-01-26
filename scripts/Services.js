import { getServices, getDestinations, getDestinationServices } from "./database.js"

const services = getServices()
const destinations = getDestinations()
const destServices = getDestinationServices()

export const ServicesHTML = () => {
    let leftList = '<ul>'
    for (let i = 0; i < 5; i++) {
        leftList += `<li id="service--${services[i].id}">${services[i].name}</li>`
    }
    let rightList = '<ul>'
    for (let j = 5; j < services.length; j++) {
        rightList += `<li id="service--${services[j].id}">${services[j].name}</li>`
    }
    const html = `<section class="leftServiceList">` + leftList + `</section><section class="rightServiceList">` + rightList + "</section>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        //store the target of the clickEvent as itemClicked
        const itemClicked = clickEvent.target
        //if itemClicked's id starts with "service" (the whole id will be “service–${service.id}”
        if (itemClicked.id.startsWith("service")) {

            //destructuring to split the id into two parts, setting only the "${service.id}" part to a variable called clickedServiceId
            //note: clickedServiceId is still a string
            const [,clickedServiceId] = itemClicked.id.split("--")
            //an empty matchingDestinations array for future use
            const matchingDestinations = []
            //and an empty matchingService variable for future use
            let matchingService = null

            //iterate through the array of services objects
            for (const service of services) {
                //if the current service object's id equals the parsed integer of the clickedServiceId variable we stored earlier
                if (service.id === parseInt(clickedServiceId)) {
                    //then set that entire service object to the empty matchingService variable we created earlier
                    matchingService = service
                    //next, iterate through all of the destServices objects
                    for (const destService of destServices) {
                        //if matchingService's id equals the current destService object's servId
                        if (matchingService.id === destService.servId) {
                            //then iterate through every destination object
                            for (const destination of destinations) {
                                //if the current destService object's destId equals the current destination object's id
                                if (destService.destId === destination.id) {
                                    //then push the current destination object's name to the matchingDestinations array we created earlier
                                    matchingDestinations.push(destination.name)
                                }
                            }
                        }
                    }
                }
            }
            //Once all the iterations are complete, create a window alert that shows the matchingDestinations array by joining all the names by commas
            window.alert(`${matchingDestinations.join(", ")} support ${matchingService.name}`)
        }
    }
)