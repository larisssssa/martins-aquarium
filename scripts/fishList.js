import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishListHTML = `
    <article id='fish-list'>
    <h2 class="section-title">Fish</h2>
    <div class="fish-unit">
    `
    
    for (const fish of database.fish) {
        fishListHTML +=`
            <section class="fish">
                <img src="${fish.image}" alt="${fish.name} image" class="fish-image"></img>
                <h3 class="fish-name">${fish.name}</h3>
                <p class="fish-species">Species: ${fish.species}</p>
                <p class="fish-length">Length: ${fish.length}</p>
                <p class="fish-location">Location: ${fish.location}</p>
                <p class="fish-diet">Diet: ${fish.diet}</p>
            </section>
    `
    }

    fishListHTML += `</div>
    </article>`
    return fishListHTML
};