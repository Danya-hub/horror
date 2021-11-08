import Room from "./room.js";
import MathArr from "./methods/mathArr.js";
import mobStyle from "./store/mob.js";
import _isOutside from "./methods/isOutside.js";

export default class Move {
    constructor(interval) {
        this.interval = interval;
        this.mobWidth = mobStyle.style.width,
            this.mobHeight = mobStyle.style.height;
        this.__init__();
    }

    __init__() {
        this._createMob();
        this._setInterval();
    }

    _createMob() {
        this.mob = document.createElement('span');
        this.mob.style.cssText = `
            position: absolute;
            border-radius: 50%;
            transition: 0.5s left, 0.5s top;
            ${mobStyle._getContent()}
        `;

        document.body.append(this.mob);
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