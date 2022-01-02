export default Object.prototype.Template = class {
    static Aside(idName) {
        return `
            
            <div id='${idName}'></div>
        `;
    }
}