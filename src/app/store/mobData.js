export default {
    style: {
        background: '#000',
        outline: '#ccc',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        transition: '0.5s left cubic-bezier(0.74, 0.24, 0.36, 0.83), 0.5s top cubic-bezier(0.74, 0.24, 0.36, 0.83)',
        pointerEvents: 'none',
    },
    feature: {
        intervalMove: 500,
        name: 'mob',
    },
    _getContent: function() {
        let content = '';
        Object.entries(this.style).forEach(prop => content += `${prop[0].replace(/[A-Z]/g, ((str) => '-' + str.toLowerCase()))}:${prop[1]};`);
        return content;
    },
}