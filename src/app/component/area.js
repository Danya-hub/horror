import _getStyleFromObject from "../methods/getStyleFromObject.js";

export default window.Area = class {
    constructor() {
        this.__init__();
    }

    __init__() {
        this._createElem();
    }

    _createElem() {
        this.elem = document.createElement('div');
        this.elem.style.cssText = _getStyleFromObject(window.AreaData.area.style);
    }

    _addHtmlContent(child) {
        this.elem.innerHTML += child.outerHTML;
    }
}