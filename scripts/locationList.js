import { database } from './aquariumData.js';

export const locationList = () => {
    let locationListHTML = `
    <article id="location-list">`

    for (const location of database.locations) {
        locationListHTML += `
        <section class="location">
        <h3 class="location-name">${location.name}</h3>
        <p class="location-country">${location.country}</p>
        <p class="location-description">${location.description}</p>
        </section>`
    }

    locationListHTML +=`</article>`

    return locationListHTML
}
