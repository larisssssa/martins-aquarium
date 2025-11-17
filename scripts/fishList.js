import { mostHolyFish } from './holyFish.js';
import { regularFish } from './regularFish.js';
import { soldierFish } from './soldierFish.js';

export const fishList = () => {
    let holy = mostHolyFish();
    let soldier = soldierFish();
    let regular = regularFish();
    // Generate an HTML representation of each fish
    let fishListHTML = `
    <article id='fish-list'>
    <h2 class="section-title">Fish</h2>
    <div class="fish-unit">
    ${holy}
    ${soldier}
    ${regular}
    </div>
    </article>`
    console.log(fishListHTML)
    return fishListHTML
};