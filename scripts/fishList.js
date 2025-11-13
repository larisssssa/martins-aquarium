import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishListHTML = "";
    for (const fish of database.fish) {
        fishListHTML +=`
        <article id='fish-list'>
            <img src="${fish.image}" alt="${fish.name} image" class="fish_image"></img>
            <div class="fish_details">
                <h3 class="fish_name">${fish.name}</h3>
                <p class="fish-species">Species: ${fish.species}</p>
                <p class="fish-length">Length: ${fish.length}</p>
                <p class="fish-location">Location: ${fish.location}</p>
                <p class="fish-diet">Diet: ${fish.diet}</p>
            </div>
        </article>
    `;
    }
    return fishListHTML
};