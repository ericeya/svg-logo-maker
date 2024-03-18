const Shape = require('../lib/shape')

class Circle extends Shape {
    constructor(shape, shapeColor, text, textColor) {
        super(shape, shapeColor, text, textColor)
    }

    render() {
        return `<circle cx="100" cy="100" r="95" fill="${this.shapeColor}"/>`
    }
    
    renderText() {
        return `<text x='100' y='53%' fill="${this.textColor}" font-weight='bold' font-size='80' dominant-baseline='middle' text-anchor='middle'>${this.text}</text>`
    }
}

module.exports = Circle