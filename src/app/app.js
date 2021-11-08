'use strict';

//* --> object <--
import coordinates from './store/coordRoom.js';

//* --> class <--
import Room from './room.js';
import Move from './moveMob.js';

//* --> call <--
let room = new Room(coordinates[1], 100);
room._addElem();

new Move(500); //interval above moving