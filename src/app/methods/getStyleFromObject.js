import mutableSelectors from "../store/mutableSelectors.js";

export default window.getStyleFromObject = ((object) => {
    let entries = Object.entries(object),
        content = '';

    mutableSelectors.filter(e => {
        let isFindedInd = Object.keys(object).indexOf(e.oldName);
        if (isFindedInd < 0) return;

        e.newName.forEach((e, i) => entries.splice(isFindedInd + i, 0, [e, entries[isFindedInd][1]]));
    });

    entries.forEach(prop => content += `${prop[0].replace(/[A-Z]/g, ((str) => '-' + str.toLowerCase()))}:${prop[1]};`);
    return content;
})