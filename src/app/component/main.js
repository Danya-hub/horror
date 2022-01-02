export default class Main {
    constructor() {
        this.elem = document.createElement('main'),
            this.__init__();
    }

    __init__() {
        new Area();

        document.body.append(this.elem);
        this.elem.appendChild(Area.elem);
    }

    static _addNewRoom(coordRoom) {
        Area._addElem(new Room(coordRoom));
    }
}