import Room from "../room.js"

export default ((_x, _y) => {
    let roomX = Room.X,
        roomY = Room.Y;
    
    let bool = false;
    let j = roomX.length - 1;
    for (let i = 0; i < roomX.length; i++) {
        (((roomY[i] <= _y) && (_y < roomY[j])) || ((roomY[j] <= _y) && (_y < roomY[i]))) && (_x > (roomX[j] - roomX[i]) * (_y - roomY[i]) / (roomY[j] - roomY[i]) + roomX[i]) ? bool = !bool: null;
        j = i;
    }
    
    return bool;
})