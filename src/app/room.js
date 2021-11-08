import MathArr from "./methods/mathArr.js"

export default class Room {
    constructor(room, size) {
        this.coordinates = room,
            Room.size = size;
        this.__init__();
    }

    __init__() {
        this._setCoordByWindow();
        this._createElem();
    }

    _createElem() {
        this.room = document.createElement('div');
        this.room.className = 'room',
            this.room.style.cssText = `width: ${Room.size}px; height: ${Room.size}px;`;

        let content = '';
        this.coordinates.forEach((coord, i) => content += coord.map(e => e + '%').join('') + (i < this.coordinates.length - 1 ? ',' : ''));
        this.room.style.clipPath = `polygon(${content})`;
    }

    _setCoordByWindow() {
        let sBody = [document.body.offsetWidth, document.body.offsetHeight];
        
        this.axis = ['x', 'y']
        Room.coordByWindow = this.coordinates.map(coord => {
            let obj = {};
            coord.forEach((e, i) => obj[this.axis[i]] = (e / 100) * Room.size + (sBody[i] / 2) - (Room.size / 2));
            return obj;
        });
    }

    _addElem() {
        document.body.append(this.room);
    }

    //* --> static <--
    // --> set <--

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
        return MathArr.Min(Room.X);
    }

    static get maxX() {
        return MathArr.Max(Room.X)
    }

    static get minY() {
        return MathArr.Min(Room.Y);
    }

    static get maxY() {
        return MathArr.Max(Room.Y);
    }
}