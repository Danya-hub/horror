const sizeWindow = Math.min(window.innerWidth, window.innerHeight) * 0.9;

export default window.AreaData = {
    area: {
        className: 'area',
        style: {
            position: 'relative',
            size: `${sizeWindow}px`,
        }
    },
    room: {
        className: 'room',
        style: {
            position: 'absolute',
            size: `${sizeWindow * 0.2}px`,
            background: '#ccc',
        }
    }
}