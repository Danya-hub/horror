'use strict';

//* --> object <--
import coordinates from './store/coordRoom.js';
import mobData from "./store/mobData.js";

//* --> class <--
import Room from './room.js';
import Move from './mob.js';

//* --> call <--
let room = new Room(coordinates[1], 100);
room._addElem();

new Move(mobData.feature.intervalMove); //interval above moving