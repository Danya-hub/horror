export default window.getStyleFromObject = ((object) => {
    let content = '';
    Object.entries(object).forEach(prop => content += `${prop[0].replace(/[A-Z]/g, ((str) => '-' + str.toLowerCase()))}:${prop[1]};`);
    return content;
})