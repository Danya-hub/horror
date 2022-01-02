export default Object.prototype.Area = class {
    name = AreaData.area.className;

    constructor() {
        this.__init__();
    }

    static rooms = [];
    static elem = null;

    __init__() {
        this._createElem();
    }

    _isParent(event) {
        return event.target == event.currentTarget;
    }

    _createElem() {
        Area.elem = document.createElement('div'),
            Area.elem.id = this.name;

        let styleElem = AreaData.area.style;
        Area.elem.style.cssText = Method.getStyleFromObject(styleElem);

        this.widthElem =
            this.heightElem =
            parseFloat(styleElem.size);
    }

    static _addElem(newRoom) {
        this.elem.append(newRoom.elem);
        this.rooms.push(newRoom);

        this._moveRoom();
    }

    static _changeLocation(event) {
        let left = this._getbyScreenWidth(event.clientX, this.widthElem),
            top = this._getbyScreenWidth(event.clientY, this.heightElem);

        const rX = this._getbyScreenWidth(event.target.offsetWidth / 2, this.widthElem),
            rY = this._getbyScreenWidth(event.target.offsetHeight / 2, this.heightElem);

        event.target.style.cssText = `
            left: ${rX > left ? rX : 100 - rX < left ? 100 - rX : left}%;
            top: ${rY > top ? rY : 100 - rY < top ? 100 - rY : top}%;
        `;
    }

    static _getbyScreenWidth(num, parSiz) {
        return (num / parSiz) * 100;
    }

    static _moveRoom() { //!!!
        // this.rooms.forEach(room => {
        //     room.elem.addEventListener("mousedown", () => {
        //         this.elem.style.cursor = "move";
        //         room.elem.addEventListener("mousemove", (event) => this._changeLocation(event));
        //     });
        // });

        // Area.rooms[0].elem.addEventListener("mouseup", () => {
        //     Area.elem.style.cursor = "unset";
        //     Area.rooms[0].elem.removeEventListener("mousemove", this._changeLocation);
        // });
    }
}