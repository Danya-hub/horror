export default window.MathArr = class {
    constructor() {}

    static Max(arr) {
        return Math.max(...arr);
    }

    static Min(arr) {
        return Math.min(...arr);
    }

    static Random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}