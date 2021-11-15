import _getStyleFromObject from '../methods/getStyleFromObject.js';

export default window.window.Room = class {
    constructor(room, size) {
        this.coordinates = room,
            window.Room.size = size;
        this.__init__();
    }

    __init__() {
        this._setCoordByWindow();
        this._createElem();
    }

    _createElem() {
        this.elem = document.createElement('div');
        this.elem.id = `room${window.Room.id++}`,
            this.elem.style.cssText = _getStyleFromObject(window.AreaData.room.style);

        let content = '';
        this.coordinates.forEach((coord, i) => content += coord.map(e => e + '%').join('') + (i < this.coordinates.length - 1 ? ',' : ''));
        this.elem.style.clipPath = `polygon(${content})`;
    }

    _setCoordByWindow() {
        let sBody = [document.body.offsetWidth, document.body.offsetHeight];
        
        this.axis = ['x', 'y']
        window.Room.coordByWindow = this.coordinates.map(coord => {
            let obj = {};
            coord.forEach((e, i) => obj[this.axis[i]] = (e / 100) * window.Room.size + (sBody[i] / 2) - (window.Room.size / 2));
            return obj;
        });
    }

    //* --> static <--
    // --> set <--

    static id = 0; 

    static set Size(value) {
        this.size = value;
    }

    static set CoordByWindow(value) {
        this.coordByWindow = value;
    }

    // --> get <--

    static get Size() {
        return this.size;
    }

    static get CoordByWindow() {
        return this.coordByWindow;
    }

    static get X() {
        return this.CoordByWindow.map(e => e.x);
    }

    static get Y() {
        return this.CoordByWindow.map(e => e.y);
    }

    static get minX() {
        return window.MathArr.Min(window.Room.X);
    }

    static get maxX() {
        return window.MathArr.Max(window.Room.X)
    }

    static get minY() {
        return window.MathArr.Min(window.Room.Y);
    }

    static get maxY() {
        return window.MathArr.Max(window.Room.Y);
    }
}