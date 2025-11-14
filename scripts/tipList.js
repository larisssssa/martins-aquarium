import { database } from './aquariumData.js';

export const tipList = () => {
    let tipListHTML = `<article id="tip-list">
    <h2 class="section-title">Tips</h2>
    <ul class="tips">`

    for (const tip of database.tips) {
        tipListHTML += `<li class="tip"><p class="tip--topic">${tip.topic}</p><p class="tip--text">${tip.text}</p> </li>\n`
    }

    tipListHTML += `</ul>
    </article>`

    return tipListHTML
}