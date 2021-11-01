'use strict';

// --> object <--
import coordinates from './store/coordRoom.js';

// --> import <--
import Room from './room.js';
import _isOutside from './methodes/isOutside.js';

// --> call <--
let room = new Room(coordinates[0], 100);
room._addElem();

window.addEventListener('mousemove', (e) => {
    document.body.style.background = _isOutside(e.clientX, e.clientY) ? '#0000' : 'red';
});