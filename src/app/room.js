export default class Room {
    constructor(room, size) {
        Room.Coordinates = room,
            Room.Size = size;
        this.__init__();
    }

    __init__() {
        this._createElem();
    }

    _createElem() {
        this.room = document.createElement('div');
        this.room.className = 'room',
            this.room.style.cssText = `width: ${Room.size}px; height: ${Room.size}px;`;

        let content = '';
        Room.coordinates.forEach((coord, i) => content += coord.map(e => e + '%').join('') + (i < Room.coordinates.length - 1 ? ',' : ''));
        this.room.style.clipPath = `polygon(${content})`;
    }

    _addElem() {
        document.body.append(this.room);
    }

    static set Coordinates(value) {
        this.coordinates = value;
    }

    static set Size(value) {
        this.size = value;
    }

    static get CoordByWindow() {
        let sBody = [document.body.offsetWidth, document.body.offsetHeight];
        
        this.axis = ['x', 'y']
        return Room.coordinates.map(coord => {
            let obj = {};
            coord.forEach((e, i) => obj[this.axis[i]] = (e / 100) * Room.size + (sBody[i] / 2) - (Room.size / 2))
            return obj;
        });
    }

    static get X() {
        return this.CoordByWindow.map(e => e.x);
    }

    static get Y() {
        return this.CoordByWindow.map(e => e.y);
    }
}