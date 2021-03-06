export default Object.prototype.mobData = {
    style: {
        position: 'absolute',
        background: '#000',
        size: `${parseFloat(AreaData.room.style.size) * 0.1}px`,
        borderRadius: '50%',
        transition: '0.5s left cubic-bezier(0.74, 0.24, 0.36, 0.83), 0.5s top cubic-bezier(0.74, 0.24, 0.36, 0.83)',
        pointerEvents: 'none',
    },
    feature: {
        intervalMove: 500,
        name: 'mob',
    }
}