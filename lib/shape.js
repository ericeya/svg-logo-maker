const validation = require('./validateColor') 

class Shape { 
    constructor(shape, shapeColor = 'red', text = 'abc', textColor='red') {
        if (validation.validateColor(shapeColor)  != shapeColor) {
            throw new Error('Please enter a valid color')
        }
        if (text.length > 3) {
            throw new Error('Please enter 3 letters or less')
        }
        if (validation.validateColor(textColor)  != textColor) {
            throw new Error('Please enter a valid color')
        }
        
        this.shape = shape
        this.shapeColor = shapeColor

        
        this.text = text
        this.textColor = textColor
    }

}

// const newShape = new Shape('Triangle', `red`)
// console.log(newShape)
module.exports = Shape