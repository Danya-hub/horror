import _isOutside from "../methods/isOutside.js";
import _getStyleFromObject from "../methods/getStyleFromObject.js";

export default class Move {
    constructor(interval) {
        this.interval = interval;
        this.mobWidth = parseInt(window.mobData.style.width),
            this.mobHeight = parseInt(window.mobData.style.height);
        this.__init__();
    }

    __init__() {
        this._createMob();
        this._setInterval();
    }

    _createMob() {
        this.elem = document.createElement('span');
        this.elem.id = window.mobData.feature.name;
        !document.getElementById(`${window.mobData.feature.name}Style`) ?
            this._insertRule() :
            null;

        document.body.append(this.elem);
    }

    _insertRule() {
        const style = document.createElement('style');
        style.id = `${window.mobData.feature.name}Style`;

        document.head.append(style);

        style.sheet.insertRule(`
            #${window.mobData.feature.name} {
                ${_getStyleFromObject(window.mobData.style)}
            }
        `, style.sheet.cssRules.length)
    }

    _setInterval() {
        setInterval(() => {
            let randX = window.MathArr.Random(window.Room.minX + this.mobWidth, window.Room.maxX - this.mobWidth),
                randY = window.MathArr.Random(window.Room.minY + this.mobHeight, window.Room.maxY - this.mobHeight);

            if (!_isOutside(randX, randY))
                this.elem.style.cssText += `
                    left: ${randX}px;
                    top: ${randY}px;
                `;

        }, this.interval);
    }
}