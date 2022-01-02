import Main from './main.js';

export default class Aside {
    wrapperButtonsName = 'switchRooms';

    constructor() {
        this.aside = document.createElement('aside');
        this.__init__();
    }

    __init__() {
        this.aside.innerHTML = Template.Aside(this.wrapperButtonsName);
        document.body.append(this.aside);

        this._setButt();
        this._setEventButt();
    }

    _setButt() {
        this.buttons = [];
        let wrapper = document.getElementById(this.wrapperButtonsName);

        for (let i = 0; i < RoomData.length; i++) {
            let btn = document.createElement('button');
            btn.innerHTML = new Room(RoomData[i], '100%').elem.outerHTML,
                wrapper.append(btn);
            
            this.buttons.push(btn);
        }
    }

    _setEventButt() {
        this.buttons.forEach((e, i) =>
            e.addEventListener('click', () => Main._addNewRoom(RoomData[i])) //!!!!
        )
    }
}