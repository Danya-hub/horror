import mutableSelectors from "./rule/mutableSelectors.js";

export default Object.prototype.Method = class {
    static getStyleFromObject(object) {
        let entries = Object.entries(object),
            content = '';

        mutableSelectors.forEach(e => {
            let isFindedInd = Object.keys(object).indexOf(e.oldName);
            if (!~isFindedInd) return;

            e.newName.forEach((e, i) => entries.splice(isFindedInd + i, !i ? 1 : 0, [e, entries[isFindedInd][1]]));
        });

        entries.forEach(prop => content += `${prop[0].replace(/[A-Z]/g, ((str) => '-' + str.toLowerCase()))}:${prop[1]};`);

        return content;
    }

    static insertStyleRule(styles, isChild, ...names) {
        names.forEach(name => {
            if (document.getElementById(`${name.slice(1)}Style`)) return;

            const style = document.createElement('style');
            style.id = `${name.slice(1)}Style`;
            document.head.append(style);

            style.sheet.insertRule(`
                    ${name} ${isChild ? '>*' : ''} {
                        ${styles}
                    }
                `, style.sheet.cssRules.length);
        });
    }

    static isOutside(_x, _y) {
        let roomX = Room.X,
            roomY = Room.Y;

        let bool = true;
        let j = roomX.length - 1;
        for (let i = 0; i < roomX.length; i++) {
            (((roomY[i] <= _y) && (_y < roomY[j])) || ((roomY[j] <= _y) && (_y < roomY[i]))) &&
            (_x > (roomX[j] - roomX[i]) * (_y - roomY[i]) / (roomY[j] - roomY[i]) + roomX[i]) ?
            bool = !bool: null;
            j = i;
        }

        return bool;
    }

    static get MathArr() {
        return class {
            static Max(...arr) {
                return Math.max(...arr);
            }

            static Min(...arr) {
                return Math.min(...arr);
            }

            static Random(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
        }
    }

    static toPercentFromRoot(num, parNum) {
        return num * parNum / 100;
    }

}