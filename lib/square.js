const Shape = require('../lib/shape')

class Square extends Shape {
    constructor(shape, shapeColor, text, textColor) {
        super(shape, shapeColor, text, textColor)
    }

    render() {
        return `<rect x='49' y='0' width='200' height='200' fill='${this.shapeColor}'/>`
    }
    
    renderText() {
        return `<text x='49%' y='53%' fill='${this.textColor}' font-weight='bold' font-size='100' dominant-baseline='middle' text-anchor='middle'>${this.text}</text>`
    }
}

module.exports = Square