export default window.mobData = {
    style: {
        position: 'absolute',
        background: '#000',
        width: `${window.AreaData.room.style.width * 0.1}px`,
        height: `${window.AreaData.room.style.width * 0.1}px`,
        borderRadius: '50%',
        transition: '0.5s left cubic-bezier(0.74, 0.24, 0.36, 0.83), 0.5s top cubic-bezier(0.74, 0.24, 0.36, 0.83)',
        pointerEvents: 'none',
    },
    feature: {
        intervalMove: 500,
        name: 'mob',
    }
}