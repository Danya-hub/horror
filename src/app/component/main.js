import coordinates from '../store/coordRoom.js';
import Mob from './mob.js';

export default class {
    constructor() {
        this.__init__();
    }

    __init__() {
        this._createElem();

        this.area = new window.Area();                                                
        this.room = new window.Room(coordinates[1]);
        this.mob = new Mob(window.mobData.feature.intervalMove);

        this.main.append(this.area.elem);
        this.area._addHtmlContent(this.room.elem); 
    }

    _setSubComponents() {

    }

    _createElem() {
        this.main = document.createElement('main');
        document.body.append(this.main);
    }
}