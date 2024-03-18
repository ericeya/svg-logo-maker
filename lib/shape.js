// import validate color function from validateColor.js
const validation = require('./validateColor') 

class Shape { 
    constructor(shape, shapeColor = 'red', text = 'abc', textColor='white') {
        // the if statements below validates color and text length.
        if (validation.validateColor(shapeColor)  != shapeColor) {
            throw new Error('Please enter a valid color')
        }
        if (text.length > 3) {
            throw new Error('Please enter 3 letters or less')
        }
        if (validation.validateColor(textColor)  != textColor) {
            throw new Error('Please enter a valid color')
        }
        
        // construct the parameters once validations pass
        this.shape = shape
        this.shapeColor = shapeColor
        this.text = text
        this.textColor = textColor
    }

}

module.exports = Shape
