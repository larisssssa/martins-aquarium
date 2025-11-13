import { database } from './aquariumData.js';

export const tipList = () => {
    let tipListHTML = `
    <article id="tip-list>
            <ul class="tips">`

    for (const tip of database.tips) {
        tipListHTML += `<li class="tip">${tip.topic}: ${tip.text}</li>\n`
    }

    tipListHTML += `</ul>
    </article>`

    return tipListHTML
}