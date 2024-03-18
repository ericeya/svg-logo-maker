const Shape = require('../lib/shape')

class Triangle extends Shape {
    constructor(shape, shapeColor, text, textColor) {
        super(shape, shapeColor, text, textColor)
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
    
    renderText() {
        return `<text x='50%' y='70%' fill='${this.textColor}' font-weight='bold' font-size='60' dominant-baseline='middle' text-anchor='middle'>${this.text}</text>`
    }
}

module.exports = Triangle