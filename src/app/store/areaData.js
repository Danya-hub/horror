const sizeWindow = Math.min(window.innerWidth, window.innerHeight) * 0.9;

export default window.AreaData = {
    area: {
        className: 'area',
        style: {
            position: 'relative',
            width: `${sizeWindow}px`,
            height: `${sizeWindow}px`,
        }
    },
    room: {
        className: 'room',
        style: {
            position: 'absolute',
            width: `${sizeWindow * 0.2}px`,
            height: `${sizeWindow * 0.2}px`,
            background: '#ccc',
        }
    }
}