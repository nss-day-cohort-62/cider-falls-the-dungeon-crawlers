import { GuestsHTML } from "./Guests.js"
import { DestinationsHTML } from "./Destinations.js"
import { ServicesHTML } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>
<article>
    <aside class="guests--aside">
        <h2>Guests</h2>
        ${GuestsHTML()}
    </aside>
    <section class="details">
        <section class="detail--column">
            <h2>Services</h2>
            ${ServicesHTML()}
        </section>
        <section class="detail--column">
            <h2>Destinations</h2>
        </section>
    </section>
</article>
<footer>
    <p>Phone Number: 123-456-7890 Email:info@ciderfallspark.gov Address: 123 Cider Falls Park Drive</p>
</footer>
`

mainContainer.innerHTML = applicationHTML