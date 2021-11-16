export default window.insertStyleRule = ((name, styleText) => {
    if (document.getElementById(`${name.slice(1)}Style`)) return;

    const style = document.createElement('style');
    style.id = `${name.slice(1)}Style`;
    document.head.append(style);

    style.sheet.insertRule(`
        ${name} {
            ${styleText}
        }
    `, style.sheet.cssRules.length);
})