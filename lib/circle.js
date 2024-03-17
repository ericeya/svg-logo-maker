const Shape = require('../lib/shape')

class Circle extends Shape {
    constructor(shape, shapeColor, text, textColor) {
        super(shape, shapeColor)
        this.text = text
        this.textColor = textColor
    }

    setColor(shapeColor) {
        return `${shapeColor}`
    }

    render() {
        return `<circle cx="100" cy="100" r="95" fill="${this.shapeColor}"/>`

    }
}

module.exports = Circle