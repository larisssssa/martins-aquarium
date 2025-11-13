import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList();

// // Generate the care tips
const tipHTML = tipList()

// // Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element

const renderFishListToDOM = (fishHTML) => {
    const fishyList = document.getElementById('fishList');

    if (fishyList) {
        fishyList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
};

renderFishListToDOM(fishHTML);

const renderFishTipsToDOM = (tipHTML) => {
    const fishyTips = document.getElementById('tipList');

    if (fishyTips) {
        fishyTips.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"');
    }
};

renderFishTipsToDOM(tipHTML);

const renderFishLocationsToDOM = (locationHTML) => {
    const fishyLocations = document.getElementById('locationList');

    if (fishyLocations) {
        fishyLocations.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList"');
    }
};

renderFishLocationsToDOM(locationHTML);