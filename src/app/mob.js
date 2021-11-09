import Room from "./room.js";
import MathArr from "./methods/mathArr.js";
import mobData from "./store/mobData.js";
import _isOutside from "./methods/isOutside.js";

export default class Move {
    constructor(interval) {
        this.interval = interval;
        this.mobWidth = parseInt(mobData.style.width),
            this.mobHeight = parseInt(mobData.style.height);
        this.__init__();
    }

    __init__() {
        this._createMob();
        this._setInterval();
    }

    _createMob() {
        this.mob = document.createElement('span');
        this.mob.id = mobData.feature.name;
        this._insertRule();

        document.body.append(this.mob);
    }

    _insertRule() {
        const style = document.createElement('style');
        style.id = `${mobData.feature.name}Style`;
        document.head.append(style);

        style.sheet.insertRule(`
            #${mobData.feature.name} {
                position: absolute;
                ${mobData._getContent()}
            }
        `, style.sheet.cssRules.length)
    }

    _setInterval() {
        setInterval(() => {
            let randX = MathArr.Random(Room.minX + this.mobWidth, Room.maxX - this.mobWidth),
                randY = MathArr.Random(Room.minY + this.mobHeight, Room.maxY - this.mobHeight);

            if (!_isOutside(randX, randY))
                this.mob.style.cssText += `
                    left: ${randX}px;
                    top: ${randY}px;
                `;

        }, this.interval);
    }
}