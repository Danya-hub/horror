export default class {
    constructor() {
        this.__init__();
    }

    __init__() {
        this._createElem();
    }

    _createElem() {
        this.aside = document.createElement('aside');
        document.body.append(this.aside);
    }
}