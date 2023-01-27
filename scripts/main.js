import { GuestsHTML } from "./Guests.js"
import { DestinationsHTML } from "./Destinations.js"
import { ServicesHTML } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="details"><img id="logo--header" src="../ciderfallsparklogo.png">Cider Falls Park</h1>
<article>
    <aside class="guests--aside">
        <h2 class="guests--title">Guests</h2>
        ${GuestsHTML()}
    </aside>
    <section class="details">
        <section class="detail--column">
            <h2>Services</h2>
            ${ServicesHTML()}
        </section>
        <section class="detail--column">
            <h2>Destinations</h2>
            ${DestinationsHTML()}
        </section>
        <footer>
            <p class = "footer">Phone Number: 123-456-7890</p> <p class = "footer">Email:info@ciderfallspark.gov</p> <p class = "footer"> address: 123 Cider Falls Park Drive</p>
        </footer>
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML