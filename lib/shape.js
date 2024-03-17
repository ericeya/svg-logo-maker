// const validation = require('./validateColor') 

class Shape { 
    constructor(shape, shapeColor, text, textColor) {
        // if (validation.validateColor(shapeColor)  != shapeColor) {
        //     throw new Error('Please enter a valid color')
        // }

        
        this.shape = shape
        this.shapeColor = shapeColor
        this.text = text
        this.textColor = textColor
        // if (text.length > 3) {
        //     throw new Error('Please enter 3 letters or less')
        // }
    }

}

// const newShape = new Shape('Triangle', `red`)
// console.log(newShape)
module.exports = Shape