import AreaData from './area.js';
import RoomData from './room.js';
import MobData from './mob.js';

export default Object.entries({
    AreaData,
    RoomData,
    MobData
}).forEach(prop => Object.prototype[prop[0]] = prop[1]);