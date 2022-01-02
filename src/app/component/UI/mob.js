export default class Move {
    name = mobData.feature.name;

    constructor(interval) {
        this.interval = interval;
        this.mobSize = parseInt(mobData.style.size);
        this.__init__();
    }

    __init__() {
        this._createMob();
        this._setInterval();
    }

    _createMob() {
        this.elem = document.createElement('span');
        this.elem.id = this.name;

        insertStyleRule(
            getStyleFromObject(mobData.style),
            false,
            `#${this.name}`,
        );

        document.body.append(this.elem);
    }

    _setInterval() { //?
        console.log(Room.minX);
        console.log(Room.maxX);
        let x = MathArr.Random(
                (((Room.minX + parseFloat(mobData.size)) * 100) / parseFloat(AreaData.room.style.size))
            ),
            y = MathArr.Random(
            
                );
        setInterval(() => {
            if (!isOutside(x, y))
                this.elem.style.cssText = `
                    left: ${x++}%;
                    top: ${y++}%;
                `;
        }, this.interval);
    }
}