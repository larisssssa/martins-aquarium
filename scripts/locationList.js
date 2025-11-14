import { database } from './aquariumData.js';

export const locationList = () => {
    let locationListHTML = `
    <article id="location-list">
    <h2 class="location-list--title section-title">Locations</h2>
    <div class="locations">`

    for (const location of database.locations) {
        locationListHTML += `
        <section class="location">
        <h3 class="location-name">${location.name}</h3>
        <p class="location-country">${location.country}</p>
        <p class="location-description">${location.description}</p>
        </section>`
    }

    locationListHTML +=`</div>
    </article>`

    return locationListHTML
}
