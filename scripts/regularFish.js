import { database } from './aquariumData.js';

export const regularFish = () => {
    // 3, 6, 9, 12, etc... fish
    let regularFish = ``

    for (const fish of database.fish) {
        if (!(fish.length % 5 === 0) && !(fish.length % 3 === 0)) {
            regularFish += `
            <section class="fish fish--regular">
                <img src="${fish.image}" alt="${fish.name} image" class="fish-image"></img>
                <h3 class="fish-name">${fish.name}</h3>
                <p class="fish-species">Species: ${fish.species}</p>
                <p class="fish-length">Length: ${fish.length}</p>
                <p class="fish-location">Location: ${fish.location}</p>
                <p class="fish-diet">Diet: ${fish.diet}</p>
            </section>`
        }

    }

    return regularFish
}