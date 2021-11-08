export default {
    style: {
        background: '#000',
        outline: '#ccc',
        width: 10,
        height: 10,
    },
    _getContent: function() {
        const entries = Object.entries(this.style);
        let content = '';
        entries.forEach(prop => content += `${prop[0]}:${prop[1]}${typeof prop[1] == 'number' ? 'px' : ''};`);
        
        return content;
    },
}