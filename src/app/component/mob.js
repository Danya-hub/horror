import _isOutside from '../methods/isOutside.js';
import _getStyleFromObject from '../methods/getStyleFromObject.js';
import _insertStyleRule from '../methods/insertStyleRule.js';

export default class Move {
    constructor(interval) {
        this.interval = interval;
        this.mobSize = parseInt(window.mobData.style.size);
        this.__init__();
    }

    __init__() {
        this._createMob();
        this._setInterval();
    }

    _createMob() {
        this.elem = document.createElement('span');
        this.elem.id = window.mobData.feature.name;

        _insertStyleRule(
            `#${window.mobData.feature.name}`,
            _getStyleFromObject(window.mobData.style)
        );

        document.body.append(this.elem);
    }

    _setInterval() {
        setInterval(() => {
            let randX = window.MathArr.Random(
                    window.Room.minX + (this.mobSize * 100) / window.Room.maxX * 2,
                    window.Room.maxX - (this.mobSize * 100) / window.Room.maxX * 2
                ),
                randY = window.MathArr.Random(
                    window.Room.minY + (this.mobSize * 100) / window.Room.maxY * 2,
                    window.Room.maxY - (this.mobSize * 100) / window.Room.maxY * 2
                );

            if (!_isOutside(randX, randY))
                this.elem.style.cssText = `
                    left: ${randX}%;
                    top: ${randY}%;
                `;
        }, this.interval);
    }
}