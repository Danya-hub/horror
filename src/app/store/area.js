const percent = 0.7,
    space = 20;

const sizeWindow = Math.min(innerWidth * percent, innerHeight) - space * 2;

export default Object.prototype.AreaData = {
    area: {
        className: 'area',
        style: {
            size: `${sizeWindow}px`,
            margin: `${space}px`,
        }
    },
    room: {
        className: 'room',
        style: {
            position: 'absolute',
            size: `${sizeWindow * 0.2}px`,
        },
        polygon: {
            fill: '#ccc',
        }
    }
}