export default Object.prototype.Room = class {
    tempName = AreaData.room.className;
    polygonName = `polygon_${this.tempName}`;

    constructor(room, fixSize = '') {
        this.coordinates = room;
        this.__init__(fixSize);
    }

    __init__(fixSize) {
        Room.size = !fixSize ? AreaData.room.style.size : fixSize;

        this._setCoordByWindow();
        this._createElem();
    }

    //TODO: set point for rooms 

    _createElem() {
        let polygon = document.createElement('polygon');
        polygon.className = this.polygonName;

        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            this.elem.id = Room.id++,
            this.elem.setAttribute('class', this.tempName);

        let size = parseFloat(Room.size);
        this.elem.setAttribute('viewBox', `0 0 ${size} ${size}`);

        Method.insertStyleRule(
                Method.getStyleFromObject({...AreaData.room.style, size: Room.size}),
                false,
                `.${this.tempName}`,
            ),
            Method.insertStyleRule(
                Method.getStyleFromObject(AreaData.room.polygon),
                false,
                `.${this.polygonName}`,
            );

        let content = '';
        this.coordinates.forEach(coord => content += coord.map((e, isEven) => Method.toPercentFromRoot(e, size) + (!isEven ? ',' : '')).join('') + ' '); // + (i < this.coordinates.length - 1 ? ',' : '')
        polygon.setAttribute('points', content);

        this.elem.innerHTML = polygon.outerHTML;
    }

    _setCoordByWindow() {
        this.axis = ['x', 'y'];
        Room.coordByWindow = this.coordinates.map(coord => {
            let obj = {};
            coord.forEach((e, i) => obj[this.axis[i]] = e);
            return obj;
        });
    }

    static id = 0;

    static get X() {
        return Room.coordByWindow.map(e => e.x);
    }

    static get Y() {
        return Room.coordByWindow.map(e => e.y);
    }

    static get minX() {
        return Method.MathArr.Min(...Room.X);
    }

    static get maxX() {
        return Method.MathArr.Max(...Room.X)
    }

    static get minY() {
        return Method.MathArr.Min(...Room.Y);
    }

    static get maxY() {
        return Method.MathArr.Max(...Room.Y);
    }
}